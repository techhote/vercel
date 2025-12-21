import { Calculator } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function PrivacyPolicyPage() {
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
        <h1 className="mb-8 text-4xl font-bold">Privacy Policy</h1>
        <p className="mb-8 text-muted-foreground">Last updated: December 19, 2025</p>

        <Card>
          <CardContent className="prose prose-slate max-w-none pt-6 dark:prose-invert">
            <h2 className="text-2xl font-bold">Introduction</h2>
            <p className="leading-relaxed">
              FinanceFlow Pro ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you visit our website and use
              our financial calculators.
            </p>

            <h2 className="mt-8 text-2xl font-bold">Information We Collect</h2>
            <h3 className="text-xl font-semibold">Calculator Data</h3>
            <p className="leading-relaxed">
              All financial calculations performed on FinanceFlow Pro are done locally in your web browser. We do not
              collect, store, or transmit any of the financial information you enter into our calculators, including
              loan amounts, interest rates, or savings goals.
            </p>

            <h3 className="text-xl font-semibold">Automatically Collected Information</h3>
            <p className="leading-relaxed">
              When you visit our website, we may automatically collect certain information about your device and
              browsing activity, including:
            </p>
            <ul className="leading-relaxed">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
            </ul>
            <p className="leading-relaxed">
              This information is collected through cookies and similar tracking technologies to help us improve our
              website and understand how users interact with our tools.
            </p>

            <h2 className="mt-8 text-2xl font-bold">How We Use Your Information</h2>
            <p className="leading-relaxed">We use the automatically collected information to:</p>
            <ul className="leading-relaxed">
              <li>Analyze website usage and improve our services</li>
              <li>Monitor and prevent technical issues</li>
              <li>Understand user preferences and optimize user experience</li>
              <li>Generate aggregate analytics about site traffic and usage patterns</li>
              <li>Serve relevant advertisements through Google AdSense</li>
            </ul>

            <h2 className="mt-8 text-2xl font-bold">Third-Party Services</h2>
            <h3 className="text-xl font-semibold">Google AdSense</h3>
            <p className="leading-relaxed">
              We use Google AdSense to display advertisements on our website. Google AdSense uses cookies and other
              tracking technologies to serve ads based on your prior visits to our website or other websites. You can
              opt out of personalized advertising by visiting Google's Ads Settings at{" "}
              <a
                href="https://www.google.com/settings/ads"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.google.com/settings/ads
              </a>
              .
            </p>

            <h3 className="text-xl font-semibold">Analytics</h3>
            <p className="leading-relaxed">
              We may use analytics services to help us understand how users engage with our website. These services may
              collect information about your use of our site and other websites over time.
            </p>

            <h2 className="mt-8 text-2xl font-bold">Cookies and Tracking</h2>
            <p className="leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our website and hold certain
              information. Cookies are small data files that may include an anonymous unique identifier. You can
              instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do
              not accept cookies, you may not be able to use some portions of our website.
            </p>

            <h2 className="mt-8 text-2xl font-bold">Data Security</h2>
            <p className="leading-relaxed">
              We implement appropriate technical and organizational security measures to protect the information we
              collect. However, please note that no method of transmission over the Internet or electronic storage is
              100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="mt-8 text-2xl font-bold">Your Privacy Rights</h2>
            <p className="leading-relaxed">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="leading-relaxed">
              <li>The right to access and receive a copy of your personal information</li>
              <li>The right to correct inaccurate personal information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to restrict or object to processing of your personal information</li>
              <li>The right to opt-out of the sale of personal information</li>
            </ul>

            <h2 className="mt-8 text-2xl font-bold">Children's Privacy</h2>
            <p className="leading-relaxed">
              Our website is not intended for children under the age of 13. We do not knowingly collect personal
              information from children under 13. If you are a parent or guardian and believe that your child has
              provided us with personal information, please contact us.
            </p>

            <h2 className="mt-8 text-2xl font-bold">Changes to This Privacy Policy</h2>
            <p className="leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy
              Policy periodically.
            </p>

            <h2 className="mt-8 text-2xl font-bold">Contact Us</h2>
            <p className="leading-relaxed">
              If you have questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <p className="leading-relaxed">
              Email:{" "}
              <a href="mailto:privacy@financeflowpro.com" className="text-primary hover:underline">
                privacy@financeflowpro.com
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
