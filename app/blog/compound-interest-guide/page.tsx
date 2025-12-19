import { Calculator, ArrowLeft, TrendingUp, DollarSign, PiggyBank } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CompoundInterestGuidePage() {
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
            <Link href="/blog" className="text-sm font-medium hover:text-primary">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Article Content */}
      <article className="py-12">
        <div className="container mx-auto max-w-4xl px-4">
          {/* Back Button */}
          <Link href="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          {/* Article Header */}
          <header className="mb-12 border-b pb-8">
            <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
              <PiggyBank className="h-4 w-4" />
              <span>6 min read</span>
              <span>•</span>
              <time>December 2024</time>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">
              The Power of Compound Interest in Savings
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Discover why Einstein allegedly called compound interest the eighth wonder of the world and learn how to
              harness its power to grow your wealth exponentially over time.
            </p>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <h2 className="mb-4 mt-8 text-2xl font-bold">What is Compound Interest?</h2>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Compound interest is interest calculated on both the initial principal and the accumulated interest from
              previous periods. Unlike simple interest which only earns on the principal, compound interest allows your
              money to grow exponentially as you earn "interest on interest."
            </p>

            <Card className="my-8">
              <CardHeader>
                <CardTitle>Simple vs Compound Interest Example</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Simple Interest (5% annually on $10,000):</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>Year 1: $10,000 + $500 = $10,500</li>
                      <li>Year 2: $10,500 + $500 = $11,000</li>
                      <li>Year 3: $11,000 + $500 = $11,500</li>
                      <li className="font-semibold text-foreground">After 10 years: $15,000</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Compound Interest (5% annually on $10,000):</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>Year 1: $10,000 × 1.05 = $10,500</li>
                      <li>Year 2: $10,500 × 1.05 = $11,025</li>
                      <li>Year 3: $11,025 × 1.05 = $11,576</li>
                      <li className="font-semibold text-foreground">After 10 years: $16,289</li>
                    </ul>
                  </div>
                  <p className="text-sm font-semibold text-primary">
                    Compound interest earns $1,289 more over 10 years!
                  </p>
                </div>
              </CardContent>
            </Card>

            <h2 className="mb-4 mt-8 text-2xl font-bold">The Rule of 72</h2>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Want to quickly estimate how long it takes to double your money? Use the Rule of 72: divide 72 by your
              annual interest rate. For example, at 6% interest, your money doubles in approximately 72 ÷ 6 = 12 years.
            </p>

            <Card className="my-8 bg-primary/5">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">Time to Double Your Money (Rule of 72)</h3>
                <div className="grid gap-2 text-sm">
                  <div className="flex justify-between">
                    <span>3% interest rate:</span>
                    <span className="font-semibold">24 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>6% interest rate:</span>
                    <span className="font-semibold">12 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>9% interest rate:</span>
                    <span className="font-semibold">8 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>12% interest rate:</span>
                    <span className="font-semibold">6 years</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="mb-4 mt-8 text-2xl font-bold">Compound Frequency Matters</h2>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              The frequency of compounding affects your returns. Interest can compound annually, semi-annually,
              quarterly, monthly, or even daily. The more frequent the compounding, the more you earn.
            </p>

            <Card className="my-8">
              <CardHeader>
                <CardTitle>$10,000 at 5% for 10 Years</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Annually:</span>
                    <span className="font-semibold">$16,289</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quarterly:</span>
                    <span className="font-semibold">$16,436</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly:</span>
                    <span className="font-semibold">$16,470</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Daily:</span>
                    <span className="font-semibold">$16,487</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="mb-4 mt-8 text-2xl font-bold">Time is Your Greatest Asset</h2>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              The most powerful factor in compound interest is time. Starting early makes a dramatic difference because
              your money has more time to compound and grow exponentially.
            </p>

            <Card className="my-8">
              <CardHeader>
                <CardTitle>The Power of Starting Early</CardTitle>
                <CardDescription>Monthly $500 investment at 7% annual return</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Start at Age 25 (40 years until 65):</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>Total contributions: $240,000</li>
                      <li className="font-semibold text-foreground">Final value: $1,331,000</li>
                      <li className="text-primary">Earnings from compound interest: $1,091,000</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Start at Age 35 (30 years until 65):</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>Total contributions: $180,000</li>
                      <li className="font-semibold text-foreground">Final value: $612,000</li>
                      <li className="text-primary">Earnings from compound interest: $432,000</li>
                    </ul>
                  </div>
                  <p className="text-sm font-semibold text-destructive">
                    Starting 10 years earlier more than doubles your final amount!
                  </p>
                </div>
              </CardContent>
            </Card>

            <h2 className="mb-4 mt-8 text-2xl font-bold">Maximizing Compound Interest</h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Here are practical strategies to harness the power of compound interest:
            </p>

            <Card className="my-8">
              <CardContent className="pt-6">
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-sm">
                    <span className="font-semibold">Start as early as possible:</span>
                    <span className="text-muted-foreground ml-2">
                      Time is the most crucial factor in compound growth
                    </span>
                  </li>
                  <li className="text-sm">
                    <span className="font-semibold">Invest regularly:</span>
                    <span className="text-muted-foreground ml-2">
                      Consistent contributions accelerate compound growth
                    </span>
                  </li>
                  <li className="text-sm">
                    <span className="font-semibold">Reinvest all returns:</span>
                    <span className="text-muted-foreground ml-2">Let interest compound instead of withdrawing it</span>
                  </li>
                  <li className="text-sm">
                    <span className="font-semibold">Find higher interest rates:</span>
                    <span className="text-muted-foreground ml-2">
                      Even 1-2% difference compounds to significant amounts
                    </span>
                  </li>
                  <li className="text-sm">
                    <span className="font-semibold">Minimize fees:</span>
                    <span className="text-muted-foreground ml-2">High fees reduce your effective return rate</span>
                  </li>
                  <li className="text-sm">
                    <span className="font-semibold">Be patient and consistent:</span>
                    <span className="text-muted-foreground ml-2">Compound interest works best over long periods</span>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <h2 className="mb-4 mt-8 text-2xl font-bold">Real-World Applications</h2>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Compound interest applies to many financial products and situations:
            </p>

            <div className="grid gap-4 my-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Savings Accounts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    High-yield savings accounts use compound interest to grow your emergency fund. Look for accounts
                    with daily or monthly compounding.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    Retirement Accounts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    401(k)s and IRAs benefit enormously from compound interest over decades. Start contributing early
                    and consistently for maximum growth.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <PiggyBank className="h-5 w-5 text-primary" />
                    Investment Portfolios
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Reinvesting dividends and capital gains allows your investments to compound, dramatically increasing
                    long-term returns.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Calculator className="h-5 w-5 text-destructive" />
                    Debt (Negative Side)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Credit card debt compounds against you. Minimum payments barely cover interest, causing debt to
                    snowball quickly.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="mb-4 mt-8 text-2xl font-bold">Key Takeaways</h2>
            <Card className="my-8 bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      Compound interest earns returns on both principal and accumulated interest, creating exponential
                      growth
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Time is the most powerful factor - starting early makes a dramatic difference</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>More frequent compounding (daily vs annually) increases your total returns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Regular contributions amplify the compounding effect significantly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Even small differences in interest rates compound to substantial amounts over time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Compound interest works both ways - it grows wealth but also multiplies debt</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="mt-12 rounded-lg bg-muted/50 p-6">
              <h3 className="mb-3 text-lg font-semibold">Ready to Put Compound Interest to Work?</h3>
              <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                Use our free calculators to see how compound interest can grow your savings over time. Compare different
                scenarios and create a personalized savings plan.
              </p>
              <Link href="/">
                <Button>Try Our Savings Calculator</Button>
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t bg-muted/50 py-8 mt-16">
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
            <Link href="/disclaimer" className="text-muted-foreground hover:text-primary">
              Disclaimer
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
