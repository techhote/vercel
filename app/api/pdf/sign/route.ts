import { type NextRequest, NextResponse } from "next/server"
import { put } from "@vercel/blob"
import { getSupabaseServerClient } from "@/lib/supabase/server"
import { PDFDocument, rgb, StandardFonts } from "pdf-lib"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File
    const signature = formData.get("signature") as string

    if (!file || !signature) {
      return NextResponse.json({ error: "File and signature are required" }, { status: 400 })
    }

    const arrayBuffer = await file.arrayBuffer()
    const pdfDoc = await PDFDocument.load(arrayBuffer)
    const font = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic)

    const pages = pdfDoc.getPages()
    const lastPage = pages[pages.length - 1]

    // Add signature at bottom right
    lastPage.drawText(signature, {
      x: lastPage.getWidth() - 200,
      y: 50,
      size: 24,
      font,
      color: rgb(0, 0, 0.5),
    })

    const pdfBytes = await pdfDoc.save()
    const blob = new Blob([pdfBytes], { type: "application/pdf" })

    const filename = `signed-${Date.now()}.pdf`
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
      operation_type: "sign",
    })

    return NextResponse.json({ url: uploadedBlob.url })
  } catch (error) {
    console.error("[v0] Error signing PDF:", error)
    return NextResponse.json({ error: "Failed to sign PDF" }, { status: 500 })
  }
}
