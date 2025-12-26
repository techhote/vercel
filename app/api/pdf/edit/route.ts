import { type NextRequest, NextResponse } from "next/server"
import { put } from "@vercel/blob"
import { getSupabaseServerClient } from "@/lib/supabase/server"
import { PDFDocument, rgb, StandardFonts } from "pdf-lib"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File
    const text = formData.get("text") as string
    const x = Number(formData.get("x")) || 50
    const y = Number(formData.get("y")) || 50

    if (!file) {
      return NextResponse.json({ error: "File is required" }, { status: 400 })
    }

    const arrayBuffer = await file.arrayBuffer()
    const pdfDoc = await PDFDocument.load(arrayBuffer)
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica)

    // Add text to the first page
    const pages = pdfDoc.getPages()
    const firstPage = pages[0]

    firstPage.drawText(text, {
      x,
      y: firstPage.getHeight() - y,
      size: 12,
      font,
      color: rgb(0, 0, 0),
    })

    const pdfBytes = await pdfDoc.save()
    const blob = new Blob([pdfBytes], { type: "application/pdf" })

    const filename = `edited-${Date.now()}.pdf`
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
      operation_type: "edit",
    })

    return NextResponse.json({ url: uploadedBlob.url })
  } catch (error) {
    console.error("[v0] Error editing PDF:", error)
    return NextResponse.json({ error: "Failed to edit PDF" }, { status: 500 })
  }
}
