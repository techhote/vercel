"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Loader2, Download, Split, Upload, FileText, X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { formatFileSize } from "@/lib/pdf-utils"

export default function SplitPage() {
  const [file, setFile] = useState<File | null>(null)
  const [splitMode, setSplitMode] = useState<"pages" | "range">("pages")
  const [pageNumbers, setPageNumbers] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [downloadUrls, setDownloadUrls] = useState<string[]>([])
  const { toast } = useToast()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile)
      setDownloadUrls([])
    } else {
      toast({
        title: "Error",
        description: "Please select a valid PDF file",
        variant: "destructive",
      })
    }
  }

  const handleSplit = async () => {
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
      formData.append("mode", splitMode)
      formData.append("pages", pageNumbers)

      const response = await fetch("/api/pdf/split", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Failed to split PDF")
      }

      const data = await response.json()
      setDownloadUrls(data.urls)

      toast({
        title: "Success",
        description: "PDF split successfully!",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to split PDF",
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
              <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center">
                <Split className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Split PDF</h1>
                <p className="text-muted-foreground">Extract pages or split PDF into multiple files</p>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Upload PDF File</CardTitle>
              <CardDescription>Select a PDF file and choose how you want to split it</CardDescription>
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
                <Input id="file-upload" type="file" accept=".pdf" onChange={handleFileChange} className="hidden" />
              </div>

              {file && (
                <>
                  <div className="space-y-4">
                    <Label>Split Mode</Label>
                    <RadioGroup value={splitMode} onValueChange={(value: "pages" | "range") => setSplitMode(value)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="pages" id="pages" />
                        <Label htmlFor="pages" className="cursor-pointer">
                          Extract specific pages
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="range" id="range" />
                        <Label htmlFor="range" className="cursor-pointer">
                          Split by page range
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pages-input">{splitMode === "pages" ? "Page Numbers" : "Page Ranges"}</Label>
                    <Input
                      id="pages-input"
                      placeholder={splitMode === "pages" ? "e.g., 1,3,5-7" : "e.g., 1-5,6-10"}
                      value={pageNumbers}
                      onChange={(e) => setPageNumbers(e.target.value)}
                    />
                    <p className="text-xs text-muted-foreground">
                      {splitMode === "pages"
                        ? "Enter page numbers separated by commas (e.g., 1,3,5-7)"
                        : "Enter page ranges separated by commas (e.g., 1-5,6-10)"}
                    </p>
                  </div>

                  <Button onClick={handleSplit} disabled={isProcessing || !pageNumbers} className="w-full">
                    {isProcessing ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Split className="mr-2 h-4 w-4" />
                        Split PDF
                      </>
                    )}
                  </Button>
                </>
              )}

              {downloadUrls.length > 0 && (
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="pt-6 space-y-3">
                    <p className="font-medium">Your split PDFs are ready!</p>
                    {downloadUrls.map((url, index) => (
                      <Button key={index} variant="outline" asChild className="w-full bg-transparent">
                        <a href={url} download={`split-${index + 1}.pdf`}>
                          <Download className="mr-2 h-4 w-4" />
                          Download Part {index + 1}
                        </a>
                      </Button>
                    ))}
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
