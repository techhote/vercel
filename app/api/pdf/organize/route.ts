import { type NextRequest, NextResponse } from "next/server"
import { put } from "@vercel/blob"
import { getSupabaseServerClient } from "@/lib/supabase/server"
import { PDFDocument } from "pdf-lib"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File
    const pageOrderStr = formData.get("pageOrder") as string

    if (!file || !pageOrderStr) {
      return NextResponse.json({ error: "File and page order are required" }, { status: 400 })
    }

    const pageOrder = pageOrderStr.split(",").map((p) => Number.parseInt(p.trim()) - 1)

    const arrayBuffer = await file.arrayBuffer()
    const pdfDoc = await PDFDocument.load(arrayBuffer)
    const newPdf = await PDFDocument.create()

    // Copy pages in the specified order
    for (const pageIndex of pageOrder) {
      if (pageIndex >= 0 && pageIndex < pdfDoc.getPageCount()) {
        const [copiedPage] = await newPdf.copyPages(pdfDoc, [pageIndex])
        newPdf.addPage(copiedPage)
      }
    }

    const pdfBytes = await newPdf.save()
    const blob = new Blob([pdfBytes], { type: "application/pdf" })

    const filename = `organized-${Date.now()}.pdf`
    const uploadedBlob = await put(filename, blob, {
      access: "public",
      contentType: "application/pdf",
    })

    const supabase = await getSupabaseServerClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    await supabase.from("files").insert({
      user_id: user?.id || null,
      original_name: file.name,
      blob_url: uploadedBlob.url,
      file_size: pdfBytes.length,
      file_type: "application/pdf",
      operation_type: "organize",
    })

    return NextResponse.json({ url: uploadedBlob.url })
  } catch (error) {
    console.error("[v0] Error organizing PDF:", error)
    return NextResponse.json({ error: "Failed to organize PDF" }, { status: 500 })
  }
}
