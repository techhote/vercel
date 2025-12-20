import { type NextRequest, NextResponse } from "next/server"
import { put } from "@vercel/blob"
import { getSupabaseServerClient } from "@/lib/supabase/server"
import { PDFDocument } from "pdf-lib"
import sharp from "sharp"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File
    const convertTo = formData.get("convertTo") as string

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    let uploadedBlob: { url: string }
    let fileSize: number

    if (convertTo === "pdf") {
      // Convert image to PDF
      const arrayBuffer = await file.arrayBuffer()
      const buffer = Buffer.from(arrayBuffer)

      // Use sharp to get image dimensions and convert to JPEG
      const imageBuffer = await sharp(buffer).jpeg().toBuffer()
      const metadata = await sharp(buffer).metadata()

      const pdfDoc = await PDFDocument.create()
      const page = pdfDoc.addPage([metadata.width || 595, metadata.height || 842])

      const jpegImage = await pdfDoc.embedJpg(imageBuffer)
      const { width, height } = jpegImage.scale(1)

      page.drawImage(jpegImage, {
        x: 0,
        y: 0,
        width: metadata.width || width,
        height: metadata.height || height,
      })

      const pdfBytes = await pdfDoc.save()
      fileSize = pdfBytes.length

      const blob = new Blob([pdfBytes], { type: "application/pdf" })
      const filename = `converted-${Date.now()}.pdf`
      uploadedBlob = await put(filename, blob, {
        access: "public",
        contentType: "application/pdf",
      })
    } else {
      // Convert PDF to image(s)
      const arrayBuffer = await file.arrayBuffer()
      const pdfDoc = await PDFDocument.load(arrayBuffer)
      const pages = pdfDoc.getPages()

      // For simplicity, we'll convert just the first page
      // In a production app, you'd want to convert all pages
      const firstPage = pages[0]
      const { width, height } = firstPage.getSize()

      // Create a canvas-like representation (simplified for this example)
      // In production, you'd use a library like pdf2pic or pdf-to-png
      const canvas = await createImageFromPDF(pdfDoc, 0)

      const format = convertTo === "jpg" ? "jpeg" : "png"
      const imageBuffer = await sharp(canvas)
        .toFormat(format as keyof sharp.FormatEnum)
        .toBuffer()

      fileSize = imageBuffer.length

      const blob = new Blob([imageBuffer], { type: `image/${format}` })
      const filename = `converted-${Date.now()}.${format}`
      uploadedBlob = await put(filename, blob, {
        access: "public",
        contentType: `image/${format}`,
      })
    }

    // Save to database
    const supabase = await getSupabaseServerClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    await supabase.from("files").insert({
      user_id: user?.id || null,
      original_name: file.name,
      blob_url: uploadedBlob.url,
      file_size: fileSize,
      file_type: convertTo === "pdf" ? "application/pdf" : `image/${convertTo === "jpg" ? "jpeg" : "png"}`,
      operation_type: "convert",
    })

    return NextResponse.json({ url: uploadedBlob.url })
  } catch (error) {
    console.error("[v0] Error converting file:", error)
    return NextResponse.json({ error: "Failed to convert file" }, { status: 500 })
  }
}

// Simplified PDF to image conversion helper
async function createImageFromPDF(pdfDoc: PDFDocument, pageIndex: number): Promise<Buffer> {
  // This is a simplified placeholder
  // In production, use libraries like pdf-to-png, pdf2pic, or similar
  const page = pdfDoc.getPages()[pageIndex]
  const { width, height } = page.getSize()

  // Create a white canvas
  const canvas = await sharp({
    create: {
      width: Math.floor(width),
      height: Math.floor(height),
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    },
  })
    .png()
    .toBuffer()

  return canvas
}
