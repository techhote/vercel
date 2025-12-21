import { Calculator, ArrowLeft, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CreditScoreImprovementPage() {
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
              <TrendingUp className="h-4 w-4" />
              <span>8 min read</span>
              <span>•</span>
              <time>December 2024</time>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">
              How to Improve Your Credit Score Fast
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Learn proven strategies to boost your credit score quickly and unlock better loan rates, credit cards, and
              financial opportunities.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Your credit score significantly impacts your financial life, affecting everything from loan approval to
              interest rates. Understanding how credit scores work and implementing strategic improvements can save you
              thousands of dollars over your lifetime.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold">Understanding Credit Score Ranges</h2>
            <Card className="my-8">
              <CardHeader>
                <CardTitle>FICO Score Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Exceptional: 800-850</span>
                    <span className="font-semibold text-primary">Best rates available</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Very Good: 740-799</span>
                    <span className="font-semibold text-primary">Excellent rates</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Good: 670-739</span>
                    <span className="font-semibold">Competitive rates</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fair: 580-669</span>
                    <span className="font-semibold text-muted-foreground">Higher rates</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Poor: 300-579</span>
                    <span className="font-semibold text-destructive">Difficult to qualify</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="mb-4 mt-8 text-2xl font-bold">What Affects Your Credit Score</h2>
            <Card className="my-8 bg-primary/5">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold">Payment History</span>
                      <span className="text-primary font-bold">35%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">On-time payments are the most important factor</p>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold">Credit Utilization</span>
                      <span className="text-primary font-bold">30%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Amount of credit used vs. available credit</p>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold">Length of Credit History</span>
                      <span className="text-primary font-bold">15%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">How long your accounts have been open</p>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold">New Credit</span>
                      <span className="text-primary font-bold">10%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Recent credit inquiries and new accounts</p>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold">Credit Mix</span>
                      <span className="text-primary font-bold">10%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Variety of credit types (cards, loans, mortgage)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="mb-4 mt-8 text-2xl font-bold">Quick Wins to Boost Your Score</h2>
            <Card className="my-8">
              <CardContent className="pt-6">
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-sm">
                    <span className="font-semibold">Pay down credit card balances below 30%:</span>
                    <span className="text-muted-foreground ml-2">
                      Keep utilization low for immediate score improvement
                    </span>
                  </li>
                  <li className="text-sm">
                    <span className="font-semibold">Request credit limit increases:</span>
                    <span className="text-muted-foreground ml-2">
                      Lowers utilization ratio without paying down debt
                    </span>
                  </li>
                  <li className="text-sm">
                    <span className="font-semibold">Become an authorized user:</span>
                    <span className="text-muted-foreground ml-2">Benefit from someone else's good credit history</span>
                  </li>
                  <li className="text-sm">
                    <span className="font-semibold">Dispute credit report errors:</span>
                    <span className="text-muted-foreground ml-2">Remove inaccurate negative items immediately</span>
                  </li>
                  <li className="text-sm">
                    <span className="font-semibold">Set up automatic payments:</span>
                    <span className="text-muted-foreground ml-2">Never miss a payment deadline</span>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <h2 className="mb-4 mt-8 text-2xl font-bold">Long-Term Credit Building Strategies</h2>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Building excellent credit takes time and consistency. These strategies create lasting improvements to your
              credit profile.
            </p>

            <div className="space-y-6 my-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Maintain Old Accounts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Keep your oldest credit cards active with small purchases, even if you don't use them regularly.
                    Account age significantly impacts your credit history length.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Diversify Your Credit Mix</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Having different types of credit (credit cards, installment loans, mortgage) shows lenders you can
                    manage various financial responsibilities.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Limit Hard Inquiries</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Apply for new credit sparingly. Multiple hard inquiries in a short period can temporarily lower your
                    score. Rate shopping for mortgages or auto loans within 14-45 days counts as one inquiry.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 rounded-lg bg-muted/50 p-6">
              <h3 className="mb-3 text-lg font-semibold">Calculate Your Financial Impact</h3>
              <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                See how improving your credit score can reduce your loan payments and save money over time.
              </p>
              <Link href="/">
                <Button>Try Our Calculators</Button>
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
