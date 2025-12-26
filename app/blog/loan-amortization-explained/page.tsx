import { Calculator, ArrowLeft } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LoanAmortizationPage() {
  return (
    <div className="min-h-screen bg-background">
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

      <article className="py-12">
        <div className="container mx-auto max-w-4xl px-4">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <header className="mb-12 border-b pb-8">
            <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Calculator className="h-4 w-4" />
              <span>7 min read</span>
              <span>•</span>
              <time>December 2024</time>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">
              Loan Amortization Explained Simply
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Understand how your loan payments are split between principal and interest over time, and learn how extra
              payments can save you thousands of dollars.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <h2 className="mb-4 mt-8 text-2xl font-bold">What is Loan Amortization?</h2>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Loan amortization is the process of paying off a debt over time through regular payments. Each payment
              covers both interest charges and a portion of the principal balance. The way these payments are structured
              determines how quickly you pay off the loan and how much total interest you'll pay.
            </p>

            <Card className="my-8 bg-primary/5">
              <CardHeader>
                <CardTitle>Key Amortization Concepts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li>
                    <span className="font-semibold">Principal:</span> The original loan amount you borrowed
                  </li>
                  <li>
                    <span className="font-semibold">Interest:</span> The cost of borrowing, charged as a percentage
                  </li>
                  <li>
                    <span className="font-semibold">Term:</span> The total time you have to repay the loan
                  </li>
                  <li>
                    <span className="font-semibold">Amortization Schedule:</span> A table showing how each payment is
                    split between principal and interest
                  </li>
                </ul>
              </CardContent>
            </Card>

            <h2 className="mb-4 mt-8 text-2xl font-bold">How Loan Payments Break Down</h2>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Early in your loan term, most of your payment goes toward interest. As time passes, more goes toward
              reducing the principal. This happens because interest is calculated on the remaining balance, which
              decreases with each payment.
            </p>

            <Card className="my-8">
              <CardHeader>
                <CardTitle>$300,000 Mortgage Example (4.5% interest, 30 years)</CardTitle>
                <CardDescription>Monthly payment: $1,520</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">First Payment (Month 1):</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>Total payment: $1,520</li>
                      <li>Interest: $1,125 (74%)</li>
                      <li>Principal: $395 (26%)</li>
                      <li>Remaining balance: $299,605</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Payment at Year 15 (Month 180):</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>Total payment: $1,520</li>
                      <li>Interest: $759 (50%)</li>
                      <li>Principal: $761 (50%)</li>
                      <li>Remaining balance: $202,228</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Final Payment (Month 360):</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>Total payment: $1,520</li>
                      <li>Interest: $6 (0.4%)</li>
                      <li>Principal: $1,514 (99.6%)</li>
                      <li>Remaining balance: $0</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="mb-4 mt-8 text-2xl font-bold">The Power of Extra Payments</h2>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Making extra payments toward your principal can dramatically reduce the total interest paid and shorten
              your loan term. Even small additional payments make a significant difference over time.
            </p>

            <Card className="my-8">
              <CardHeader>
                <CardTitle>Impact of $200 Extra Monthly Payment</CardTitle>
                <CardDescription>On $300,000 mortgage at 4.5% for 30 years</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-2">Standard Payment ($1,520/month):</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>Loan term: 30 years (360 months)</li>
                      <li>Total paid: $547,200</li>
                      <li className="text-destructive font-semibold">Total interest: $247,200</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">With Extra $200/month ($1,720/month):</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>Loan term: 22.5 years (270 months)</li>
                      <li>Total paid: $464,400</li>
                      <li className="text-primary font-semibold">Total interest: $164,400</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-sm font-semibold text-primary">
                  Savings: $82,800 in interest + pay off 7.5 years earlier!
                </p>
              </CardContent>
            </Card>

            <h2 className="mb-4 mt-8 text-2xl font-bold">Different Types of Amortization</h2>

            <Card className="my-8">
              <CardHeader>
                <CardTitle>Full Amortization (Most Common)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Regular equal payments over the loan term result in zero balance at the end. Examples: most mortgages,
                  auto loans, personal loans.
                </p>
              </CardContent>
            </Card>

            <Card className="my-8">
              <CardHeader>
                <CardTitle>Partial Amortization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Regular payments don't fully pay off the loan by the end of the term, leaving a balloon payment due.
                  Common in some commercial real estate loans.
                </p>
              </CardContent>
            </Card>

            <Card className="my-8">
              <CardHeader>
                <CardTitle>Negative Amortization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Payments are less than the interest charged, causing the balance to grow. Rare and generally not
                  recommended. Can occur with certain adjustable-rate mortgages.
                </p>
              </CardContent>
            </Card>

            <h2 className="mb-4 mt-8 text-2xl font-bold">Reading an Amortization Schedule</h2>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              An amortization schedule shows exactly how each payment is allocated. Understanding this schedule helps
              you see the impact of extra payments and plan your payoff strategy.
            </p>

            <Card className="my-8">
              <CardHeader>
                <CardTitle>Sample Amortization Schedule</CardTitle>
                <CardDescription>First 6 months of $200,000 loan at 5% for 30 years</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="border-b">
                      <tr>
                        <th className="text-left p-2">Month</th>
                        <th className="text-right p-2">Payment</th>
                        <th className="text-right p-2">Principal</th>
                        <th className="text-right p-2">Interest</th>
                        <th className="text-right p-2">Balance</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b">
                        <td className="p-2">1</td>
                        <td className="text-right p-2">$1,074</td>
                        <td className="text-right p-2">$241</td>
                        <td className="text-right p-2">$833</td>
                        <td className="text-right p-2">$199,759</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">2</td>
                        <td className="text-right p-2">$1,074</td>
                        <td className="text-right p-2">$242</td>
                        <td className="text-right p-2">$832</td>
                        <td className="text-right p-2">$199,517</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">3</td>
                        <td className="text-right p-2">$1,074</td>
                        <td className="text-right p-2">$243</td>
                        <td className="text-right p-2">$831</td>
                        <td className="text-right p-2">$199,274</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">4</td>
                        <td className="text-right p-2">$1,074</td>
                        <td className="text-right p-2">$244</td>
                        <td className="text-right p-2">$830</td>
                        <td className="text-right p-2">$199,030</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">5</td>
                        <td className="text-right p-2">$1,074</td>
                        <td className="text-right p-2">$245</td>
                        <td className="text-right p-2">$829</td>
                        <td className="text-right p-2">$198,785</td>
                      </tr>
                      <tr>
                        <td className="p-2">6</td>
                        <td className="text-right p-2">$1,074</td>
                        <td className="text-right p-2">$246</td>
                        <td className="text-right p-2">$828</td>
                        <td className="text-right p-2">$198,539</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <h2 className="mb-4 mt-8 text-2xl font-bold">Strategies to Pay Off Loans Faster</h2>
            <Card className="my-8">
              <CardContent className="pt-6">
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-sm">
                    <span className="font-semibold">Make biweekly payments:</span>
                    <span className="text-muted-foreground ml-2">
                      Pay half your monthly amount every two weeks (equals 13 monthly payments per year)
                    </span>
                  </li>
                  <li className="text-sm">
                    <span className="font-semibold">Round up payments:</span>
                    <span className="text-muted-foreground ml-2">Round your payment to the nearest $50 or $100</span>
                  </li>
                  <li className="text-sm">
                    <span className="font-semibold">Apply windfalls to principal:</span>
                    <span className="text-muted-foreground ml-2">
                      Use tax refunds, bonuses, or raises for extra principal payments
                    </span>
                  </li>
                  <li className="text-sm">
                    <span className="font-semibold">Refinance to shorter term:</span>
                    <span className="text-muted-foreground ml-2">
                      Switch from 30-year to 15-year mortgage when rates are favorable
                    </span>
                  </li>
                  <li className="text-sm">
                    <span className="font-semibold">Recast your mortgage:</span>
                    <span className="text-muted-foreground ml-2">
                      Make large principal payment and have lender recalculate your monthly payment
                    </span>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <h2 className="mb-4 mt-8 text-2xl font-bold">Key Takeaways</h2>
            <Card className="my-8 bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Early loan payments are mostly interest; later payments are mostly principal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Extra principal payments reduce total interest and shorten loan term dramatically</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Even small additional payments compound to significant savings over time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Review your amortization schedule to understand where your money goes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Making extra payments early in the loan term has the greatest impact</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="mt-12 rounded-lg bg-muted/50 p-6">
              <h3 className="mb-3 text-lg font-semibold">Calculate Your Loan Payoff Strategy</h3>
              <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                Use our loan calculator to see how extra payments affect your amortization schedule and total interest
                paid. Compare different scenarios to find the best strategy for your situation.
              </p>
              <Link href="/">
                <Button>Try Our Loan Calculator</Button>
              </Link>
            </div>
          </div>
        </div>
      </article>

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
