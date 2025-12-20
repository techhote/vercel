import { Calculator, Target, Shield, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
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
            <Link href="/contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">About FinanceFlow Pro</h1>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              We're dedicated to providing free, accurate, and easy-to-use financial calculators that empower people to
              make informed decisions about their money.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-bold">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                FinanceFlow Pro was created to democratize financial planning tools. We believe everyone deserves access
                to professional-grade calculators to understand loans, compare rates, and plan their financial future -
                without paying for expensive software or consulting services.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-chart-1/10 text-chart-1">
                    <Target className="h-6 w-6" />
                  </div>
                  <CardTitle>Our Purpose</CardTitle>
                  <CardDescription className="leading-relaxed">
                    We built FinanceFlow Pro to help individuals and families understand the true cost of loans, the
                    power of savings, and how to compare financial products effectively. Financial literacy starts with
                    understanding the numbers.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-chart-2/10 text-chart-2">
                    <Shield className="h-6 w-6" />
                  </div>
                  <CardTitle>Your Privacy</CardTitle>
                  <CardDescription className="leading-relaxed">
                    All calculations are performed in your browser - we never store or transmit your financial
                    information. Your data stays on your device, ensuring complete privacy and security while you plan
                    your financial future.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-chart-3/10 text-chart-3">
                    <Users className="h-6 w-6" />
                  </div>
                  <CardTitle>Who We Serve</CardTitle>
                  <CardDescription className="leading-relaxed">
                    From first-time homebuyers to experienced investors, our tools serve anyone looking to make
                    data-driven financial decisions. Whether you're comparing mortgage rates or planning retirement
                    savings, we provide the insights you need.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-chart-4/10 text-chart-4">
                    <Calculator className="h-6 w-6" />
                  </div>
                  <CardTitle>Accurate Tools</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Our calculators use industry-standard formulas for compound interest, amortization, and rate
                    comparisons. We regularly update our tools to ensure accuracy and add new features based on user
                    feedback.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-t bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold">Why Choose FinanceFlow Pro?</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-2 text-xl font-semibold">100% Free Forever</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    No hidden fees, no premium tiers, no credit card required. We believe financial planning tools
                    should be accessible to everyone, which is why all our calculators are completely free to use with
                    no limitations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-2 text-xl font-semibold">Easy to Use</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    No financial degree needed. Our intuitive interface and clear explanations make complex calculations
                    simple. Enter your numbers and instantly see results with detailed breakdowns that anyone can
                    understand.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-2 text-xl font-semibold">Real-Time Calculations</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    See results instantly as you adjust variables. Compare different scenarios side by side to find the
                    best option for your situation. No waiting, no page refreshes - just immediate, actionable insights.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-2 text-xl font-semibold">Mobile-Friendly Design</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Plan your finances anywhere, anytime. Our responsive design works perfectly on phones, tablets, and
                    desktops, so you can crunch numbers whether you're at home, in a bank, or shopping for your dream
                    home.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="py-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Start Planning Your Financial Future</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Join thousands of users who trust FinanceFlow Pro for their financial calculations.
              </p>
              <Button size="lg" asChild>
                <Link href="/">Try Our Calculators Free</Link>
              </Button>
            </CardContent>
          </Card>
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
            <Link href="/contact" className="text-muted-foreground hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
