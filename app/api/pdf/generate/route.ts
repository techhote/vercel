import { type NextRequest, NextResponse } from "next/server"
import { put } from "@vercel/blob"
import { getSupabaseServerClient } from "@/lib/supabase/server"
import { PDFDocument, StandardFonts, rgb } from "pdf-lib"

export async function POST(request: NextRequest) {
  try {
    const { title, content, fontSize = 12, pageSize = "A4" } = await request.json()

    if (!title || !content) {
      return NextResponse.json({ error: "Title and content are required" }, { status: 400 })
    }

    // Create a new PDF document
    const pdfDoc = await PDFDocument.create()

    // Define page dimensions based on page size
    const pageDimensions: Record<string, { width: number; height: number }> = {
      A4: { width: 595, height: 842 }, // A4 in points
      Letter: { width: 612, height: 792 }, // Letter in points
      Legal: { width: 612, height: 1008 }, // Legal in points
    }

    const { width, height } = pageDimensions[pageSize] || pageDimensions.A4

    // Add a page
    let page = pdfDoc.addPage([width, height])

    // Embed font
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold)

    // Margins
    const margin = 50
    const maxWidth = width - 2 * margin
    const lineHeight = fontSize * 1.5

    // Draw title
    let currentY = height - margin
    page.drawText(title, {
      x: margin,
      y: currentY,
      size: fontSize * 1.5,
      font: boldFont,
      color: rgb(0, 0, 0),
    })

    currentY -= lineHeight * 2

    // Split content into lines and pages
    const lines = content.split("\n")
    const wrappedLines: string[] = []

    for (const line of lines) {
      if (!line.trim()) {
        wrappedLines.push("")
        continue
      }

      const words = line.split(" ")
      let currentLine = ""

      for (const word of words) {
        const testLine = currentLine ? `${currentLine} ${word}` : word
        const textWidth = font.widthOfTextAtSize(testLine, fontSize)

        if (textWidth <= maxWidth) {
          currentLine = testLine
        } else {
          if (currentLine) wrappedLines.push(currentLine)
          currentLine = word
        }
      }

      if (currentLine) wrappedLines.push(currentLine)
    }

    // Draw content
    for (const line of wrappedLines) {
      // Check if we need a new page
      if (currentY < margin + lineHeight) {
        page = pdfDoc.addPage([width, height])
        currentY = height - margin
      }

      page.drawText(line, {
        x: margin,
        y: currentY,
        size: fontSize,
        font: font,
        color: rgb(0, 0, 0),
      })

      currentY -= lineHeight
    }

    // Save the PDF
    const pdfBytes = await pdfDoc.save()
    const blob = new Blob([pdfBytes], { type: "application/pdf" })

    // Upload to Vercel Blob
    const filename = `generated-${Date.now()}.pdf`
    const uploadedBlob = await put(filename, blob, {
      access: "public",
      contentType: "application/pdf",
    })

    // Save to database
    const supabase = await getSupabaseServerClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    await supabase.from("files").insert({
      user_id: user?.id || null,
      original_name: `${title}.pdf`,
      blob_url: uploadedBlob.url,
      file_size: pdfBytes.length,
      file_type: "application/pdf",
      operation_type: "generate",
    })

    return NextResponse.json({ url: uploadedBlob.url })
  } catch (error) {
    console.error("[v0] Error generating PDF:", error)
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 })
  }
}
