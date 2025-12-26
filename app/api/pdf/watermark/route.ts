import { type NextRequest, NextResponse } from "next/server"
import { put } from "@vercel/blob"
import { getSupabaseServerClient } from "@/lib/supabase/server"
import { PDFDocument, rgb, StandardFonts } from "pdf-lib"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File
    const text = formData.get("text") as string
    const opacity = Number.parseFloat(formData.get("opacity") as string) || 0.5

    if (!file || !text) {
      return NextResponse.json({ error: "File and text required" }, { status: 400 })
    }

    const arrayBuffer = await file.arrayBuffer()
    const pdfDoc = await PDFDocument.load(arrayBuffer)
    const pages = pdfDoc.getPages()
    const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold)

    // Add watermark to each page
    for (const page of pages) {
      const { width, height } = page.getSize()
      const fontSize = 60
      const textWidth = font.widthOfTextAtSize(text, fontSize)

      // Draw watermark diagonally across the page
      page.drawText(text, {
        x: (width - textWidth) / 2,
        y: height / 2,
        size: fontSize,
        font: font,
        color: rgb(0.5, 0.5, 0.5),
        opacity: opacity,
        rotate: { angle: 45, type: "degrees" } as any,
      })
    }

    const pdfBytes = await pdfDoc.save()
    const blob = new Blob([pdfBytes], { type: "application/pdf" })

    const filename = `watermarked-${Date.now()}.pdf`
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
      original_name: "watermarked.pdf",
      blob_url: uploadedBlob.url,
      file_size: pdfBytes.length,
      file_type: "application/pdf",
      operation_type: "watermark",
    })

    return NextResponse.json({ url: uploadedBlob.url })
  } catch (error) {
    console.error("[v0] Error adding watermark:", error)
    return NextResponse.json({ error: "Failed to add watermark" }, { status: 500 })
  }
}
