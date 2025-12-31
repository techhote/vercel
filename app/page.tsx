import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  FileText,
  Merge,
  Split,
  RefreshCw,
  Minimize2,
  FileEdit,
  FileType,
  Presentation,
  Sheet,
  ImageIcon,
  RotateCw,
  Droplet,
  Lock,
  Unlock,
  PenTool,
  FolderTree,
  Archive,
  Wrench,
  Hash,
  ScanLine,
  FileSearch,
  Globe,
  Copy,
  Eye,
  Crop,
} from "lucide-react"

export default function HomePage() {
  const tools = [
    {
      icon: Merge,
      title: "Merge PDF",
      description: "Combine multiple PDF files into one document",
      href: "/merge",
      color: "bg-red-500",
    },
    {
      icon: Split,
      title: "Split PDF",
      description: "Extract specific pages or split PDF into multiple files",
      href: "/split",
      color: "bg-red-500",
    },
    {
      icon: Minimize2,
      title: "Compress PDF",
      description: "Reduce file size while optimizing for maximal PDF quality",
      href: "/compress",
      color: "bg-green-500",
    },
    {
      icon: FileType,
      title: "PDF to Word",
      description: "Easily convert your PDF files into easy to edit DOC and DOCX documents",
      href: "/pdf-to-word",
      color: "bg-blue-500",
    },
    {
      icon: Presentation,
      title: "PDF to PowerPoint",
      description: "Turn your PDF files into easy to edit PPT and PPTX slideshows",
      href: "/pdf-to-powerpoint",
      color: "bg-orange-500",
    },
    {
      icon: Sheet,
      title: "PDF to Excel",
      description: "Pull data straight from PDFs into Excel spreadsheets in a few short seconds",
      href: "/pdf-to-excel",
      color: "bg-green-600",
    },
    {
      icon: FileType,
      title: "Word to PDF",
      description: "Make DOC and DOCX files easy to read by converting them to PDF",
      href: "/word-to-pdf",
      color: "bg-blue-600",
    },
    {
      icon: Presentation,
      title: "PowerPoint to PDF",
      description: "Make PPT and PPTX slideshows easy to view by converting them to PDF",
      href: "/powerpoint-to-pdf",
      color: "bg-orange-600",
    },
    {
      icon: Sheet,
      title: "Excel to PDF",
      description: "Make EXCEL spreadsheets easy to read by converting them to PDF",
      href: "/excel-to-pdf",
      color: "bg-green-700",
    },
    {
      icon: FileEdit,
      title: "Edit PDF",
      description:
        "Add text, images, shapes or freehand annotations to a PDF document. Edit the size, font, and color of the added content",
      href: "/edit",
      color: "bg-purple-500",
      badge: "New!",
    },
    {
      icon: ImageIcon,
      title: "PDF to JPG",
      description: "Convert each PDF page into a JPG or extract all images contained in a PDF",
      href: "/pdf-to-jpg",
      color: "bg-yellow-500",
    },
    {
      icon: ImageIcon,
      title: "JPG to PDF",
      description: "Convert JPG images to PDF in seconds. Easily adjust orientation and margins",
      href: "/jpg-to-pdf",
      color: "bg-yellow-600",
    },
    {
      icon: PenTool,
      title: "Sign PDF",
      description: "Sign yourself or request electronic signatures from others",
      href: "/sign",
      color: "bg-blue-600",
    },
    {
      icon: Droplet,
      title: "Watermark",
      description: "Stamp an image or text over your PDF in seconds. Choose the typography, transparency and position",
      href: "/watermark",
      color: "bg-purple-600",
    },
    {
      icon: RotateCw,
      title: "Rotate PDF",
      description: "Rotate your PDFs the way you need them. You can even rotate multiple PDFs at once",
      href: "/rotate",
      color: "bg-pink-500",
    },
    {
      icon: Globe,
      title: "HTML to PDF",
      description:
        "Convert webpages in HTML to PDF. Copy and paste the URL of the page you want and convert it to PDF with a click",
      href: "/html-to-pdf",
      color: "bg-yellow-600",
    },
    {
      icon: Unlock,
      title: "Unlock PDF",
      description: "Remove PDF password security, giving you the freedom to use your PDFs as you want",
      href: "/unlock",
      color: "bg-blue-700",
    },
    {
      icon: Lock,
      title: "Protect PDF",
      description: "Protect PDF files with a password. Encrypt PDF documents to prevent unauthorized access",
      href: "/protect",
      color: "bg-slate-700",
    },
    {
      icon: FolderTree,
      title: "Organize PDF",
      description:
        "Sort pages of your PDF file however you like. Delete PDF pages or add PDF pages to your document at any convenience",
      href: "/organize",
      color: "bg-red-600",
    },
    {
      icon: Archive,
      title: "PDF to PDF/A",
      description:
        "Transform your PDF to PDF/A, the ISO-standardized version of PDF for long-term archiving. Your PDF will preserve formatting when accessed in the future",
      href: "/pdf-to-pdfa",
      color: "bg-blue-500",
    },
    {
      icon: Wrench,
      title: "Repair PDF",
      description: "Repair a damaged PDF and recover data from corrupt PDF. Fix PDF files with our Repair tool",
      href: "/repair",
      color: "bg-green-600",
    },
    {
      icon: Hash,
      title: "Page numbers",
      description: "Add page numbers into PDFs with ease. Choose your positions, dimensions, typography",
      href: "/page-numbers",
      color: "bg-purple-600",
    },
    {
      icon: ScanLine,
      title: "Scan to PDF",
      description: "Capture document scans from your mobile device and send them instantly to your browser",
      href: "/scan",
      color: "bg-orange-600",
    },
    {
      icon: FileSearch,
      title: "OCR PDF",
      description: "Easily convert scanned PDF into searchable and selectable documents",
      href: "/ocr",
      color: "bg-green-700",
    },
    {
      icon: Copy,
      title: "Compare PDF",
      description: "Show a side-by-side document comparison and easily spot changes between different file versions",
      href: "/compare",
      color: "bg-blue-600",
      badge: "New!",
    },
    {
      icon: Eye,
      title: "Redact PDF",
      description: "Redact text and graphics and permanently remove sensitive information from a PDF",
      href: "/redact",
      color: "bg-slate-600",
      badge: "New!",
    },
    {
      icon: Crop,
      title: "Crop PDF",
      description:
        "Crop your PDF documents or select specific areas, then apply the changes to one page or the whole document",
      href: "/crop",
      color: "bg-green-600",
      badge: "New!",
    },
    {
      icon: RefreshCw,
      title: "Convert Files",
      description: "Convert images and documents to PDF or PDF to other formats",
      href: "/convert",
      color: "bg-indigo-500",
    },
    {
      icon: FileText,
      title: "Generate PDF",
      description: "Create PDFs from text, templates, or HTML content",
      href: "/generate",
      color: "bg-cyan-500",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6">
                Every tool you need to work with PDFs in one place
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-balance mb-8">
                Create, merge, split, convert, and compress PDF files online. Fast, secure, and completely free. No
                registration required for basic features.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="#tools">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/dashboard">View Dashboard</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section id="tools" className="py-16 bg-muted/50">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">All PDF Tools in One Place</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Choose from our comprehensive suite of PDF manipulation tools
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool) => (
                <Link key={tool.title} href={tool.href}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer hover:border-primary/50">
                    <CardHeader className="relative">
                      {tool.badge && (
                        <span className="absolute top-4 right-4 text-xs font-semibold text-red-600 border border-red-600 rounded-full px-2 py-0.5">
                          {tool.badge}
                        </span>
                      )}
                      <div className={`w-14 h-14 rounded-lg ${tool.color} flex items-center justify-center mb-4`}>
                        <tool.icon className="h-7 w-7 text-white" />
                      </div>
                      <CardTitle className="text-xl">{tool.title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed">{tool.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Processing</h3>
                <p className="text-muted-foreground">
                  Lightning-fast PDF processing powered by modern web technologies
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
                <p className="text-muted-foreground">
                  Files are automatically deleted after 24 hours. Your privacy is our priority
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No Installation</h3>
                <p className="text-muted-foreground">Work directly in your browser. No software downloads required</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
