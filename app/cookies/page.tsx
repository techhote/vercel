import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Cookie Policy | imakepdf.site",
  description: "Learn about how imakepdf.site uses cookies and similar tracking technologies.",
}

export default function CookiesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 container py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1>Cookie Policy</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

          <h2>What Are Cookies</h2>
          <p>
            Cookies are small text files that are placed on your computer or mobile device when you visit a website.
            They are widely used to make websites work more efficiently and provide information to website owners.
          </p>

          <h2>How We Use Cookies</h2>
          <p>imakepdf.site uses cookies for the following purposes:</p>

          <h3>Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function and cannot be switched off. They are usually only
            set in response to actions made by you, such as:
          </p>
          <ul>
            <li>Authentication and account access</li>
            <li>Security and fraud prevention</li>
            <li>Session management</li>
            <li>File upload tracking</li>
          </ul>

          <h3>Analytics Cookies</h3>
          <p>
            We use analytics cookies to understand how visitors interact with our website. This helps us improve our
            services. These cookies collect information such as:
          </p>
          <ul>
            <li>Pages visited</li>
            <li>Time spent on pages</li>
            <li>Tools used</li>
            <li>General location (country/city level)</li>
            <li>Device and browser information</li>
          </ul>

          <h3>Advertising Cookies</h3>
          <p>We may use advertising cookies to show you relevant ads based on your interests. These cookies:</p>
          <ul>
            <li>Track your browsing across websites</li>
            <li>Help measure ad campaign effectiveness</li>
            <li>Provide personalized advertising</li>
            <li>Limit how many times you see an ad</li>
          </ul>

          <h2>Third-Party Cookies</h2>
          <p>We use services from third parties that may set cookies on your device. These include:</p>

          <h3>Google Analytics</h3>
          <p>
            We use Google Analytics to analyze website traffic and usage patterns. Google Analytics uses cookies to
            collect information about website usage without personally identifying visitors.
          </p>
          <p>
            Learn more:{" "}
            <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer">
              Google Cookie Policy
            </a>
          </p>

          <h3>Google AdSense</h3>
          <p>
            We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior
            visits to our website or other websites.
          </p>
          <p>
            You can opt out of personalized advertising by visiting{" "}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
              Ads Settings
            </a>
          </p>

          <h3>Vercel Analytics</h3>
          <p>
            We use Vercel Analytics for website performance monitoring and user experience optimization. This service
            respects user privacy and does not track personal information.
          </p>

          <h2>Types of Cookies We Use</h2>
          <table>
            <thead>
              <tr>
                <th>Cookie Type</th>
                <th>Purpose</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Session Cookies</td>
                <td>Maintain user session and authentication</td>
                <td>Until browser closed</td>
              </tr>
              <tr>
                <td>Persistent Cookies</td>
                <td>Remember preferences and settings</td>
                <td>Up to 1 year</td>
              </tr>
              <tr>
                <td>Analytics Cookies</td>
                <td>Track usage and improve service</td>
                <td>Up to 2 years</td>
              </tr>
              <tr>
                <td>Advertising Cookies</td>
                <td>Display relevant advertisements</td>
                <td>Up to 13 months</td>
              </tr>
            </tbody>
          </table>

          <h2>Managing Cookies</h2>
          <p>You have several options to manage or disable cookies:</p>

          <h3>Browser Settings</h3>
          <p>Most web browsers allow you to control cookies through their settings. You can:</p>
          <ul>
            <li>Block all cookies</li>
            <li>Block third-party cookies</li>
            <li>Clear cookies when you close the browser</li>
            <li>Make exceptions for specific websites</li>
          </ul>

          <h3>Browser-Specific Instructions</h3>
          <ul>
            <li>
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
              >
                Safari
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge"
                target="_blank"
                rel="noopener noreferrer"
              >
                Microsoft Edge
              </a>
            </li>
          </ul>

          <h3>Opt-Out Tools</h3>
          <ul>
            <li>
              <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer">
                NAI Opt-Out Tool
              </a>
            </li>
            <li>
              <a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer">
                Your Online Choices (EU)
              </a>
            </li>
            <li>
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
                Google Ad Settings
              </a>
            </li>
          </ul>

          <h2>Impact of Disabling Cookies</h2>
          <p>If you disable cookies, some features of our website may not function properly:</p>
          <ul>
            <li>You may need to re-enter information more frequently</li>
            <li>Some tools may not work as expected</li>
            <li>Your preferences won't be saved</li>
            <li>You may not be able to sign in to your account</li>
          </ul>

          <h2>Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in our practices or for legal reasons.
            We will notify you of any changes by posting the new policy on this page with an updated "Last updated"
            date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about our use of cookies, please contact us at{" "}
            <a href="mailto:privacy@imakepdf.site">privacy@imakepdf.site</a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
