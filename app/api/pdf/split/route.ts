import { type NextRequest, NextResponse } from "next/server"
import { uploadToStorage } from "@/lib/storage"
import { getSupabaseServerClient } from "@/lib/supabase/server"
import { PDFDocument } from "pdf-lib"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File
    const mode = formData.get("mode") as string
    const pages = formData.get("pages") as string

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    const arrayBuffer = await file.arrayBuffer()
    const pdfDoc = await PDFDocument.load(arrayBuffer)
    const totalPages = pdfDoc.getPageCount()

    // Parse page numbers/ranges
    const parsePages = (input: string): number[][] => {
      const ranges: number[][] = []
      const parts = input.split(",").map((p) => p.trim())

      for (const part of parts) {
        if (part.includes("-")) {
          const [start, end] = part.split("-").map(Number)
          ranges.push([start - 1, end - 1])
        } else {
          const page = Number(part) - 1
          ranges.push([page, page])
        }
      }

      return ranges
    }

    const pageRanges = parsePages(pages)
    const urls: string[] = []

    // Create separate PDFs for each range
    for (let i = 0; i < pageRanges.length; i++) {
      const [start, end] = pageRanges[i]
      const newPdf = await PDFDocument.create()

      for (let pageNum = start; pageNum <= end && pageNum < totalPages; pageNum++) {
        const [copiedPage] = await newPdf.copyPages(pdfDoc, [pageNum])
        newPdf.addPage(copiedPage)
      }

      const pdfBytes = await newPdf.save()

      const filename = `split-${Date.now()}-${i + 1}.pdf`
      const { url } = await uploadToStorage(filename, Buffer.from(pdfBytes), "application/pdf")

      urls.push(url)

      // Save to database
      const supabase = await getSupabaseServerClient()
      const {
        data: { user },
      } = await supabase.auth.getUser()

      await supabase.from("files").insert({
        user_id: user?.id || null,
        original_name: `split-${i + 1}.pdf`,
        blob_url: url,
        file_size: pdfBytes.length,
        file_type: "application/pdf",
        operation_type: "split",
      })
    }

    return NextResponse.json({ urls })
  } catch (error) {
    console.error("[v0] Error splitting PDF:", error)
    return NextResponse.json({ error: "Failed to split PDF" }, { status: 500 })
  }
}
