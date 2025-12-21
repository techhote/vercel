import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://imakepdf.site"),
  title: {
    default: "imakepdf.site - Free Online PDF Tools | Convert, Merge, Split, Compress PDFs",
    template: "%s | imakepdf.site",
  },
  description:
    "Free online PDF tools to convert, merge, split, compress, edit, and manipulate PDF files. Fast, secure, and easy to use. No registration required. 29 PDF tools available.",
  generator: "v0.app",
  keywords: [
    "PDF tools",
    "merge PDF",
    "split PDF",
    "convert PDF to Word",
    "PDF to JPG",
    "compress PDF",
    "online PDF editor",
    "PDF converter",
    "free PDF tools",
    "PDF to Excel",
    "Word to PDF",
    "edit PDF online",
    "combine PDF",
    "PDF security",
    "watermark PDF",
    "rotate PDF",
    "OCR PDF",
    "sign PDF",
  ],
  authors: [{ name: "imakepdf.site" }],
  creator: "imakepdf.site",
  publisher: "imakepdf.site",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://imakepdf.site",
    title: "imakepdf.site - Free Online PDF Tools",
    description:
      "Free online PDF tools to convert, merge, split, compress, and edit PDF files. Fast, secure, and easy to use.",
    siteName: "imakepdf.site",
  },
  twitter: {
    card: "summary_large_image",
    title: "imakepdf.site - Free Online PDF Tools",
    description:
      "Free online PDF tools to convert, merge, split, compress, and edit PDF files. Fast, secure, and easy to use.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://imakepdf.site",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "imakepdf.site",
              url: "https://imakepdf.site",
              description: "Free online PDF tools to convert, merge, split, compress, edit, and manipulate PDF files.",
              applicationCategory: "UtilityApplication",
              operatingSystem: "Web Browser",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "1250",
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
