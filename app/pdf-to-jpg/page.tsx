"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Loader2, Download, Upload, X, FileText, ImageIcon } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { formatFileSize } from "@/lib/pdf-utils"

export default function PdfToJpgPage() {
  const [file, setFile] = useState<File | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [downloadUrls, setDownloadUrls] = useState<string[]>([])
  const { toast } = useToast()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      if (selectedFile.type !== "application/pdf") {
        toast({
          title: "Error",
          description: "Please select a PDF file",
          variant: "destructive",
        })
        return
      }
      setFile(selectedFile)
      setDownloadUrls([])
    }
  }

  const handleConvert = async () => {
    if (!file) {
      toast({
        title: "Error",
        description: "Please select a PDF file to convert",
        variant: "destructive",
      })
      return
    }

    setIsProcessing(true)

    try {
      const formData = new FormData()
      formData.append("file", file)

      const response = await fetch("/api/pdf/pdf-to-jpg", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Failed to convert PDF to JPG")
      }

      const data = await response.json()
      setDownloadUrls(data.urls)

      toast({
        title: "Success",
        description: `Converted ${data.urls.length} page(s) to JPG successfully!`,
      })
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to convert PDF",
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
              <div className="w-12 h-12 rounded-lg bg-yellow-500 flex items-center justify-center">
                <ImageIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">PDF to JPG</h1>
                <p className="text-muted-foreground">Convert each PDF page into a JPG image</p>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Convert PDF to JPG</CardTitle>
              <CardDescription>Upload a PDF file and convert all pages to JPG images</CardDescription>
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
                          setDownloadUrls([])
                        }}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </Card>
                  ) : (
                    <Card className="border-2 border-dashed p-8 text-center cursor-pointer hover:border-primary/50 transition-colors">
                      <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                      <p className="text-lg font-medium mb-2">Click to upload PDF</p>
                      <p className="text-sm text-muted-foreground">Support PDF files only</p>
                    </Card>
                  )}
                </Label>
                <input
                  id="file-upload"
                  type="file"
                  accept=".pdf,application/pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>

              {file && !downloadUrls.length && (
                <Button onClick={handleConvert} disabled={isProcessing} className="w-full">
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Converting to JPG...
                    </>
                  ) : (
                    <>
                      <ImageIcon className="mr-2 h-4 w-4" />
                      Convert to JPG
                    </>
                  )}
                </Button>
              )}

              {downloadUrls.length > 0 && (
                <div className="space-y-4">
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="pt-6">
                      <p className="font-medium mb-4">Your JPG images are ready! ({downloadUrls.length} page(s))</p>
                      <div className="space-y-2">
                        {downloadUrls.map((url, index) => (
                          <Button key={index} variant="outline" className="w-full bg-transparent" asChild>
                            <a href={url} download={`page-${index + 1}.jpg`}>
                              <Download className="mr-2 h-4 w-4" />
                              Download Page {index + 1}
                            </a>
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="font-semibold mb-2">All Pages</h3>
                <p className="text-sm text-muted-foreground">Convert every page to separate JPG</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="font-semibold mb-2">High Quality</h3>
                <p className="text-sm text-muted-foreground">Preserve image quality</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="font-semibold mb-2">Fast Conversion</h3>
                <p className="text-sm text-muted-foreground">Process files in seconds</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
