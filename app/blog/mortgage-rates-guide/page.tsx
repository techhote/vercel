import { ArrowLeft, Calculator, DollarSign, Home } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "How to Compare Mortgage Rates Effectively | FinanceFlow Pro",
  description:
    "Learn essential factors to consider when comparing mortgage rates beyond just the interest rate. Understand points, fees, loan terms, and calculate your true cost.",
}

export default function MortgageRatesGuide() {
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
        </div>
      </header>

      {/* Article */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Resources
          </Link>

          <div className="mx-auto max-w-3xl">
            <div className="mb-8">
              <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                <DollarSign className="h-4 w-4" />
                <span>10 min read</span>
                <span>•</span>
                <span>December 19, 2024</span>
              </div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">
                How to Compare Mortgage Rates Effectively
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Shopping for a mortgage is one of the biggest financial decisions you'll make. While the interest rate
                is important, it's just one piece of the puzzle. Learn how to compare mortgage offers comprehensively to
                find the best deal and potentially save tens of thousands of dollars.
              </p>
            </div>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="mb-4 text-2xl font-bold">Why the Lowest Rate Isn't Always the Best Deal</h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Many homebuyers make the mistake of focusing solely on the interest rate advertised by lenders.
                  However, the advertised rate often doesn't tell the whole story. Hidden fees, points, closing costs,
                  and loan terms can significantly affect the true cost of your mortgage.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  A lender might offer a 3.5% rate with $8,000 in fees, while another offers 3.75% with just $2,000 in
                  fees. Depending on how long you plan to stay in the home, the higher rate with lower fees could
                  actually save you money.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="mb-4 text-2xl font-bold">Essential Factors to Compare</h2>

                <h3 className="mb-3 text-xl font-semibold">1. Interest Rate vs. APR</h3>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  The interest rate is what you pay to borrow money, but the APR (Annual Percentage Rate) includes the
                  interest rate plus fees, points, and other costs rolled into a single percentage. APR gives you a more
                  accurate picture of the loan's true cost.
                </p>
                <div className="mb-4 rounded-lg bg-muted p-4">
                  <p className="mb-2 font-semibold">Example Comparison:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Lender A: 3.5% interest rate, 3.65% APR</li>
                    <li>• Lender B: 3.5% interest rate, 3.95% APR</li>
                  </ul>
                  <p className="mt-3 text-sm">
                    Despite having the same interest rate, Lender A has significantly lower total costs due to fewer
                    fees.
                  </p>
                </div>

                <h3 className="mb-3 text-xl font-semibold">2. Discount Points</h3>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Points are upfront fees you can pay to lower your interest rate. One point typically costs 1% of the
                  loan amount and usually lowers the rate by about 0.25%.
                </p>
                <ul className="mb-4 ml-6 list-disc space-y-2 text-muted-foreground">
                  <li>
                    Buying points makes sense if you plan to stay in the home long enough to recoup the upfront cost
                    through lower monthly payments
                  </li>
                  <li>
                    Calculate your break-even point: divide the cost of points by your monthly savings to see how many
                    months until you break even
                  </li>
                  <li>
                    Example: Paying $3,000 for points that save $50/month means you break even after 60 months (5 years)
                  </li>
                </ul>

                <h3 className="mb-3 text-xl font-semibold">3. Loan Term Length</h3>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  The most common mortgage terms are 15 and 30 years, but you can also find 10, 20, or 40-year options.
                  Shorter terms typically have lower interest rates but higher monthly payments.
                </p>
                <div className="mb-4 space-y-3">
                  <div className="rounded-lg bg-muted p-3">
                    <p className="font-medium">30-Year Mortgage on $300,000 at 4%</p>
                    <p className="text-sm text-muted-foreground">Monthly Payment: $1,432 | Total Interest: $215,608</p>
                  </div>
                  <div className="rounded-lg bg-muted p-3">
                    <p className="font-medium">15-Year Mortgage on $300,000 at 3.5%</p>
                    <p className="text-sm text-muted-foreground">Monthly Payment: $2,144 | Total Interest: $85,920</p>
                  </div>
                  <div className="rounded-lg bg-primary/10 p-3">
                    <p className="font-semibold text-primary">Savings with 15-Year Term</p>
                    <p className="text-sm">
                      Save $129,688 in interest, but pay $712 more per month. Choose based on your budget and goals.
                    </p>
                  </div>
                </div>

                <h3 className="mb-3 text-xl font-semibold">4. Closing Costs and Fees</h3>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Closing costs typically range from 2-5% of the loan amount. These include application fees, appraisal
                  fees, title insurance, origination fees, and more. Some lenders offer "no closing cost" loans, but
                  they usually charge a higher interest rate to compensate.
                </p>
                <ul className="mb-4 ml-6 list-disc space-y-2 text-muted-foreground">
                  <li>Get a Loan Estimate from each lender within 3 business days of applying</li>
                  <li>Compare line-by-line—some fees are negotiable</li>
                  <li>Watch for junk fees like "processing fees" or "administrative fees"</li>
                  <li>Ask lenders to waive or reduce certain fees to match competitors</li>
                </ul>

                <h3 className="mb-3 text-xl font-semibold">5. Fixed vs. Adjustable Rate</h3>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Fixed-rate mortgages maintain the same interest rate for the entire loan term, providing payment
                  stability. Adjustable-rate mortgages (ARMs) have rates that change periodically based on market
                  conditions.
                </p>
                <div className="rounded-lg bg-muted p-4">
                  <p className="mb-2 font-semibold">When to Consider an ARM:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• You plan to sell or refinance within 5-7 years</li>
                    <li>• You expect your income to increase significantly</li>
                    <li>• Current fixed rates are unusually high</li>
                    <li>• You're comfortable with payment uncertainty</li>
                  </ul>
                  <p className="mt-3 text-sm">
                    ARMs typically offer lower initial rates (often 0.5-1% less than fixed rates) but carry the risk of
                    payment increases later.
                  </p>
                </div>

                <h3 className="mb-3 mt-6 text-xl font-semibold">6. Prepayment Penalties</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Some mortgages charge fees if you pay off the loan early through refinancing or selling the home.
                  Prepayment penalties can range from a few months of interest to 2-3% of the outstanding balance.
                  Always avoid loans with prepayment penalties if possible.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="mb-4 text-2xl font-bold">Step-by-Step Comparison Process</h2>

                <ol className="space-y-4">
                  <li className="leading-relaxed">
                    <span className="font-semibold">Step 1: Get Pre-Approved with Multiple Lenders</span>
                    <p className="mt-1 text-muted-foreground">
                      Apply with at least 3-5 lenders including banks, credit unions, and online lenders. Multiple
                      credit inquiries within 14-45 days count as one for credit scoring purposes.
                    </p>
                  </li>
                  <li className="leading-relaxed">
                    <span className="font-semibold">Step 2: Request Loan Estimates</span>
                    <p className="mt-1 text-muted-foreground">
                      By law, lenders must provide a standardized Loan Estimate within 3 business days of your
                      application. This makes it easy to compare offers side by side.
                    </p>
                  </li>
                  <li className="leading-relaxed">
                    <span className="font-semibold">Step 3: Compare Key Numbers</span>
                    <p className="mt-1 text-muted-foreground">
                      Focus on the interest rate, APR, monthly payment, total closing costs, and cash needed at closing.
                      Create a spreadsheet to track all offers.
                    </p>
                  </li>
                  <li className="leading-relaxed">
                    <span className="font-semibold">Step 4: Calculate Long-Term Costs</span>
                    <p className="mt-1 text-muted-foreground">
                      Multiply the monthly payment by the number of months in the loan term, then add closing costs to
                      see the total amount you'll pay over the life of each loan.
                    </p>
                  </li>
                  <li className="leading-relaxed">
                    <span className="font-semibold">Step 5: Consider Your Timeline</span>
                    <p className="mt-1 text-muted-foreground">
                      If you plan to move in 5-7 years, paying points for a lower rate might not make sense. Focus on
                      total costs during your expected ownership period.
                    </p>
                  </li>
                  <li className="leading-relaxed">
                    <span className="font-semibold">Step 6: Negotiate</span>
                    <p className="mt-1 text-muted-foreground">
                      Use competing offers as leverage. Ask lenders to match or beat the best terms you've received.
                      Many lenders have flexibility, especially on fees and points.
                    </p>
                  </li>
                  <li className="leading-relaxed">
                    <span className="font-semibold">Step 7: Lock Your Rate</span>
                    <p className="mt-1 text-muted-foreground">
                      Once you've chosen a lender, lock in your rate. Rate locks typically last 30-60 days. If rates
                      drop during this period, ask if your lender offers a "float down" option.
                    </p>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="mb-4 text-2xl font-bold">Common Mortgage Shopping Mistakes</h2>

                <div className="space-y-4">
                  <div className="rounded-lg border-l-4 border-destructive bg-destructive/10 p-4">
                    <h3 className="mb-2 font-semibold">Mistake 1: Only Comparing Interest Rates</h3>
                    <p className="text-sm text-muted-foreground">
                      Solution: Always compare APR and total costs, not just the interest rate. A lower rate with high
                      fees can cost more overall.
                    </p>
                  </div>

                  <div className="rounded-lg border-l-4 border-destructive bg-destructive/10 p-4">
                    <h3 className="mb-2 font-semibold">Mistake 2: Not Shopping Around Enough</h3>
                    <p className="text-sm text-muted-foreground">
                      Solution: Research shows borrowers who compare just one additional lender save an average of
                      $1,500 over the life of the loan. Compare at least 3-5 lenders.
                    </p>
                  </div>

                  <div className="rounded-lg border-l-4 border-destructive bg-destructive/10 p-4">
                    <h3 className="mb-2 font-semibold">Mistake 3: Focusing Only on Monthly Payment</h3>
                    <p className="text-sm text-muted-foreground">
                      Solution: A lower monthly payment from a 40-year loan might sound appealing, but you'll pay
                      significantly more interest over time. Consider total cost.
                    </p>
                  </div>

                  <div className="rounded-lg border-l-4 border-destructive bg-destructive/10 p-4">
                    <h3 className="mb-2 font-semibold">Mistake 4: Not Reading the Fine Print</h3>
                    <p className="text-sm text-muted-foreground">
                      Solution: Review your Loan Estimate carefully. Look for prepayment penalties, balloon payments, or
                      adjustable rate features you didn't expect.
                    </p>
                  </div>

                  <div className="rounded-lg border-l-4 border-destructive bg-destructive/10 p-4">
                    <h3 className="mb-2 font-semibold">Mistake 5: Waiting Too Long to Lock Your Rate</h3>
                    <p className="text-sm text-muted-foreground">
                      Solution: Once you find a good rate, lock it in. Rates can change daily, and waiting could cost
                      you if rates increase before closing.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="mb-4 text-2xl font-bold">Real-World Example: Comparing Three Offers</h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Let's compare three mortgage offers on a $350,000 loan to see how different factors affect the total
                  cost:
                </p>

                <div className="space-y-4">
                  <div className="rounded-lg bg-muted p-4">
                    <h3 className="mb-2 font-semibold">Lender A</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• 3.75% interest rate, 3.85% APR</li>
                      <li>• $1,621/month payment</li>
                      <li>• $4,500 in closing costs</li>
                      <li>• Total paid over 30 years: $588,060</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-muted p-4">
                    <h3 className="mb-2 font-semibold">Lender B</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• 3.5% interest rate, 3.95% APR</li>
                      <li>• $1,571/month payment</li>
                      <li>• $8,200 in closing costs (includes 1 point paid upfront)</li>
                      <li>• Total paid over 30 years: $573,760</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-muted p-4">
                    <h3 className="mb-2 font-semibold">Lender C</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• 4% interest rate, 4.05% APR</li>
                      <li>• $1,670/month payment</li>
                      <li>• $2,800 in closing costs (no-point option)</li>
                      <li>• Total paid over 30 years: $603,880</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-primary/10 p-4">
                    <h3 className="mb-2 font-semibold text-primary">The Winner Depends on Your Situation</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        • <span className="font-medium">Staying 10+ years?</span> Lender B saves the most long-term
                        ($14,300 less than Lender A)
                      </li>
                      <li>
                        • <span className="font-medium">Moving in 5 years?</span> Lender A is better due to lower
                        upfront costs
                      </li>
                      <li>
                        • <span className="font-medium">Tight on cash?</span> Lender C requires the least money at
                        closing
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5">
              <CardContent className="pt-6">
                <h2 className="mb-4 text-2xl font-bold">Final Thoughts</h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Comparing mortgage rates effectively requires looking beyond the advertised interest rate. By
                  examining APR, closing costs, loan terms, and your personal timeline, you can make an informed
                  decision that saves you thousands of dollars.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Take your time, get multiple quotes, use our mortgage calculator to run different scenarios, and don't
                  be afraid to negotiate. Remember, lenders want your business—use that to your advantage to get the
                  best possible deal.
                </p>
              </CardContent>
            </Card>

            <div className="mt-12 rounded-lg border bg-muted/30 p-6">
              <h3 className="mb-3 text-lg font-semibold">Compare Mortgage Scenarios</h3>
              <p className="mb-4 text-muted-foreground">
                Use our mortgage calculator to compare different rates, terms, and costs to find your best option.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                <Home className="h-4 w-4" />
                Try Mortgage Calculator
              </Link>
            </div>
          </div>
        </div>
      </article>

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
            <Link href="/disclaimer" className="text-muted-foreground hover:text-primary">
              Disclaimer
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
