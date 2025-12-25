import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://imakepdf.site"
  const currentDate = new Date().toISOString()

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ]

  // PDF Tools (29 tools)
  const tools = [
    "merge",
    "split",
    "compress",
    "pdf-to-word",
    "pdf-to-powerpoint",
    "pdf-to-excel",
    "word-to-pdf",
    "powerpoint-to-pdf",
    "excel-to-pdf",
    "edit",
    "pdf-to-jpg",
    "jpg-to-pdf",
    "sign",
    "watermark",
    "rotate",
    "html-to-pdf",
    "unlock",
    "protect",
    "organize",
    "pdf-to-pdfa",
    "repair",
    "page-numbers",
    "scan",
    "ocr",
    "compare",
    "redact",
    "crop",
    "convert",
    "generate",
  ]

  const toolPages = tools.map((tool) => ({
    url: `${baseUrl}/${tool}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: tool === "pdf-to-word" || tool === "word-to-pdf" ? 0.95 : 0.9,
  }))

  // Blog posts
  const blogPosts = [
    "pdf-to-word-converter-guide-2025",
    "compress-pdf-without-losing-quality",
    "merge-multiple-pdfs-efficiently",
    "protect-pdf-with-password",
    "pdf-to-excel-conversion-tips",
    "edit-pdf-online-free",
    "pdf-seo-optimization-guide",
    "split-pdf-pages-guide",
    "jpg-to-pdf-conversion-best-practices",
    "watermark-pdf-documents",
    "ocr-pdf-scanning-guide",
    "rotate-pdf-pages-efficiently",
    "word-to-pdf-conversion-guide",
    "pdf-accessibility-compliance",
    "pdf-tools-productivity-hacks",
  ]

  const blogPages = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...mainPages, ...toolPages, ...blogPages]
}
