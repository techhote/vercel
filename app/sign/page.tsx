"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PDFUploader } from "@/components/pdf-uploader"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, Download, PenTool } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function SignPage() {
  const [files, setFiles] = useState<File[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
  const [signatureText, setSignatureText] = useState("")
  const { toast } = useToast()

  const handleSign = async () => {
    if (files.length === 0) {
      toast({
        title: "Error",
        description: "Please select a PDF file to sign",
        variant: "destructive",
      })
      return
    }

    if (!signatureText.trim()) {
      toast({
        title: "Error",
        description: "Please enter your signature",
        variant: "destructive",
      })
      return
    }

    setIsProcessing(true)

    try {
      const formData = new FormData()
      formData.append("file", files[0])
      formData.append("signature", signatureText)

      const response = await fetch("/api/pdf/sign", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Failed to sign PDF")
      }

      const data = await response.json()
      setDownloadUrl(data.url)

      toast({
        title: "Success",
        description: "PDF signed successfully!",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to sign PDF",
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
              <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center">
                <PenTool className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Sign PDF</h1>
                <p className="text-muted-foreground">Sign yourself or request electronic signatures from others</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Upload PDF File</CardTitle>
                <CardDescription>Select the PDF file you want to sign</CardDescription>
              </CardHeader>
              <CardContent>
                <PDFUploader onFilesSelected={setFiles} maxFiles={1} />
              </CardContent>
            </Card>

            {files.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Add Your Signature</CardTitle>
                  <CardDescription>Type your signature to add to the PDF</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signature">Your Signature</Label>
                    <Input
                      id="signature"
                      type="text"
                      placeholder="Type your name..."
                      value={signatureText}
                      onChange={(e) => setSignatureText(e.target.value)}
                      className="text-2xl font-serif italic"
                    />
                  </div>

                  <Button onClick={handleSign} disabled={isProcessing} className="w-full">
                    {isProcessing ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Signing...
                      </>
                    ) : (
                      <>
                        <PenTool className="mr-2 h-4 w-4" />
                        Sign PDF
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
                    <p className="font-medium">Your signed PDF is ready!</p>
                    <p className="text-sm text-muted-foreground">Click the button to download</p>
                  </div>
                  <Button asChild>
                    <a href={downloadUrl} download="signed.pdf">
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
