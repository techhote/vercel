import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FinanceFlow Pro - Free Financial Calculator & Daily Rate Comparison Tools",
  description:
    "Compare live interest rates updated daily, calculate mortgage payments, plan investments, and eliminate debt with professional financial calculators. Free tools for mortgages, loans, savings, investments, and debt payoff strategies. Make informed money decisions with accurate, comprehensive calculators trusted by thousands.",
  keywords:
    "financial calculator, daily interest rates, mortgage calculator, investment calculator, debt payoff calculator, loan calculator, savings calculator, rate comparison, compound interest, loan amortization, financial planning tools, mortgage rates today, credit card rates, auto loan rates, savings account rates, retirement planning, debt elimination, avalanche method, snowball method",
  generator: "v0.app",
  metadataBase: new URL("https://flowfinancepro.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FinanceFlow Pro - Free Financial Calculator & Daily Rate Comparison Tools",
    description:
      "Compare live interest rates updated daily, calculate mortgage payments, plan investments, and eliminate debt with professional financial calculators.",
    url: "https://flowfinancepro.vercel.app",
    siteName: "FinanceFlow Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FinanceFlow Pro - Free Financial Calculator & Daily Rate Comparison Tools",
    description:
      "Compare live interest rates updated daily, calculate mortgage payments, plan investments, and eliminate debt with professional financial calculators.",
  },
  other: {
    "google-site-verification": "sU1qkRzCBZp_1XnebjyViYxn3DnhLakxKNYg9yAOOa8",
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q3W4F1BY6G" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Q3W4F1BY6G');
            `,
          }}
        />
        <meta name="google-site-verification" content="sU1qkRzCBZp_1XnebjyViYxn3DnhLakxKNYg9yAOOa8" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2437442194177710"
     crossorigin="anonymous"></script>
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
