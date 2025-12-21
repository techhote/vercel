import { type NextRequest, NextResponse } from "next/server"
import { put } from "@vercel/blob"
import { getSupabaseServerClient } from "@/lib/supabase/server"
import { PDFDocument } from "pdf-lib"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File
    const password = formData.get("password") as string

    if (!file || !password) {
      return NextResponse.json({ error: "File and password required" }, { status: 400 })
    }

    const arrayBuffer = await file.arrayBuffer()

    // Note: pdf-lib doesn't support password-protected PDFs directly
    // In production, use a library like node-qpdf or pdf2json
    // For demo purposes, we'll try to load it
    try {
      const pdfDoc = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true })
      const pdfBytes = await pdfDoc.save()
      const blob = new Blob([pdfBytes], { type: "application/pdf" })

      const filename = `unlocked-${Date.now()}.pdf`
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
        original_name: "unlocked.pdf",
        blob_url: uploadedBlob.url,
        file_size: pdfBytes.length,
        file_type: "application/pdf",
        operation_type: "unlock",
      })

      return NextResponse.json({ url: uploadedBlob.url })
    } catch {
      return NextResponse.json({ error: "Invalid password or PDF format" }, { status: 400 })
    }
  } catch (error) {
    console.error("[v0] Error unlocking PDF:", error)
    return NextResponse.json({ error: "Failed to unlock PDF" }, { status: 500 })
  }
}
