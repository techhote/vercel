import { type NextRequest, NextResponse } from "next/server"
import { put } from "@vercel/blob"
import { getSupabaseServerClient } from "@/lib/supabase/server"
import { PDFDocument } from "pdf-lib"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    const arrayBuffer = await file.arrayBuffer()
    const pdfDoc = await PDFDocument.load(arrayBuffer)

    // Extract text from PDF
    const pages = pdfDoc.getPages()
    let extractedText = ""

    for (let i = 0; i < pages.length; i++) {
      const page = pages[i]
      // Note: pdf-lib doesn't support text extraction directly
      // In production, you'd use a library like pdf-parse or pdfjs-dist
      extractedText += `\n\n--- Page ${i + 1} ---\n\n`
      extractedText += "[Text content would be extracted here]\n"
    }

    // Create a simple DOCX-like structure (simplified for demo)
    // In production, use libraries like docx or officegen
    const wordContent = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:body>
    <w:p>
      <w:r>
        <w:t>${extractedText.replace(/[<>&'"]/g, (c) => {
          switch (c) {
            case "<":
              return "&lt;"
            case ">":
              return "&gt;"
            case "&":
              return "&amp;"
            case "'":
              return "&apos;"
            case '"':
              return "&quot;"
            default:
              return c
          }
        })}</w:t>
      </w:r>
    </w:p>
  </w:body>
</w:document>`

    const blob = new Blob([wordContent], {
      type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    })

    const filename = `converted-${Date.now()}.docx`
    const uploadedBlob = await put(filename, blob, {
      access: "public",
      contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    })

    const supabase = await getSupabaseServerClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    await supabase.from("files").insert({
      user_id: user?.id || null,
      original_name: "converted.docx",
      blob_url: uploadedBlob.url,
      file_size: blob.size,
      file_type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      operation_type: "pdf-to-word",
    })

    return NextResponse.json({ url: uploadedBlob.url })
  } catch (error) {
    console.error("[v0] Error converting PDF to Word:", error)
    return NextResponse.json({ error: "Failed to convert PDF to Word" }, { status: 500 })
  }
}
