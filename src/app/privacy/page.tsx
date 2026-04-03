import type { Metadata } from 'next';
import { generateMetadata } from '@/utils/metadata';
import Link from 'next/link';
// --- Icons ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = generateMetadata({
  title: 'Privacy Policy',
  description: 'How Snap Hinge Studios handles your data, emails, and privacy.',
});

export default function PrivacyPolicy() {
  const lastUpdated = 'April 2026';

  return (
    <main className="min-h-screen py-32 px-8 bg-surface text-on-surface">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <Link
            href="/"
            className="flex items-center gap-2 text-primary hover:underline font-bold mb-8 inline-block">
            <FontAwesomeIcon icon={faArrowLeft} /> <span>Back to Home</span>
          </Link>
          <h1 className="text-4xl md:text-6xl font-headline font-black text-on-surface mb-4">
            Privacy Policy.
          </h1>
          <p className="text-on-surface-variant font-medium">Last Updated: {lastUpdated}</p>
        </div>

        <div className="space-y-8 text-lg text-on-surface-variant leading-relaxed">
          <section>
            <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">
              1. The Short Version
            </h2>
            <p>
              At Snap Hinge Studios, we want to build unapologetic digital experiences, not harvest
              your data. We only collect what we absolutely need to keep you updated (like your
              email) and to understand how people use our website (basic analytics). We do not sell
              your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">
              2. Information We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Information you give us:</strong> If you sign up for our newsletter or
                contact us, we collect the email address you provide.
              </li>
              <li>
                <strong>Automatically collected information:</strong> When you visit our website, we
                use standard analytics tools to collect basic, anonymous data about your visit (like
                what pages you viewed, your general location, and your device type).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">
              3. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Send you updates about our games, apps, and studio news (if you opted in).</li>
              <li>Monitor and analyze site traffic so we can improve our website.</li>
              <li>Respond to any questions or support requests you send our way.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">
              4. Third-Party Services We Use
            </h2>
            <p>
              We don&apos;t build everything from scratch. We rely on a few trusted third-party
              services to keep the studio running, and they may process your data on our behalf:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                <strong>Resend:</strong> We use Resend to manage our email list and send
                newsletters. If you subscribe, your email is stored securely with them.
              </li>
              <li>
                <strong>Google Analytics:</strong> We use Google Analytics to understand our website
                traffic. This service uses cookies to track anonymous usage data. You can opt out of
                Google Analytics tracking through your browser settings or by using standard
                ad-blocking extensions.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">
              5. Future Games and Applications
            </h2>
            <p>
              This privacy policy currently covers our studio website and email list. As we release
              specific games and applications, they may require different types of data (like save
              files, high scores, or crash reports).
              <br />
              <br />
              If a specific Snap Hinge Studios game or app collects data beyond what is outlined
              here, you will be provided with a specific privacy notice inside that application
              before any data is collected.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">
              6. Children&apos;s Privacy
            </h2>
            <p>
              While our games are built for everyone to enjoy, our website and email newsletters are
              not directed at children under the age of 13. We do not knowingly collect personal
              information from children under 13. If you are a parent or guardian and believe your
              child has provided us with an email address, please contact us so we can delete it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">
              7. Contact the Herd
            </h2>
            <p>
              If you have any questions about this policy, want to know what data we have on you, or
              want us to delete your email from our systems, just reach out:
            </p>
            <p className="mt-4 font-bold text-primary">
              <a href="mailto:snaphingestudios@gmail.com">snaphingestudios@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
