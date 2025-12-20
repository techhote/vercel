import Link from "next/link"
import { Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-lg font-semibold mb-3">imakepdf.site</h3>
              <p className="text-sm text-muted-foreground max-w-md mb-4">
                Professional PDF manipulation tools online. Create, merge, split, convert, and compress PDF files with
                ease. Fast, secure, and reliable.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:support@imakepdf.site" className="hover:text-foreground transition-colors">
                    support@imakepdf.site
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Operating globally 24/7</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-3">Popular Tools</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/merge" className="hover:text-foreground transition-colors">
                    Merge PDF
                  </Link>
                </li>
                <li>
                  <Link href="/split" className="hover:text-foreground transition-colors">
                    Split PDF
                  </Link>
                </li>
                <li>
                  <Link href="/compress" className="hover:text-foreground transition-colors">
                    Compress PDF
                  </Link>
                </li>
                <li>
                  <Link href="/pdf-to-word" className="hover:text-foreground transition-colors">
                    PDF to Word
                  </Link>
                </li>
                <li>
                  <Link href="/pdf-to-jpg" className="hover:text-foreground transition-colors">
                    PDF to JPG
                  </Link>
                </li>
                <li>
                  <Link href="/edit" className="hover:text-foreground transition-colors">
                    Edit PDF
                  </Link>
                </li>
                <li>
                  <Link href="/protect" className="hover:text-foreground transition-colors">
                    Protect PDF
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-3">Legal & Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/disclaimer" className="hover:text-foreground transition-colors">
                    Disclaimer
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="hover:text-foreground transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>&copy; 2025 imakepdf.site. All rights reserved.</p>
              <div className="flex gap-4">
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  Privacy
                </Link>
                <Link href="/terms" className="hover:text-foreground transition-colors">
                  Terms
                </Link>
                <Link href="/cookies" className="hover:text-foreground transition-colors">
                  Cookies
                </Link>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
