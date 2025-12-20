"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Loader2, Download, Minimize2, Upload, X, FileText } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { formatFileSize } from "@/lib/pdf-utils"

export default function CompressPage() {
  const [file, setFile] = useState<File | null>(null)
  const [quality, setQuality] = useState([75])
  const [isProcessing, setIsProcessing] = useState(false)
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
  const [compressionStats, setCompressionStats] = useState<{
    originalSize: number
    compressedSize: number
    reduction: number
  } | null>(null)
  const { toast } = useToast()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile)
      setDownloadUrl(null)
      setCompressionStats(null)
    } else {
      toast({
        title: "Error",
        description: "Please select a valid PDF file",
        variant: "destructive",
      })
    }
  }

  const handleCompress = async () => {
    if (!file) {
      toast({
        title: "Error",
        description: "Please select a PDF file to compress",
        variant: "destructive",
      })
      return
    }

    setIsProcessing(true)

    try {
      const formData = new FormData()
      formData.append("file", file)
      formData.append("quality", quality[0].toString())

      const response = await fetch("/api/pdf/compress", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Failed to compress PDF")
      }

      const data = await response.json()
      setDownloadUrl(data.url)
      setCompressionStats({
        originalSize: file.size,
        compressedSize: data.size,
        reduction: Math.round(((file.size - data.size) / file.size) * 100),
      })

      toast({
        title: "Success",
        description: "PDF compressed successfully!",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to compress PDF",
        variant: "destructive",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  const getQualityLabel = (value: number) => {
    if (value < 40) return "Maximum Compression"
    if (value < 60) return "High Compression"
    if (value < 80) return "Balanced"
    return "High Quality"
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 container py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center">
                <Minimize2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Compress PDF</h1>
                <p className="text-muted-foreground">Reduce PDF file size while maintaining quality</p>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>PDF Compressor</CardTitle>
              <CardDescription>Upload a PDF file and adjust compression settings</CardDescription>
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
                    <div className="flex justify-between items-center">
                      <Label>Compression Quality</Label>
                      <span className="text-sm font-medium text-primary">{getQualityLabel(quality[0])}</span>
                    </div>
                    <Slider value={quality} onValueChange={setQuality} min={10} max={100} step={5} />
                    <p className="text-xs text-muted-foreground">
                      Lower values = smaller file size but reduced quality. Higher values = better quality but larger
                      file size.
                    </p>
                  </div>

                  <Button onClick={handleCompress} disabled={isProcessing} className="w-full">
                    {isProcessing ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Compressing...
                      </>
                    ) : (
                      <>
                        <Minimize2 className="mr-2 h-4 w-4" />
                        Compress PDF
                      </>
                    )}
                  </Button>
                </>
              )}

              {downloadUrl && compressionStats && (
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="pt-6 space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Original Size</p>
                        <p className="text-lg font-semibold">{formatFileSize(compressionStats.originalSize)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">New Size</p>
                        <p className="text-lg font-semibold">{formatFileSize(compressionStats.compressedSize)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Reduction</p>
                        <p className="text-lg font-semibold text-green-600">{compressionStats.reduction}%</p>
                      </div>
                    </div>
                    <Button asChild className="w-full">
                      <a href={downloadUrl} download="compressed.pdf">
                        <Download className="mr-2 h-4 w-4" />
                        Download Compressed PDF
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="font-semibold mb-2">Smart Compression</h3>
                <p className="text-sm text-muted-foreground">Intelligent algorithms reduce file size</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="font-semibold mb-2">Quality Control</h3>
                <p className="text-sm text-muted-foreground">Adjust settings to your needs</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="font-semibold mb-2">Fast Processing</h3>
                <p className="text-sm text-muted-foreground">Compress large files in seconds</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
