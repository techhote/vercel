import { type NextRequest, NextResponse } from "next/server"
import { uploadToStorage } from "@/lib/storage"
import { getSupabaseServerClient } from "@/lib/supabase/server"
import { PDFDocument } from "pdf-lib"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const files = formData.getAll("files") as File[]

    if (files.length < 2) {
      return NextResponse.json({ error: "At least 2 files required" }, { status: 400 })
    }

    // Create a new PDF document
    const mergedPdf = await PDFDocument.create()

    // Add all pages from all PDFs
    for (const file of files) {
      const arrayBuffer = await file.arrayBuffer()
      const pdf = await PDFDocument.load(arrayBuffer)
      const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices())
      copiedPages.forEach((page) => mergedPdf.addPage(page))
    }

    // Save the merged PDF
    const mergedPdfBytes = await mergedPdf.save()

    const filename = `merged-${Date.now()}.pdf`
    const { url } = await uploadToStorage(filename, Buffer.from(mergedPdfBytes), "application/pdf")

    // Save to database
    const supabase = await getSupabaseServerClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    await supabase.from("files").insert({
      user_id: user?.id || null,
      original_name: "merged.pdf",
      blob_url: url,
      file_size: mergedPdfBytes.length,
      file_type: "application/pdf",
      operation_type: "merge",
    })

    return NextResponse.json({ url })
  } catch (error) {
    console.error("[v0] Error merging PDFs:", error)
    return NextResponse.json({ error: "Failed to merge PDFs" }, { status: 500 })
  }
}
