"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Loader2, Download, RotateCw, Upload, X, FileText } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { formatFileSize } from "@/lib/pdf-utils"

export default function RotatePage() {
  const [file, setFile] = useState<File | null>(null)
  const [rotation, setRotation] = useState("90")
  const [isProcessing, setIsProcessing] = useState(false)
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
  const { toast } = useToast()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile)
      setDownloadUrl(null)
    } else {
      toast({
        title: "Error",
        description: "Please select a valid PDF file",
        variant: "destructive",
      })
    }
  }

  const handleRotate = async () => {
    if (!file) {
      toast({
        title: "Error",
        description: "Please select a PDF file",
        variant: "destructive",
      })
      return
    }

    setIsProcessing(true)

    try {
      const formData = new FormData()
      formData.append("file", file)
      formData.append("rotation", rotation)

      const response = await fetch("/api/pdf/rotate", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Failed to rotate PDF")
      }

      const data = await response.json()
      setDownloadUrl(data.url)

      toast({
        title: "Success",
        description: "PDF rotated successfully!",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to rotate PDF",
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
              <div className="w-12 h-12 rounded-lg bg-pink-500 flex items-center justify-center">
                <RotateCw className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Rotate PDF</h1>
                <p className="text-muted-foreground">Rotate your PDFs the way you need them</p>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Upload PDF File</CardTitle>
              <CardDescription>You can even rotate multiple PDFs at once!</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="file-upload" className="cursor-pointer">
                  {file ? (
                    <Card className="p-4 flex items-center justify-between border-2 border-primary">
                      <div className="flex items-center gap-3">
                        <FileText className="h-6 w-6 text-primary" />
                        <div>
                          <p className="font-medium">{file.name}</p>
                          <p className="text-sm text-muted-foreground">{formatFileSize(file.size)}</p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.preventDefault()
                          setFile(null)
                        }}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </Card>
                  ) : (
                    <Card className="border-2 border-dashed p-8 text-center cursor-pointer hover:border-primary/50 transition-colors">
                      <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                      <p className="text-lg font-medium mb-2">Click to upload PDF</p>
                      <p className="text-sm text-muted-foreground">or drag and drop</p>
                    </Card>
                  )}
                </Label>
                <input id="file-upload" type="file" accept=".pdf" onChange={handleFileChange} className="hidden" />
              </div>

              {file && (
                <>
                  <div className="space-y-4">
                    <Label>Rotation Angle</Label>
                    <RadioGroup value={rotation} onValueChange={setRotation}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="90" id="90" />
                        <Label htmlFor="90" className="cursor-pointer">
                          90° Clockwise
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="180" id="180" />
                        <Label htmlFor="180" className="cursor-pointer">
                          180° (Upside down)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="270" id="270" />
                        <Label htmlFor="270" className="cursor-pointer">
                          270° (90° Counter-clockwise)
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button onClick={handleRotate} disabled={isProcessing} className="w-full">
                    {isProcessing ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Rotating...
                      </>
                    ) : (
                      <>
                        <RotateCw className="mr-2 h-4 w-4" />
                        Rotate PDF
                      </>
                    )}
                  </Button>
                </>
              )}

              {downloadUrl && (
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="pt-6 flex items-center justify-between">
                    <div>
                      <p className="font-medium">Your rotated PDF is ready!</p>
                      <p className="text-sm text-muted-foreground">Click the button to download</p>
                    </div>
                    <Button asChild>
                      <a href={downloadUrl} download="rotated.pdf">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
