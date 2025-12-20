"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PDFUploader } from "@/components/pdf-uploader"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, Download, FolderTree } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function OrganizePage() {
  const [files, setFiles] = useState<File[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
  const [pageOrder, setPageOrder] = useState("")
  const { toast } = useToast()

  const handleOrganize = async () => {
    if (files.length === 0) {
      toast({
        title: "Error",
        description: "Please select a PDF file to organize",
        variant: "destructive",
      })
      return
    }

    if (!pageOrder.trim()) {
      toast({
        title: "Error",
        description: "Please enter page order (e.g., 1,3,2)",
        variant: "destructive",
      })
      return
    }

    setIsProcessing(true)

    try {
      const formData = new FormData()
      formData.append("file", files[0])
      formData.append("pageOrder", pageOrder)

      const response = await fetch("/api/pdf/organize", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Failed to organize PDF")
      }

      const data = await response.json()
      setDownloadUrl(data.url)

      toast({
        title: "Success",
        description: "PDF organized successfully!",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to organize PDF",
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
              <div className="w-12 h-12 rounded-lg bg-red-600 flex items-center justify-center">
                <FolderTree className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Organize PDF</h1>
                <p className="text-muted-foreground">Sort pages of your PDF file however you like</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Upload PDF File</CardTitle>
                <CardDescription>Select the PDF file you want to organize</CardDescription>
              </CardHeader>
              <CardContent>
                <PDFUploader onFilesSelected={setFiles} maxFiles={1} />
              </CardContent>
            </Card>

            {files.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Organize Pages</CardTitle>
                  <CardDescription>Enter the new page order (e.g., 1,3,2,4)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="pageOrder">Page Order</Label>
                    <Input
                      id="pageOrder"
                      type="text"
                      placeholder="1,3,2,4"
                      value={pageOrder}
                      onChange={(e) => setPageOrder(e.target.value)}
                    />
                    <p className="text-xs text-muted-foreground">
                      Enter page numbers separated by commas in the order you want them
                    </p>
                  </div>

                  <Button onClick={handleOrganize} disabled={isProcessing} className="w-full">
                    {isProcessing ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Organizing...
                      </>
                    ) : (
                      <>
                        <FolderTree className="mr-2 h-4 w-4" />
                        Organize PDF
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
                    <p className="font-medium">Your organized PDF is ready!</p>
                    <p className="text-sm text-muted-foreground">Click the button to download</p>
                  </div>
                  <Button asChild>
                    <a href={downloadUrl} download="organized.pdf">
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
