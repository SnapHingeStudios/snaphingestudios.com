// --- Next ---
import type { Metadata, Viewport } from 'next';
// --- Components ---
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnalyticsInitializer from '@/components/AnalyticsInitializer';
// --- Utils ---
import { generateMetadata } from '@/utils/metadata';
import { generateViewport } from '@/utils/viewport';
// --- Styles ---
import './globals.css';

// Font Awesome CSS fix
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export const metadata: Metadata = generateMetadata();
export const viewport: Viewport = generateViewport();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-surface text-on-surface font-body overflow-x-hidden selection:bg-primary selection:text-on-primary">
        <div className="min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
        <AnalyticsInitializer />
      </body>
    </html>
  );
}
