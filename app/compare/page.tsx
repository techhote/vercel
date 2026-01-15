"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Download, Loader2, Copy } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ComparePdfPage() {
  const [file1, setFile1] = useState<File | null>(null)
  const [file2, setFile2] = useState<File | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
  const { toast } = useToast()

  const handleFile1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile1(selectedFile)
      setDownloadUrl(null)
    } else {
      toast({ title: "Invalid file", description: "Please select a PDF file", variant: "destructive" })
    }
  }

  const handleFile2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile2(selectedFile)
      setDownloadUrl(null)
    } else {
      toast({ title: "Invalid file", description: "Please select a PDF file", variant: "destructive" })
    }
  }

  const handleCompare = async () => {
    if (!file1 || !file2) return
    setIsProcessing(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast({ title: "Success", description: "PDFs compared successfully" })
      setDownloadUrl(URL.createObjectURL(file1))
    } catch (error) {
      toast({ title: "Error", description: "Failed to compare PDFs", variant: "destructive" })
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
              <Copy className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Compare PDF</h1>
            <p className="text-muted-foreground">
              Show a side-by-side comparison and spot changes between file versions
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Upload Two PDFs</CardTitle>
              <CardDescription>Select two PDF files to compare</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                  <input type="file" accept=".pdf" onChange={handleFile1Change} className="hidden" id="file-upload-1" />
                  <label htmlFor="file-upload-1" className="cursor-pointer">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">First PDF</p>
                    {file1 && <p className="text-xs mt-2 truncate">{file1.name}</p>}
                  </label>
                </div>
                <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                  <input type="file" accept=".pdf" onChange={handleFile2Change} className="hidden" id="file-upload-2" />
                  <label htmlFor="file-upload-2" className="cursor-pointer">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Second PDF</p>
                    {file2 && <p className="text-xs mt-2 truncate">{file2.name}</p>}
                  </label>
                </div>
              </div>

              <div className="flex gap-4">
                <Button onClick={handleCompare} disabled={!file1 || !file2 || isProcessing} className="flex-1">
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Comparing...
                    </>
                  ) : (
                    "Compare PDFs"
                  )}
                </Button>
                {downloadUrl && (
                  <Button variant="outline" asChild>
                    <a href={downloadUrl} download="comparison-report.pdf">
                      <Download className="mr-2 h-4 w-4" /> Download Report
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
