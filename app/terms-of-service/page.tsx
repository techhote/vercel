import { Calculator } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function TermsOfServicePage() {
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
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Back to Home
          </Link>
        </div>
      </header>

      <div className="container mx-auto max-w-4xl px-4 py-16">
        <h1 className="mb-8 text-4xl font-bold">Terms of Service</h1>
        <p className="mb-8 text-muted-foreground">Last updated: December 19, 2025</p>

        <Card>
          <CardContent className="prose prose-slate max-w-none pt-6 dark:prose-invert">
            <h2 className="text-2xl font-bold">Agreement to Terms</h2>
            <p className="leading-relaxed">
              By accessing or using FinanceFlow Pro, you agree to be bound by these Terms of Service. If you disagree
              with any part of these terms, you may not access our website or use our services.
            </p>

            <h2 className="mt-8 text-2xl font-bold">Description of Service</h2>
            <p className="leading-relaxed">
              FinanceFlow Pro provides free online financial calculators including rate comparison tools, loan
              calculators, and savings planners. These tools are designed for informational and educational purposes to
              help users make informed financial decisions.
            </p>

            <h2 className="mt-8 text-2xl font-bold">Use of Service</h2>
            <h3 className="text-xl font-semibold">Permitted Use</h3>
            <p className="leading-relaxed">You may use FinanceFlow Pro for lawful purposes only. You agree not to:</p>
            <ul className="leading-relaxed">
              <li>Use our service in any way that violates any applicable law or regulation</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Interfere with or disrupt the service or servers</li>
              <li>Transmit any malicious code, viruses, or harmful data</li>
              <li>Scrape, copy, or duplicate our content without permission</li>
              <li>Use automated systems to access the service excessively</li>
            </ul>

            <h2 className="mt-8 text-2xl font-bold">No Financial Advice</h2>
            <p className="leading-relaxed">
              FinanceFlow Pro provides calculators and tools for informational purposes only. We do not provide
              financial, investment, tax, or legal advice. The calculations and information provided by our tools should
              not be considered as professional financial advice.
            </p>
            <p className="leading-relaxed">
              You should consult with qualified financial advisors, accountants, or legal professionals before making
              any financial decisions. We are not responsible for any financial decisions you make based on information
              from our calculators.
            </p>

            <h2 className="mt-8 text-2xl font-bold">Accuracy of Information</h2>
            <p className="leading-relaxed">
              While we strive to provide accurate calculations using industry-standard financial formulas, we make no
              warranties or guarantees about the accuracy, completeness, or reliability of any calculations or
              information provided through our service.
            </p>
            <p className="leading-relaxed">
              Financial calculations can be affected by many factors, and actual results may differ from calculated
              estimates. Always verify important financial information with your financial institution or professional
              advisor.
            </p>

            <h2 className="mt-8 text-2xl font-bold">Intellectual Property</h2>
            <p className="leading-relaxed">
              The content, features, and functionality of FinanceFlow Pro, including but not limited to text, graphics,
              logos, and software, are owned by FinanceFlow Pro and are protected by copyright, trademark, and other
              intellectual property laws.
            </p>
            <p className="leading-relaxed">
              You may not reproduce, distribute, modify, create derivative works of, publicly display, republish,
              download, store, or transmit any of our content without prior written permission, except for personal,
              non-commercial use.
            </p>

            <h2 className="mt-8 text-2xl font-bold">Third-Party Links and Advertisements</h2>
            <p className="leading-relaxed">
              Our website may contain links to third-party websites and display advertisements from third-party services
              like Google AdSense. We are not responsible for the content, privacy practices, or terms of service of any
              third-party websites or advertisers.
            </p>

            <h2 className="mt-8 text-2xl font-bold">Disclaimer of Warranties</h2>
            <p className="leading-relaxed">
              FinanceFlow Pro is provided "as is" and "as available" without warranties of any kind, either express or
              implied. We do not warrant that:
            </p>
            <ul className="leading-relaxed">
              <li>The service will be uninterrupted, timely, secure, or error-free</li>
              <li>The results obtained from using the service will be accurate or reliable</li>
              <li>Any errors in the service will be corrected</li>
            </ul>

            <h2 className="mt-8 text-2xl font-bold">Limitation of Liability</h2>
            <p className="leading-relaxed">
              To the fullest extent permitted by law, FinanceFlow Pro shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly
              or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
            </p>
            <ul className="leading-relaxed">
              <li>Your use or inability to use the service</li>
              <li>Any unauthorized access to or use of our servers</li>
              <li>Any interruption or cessation of transmission to or from our service</li>
              <li>Any bugs, viruses, or other harmful code transmitted through the service</li>
              <li>
                Any errors or omissions in any content or for any loss or damage incurred as a result of your use of any
                content
              </li>
            </ul>

            <h2 className="mt-8 text-2xl font-bold">Indemnification</h2>
            <p className="leading-relaxed">
              You agree to defend, indemnify, and hold harmless FinanceFlow Pro and its officers, directors, employees,
              and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in
              any way connected with your access to or use of the service or your violation of these Terms.
            </p>

            <h2 className="mt-8 text-2xl font-bold">Changes to Service</h2>
            <p className="leading-relaxed">
              We reserve the right to modify, suspend, or discontinue any part of our service at any time without
              notice. We will not be liable to you or any third party for any modification, suspension, or
              discontinuance of the service.
            </p>

            <h2 className="mt-8 text-2xl font-bold">Changes to Terms</h2>
            <p className="leading-relaxed">
              We may update these Terms of Service from time to time. We will notify you of any changes by posting the
              new Terms on this page and updating the "Last updated" date. Your continued use of the service after any
              changes constitutes acceptance of the new Terms.
            </p>

            <h2 className="mt-8 text-2xl font-bold">Governing Law</h2>
            <p className="leading-relaxed">
              These Terms shall be governed by and construed in accordance with applicable laws, without regard to its
              conflict of law provisions. Any disputes arising from these Terms or your use of the service shall be
              resolved through binding arbitration.
            </p>

            <h2 className="mt-8 text-2xl font-bold">Contact Information</h2>
            <p className="leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="leading-relaxed">
              Email:{" "}
              <a href="mailto:legal@financeflowpro.com" className="text-primary hover:underline">
                legal@financeflowpro.com
              </a>
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
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
