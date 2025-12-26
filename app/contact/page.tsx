import { Calculator, Mail, MessageSquare } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Calculator className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold leading-tight">FinanceFlow Pro</h1>
              <p className="text-xs text-muted-foreground">Smart Financial Tools</p>
            </div>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">Get in Touch</h1>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Have questions about our calculators or suggestions for new features? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-chart-1/10 text-chart-1">
                    <Mail className="h-6 w-6" />
                  </div>
                  <CardTitle>Email Us</CardTitle>
                  <CardDescription className="leading-relaxed">
                    For general inquiries, feedback, or support questions, send us an email and we'll respond within
                    24-48 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a href="mailto:support@financeflowpro.com" className="font-medium text-primary hover:underline">
                    support@financeflowpro.com
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-chart-2/10 text-chart-2">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <CardTitle>Feature Requests</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Have an idea for a new calculator or feature? We actively collect user feedback to improve our
                    tools.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a href="mailto:feedback@financeflowpro.com" className="font-medium text-primary hover:underline">
                    feedback@financeflowpro.com
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* FAQ Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold">Are your calculators really free?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Yes, absolutely! All our financial calculators are 100% free to use with no hidden fees, premium
                    tiers, or registration requirements. We believe everyone deserves access to quality financial
                    planning tools.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold">How accurate are your calculations?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our calculators use industry-standard financial formulas for compound interest, loan amortization,
                    and rate comparisons. While we strive for accuracy, we recommend consulting with a financial advisor
                    for personalized advice on major financial decisions.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold">Do you store my financial information?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    No, we never store or transmit your financial data. All calculations are performed locally in your
                    browser, ensuring complete privacy. We don't collect or save any of the numbers you enter into our
                    calculators.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold">Can I use FinanceFlow Pro on my phone?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Yes! Our website is fully responsive and works great on all devices - smartphones, tablets, and
                    desktop computers. You can access our calculators anytime, anywhere.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold">How often do you update your tools?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We regularly update our calculators based on user feedback and changes in financial best practices.
                    We also add new tools and features periodically to provide more value to our users.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold">Can I suggest a new calculator?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We love hearing from our users about what tools they'd like to see. Email your suggestions to
                    feedback@financeflowpro.com and we'll consider them for future development.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} FinanceFlow Pro. All rights reserved.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
