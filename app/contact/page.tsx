import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageSquare, MapPin, Clock } from "lucide-react"

export const metadata = {
  title: "Contact Us - Get PDF Tool Support | imakepdf.site",
  description:
    "Contact imakepdf.site for PDF tool support, business inquiries, technical help, and customer service. We respond within 24 hours.",
  keywords: "contact PDF tools, PDF support, customer service, technical help, business inquiries",
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground">Have questions? We would love to hear from you.</p>
            <p className="text-muted-foreground mt-2">
              Our team is here to help with any questions about our PDF tools and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Email Support</CardTitle>
                <CardDescription>Get help with your account or technical issues</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="mailto:support@imakepdf.site" className="text-primary hover:underline font-medium">
                  support@imakepdf.site
                </a>
                <p className="text-sm text-muted-foreground mt-2">We typically respond within 24 hours</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Business Inquiries</CardTitle>
                <CardDescription>Partnership, enterprise, and media inquiries</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="mailto:business@imakepdf.site" className="text-primary hover:underline font-medium">
                  business@imakepdf.site
                </a>
                <p className="text-sm text-muted-foreground mt-2">For enterprise and partnership opportunities</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Our Location</CardTitle>
                <CardDescription>Where we operate from</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-medium">imakepdf.site</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Operating globally through cloud infrastructure
                  <br />
                  Serving customers worldwide 24/7
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Support Hours</CardTitle>
                <CardDescription>When you can reach us</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-medium">Email Support</p>
                <p className="text-sm text-muted-foreground">Monday - Friday: 9 AM - 6 PM EST</p>
                <p className="text-sm text-muted-foreground">Saturday - Sunday: 10 AM - 4 PM EST</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">How long do you store my files?</h3>
                <p className="text-muted-foreground">
                  All uploaded files are automatically deleted after 24 hours for your privacy and security.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Is my data secure?</h3>
                <p className="text-muted-foreground">
                  Yes, we use SSL/TLS encryption for all file transfers and follow industry-standard security practices.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Do you offer refunds?</h3>
                <p className="text-muted-foreground">
                  Please refer to our Terms of Service for information about refunds and cancellations.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Can I use your tools for commercial purposes?</h3>
                <p className="text-muted-foreground">
                  Yes, our tools are available for both personal and commercial use. Contact us for enterprise plans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
