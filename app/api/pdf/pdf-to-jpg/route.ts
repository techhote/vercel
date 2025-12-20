import { type NextRequest, NextResponse } from "next/server"
import { getSupabaseServerClient } from "@/lib/supabase/server"
import { uploadToStorage } from "@/lib/storage"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    if (file.type !== "application/pdf") {
      return NextResponse.json({ error: "File must be a PDF" }, { status: 400 })
    }

    const arrayBuffer = await file.arrayBuffer()

    console.log("[v0] Converting PDF to JPG")

    const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs")

    // Load PDF document
    const loadingTask = pdfjs.getDocument({ data: new Uint8Array(arrayBuffer) })
    const pdf = await loadingTask.promise
    const pageCount = pdf.numPages

    console.log("[v0] PDF has", pageCount, "pages")

    const urls: string[] = []

    // Convert each page to JPG
    for (let pageNum = 1; pageNum <= pageCount; pageNum++) {
      const page = await pdf.getPage(pageNum)
      const viewport = page.getViewport({ scale: 2.0 }) // 2x scale for better quality

      // Create canvas using canvas package for server-side rendering
      const { createCanvas } = await import("canvas")
      const canvas = createCanvas(viewport.width, viewport.height)
      const context = canvas.getContext("2d")

      // Render PDF page to canvas
      const renderContext = {
        canvasContext: context as any,
        viewport: viewport,
      }

      await page.render(renderContext).promise

      // Convert canvas to JPG buffer
      const imageBuffer = canvas.toBuffer("image/jpeg", { quality: 0.92 })

      // Upload to storage
      const filename = `pdf-to-jpg-${Date.now()}-page-${pageNum}.jpg`
      const { url } = await uploadToStorage(filename, imageBuffer, "image/jpeg")

      urls.push(url)

      console.log("[v0] Converted page", pageNum, "to JPG")
    }

    // Save to database
    const supabase = await getSupabaseServerClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    // Save each converted page as a separate file record
    for (let i = 0; i < urls.length; i++) {
      await supabase.from("files").insert({
        user_id: user?.id || null,
        original_name: `${file.name} - Page ${i + 1}`,
        blob_url: urls[i],
        file_size: 0,
        file_type: "image/jpeg",
        operation_type: "pdf-to-jpg",
      })
    }

    console.log("[v0] PDF to JPG conversion complete, total pages:", urls.length)

    return NextResponse.json({ urls, pageCount })
  } catch (error) {
    console.error("[v0] Error converting PDF to JPG:", error)
    return NextResponse.json({ error: "Failed to convert PDF to JPG" }, { status: 500 })
  }
}
