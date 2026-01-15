"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, FileText, Download, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function WordToPdfPage() {
  const [file, setFile] = useState<File | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
  const { toast } = useToast()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile && (selectedFile.name.endsWith(".doc") || selectedFile.name.endsWith(".docx"))) {
      setFile(selectedFile)
      setDownloadUrl(null)
    } else {
      toast({
        title: "Invalid file",
        description: "Please select a Word document (.doc or .docx)",
        variant: "destructive",
      })
    }
  }

  const handleConvert = async () => {
    if (!file) return
    setIsProcessing(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast({ title: "Success", description: "Word document converted to PDF successfully" })
      setDownloadUrl(URL.createObjectURL(file))
    } catch (error) {
      toast({ title: "Error", description: "Failed to convert document", variant: "destructive" })
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
            <div className="w-16 h-16 rounded-lg bg-blue-600 flex items-center justify-center mx-auto mb-4">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Word to PDF</h1>
            <p className="text-muted-foreground">Make DOC and DOCX files easy to read by converting them to PDF</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Upload Word Document</CardTitle>
              <CardDescription>Select a Word file to convert to PDF format</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                <input
                  type="file"
                  accept=".doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <Upload className="h-10 w-10 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                  <p className="text-xs text-muted-foreground mt-1">DOC, DOCX files only</p>
                </label>
              </div>

              {file && (
                <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                  <FileText className="h-5 w-5" />
                  <span className="text-sm flex-1 truncate">{file.name}</span>
                  <span className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                </div>
              )}

              <div className="flex gap-4">
                <Button onClick={handleConvert} disabled={!file || isProcessing} className="flex-1">
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
                    <a href={downloadUrl} download={`${file?.name.replace(/\.(doc|docx)$/, "")}.pdf`}>
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
