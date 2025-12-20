import { Calculator, ArrowLeft, Target } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DebtPayoffStrategiesPage() {
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
              <Target className="h-4 w-4" />
              <span>9 min read</span>
              <span>•</span>
              <time>December 2024</time>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">
              Debt Payoff Strategies: Avalanche vs Snowball
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Discover the most effective strategies to eliminate debt faster, save on interest, and achieve financial
              freedom with proven methods.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Carrying multiple debts can feel overwhelming, but choosing the right payoff strategy can help you become
              debt-free faster while saving thousands in interest. The two most popular methods are the Debt Avalanche
              and Debt Snowball approaches.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold">The Debt Avalanche Method</h2>
            <Card className="my-8 bg-primary/5">
              <CardHeader>
                <CardTitle>How It Works</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Pay minimum payments on all debts, then put extra money toward the debt with the highest interest
                  rate. Once that's paid off, move to the next highest rate.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Saves the most money on interest</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Mathematically optimal approach</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Best for logical, numbers-focused people</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="mb-4 mt-8 text-2xl font-bold">The Debt Snowball Method</h2>
            <Card className="my-8 bg-primary/5">
              <CardHeader>
                <CardTitle>How It Works</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Pay minimum payments on all debts, then put extra money toward the smallest balance first. Once that's
                  paid off, move to the next smallest balance.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Provides quick psychological wins</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Builds momentum and motivation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Best for those who need encouragement</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="mb-4 mt-8 text-2xl font-bold">Real Example Comparison</h2>
            <Card className="my-8">
              <CardHeader>
                <CardTitle>Your Debt Situation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm mb-6">
                  <div className="flex justify-between p-2 bg-muted rounded">
                    <span>Credit Card A: $5,000</span>
                    <span className="font-semibold">22% APR</span>
                  </div>
                  <div className="flex justify-between p-2 bg-muted rounded">
                    <span>Credit Card B: $2,500</span>
                    <span className="font-semibold">18% APR</span>
                  </div>
                  <div className="flex justify-between p-2 bg-muted rounded">
                    <span>Personal Loan: $8,000</span>
                    <span className="font-semibold">12% APR</span>
                  </div>
                  <div className="flex justify-between p-2 bg-muted rounded">
                    <span>Car Loan: $12,000</span>
                    <span className="font-semibold">6% APR</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between font-semibold">
                      <span>Total Debt:</span>
                      <span>$27,500</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground mt-1">
                      <span>Extra Payment Available:</span>
                      <span>$500/month</span>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-3 text-primary">Avalanche Method</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div>Payoff order: Card A → Card B → Personal → Car</div>
                      <div className="font-semibold text-foreground">Time: 48 months</div>
                      <div className="font-semibold text-primary">Total interest: $4,850</div>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-3 text-primary">Snowball Method</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div>Payoff order: Card B → Card A → Personal → Car</div>
                      <div className="font-semibold text-foreground">Time: 50 months</div>
                      <div className="font-semibold text-foreground">Total interest: $5,200</div>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm font-semibold">
                  Avalanche saves $350 but Snowball eliminates first debt 4 months earlier
                </p>
              </CardContent>
            </Card>

            <h2 className="mb-4 mt-8 text-2xl font-bold">Which Method Should You Choose?</h2>
            <div className="space-y-6 my-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Choose Avalanche If You:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Want to minimize interest payments</li>
                    <li>• Are motivated by saving money</li>
                    <li>• Can stay focused on long-term goals</li>
                    <li>• Have high-interest debts (20%+)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Choose Snowball If You:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Need motivational wins</li>
                    <li>• Have struggled with debt before</li>
                    <li>• Want to see progress quickly</li>
                    <li>• Have several small debts</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="mb-4 mt-8 text-2xl font-bold">Advanced Debt Payoff Tips</h2>
            <Card className="my-8">
              <CardContent className="pt-6">
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-sm">
                    <span className="font-semibold">Negotiate lower interest rates:</span>
                    <span className="text-muted-foreground ml-2">Call creditors and ask for rate reductions</span>
                  </li>
                  <li className="text-sm">
                    <span className="font-semibold">Consider balance transfers:</span>
                    <span className="text-muted-foreground ml-2">0% APR cards can save significant interest</span>
                  </li>
                  <li className="text-sm">
                    <span className="font-semibold">Increase your income:</span>
                    <span className="text-muted-foreground ml-2">Side hustles accelerate debt payoff dramatically</span>
                  </li>
                  <li className="text-sm">
                    <span className="font-semibold">Cut unnecessary expenses:</span>
                    <span className="text-muted-foreground ml-2">Redirect savings toward debt payments</span>
                  </li>
                  <li className="text-sm">
                    <span className="font-semibold">Automate extra payments:</span>
                    <span className="text-muted-foreground ml-2">Set up automatic transfers so you don't forget</span>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <div className="mt-12 rounded-lg bg-muted/50 p-6">
              <h3 className="mb-3 text-lg font-semibold">Create Your Debt Payoff Plan</h3>
              <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                Use our debt payoff calculator to compare strategies and see exactly when you'll be debt-free.
              </p>
              <Link href="/">
                <Button>Try Debt Calculator</Button>
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
