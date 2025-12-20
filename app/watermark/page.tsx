"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Loader2, Download, Droplet, Upload, X, FileText } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { formatFileSize } from "@/lib/pdf-utils"

export default function WatermarkPage() {
  const [file, setFile] = useState<File | null>(null)
  const [watermarkText, setWatermarkText] = useState("")
  const [opacity, setOpacity] = useState([50])
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

  const handleWatermark = async () => {
    if (!file || !watermarkText) {
      toast({
        title: "Error",
        description: "Please select a PDF file and enter watermark text",
        variant: "destructive",
      })
      return
    }

    setIsProcessing(true)

    try {
      const formData = new FormData()
      formData.append("file", file)
      formData.append("text", watermarkText)
      formData.append("opacity", (opacity[0] / 100).toString())

      const response = await fetch("/api/pdf/watermark", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Failed to add watermark")
      }

      const data = await response.json()
      setDownloadUrl(data.url)

      toast({
        title: "Success",
        description: "Watermark added successfully!",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to add watermark",
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
              <div className="w-12 h-12 rounded-lg bg-purple-600 flex items-center justify-center">
                <Droplet className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Watermark PDF</h1>
                <p className="text-muted-foreground">
                  Stamp an image or text over your PDF in seconds. Choose the typography, transparency and position
                </p>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Upload PDF File</CardTitle>
              <CardDescription>Add a watermark to protect your document</CardDescription>
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
                  <div className="space-y-2">
                    <Label htmlFor="watermark-text">Watermark Text</Label>
                    <Input
                      id="watermark-text"
                      placeholder="Enter watermark text (e.g., CONFIDENTIAL)"
                      value={watermarkText}
                      onChange={(e) => setWatermarkText(e.target.value)}
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Label>Opacity</Label>
                      <span className="text-sm font-medium text-primary">{opacity[0]}%</span>
                    </div>
                    <Slider value={opacity} onValueChange={setOpacity} min={10} max={100} step={5} />
                  </div>

                  <Button onClick={handleWatermark} disabled={isProcessing || !watermarkText} className="w-full">
                    {isProcessing ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Adding Watermark...
                      </>
                    ) : (
                      <>
                        <Droplet className="mr-2 h-4 w-4" />
                        Add Watermark
                      </>
                    )}
                  </Button>
                </>
              )}

              {downloadUrl && (
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="pt-6 flex items-center justify-between">
                    <div>
                      <p className="font-medium">Your watermarked PDF is ready!</p>
                      <p className="text-sm text-muted-foreground">Click the button to download</p>
                    </div>
                    <Button asChild>
                      <a href={downloadUrl} download="watermarked.pdf">
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
