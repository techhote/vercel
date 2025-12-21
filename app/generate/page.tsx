"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2, Download, FileEdit } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function GeneratePage() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [fontSize, setFontSize] = useState("12")
  const [pageSize, setPageSize] = useState("A4")
  const [isProcessing, setIsProcessing] = useState(false)
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
  const { toast } = useToast()

  const handleGenerate = async () => {
    if (!title || !content) {
      toast({
        title: "Error",
        description: "Please provide both title and content",
        variant: "destructive",
      })
      return
    }

    setIsProcessing(true)

    try {
      const response = await fetch("/api/pdf/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
          fontSize: Number.parseInt(fontSize),
          pageSize,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to generate PDF")
      }

      const data = await response.json()
      setDownloadUrl(data.url)

      toast({
        title: "Success",
        description: "PDF generated successfully!",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to generate PDF",
        variant: "destructive",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  const templates = [
    {
      name: "Invoice",
      title: "Invoice #001",
      content: `INVOICE

Bill To: Customer Name
Date: ${new Date().toLocaleDateString()}

DESCRIPTION          QTY    PRICE    TOTAL
Service/Product       1     $100     $100

                           SUBTOTAL: $100
                                TAX: $10
                              TOTAL: $110

Thank you for your business!`,
    },
    {
      name: "Letter",
      title: "Business Letter",
      content: `Dear [Recipient Name],

I hope this letter finds you well. I am writing to...

[Your message here]

Best regards,
[Your Name]
[Your Title]
[Company Name]`,
    },
    {
      name: "Report",
      title: "Monthly Report",
      content: `MONTHLY REPORT
${new Date().toLocaleDateString()}

EXECUTIVE SUMMARY
This report provides an overview of...

KEY FINDINGS
1. Finding one
2. Finding two
3. Finding three

RECOMMENDATIONS
Based on the findings, we recommend...

CONCLUSION
In conclusion...`,
    },
  ]

  const loadTemplate = (template: (typeof templates)[0]) => {
    setTitle(template.title)
    setContent(template.content)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 container py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-red-500 flex items-center justify-center">
                <FileEdit className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Generate PDF</h1>
                <p className="text-muted-foreground">Create PDFs from text, templates, or HTML content</p>
              </div>
            </div>
          </div>

          <Tabs defaultValue="custom" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="custom">Custom Document</TabsTrigger>
              <TabsTrigger value="templates">Templates</TabsTrigger>
            </TabsList>

            <TabsContent value="custom">
              <Card>
                <CardHeader>
                  <CardTitle>Create Custom PDF</CardTitle>
                  <CardDescription>Enter your content and configure the document settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Document Title</Label>
                    <Input
                      id="title"
                      placeholder="Enter document title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Page Size</Label>
                      <Select value={pageSize} onValueChange={setPageSize}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="A4">A4 (210 x 297 mm)</SelectItem>
                          <SelectItem value="Letter">Letter (8.5 x 11 in)</SelectItem>
                          <SelectItem value="Legal">Legal (8.5 x 14 in)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Font Size</Label>
                      <Select value={fontSize} onValueChange={setFontSize}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10">10pt</SelectItem>
                          <SelectItem value="12">12pt</SelectItem>
                          <SelectItem value="14">14pt</SelectItem>
                          <SelectItem value="16">16pt</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                      id="content"
                      placeholder="Enter your document content..."
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      rows={15}
                      className="font-mono"
                    />
                  </div>

                  <Button onClick={handleGenerate} disabled={isProcessing || !title || !content} className="w-full">
                    {isProcessing ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <FileEdit className="mr-2 h-4 w-4" />
                        Generate PDF
                      </>
                    )}
                  </Button>

                  {downloadUrl && (
                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="pt-6 flex items-center justify-between">
                        <div>
                          <p className="font-medium">Your PDF is ready!</p>
                          <p className="text-sm text-muted-foreground">Click to download</p>
                        </div>
                        <Button asChild>
                          <a href={downloadUrl} download={`${title}.pdf`}>
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="templates">
              <Card>
                <CardHeader>
                  <CardTitle>Choose a Template</CardTitle>
                  <CardDescription>Start with a pre-made template and customize it</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {templates.map((template) => (
                      <Card
                        key={template.name}
                        className="cursor-pointer hover:shadow-md transition-shadow"
                        onClick={() => loadTemplate(template)}
                      >
                        <CardContent className="pt-6 text-center">
                          <FileEdit className="h-8 w-8 mx-auto mb-2 text-primary" />
                          <h3 className="font-semibold">{template.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1">Click to use</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {(title || content) && (
                    <div className="pt-6 border-t">
                      <p className="text-sm text-muted-foreground mb-4">
                        Template loaded! Switch to Custom Document tab to edit and generate.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  )
}
