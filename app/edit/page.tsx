"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PDFUploader } from "@/components/pdf-uploader"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Download, FileEdit, Type } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function EditPage() {
  const [files, setFiles] = useState<File[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
  const [textContent, setTextContent] = useState("")
  const [xPosition, setXPosition] = useState(50)
  const [yPosition, setYPosition] = useState(50)
  const { toast } = useToast()

  const handleEdit = async () => {
    if (files.length === 0) {
      toast({
        title: "Error",
        description: "Please select a PDF file to edit",
        variant: "destructive",
      })
      return
    }

    if (!textContent.trim()) {
      toast({
        title: "Error",
        description: "Please enter some text to add",
        variant: "destructive",
      })
      return
    }

    setIsProcessing(true)

    try {
      const formData = new FormData()
      formData.append("file", files[0])
      formData.append("text", textContent)
      formData.append("x", xPosition.toString())
      formData.append("y", yPosition.toString())

      const response = await fetch("/api/pdf/edit", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Failed to edit PDF")
      }

      const data = await response.json()
      setDownloadUrl(data.url)

      toast({
        title: "Success",
        description: "PDF edited successfully!",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to edit PDF",
        variant: "destructive",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 container py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center">
                <FileEdit className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Edit PDF</h1>
                <p className="text-muted-foreground">Add text, images, shapes or freehand annotations to your PDF</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Upload PDF File</CardTitle>
                <CardDescription>Select the PDF file you want to edit</CardDescription>
              </CardHeader>
              <CardContent>
                <PDFUploader onFilesSelected={setFiles} maxFiles={1} />
              </CardContent>
            </Card>

            {files.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Edit Options</CardTitle>
                  <CardDescription>Add text to your PDF</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="text">Text to Add</Label>
                    <Textarea
                      id="text"
                      placeholder="Enter text to add to the PDF..."
                      value={textContent}
                      onChange={(e) => setTextContent(e.target.value)}
                      rows={3}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="x">X Position</Label>
                      <Input
                        id="x"
                        type="number"
                        value={xPosition}
                        onChange={(e) => setXPosition(Number(e.target.value))}
                        min={0}
                        max={500}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="y">Y Position</Label>
                      <Input
                        id="y"
                        type="number"
                        value={yPosition}
                        onChange={(e) => setYPosition(Number(e.target.value))}
                        min={0}
                        max={700}
                      />
                    </div>
                  </div>

                  <Button onClick={handleEdit} disabled={isProcessing} className="w-full">
                    {isProcessing ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Editing...
                      </>
                    ) : (
                      <>
                        <Type className="mr-2 h-4 w-4" />
                        Add Text to PDF
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            )}

            {downloadUrl && (
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6 flex items-center justify-between">
                  <div>
                    <p className="font-medium">Your edited PDF is ready!</p>
                    <p className="text-sm text-muted-foreground">Click the button to download</p>
                  </div>
                  <Button asChild>
                    <a href={downloadUrl} download="edited.pdf">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
