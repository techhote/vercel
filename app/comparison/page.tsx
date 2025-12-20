import { Calculator, TrendingUp, DollarSign, Home, CreditCard } from "lucide-react"
import Link from "next/link"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ComparisonPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
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
            <Link href="/contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <section className="border-b bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-balance md:text-5xl">Rate Comparison Tools</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Compare rates across multiple lenders and financial products to find the best deals and save money.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-3xl font-bold">How to Compare Financial Products</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Home className="h-6 w-6" />
                  </div>
                  <CardTitle>Mortgage Comparison</CardTitle>
                  <CardDescription className="leading-relaxed">
                    When comparing mortgages, look beyond the interest rate. Compare APR (which includes fees), points,
                    closing costs, and loan terms. A slightly higher rate with lower fees might save you money overall.
                    Get quotes from at least 3-5 lenders and compare them side-by-side on the same day, as rates change
                    frequently.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-chart-2/10 text-chart-2">
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <CardTitle>Credit Card Comparison</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Compare credit cards based on APR, annual fees, rewards programs, and intro offers. If you carry a
                    balance, prioritize low APR. If you pay in full monthly, focus on rewards. Balance transfer cards
                    with 0% intro APR can save thousands when consolidating debt, but watch for transfer fees and the
                    post-intro rate.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-chart-3/10 text-chart-3">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <CardTitle>Savings Account Comparison</CardTitle>
                  <CardDescription className="leading-relaxed">
                    For savings accounts, compare APY (not just APR), minimum balance requirements, monthly fees, and
                    withdrawal restrictions. Online banks typically offer higher rates than traditional banks.
                    High-yield savings accounts currently offer 4-5% APY, while traditional banks often pay under 0.5%.
                    That difference is substantial on larger balances.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-chart-4/10 text-chart-4">
                    <DollarSign className="h-6 w-6" />
                  </div>
                  <CardTitle>Personal Loan Comparison</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Personal loan rates vary widely based on credit score, ranging from 8% to 36%. Compare APR,
                    origination fees, prepayment penalties, and loan terms. Shorter terms have higher payments but save
                    on interest. Check if your bank offers relationship discounts. Pre-qualification doesn't hurt your
                    credit, so get multiple quotes.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="mt-12 rounded-lg border bg-card p-8">
              <h3 className="mb-4 text-2xl font-bold">Quick Comparison Checklist</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-3 font-semibold">For Borrowing Products:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-primary">✓</span>
                      <span>Compare APR, not just interest rate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-primary">✓</span>
                      <span>Calculate total cost over life of loan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-primary">✓</span>
                      <span>Check for prepayment penalties</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-primary">✓</span>
                      <span>Review all fees and closing costs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-primary">✓</span>
                      <span>Verify loan term and monthly payment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-primary">✓</span>
                      <span>Get quotes on the same day</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-3 font-semibold">For Savings Products:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-primary">✓</span>
                      <span>Compare APY (annual percentage yield)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-primary">✓</span>
                      <span>Check minimum balance requirements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-primary">✓</span>
                      <span>Review monthly maintenance fees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-primary">✓</span>
                      <span>Understand withdrawal restrictions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-primary">✓</span>
                      <span>Verify FDIC insurance coverage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-primary">✓</span>
                      <span>Check rate guarantee period</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t bg-muted/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} FinanceFlow Pro. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
