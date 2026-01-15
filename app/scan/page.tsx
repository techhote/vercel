"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Download, Loader2, ScanLine, ImageIcon, X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ScanToPdfPage() {
  const [files, setFiles] = useState<File[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
  const { toast } = useToast()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || [])
    const imageFiles = selectedFiles.filter((f) => f.type.startsWith("image/"))
    if (imageFiles.length > 0) {
      setFiles((prev) => [...prev, ...imageFiles])
      setDownloadUrl(null)
    } else {
      toast({ title: "Invalid files", description: "Please select scanned images", variant: "destructive" })
    }
  }

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleConvert = async () => {
    if (files.length === 0) return
    setIsProcessing(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast({ title: "Success", description: "Scans converted to PDF successfully" })
      setDownloadUrl(URL.createObjectURL(files[0]))
    } catch (error) {
      toast({ title: "Error", description: "Failed to convert scans", variant: "destructive" })
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-lg bg-orange-600 flex items-center justify-center mx-auto mb-4">
              <ScanLine className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Scan to PDF</h1>
            <p className="text-muted-foreground">Capture document scans and convert them instantly to PDF</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Upload Scanned Images</CardTitle>
              <CardDescription>Select scanned document images to convert to PDF</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <Upload className="h-10 w-10 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                  <p className="text-xs text-muted-foreground mt-1">JPG, PNG scanned images</p>
                </label>
              </div>

              {files.length > 0 && (
                <div className="space-y-2">
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                      <ImageIcon className="h-5 w-5" />
                      <span className="text-sm flex-1 truncate">{file.name}</span>
                      <span className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                      <Button variant="ghost" size="sm" onClick={() => removeFile(index)}>
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex gap-4">
                <Button onClick={handleConvert} disabled={files.length === 0 || isProcessing} className="flex-1">
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Converting...
                    </>
                  ) : (
                    "Convert to PDF"
                  )}
                </Button>
                {downloadUrl && (
                  <Button variant="outline" asChild>
                    <a href={downloadUrl} download="scanned-document.pdf">
                      <Download className="mr-2 h-4 w-4" /> Download
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
