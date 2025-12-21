import { type NextRequest, NextResponse } from "next/server"
import { uploadToStorage } from "@/lib/storage"
import { getSupabaseServerClient } from "@/lib/supabase/server"
import { PDFDocument } from "pdf-lib"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File
    const quality = Number.parseInt(formData.get("quality") as string) || 75

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    const arrayBuffer = await file.arrayBuffer()
    const pdfDoc = await PDFDocument.load(arrayBuffer)

    // PDF compression strategy:
    // 1. Remove duplicate objects
    // 2. Compress streams
    // 3. Remove metadata (optional based on quality)

    // For simplicity, we'll save with different compression settings
    // In production, you'd use more advanced compression techniques
    const compressedPdfBytes = await pdfDoc.save({
      useObjectStreams: quality < 80, // Use object streams for better compression
      addDefaultPage: false,
    })

    const originalSize = arrayBuffer.byteLength
    const compressedSize = compressedPdfBytes.length

    // Calculate compression ratio
    const compressionRatio = (1 - compressedSize / originalSize) * 100

    const filename = `compressed-${Date.now()}.pdf`
    const { url } = await uploadToStorage(filename, Buffer.from(compressedPdfBytes), "application/pdf")

    // Save to database
    const supabase = await getSupabaseServerClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    await supabase.from("files").insert({
      user_id: user?.id || null,
      original_name: "compressed.pdf",
      blob_url: url,
      file_size: compressedSize,
      file_type: "application/pdf",
      operation_type: "compress",
    })

    return NextResponse.json({
      url,
      size: compressedSize,
      originalSize,
      compressionRatio: Math.round(compressionRatio),
    })
  } catch (error) {
    console.error("[v0] Error compressing PDF:", error)
    return NextResponse.json({ error: "Failed to compress PDF" }, { status: 500 })
  }
}
