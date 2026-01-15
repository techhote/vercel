"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Download, Loader2, Globe } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function HtmlToPdfPage() {
  const [url, setUrl] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
  const { toast } = useToast()

  const handleConvert = async () => {
    if (!url) return
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid URL starting with http:// or https://",
        variant: "destructive",
      })
      return
    }
    setIsProcessing(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast({ title: "Success", description: "Webpage converted to PDF successfully" })
      setDownloadUrl("#")
    } catch (error) {
      toast({ title: "Error", description: "Failed to convert webpage", variant: "destructive" })
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
            <div className="w-16 h-16 rounded-lg bg-yellow-600 flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-2">HTML to PDF</h1>
            <p className="text-muted-foreground">
              Convert webpages to PDF. Copy and paste the URL and convert it with a click
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Enter URL</CardTitle>
              <CardDescription>Paste the webpage URL you want to convert to PDF</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                type="url"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="text-lg py-6"
              />

              <div className="flex gap-4">
                <Button onClick={handleConvert} disabled={!url || isProcessing} className="flex-1">
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
                    <a href={downloadUrl} download="webpage.pdf">
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
