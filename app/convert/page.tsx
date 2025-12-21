"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Download, RefreshCw, Upload, X, FileText } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { formatFileSize } from "@/lib/pdf-utils"

export default function ConvertPage() {
  const [file, setFile] = useState<File | null>(null)
  const [convertTo, setConvertTo] = useState("pdf")
  const [isProcessing, setIsProcessing] = useState(false)
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
  const { toast } = useToast()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      setDownloadUrl(null)

      // Auto-set conversion direction based on file type
      if (selectedFile.type === "application/pdf") {
        setConvertTo("image")
      } else if (selectedFile.type.startsWith("image/")) {
        setConvertTo("pdf")
      }
    }
  }

  const handleConvert = async () => {
    if (!file) {
      toast({
        title: "Error",
        description: "Please select a file to convert",
        variant: "destructive",
      })
      return
    }

    setIsProcessing(true)

    try {
      const formData = new FormData()
      formData.append("file", file)
      formData.append("convertTo", convertTo)

      const response = await fetch("/api/pdf/convert", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Failed to convert file")
      }

      const data = await response.json()
      setDownloadUrl(data.url)

      toast({
        title: "Success",
        description: "File converted successfully!",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to convert file",
        variant: "destructive",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  const acceptedFormats = convertTo === "pdf" ? "image/*" : ".pdf"

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 container py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center">
                <RefreshCw className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Convert Files</h1>
                <p className="text-muted-foreground">Convert images to PDF or PDF to images</p>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>File Converter</CardTitle>
              <CardDescription>Upload a file and select the output format</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Conversion Type</Label>
                <Select value={convertTo} onValueChange={setConvertTo}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pdf">Convert to PDF</SelectItem>
                    <SelectItem value="image">Convert to Images (PNG)</SelectItem>
                    <SelectItem value="jpg">Convert to Images (JPG)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

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
                      <p className="text-lg font-medium mb-2">Click to upload file</p>
                      <p className="text-sm text-muted-foreground">
                        {convertTo === "pdf" ? "Support JPG, PNG, GIF, WebP" : "Support PDF files"}
                      </p>
                    </Card>
                  )}
                </Label>
                <input
                  id="file-upload"
                  type="file"
                  accept={acceptedFormats}
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>

              {file && (
                <Button onClick={handleConvert} disabled={isProcessing} className="w-full">
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Converting...
                    </>
                  ) : (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Convert File
                    </>
                  )}
                </Button>
              )}

              {downloadUrl && (
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="pt-6 flex items-center justify-between">
                    <div>
                      <p className="font-medium">Your converted file is ready!</p>
                      <p className="text-sm text-muted-foreground">Click the button to download</p>
                    </div>
                    <Button asChild>
                      <a href={downloadUrl} download>
                        <Download className="mr-2 h-4 w-4" />
                        Download
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
                <h3 className="font-semibold mb-2">Multiple Formats</h3>
                <p className="text-sm text-muted-foreground">Support for JPG, PNG, GIF, WebP</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="font-semibold mb-2">High Quality</h3>
                <p className="text-sm text-muted-foreground">Preserve quality during conversion</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="font-semibold mb-2">Fast & Easy</h3>
                <p className="text-sm text-muted-foreground">Convert files in seconds</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
