"use client"
import {
  Calculator,
  TrendingUp,
  PiggyBank,
  Menu,
  ChevronRight,
  Home,
  CreditCard,
  TrendingDown,
  Wallet,
} from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RateComparison } from "@/components/rate-comparison"
import { LoanCalculator } from "@/components/loan-calculator"
import { SavingsCalculator } from "@/components/savings-calculator"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { DailyRates } from "@/components/daily-rates"
import { MortgageCalculator } from "@/components/mortgage-calculator"
import { InvestmentCalculator } from "@/components/investment-calculator"
import { DebtPayoffCalculator } from "@/components/debt-payoff-calculator"
import { LiveClock } from "@/components/live-clock"

export default function FinanceFlowPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground animate-scale-in">
              <Calculator className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold leading-tight">FinanceFlow Pro</h1>
              <p className="text-xs text-muted-foreground">Smart Financial Tools</p>
            </div>
          </div>

          <div className="hidden lg:block">
            <LiveClock />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-4">
                <Link href="/" className="text-sm font-medium hover:text-primary">
                  Home
                </Link>
                <Link href="/about" className="text-sm font-medium hover:text-primary">
                  About
                </Link>
                <Link href="/blog" className="text-sm font-medium hover:text-primary">
                  Blog
                </Link>
                <Link href="/contact" className="text-sm font-medium hover:text-primary">
                  Contact
                </Link>
                <hr className="my-2" />
                <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <section className="border-b bg-muted/30 py-16 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-background px-4 py-1.5 text-sm animate-slide-down">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              Live Rates Updated Daily • 100% Free Tools
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl animate-slide-up">
              Compare Rates & Plan Your Financial Future
            </h1>
            <p className="mb-8 text-lg text-muted-foreground text-pretty md:text-xl animate-slide-up animation-delay-100">
              Make informed decisions with our comprehensive suite of financial calculators. Compare interest rates,
              calculate loan payments, and project your savings growth with precision.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 animate-slide-up animation-delay-200">
              <Button size="lg" asChild className="transition-transform hover:scale-105">
                <a href="#calculators">
                  Get Started Free
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="transition-transform hover:scale-105 bg-transparent"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/20 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="mb-6 text-center">
            <h2 className="mb-3 text-3xl font-bold">Today's Financial Rates</h2>
            <p className="text-muted-foreground">
              Current market rates updated daily to help you make informed decisions
            </p>
          </div>
          <div className="mx-auto max-w-5xl">
            <DailyRates />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center animate-slide-down">
            <h2 className="mb-3 text-3xl font-bold">Comprehensive Financial Toolkit</h2>
            <p className="text-muted-foreground">Professional-grade calculators trusted by thousands of users daily</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in animation-delay-100">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-chart-1/10 text-chart-1">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Daily Rate Updates</CardTitle>
                <CardDescription className="leading-relaxed">
                  Track current market rates for mortgages, loans, savings accounts, and credit cards updated throughout
                  the day.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in animation-delay-200">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-chart-2/10 text-chart-2">
                  <Home className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Mortgage Calculator</CardTitle>
                <CardDescription className="leading-relaxed">
                  Complete mortgage planning with taxes, insurance, PMI, and HOA fees. See your true monthly payment.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in animation-delay-300">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-chart-3/10 text-chart-3">
                  <Wallet className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Investment Planner</CardTitle>
                <CardDescription className="leading-relaxed">
                  Project portfolio growth with compound returns. Plan for retirement and long-term wealth building.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in animation-delay-400">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-chart-4/10 text-chart-4">
                  <CreditCard className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Debt Payoff Planner</CardTitle>
                <CardDescription className="leading-relaxed">
                  Compare avalanche vs snowball methods. Calculate your path to becoming debt-free faster.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in animation-delay-500">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-chart-5/10 text-chart-5">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Rate Comparison</CardTitle>
                <CardDescription className="leading-relaxed">
                  Compare rates from multiple lenders instantly. Find the best deals and save thousands on interest.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in animation-delay-600">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
                  <Calculator className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Loan Calculator</CardTitle>
                <CardDescription className="leading-relaxed">
                  Calculate payments for any loan type. Understand total costs and optimize your loan terms.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in animation-delay-700">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10 text-green-500">
                  <PiggyBank className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Savings Planner</CardTitle>
                <CardDescription className="leading-relaxed">
                  Project savings growth with compound interest. Plan for emergency funds and financial goals.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in animation-delay-800">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 text-purple-500">
                  <TrendingDown className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">More Coming Soon</CardTitle>
                <CardDescription className="leading-relaxed">
                  Retirement calculator, tax estimator, budget planner, and more professional tools in development.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="calculators" className="scroll-mt-16 py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="rates" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7">
              <TabsTrigger value="rates">Daily Rates</TabsTrigger>
              <TabsTrigger value="mortgage">Mortgage</TabsTrigger>
              <TabsTrigger value="investment">Investment</TabsTrigger>
              <TabsTrigger value="debt">Debt Payoff</TabsTrigger>
              <TabsTrigger value="comparison">Compare</TabsTrigger>
              <TabsTrigger value="loan">Loan</TabsTrigger>
              <TabsTrigger value="savings">Savings</TabsTrigger>
            </TabsList>

            <TabsContent value="rates">
              <DailyRates />
            </TabsContent>

            <TabsContent value="mortgage">
              <MortgageCalculator />
            </TabsContent>

            <TabsContent value="investment">
              <InvestmentCalculator />
            </TabsContent>

            <TabsContent value="debt">
              <DebtPayoffCalculator />
            </TabsContent>

            <TabsContent value="comparison">
              <RateComparison />
            </TabsContent>

            <TabsContent value="loan">
              <LoanCalculator />
            </TabsContent>

            <TabsContent value="savings">
              <SavingsCalculator />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="border-t bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-center text-3xl font-bold">Complete Financial Planning Guide</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Understanding Interest Rates</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Interest rates are the foundation of all financial decisions. Whether you're borrowing money through
                    a mortgage, personal loan, or credit card, or growing wealth through savings and investments, rates
                    determine your financial outcome. A difference of just 0.5% on a $300,000 mortgage can cost over
                    $30,000 in additional interest over 30 years. Our daily rate tracking helps you spot opportunities
                    and make moves when rates are favorable.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Compound Interest: Your Best Friend</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Albert Einstein allegedly called compound interest "the eighth wonder of the world." When you
                    invest, you earn returns not just on your principal, but on your accumulated gains. Starting early
                    makes a massive difference - investing $500 monthly starting at age 25 can grow to over $1.4 million
                    by 65 at 8% returns, while starting at 35 yields only $670,000. Time is your most valuable asset in
                    wealth building.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Smart Mortgage Planning</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Your home is likely your biggest financial commitment. Beyond the interest rate, consider the full
                    picture: property taxes, homeowner's insurance, PMI (if down payment is under 20%), HOA fees, and
                    maintenance costs. Use our advanced mortgage calculator to see your complete monthly obligation.
                    Also compare 15-year vs 30-year terms - shorter terms have higher payments but save enormous amounts
                    in total interest paid.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Debt Elimination Strategies</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Two proven methods exist for debt payoff: avalanche (highest interest rate first) and snowball
                    (smallest balance first). Avalanche saves more money mathematically, while snowball provides
                    psychological wins that keep you motivated. Our debt payoff calculator shows exact comparisons.
                    Either method works better than minimum payments - paying just minimums on $10,000 credit card debt
                    at 18% APR takes 20+ years and costs $12,000 in interest.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Investment Return Expectations</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Historical stock market returns average around 10% annually, but expect volatility. Bonds typically
                    return 4-6%, while high-yield savings accounts currently offer 4-5%. Diversification across asset
                    classes reduces risk. Never invest money you'll need within 5 years in stocks. Our investment
                    calculator uses realistic return assumptions to project growth, but remember past performance
                    doesn't guarantee future results.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Rate Comparison Best Practices</CardTitle>
                  <CardDescription className="leading-relaxed">
                    When comparing financial products, look beyond the advertised rate. For loans, check the APR (which
                    includes fees), origination costs, prepayment penalties, and total cost over the loan term. For
                    savings, consider minimum balance requirements, fee structures, and withdrawal restrictions. Get
                    quotes from at least 3-5 lenders before committing. Small differences in rates compound
                    significantly over time.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Emergency Fund Essentials</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Before aggressive investing or debt payoff, build an emergency fund of 3-6 months of expenses in a
                    high-yield savings account. This buffer prevents using high-interest credit cards during unexpected
                    job loss, medical emergencies, or major home repairs. With current high-yield savings rates around
                    4-5%, your emergency fund can actually earn meaningful returns while remaining accessible.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Long-Term Financial Success</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Financial success isn't about complex strategies - it's about consistent habits. Automate savings
                    and investments, live below your means, avoid high-interest debt, and regularly review your plan.
                    Use our calculators quarterly to track progress and adjust. Starting with even small amounts
                    ($100-200 monthly) builds wealth over decades. The best time to start was yesterday; the second-best
                    time is today.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold">Financial Statistics You Should Know</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-chart-1/10">
                    <span className="text-3xl font-bold text-chart-1">10%</span>
                  </div>
                  <CardTitle className="text-lg">Average Stock Return</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Historical annual return of the S&P 500 over the past 50 years, demonstrating the long-term power of
                    equity investing.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-chart-2/10">
                    <span className="text-3xl font-bold text-chart-2">20%</span>
                  </div>
                  <CardTitle className="text-lg">Down Payment Goal</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Target down payment percentage to avoid PMI on conventional mortgages and secure better interest
                    rates.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-chart-3/10">
                    <span className="text-3xl font-bold text-chart-3">3-6</span>
                  </div>
                  <CardTitle className="text-lg">Emergency Fund Months</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Recommended months of expenses to save in an emergency fund for financial security and peace of
                    mind.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-chart-4/10">
                    <span className="text-3xl font-bold text-chart-4">28%</span>
                  </div>
                  <CardTitle className="text-lg">Housing Budget Rule</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Maximum percentage of gross monthly income that should go toward housing costs according to
                    financial experts.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Credit Score Impact</CardTitle>
                  <CardDescription className="leading-relaxed">
                    A credit score difference of just 40 points (from 740 to 700) can cost you approximately $28,000
                    more in interest on a $300,000 30-year mortgage. That's why maintaining excellent credit is crucial
                    before applying for major loans.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Early Payment Benefits</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Making just one extra mortgage payment per year can shave 4-5 years off a 30-year mortgage and save
                    tens of thousands in interest. Even small additional principal payments compound significantly over
                    time.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Compound Growth Power</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Starting to invest at 25 instead of 35 can result in 2-3x more wealth by retirement, even with the
                    same monthly contribution. Time in the market beats timing the market every time.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-center text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="mb-12 text-center text-muted-foreground">
              Get answers to common questions about our financial calculators and tools
            </p>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How accurate are the interest rate calculations?</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Our calculators use industry-standard financial formulas that are identical to those used by banks
                    and financial institutions. The daily rates displayed are updated regularly from multiple financial
                    data sources. However, actual rates you receive may vary based on your credit score, location, loan
                    amount, and lender-specific requirements. Always verify final rates with your chosen lender before
                    making decisions.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Is my financial information secure when using these calculators?
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    Absolutely. All calculations are performed entirely in your web browser - we never collect, store,
                    or transmit your financial data to our servers. Your numbers stay on your device. We don't require
                    accounts or logins to use our calculators. Our site uses HTTPS encryption for all connections, and
                    we're committed to your privacy as outlined in our Privacy Policy.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What's the difference between APR and interest rate?</CardTitle>
                  <CardDescription className="leading-relaxed">
                    The interest rate is the percentage charged on the loan principal. APR (Annual Percentage Rate)
                    includes the interest rate plus additional costs like origination fees, closing costs, and mortgage
                    insurance, expressed as a yearly rate. APR gives a more complete picture of the true cost of
                    borrowing. A loan might advertise 3.5% interest but have an APR of 3.8% once fees are included.
                    Always compare APRs when shopping for loans.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Should I choose a 15-year or 30-year mortgage?</CardTitle>
                  <CardDescription className="leading-relaxed">
                    A 15-year mortgage builds equity faster and saves tens of thousands in total interest, but has
                    higher monthly payments. A 30-year mortgage offers lower monthly payments and more flexibility, but
                    costs significantly more in total interest. Choose 15-year if you can comfortably afford the higher
                    payments and want to own your home faster. Choose 30-year if you need lower payments, want to invest
                    the difference, or prefer financial flexibility. Use our mortgage calculator to compare exact
                    numbers for your situation.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How much should I save in my emergency fund?</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Financial experts recommend 3-6 months of essential expenses in a high-yield savings account. If
                    you're a single-income household, have irregular income, or work in an unstable industry, aim for
                    6-9 months. Start with a mini-goal of $1,000 if you're just beginning, then build to one month's
                    expenses, then three months, and so on. Keep this money liquid and accessible - not in investments
                    that could lose value when you need it most.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    What's better for paying off debt: avalanche or snowball method?
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    The avalanche method (paying highest interest rate first) saves more money mathematically, while the
                    snowball method (paying smallest balance first) provides quicker psychological wins. Avalanche is
                    optimal if you're highly motivated by numbers and savings. Snowball works better if you need
                    motivation from seeing accounts disappear. Our debt payoff calculator shows exact comparisons.
                    Either method beats making minimum payments - pick the one you'll stick with consistently.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How often should rates be checked before refinancing?</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Check rates weekly if you're actively shopping for a refinance, as they can change daily based on
                    economic conditions and Federal Reserve policy. A good rule of thumb: refinancing becomes worthwhile
                    when you can reduce your rate by at least 0.75-1.0%, though this depends on closing costs and how
                    long you plan to stay in the home. Use our calculators to determine your break-even point where the
                    savings exceed the refinancing costs. Most experts recommend refinancing if you'll recoup costs
                    within 2-3 years.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I really trust free financial calculators?</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Yes, when they use standard financial formulas and are transparent about their calculations. Our
                    tools use the same mathematical formulas that professional financial advisors and institutions use -
                    there's no "secret sauce" to basic financial calculations. The formulas for compound interest, loan
                    amortization, and investment projections are well-established and publicly available. We provide
                    these for free to help people make informed decisions. Always verify major financial decisions with
                    a qualified financial advisor for your specific situation.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What credit score do I need for the best mortgage rates?</CardTitle>
                  <CardDescription className="leading-relaxed">
                    For the absolute best mortgage rates, aim for a credit score of 740 or higher. You can still get
                    good rates with scores of 700-739, decent rates from 660-699, and qualify with scores as low as 620
                    for conventional loans (580 for FHA). The difference matters significantly: on a $300,000 mortgage,
                    a 740 score might get 6.5% while a 680 score gets 7.0%, costing about $90 more monthly ($32,000+
                    over 30 years). Check your credit score before shopping and improve it if possible by paying down
                    balances and correcting errors.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Are these calculators suitable for business finances?</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Our calculators are designed primarily for personal finance decisions, though the basic formulas
                    work for business scenarios too. For complex business financing involving commercial loans,
                    equipment leasing, business credit lines, or multi-year projections with varying cash flows, we
                    recommend consulting a CPA or business financial advisor who can account for tax implications,
                    depreciation, business structure considerations, and industry-specific factors. However, our basic
                    loan and investment calculators can give you ballpark figures for business scenarios.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Calculator className="h-4 w-4" />
                </div>
                <span className="font-bold">FinanceFlow Pro</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Professional financial calculators and rate comparison tools to help you make informed money decisions.
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Tools</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#calculators" className="hover:text-primary">
                    Daily Rates
                  </a>
                </li>
                <li>
                  <a href="#calculators" className="hover:text-primary">
                    Mortgage Calculator
                  </a>
                </li>
                <li>
                  <a href="#calculators" className="hover:text-primary">
                    Investment Planner
                  </a>
                </li>
                <li>
                  <a href="#calculators" className="hover:text-primary">
                    Debt Payoff Planner
                  </a>
                </li>
                <li>
                  <a href="#calculators" className="hover:text-primary">
                    Rate Comparison
                  </a>
                </li>
                <li>
                  <a href="#calculators" className="hover:text-primary">
                    Loan Calculator
                  </a>
                </li>
                <li>
                  <a href="#calculators" className="hover:text-primary">
                    Savings Planner
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/privacy-policy" className="hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/disclaimer" className="hover:text-primary">
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} FinanceFlow Pro. All rights reserved. Built to help you make smarter
              financial decisions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
