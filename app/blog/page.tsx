import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, ArrowRight } from "lucide-react"

export const metadata = {
  title: "PDF Tips, Tricks & Guides | imakepdf Blog",
  description:
    "Learn how to work with PDFs efficiently. Expert guides on PDF conversion, compression, editing, and more.",
  keywords: "PDF tips, PDF guides, PDF converter, PDF tools, document management",
}

const blogPosts = [
  {
    slug: "pdf-to-word-converter-guide-2025",
    title: "Complete Guide to PDF to Word Conversion in 2025",
    excerpt:
      "Learn the best methods to convert PDF to Word documents while preserving formatting, images, and layout. Free tools and expert tips included.",
    date: "2025-01-15",
    category: "Conversion",
    readTime: "8 min read",
  },
  {
    slug: "compress-pdf-without-losing-quality",
    title: "How to Compress PDF Files Without Losing Quality",
    excerpt:
      "Discover proven techniques to reduce PDF file size while maintaining document quality. Perfect for email attachments and web uploads.",
    date: "2025-01-12",
    category: "Optimization",
    readTime: "6 min read",
  },
  {
    slug: "merge-multiple-pdfs-efficiently",
    title: "Merge Multiple PDFs Efficiently: A Step-by-Step Guide",
    excerpt:
      "Master the art of combining PDF files. Learn how to merge, reorder, and organize multiple PDFs into one professional document.",
    date: "2025-01-10",
    category: "Organization",
    readTime: "7 min read",
  },
  {
    slug: "protect-pdf-with-password",
    title: "Secure Your PDFs: Complete Password Protection Guide",
    excerpt:
      "Learn how to add password protection to PDFs, encrypt sensitive documents, and control access permissions effectively.",
    date: "2025-01-08",
    category: "Security",
    readTime: "9 min read",
  },
  {
    slug: "pdf-to-excel-conversion-tips",
    title: "Convert PDF to Excel: Extract Data Like a Pro",
    excerpt:
      "Transform PDF tables into editable Excel spreadsheets. Tips for maintaining data integrity and formatting during conversion.",
    date: "2025-01-05",
    category: "Conversion",
    readTime: "7 min read",
  },
  {
    slug: "edit-pdf-online-free",
    title: "How to Edit PDF Files Online for Free in 2025",
    excerpt:
      "Complete guide to editing PDFs without expensive software. Add text, images, signatures, and annotations with ease.",
    date: "2025-01-03",
    category: "Editing",
    readTime: "10 min read",
  },
  {
    slug: "pdf-seo-optimization-guide",
    title: "PDF SEO: How to Optimize PDFs for Search Engines",
    excerpt:
      "Make your PDF documents discoverable in Google. Learn about metadata, file naming, accessibility, and ranking factors.",
    date: "2024-12-28",
    category: "SEO",
    readTime: "11 min read",
  },
  {
    slug: "split-pdf-pages-guide",
    title: "Split PDF: Extract and Organize Pages Effectively",
    excerpt:
      "Master PDF splitting techniques. Extract specific pages, create separate documents, and manage large PDFs efficiently.",
    date: "2024-12-25",
    category: "Organization",
    readTime: "6 min read",
  },
  {
    slug: "jpg-to-pdf-conversion-best-practices",
    title: "JPG to PDF Conversion: Best Practices for 2025",
    excerpt:
      "Convert images to PDF format perfectly. Learn about resolution, file size optimization, and maintaining image quality.",
    date: "2024-12-22",
    category: "Conversion",
    readTime: "8 min read",
  },
  {
    slug: "watermark-pdf-documents",
    title: "Add Watermarks to PDFs: Professional Guide",
    excerpt:
      "Protect your documents with custom watermarks. Learn about transparency, positioning, and watermark best practices.",
    date: "2024-12-20",
    category: "Security",
    readTime: "7 min read",
  },
  {
    slug: "ocr-pdf-scanning-guide",
    title: "OCR for PDFs: Convert Scanned Documents to Searchable Text",
    excerpt:
      "Turn scanned PDFs into searchable, editable documents. Complete guide to OCR technology and its applications.",
    date: "2024-12-18",
    category: "Technology",
    readTime: "9 min read",
  },
  {
    slug: "rotate-pdf-pages-efficiently",
    title: "How to Rotate PDF Pages: Quick and Easy Methods",
    excerpt:
      "Fix document orientation issues instantly. Learn to rotate individual pages or entire PDF documents in seconds.",
    date: "2024-12-15",
    category: "Editing",
    readTime: "5 min read",
  },
  {
    slug: "word-to-pdf-conversion-guide",
    title: "Word to PDF: Preserve Formatting and Quality",
    excerpt:
      "Convert Word documents to PDF format flawlessly. Maintain fonts, images, hyperlinks, and document structure.",
    date: "2024-12-12",
    category: "Conversion",
    readTime: "7 min read",
  },
  {
    slug: "pdf-accessibility-compliance",
    title: "PDF Accessibility: Make Documents Compliant with WCAG",
    excerpt:
      "Create accessible PDFs that everyone can read. Learn about tags, alt text, reading order, and accessibility standards.",
    date: "2024-12-10",
    category: "Accessibility",
    readTime: "12 min read",
  },
  {
    slug: "pdf-tools-productivity-hacks",
    title: "10 PDF Productivity Hacks Every Professional Should Know",
    excerpt:
      "Boost your workflow with these essential PDF tips. Time-saving techniques for daily document management tasks.",
    date: "2024-12-08",
    category: "Productivity",
    readTime: "8 min read",
  },
]

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">PDF Tips & Guides</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert advice, tutorials, and best practices for working with PDF documents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                        {post.category}
                      </span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl mb-2 line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </time>
                      </div>
                      <div className="flex items-center gap-1 text-primary font-medium">
                        Read more
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
