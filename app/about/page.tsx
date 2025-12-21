import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Users, Shield, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About imakepdf.site</h1>
            <p className="text-xl text-muted-foreground">
              Professional PDF tools built for speed, security, and simplicity
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-muted-foreground">
              imakepdf.site is a comprehensive online platform that provides professional-grade PDF manipulation tools.
              We believe working with PDFs should be fast, secure, and accessible to everyone without requiring
              expensive software installations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  Our optimized processing engine handles PDF operations in seconds, not minutes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
                <p className="text-muted-foreground">
                  Your files are encrypted in transit and automatically deleted after 24 hours.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">All-in-One Platform</h3>
                <p className="text-muted-foreground">
                  Merge, split, convert, compress, and generate PDFs - everything you need in one place.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">User-Friendly</h3>
                <p className="text-muted-foreground">
                  Intuitive interface designed for both beginners and professionals.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted/50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              To provide everyone with powerful, professional PDF tools that are easy to use, completely secure, and
              accessible from anywhere. We are committed to making document processing simple and efficient for
              individuals and businesses worldwide.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
