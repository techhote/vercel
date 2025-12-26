import { type NextRequest, NextResponse } from "next/server"
import { put } from "@vercel/blob"
import { getSupabaseServerClient } from "@/lib/supabase/server"
import { PDFDocument, degrees } from "pdf-lib"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File
    const rotation = Number.parseInt(formData.get("rotation") as string) || 90

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    const arrayBuffer = await file.arrayBuffer()
    const pdfDoc = await PDFDocument.load(arrayBuffer)
    const pages = pdfDoc.getPages()

    // Rotate all pages
    for (const page of pages) {
      page.setRotation(degrees(rotation))
    }

    const pdfBytes = await pdfDoc.save()
    const blob = new Blob([pdfBytes], { type: "application/pdf" })

    const filename = `rotated-${Date.now()}.pdf`
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
      original_name: "rotated.pdf",
      blob_url: uploadedBlob.url,
      file_size: pdfBytes.length,
      file_type: "application/pdf",
      operation_type: "rotate",
    })

    return NextResponse.json({ url: uploadedBlob.url })
  } catch (error) {
    console.error("[v0] Error rotating PDF:", error)
    return NextResponse.json({ error: "Failed to rotate PDF" }, { status: 500 })
  }
}
