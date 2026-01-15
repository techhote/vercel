import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Blog posts data
const blogPosts: Record<string, any> = {
  "pdf-to-word-converter-guide-2025": {
    title: "Complete Guide to PDF to Word Conversion in 2025",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Conversion",
    content: `# Complete Guide to PDF to Word Conversion in 2025\n\nConverting PDF to Word documents is one of the most common document processing tasks.`,
  },
  "compress-pdf-without-losing-quality": {
    title: "How to Compress PDF Files Without Losing Quality",
    date: "2025-01-12",
    readTime: "6 min read",
    category: "Optimization",
    content: `# How to Compress PDF Files Without Losing Quality\n\nLarge PDF files can be frustrating to send via email.`,
  },
  "merge-multiple-pdfs-efficiently": {
    title: "Merge Multiple PDFs Efficiently: A Step-by-Step Guide",
    date: "2025-01-10",
    readTime: "7 min read",
    category: "Organization",
    content: `# Merge Multiple PDFs Efficiently\n\nCombining multiple PDF files into one is a common task.`,
  },
  "protect-pdf-with-password": {
    title: "Secure Your PDFs: Complete Password Protection Guide",
    date: "2025-01-08",
    readTime: "9 min read",
    category: "Security",
    content: `# Secure Your PDFs\n\nProtecting sensitive PDF documents with passwords is essential.`,
  },
  "pdf-to-excel-conversion-tips": {
    title: "Convert PDF to Excel: Extract Data Like a Pro",
    date: "2025-01-05",
    readTime: "7 min read",
    category: "Conversion",
    content: `# Convert PDF to Excel\n\nExtracting data from PDFs into Excel spreadsheets is valuable.`,
  },
  "edit-pdf-online-free": {
    title: "How to Edit PDF Files Online for Free in 2025",
    date: "2025-01-03",
    readTime: "10 min read",
    category: "Editing",
    content: `# How to Edit PDF Files Online\n\nEditing PDF files doesn't require expensive software anymore.`,
  },
  "pdf-seo-optimization-guide": {
    title: "PDF SEO: How to Optimize PDFs for Search Engines",
    date: "2024-12-28",
    readTime: "11 min read",
    category: "SEO",
    content: `# PDF SEO\n\nMost PDFs never rank in search engines because they're not properly optimized.`,
  },
  "split-pdf-pages-guide": {
    title: "Split PDF: Extract and Organize Pages Effectively",
    date: "2024-12-25",
    readTime: "6 min read",
    category: "Organization",
    content: `# Split PDF\n\nExtracting specific pages from PDF documents is a common need.`,
  },
  "jpg-to-pdf-conversion-best-practices": {
    title: "JPG to PDF Conversion: Best Practices for 2025",
    date: "2024-12-22",
    readTime: "8 min read",
    category: "Conversion",
    content: `# JPG to PDF Conversion\n\nConverting JPG images to PDF format is essential for document management.`,
  },
  "watermark-pdf-documents": {
    title: "Add Watermarks to PDFs: Professional Guide",
    date: "2024-12-20",
    readTime: "7 min read",
    category: "Security",
    content: `# Add Watermarks to PDFs\n\nAdding watermarks to PDF documents protects intellectual property.`,
  },
  "ocr-pdf-scanning-guide": {
    title: "OCR for PDFs: Convert Scanned Documents to Searchable Text",
    date: "2024-12-18",
    readTime: "9 min read",
    category: "Technology",
    content: `# OCR for PDFs\n\nOptical Character Recognition technology transforms scanned documents.`,
  },
  "rotate-pdf-pages-efficiently": {
    title: "How to Rotate PDF Pages: Quick and Easy Methods",
    date: "2024-12-15",
    readTime: "5 min read",
    category: "Editing",
    content: `# How to Rotate PDF Pages\n\nSometimes PDF pages need rotation for proper orientation.`,
  },
  "word-to-pdf-conversion-guide": {
    title: "Word to PDF: Preserve Formatting and Quality",
    date: "2024-12-12",
    readTime: "7 min read",
    category: "Conversion",
    content: `# Word to PDF\n\nConverting Word documents to PDF format is one of the most common operations.`,
  },
  "pdf-accessibility-compliance": {
    title: "PDF Accessibility: Make Documents Compliant with WCAG",
    date: "2024-12-10",
    readTime: "12 min read",
    category: "Accessibility",
    content: `# PDF Accessibility\n\nCreating accessible PDFs ensures everyone can read your documents.`,
  },
  "pdf-tools-productivity-hacks": {
    title: "10 PDF Productivity Hacks Every Professional Should Know",
    date: "2024-12-08",
    readTime: "8 min read",
    category: "Productivity",
    content: `# 10 PDF Productivity Hacks\n\nDiscover productivity hacks that transform how you work with PDFs.`,
  },
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | imakepdf Blog`,
    description: post.content.substring(0, 160),
    keywords: post.category,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    notFound()
  }

  const formatContent = (content: string) => {
    return content
      .split("\n\n")
      .map((paragraph) => {
        if (paragraph.startsWith("# ")) {
          return `<h1 class="text-4xl font-bold mb-6">${paragraph.replace(/^# /, "")}</h1>`
        }
        if (paragraph.startsWith("## ")) {
          return `<h2 class="text-2xl font-bold mt-8 mb-4">${paragraph.replace(/^## /, "")}</h2>`
        }
        if (paragraph.startsWith("### ")) {
          return `<h3 class="text-xl font-semibold mt-6 mb-3">${paragraph.replace(/^### /, "")}</h3>`
        }
        if (paragraph.startsWith("- ")) {
          const items = paragraph.split("\n").map((line) => `<li class="ml-4">${line.replace(/^- /, "")}</li>`)
          return `<ul class="list-disc pl-6 my-4 space-y-2">${items.join("")}</ul>`
        }
        return `<p class="text-lg leading-relaxed mb-4 text-muted-foreground">${paragraph}</p>`
      })
      .join("")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-16">
        <article className="container mx-auto max-w-4xl px-6">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/blog" className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          {/* Header Section */}
          <header className="mb-12 pb-8 border-b">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold">
                {post.category}
              </span>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <h1 className="text-5xl font-bold mb-4 text-balance">{post.title}</h1>
          </header>

          {/* Main Content */}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
          />

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-primary/5 rounded-lg border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Ready to try our PDF tools?</h3>
            <p className="text-muted-foreground mb-4">
              Process your PDFs online with our free, secure, and easy-to-use tools. No registration required.
            </p>
            <Button asChild size="lg">
              <Link href="/#tools">View All Tools</Link>
            </Button>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
