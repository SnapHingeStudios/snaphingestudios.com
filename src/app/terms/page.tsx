import type { Metadata } from 'next';
import { generateMetadata } from '@/utils/metadata';
import Link from 'next/link';

export const metadata: Metadata = generateMetadata({
  title: 'Terms of Service',
  description: 'The ground rules for using the Snap Hinge Studios website.',
});

export default function TermsOfService() {
  const lastUpdated = 'April 2026';

  return (
    <main className="min-h-screen py-32 px-8 bg-surface text-on-surface">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <Link href="/" className="text-primary hover:underline font-bold mb-8 inline-block">
            &larr; Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-headline font-black text-on-surface mb-4">
            Terms of Service.
          </h1>
          <p className="text-on-surface-variant font-medium">Last Updated: {lastUpdated}</p>
        </div>

        <div className="space-y-8 text-lg text-on-surface-variant leading-relaxed">
          <section>
            <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">
              1. The Ground Rules
            </h2>
            <p>
              Welcome to Snap Hinge Studios. By using this website, you agree to play by a few basic
              rules. Don&apos;t use our site to do anything illegal, don&apos;t try to hack or
              disrupt our servers, and don&apos;t steal our stuff. If you can&apos;t agree to that,
              please close the tab.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">
              2. Intellectual Property (Our Stuff)
            </h2>
            <p>
              Everything you see on this site—including Mac the Mascot, our logos, our code, our
              game concepts, and our digital art—is owned by Snap Hinge Studios (operating under One
              Buffalo Labs). You may not copy, distribute, or modify our intellectual property
              without our explicit written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">
              3. Future Games & Applications (EULAs)
            </h2>
            <p>
              These Terms of Service apply specifically to the use of this promotional website. As
              we release actual games and software applications, those products may feature their
              own specific End User License Agreements (EULAs). Those EULAs will govern things like
              in-game behavior, user-generated content, and software licensing, and will take
              precedence over these general website terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">
              4. Third-Party Links
            </h2>
            <p>
              We might link to other websites (like social media profiles, press coverage, or
              storefronts). We don&apos;t control those sites, and we aren&apos;t responsible for
              what happens when you leave our domain.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">
              5. Limitation of Liability
            </h2>
            <p>
              We build our digital experiences with care, but the internet is unpredictable. Our
              website is provided &quot;as is&quot; and &quot;as available.&quot; To the fullest
              extent permitted by law, Snap Hinge Studios and One Buffalo Labs will not be liable
              for any direct, indirect, incidental, or consequential damages resulting from your use
              or inability to use this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">
              6. Governing Law (Home Court)
            </h2>
            <p>
              Snap Hinge Studios is proud to be built in Buffalo, NY. Any legal disputes arising
              from these Terms or your use of this website will be governed by the laws of the State
              of New York, USA, without regard to its conflict of law principles. You agree to
              submit to the personal and exclusive jurisdiction of the state and federal courts
              located within Erie County, New York.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">7. Contact</h2>
            <p>
              If you have questions about these terms, or just want to talk shop, reach out to us:
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
