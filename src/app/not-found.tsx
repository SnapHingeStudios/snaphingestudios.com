import type { Metadata } from 'next';
import { generateMetadata } from '@/utils/metadata';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from '@fortawesome/free-solid-svg-icons';

// Generate metadata for the 404 page
export const metadata: Metadata = generateMetadata({
  title: '404 - Level Not Found',
  description:
    'Looks like you wandered off the map. Return to the homepage to find our games, apps, and the rest of the herd.',
  robots: {
    index: false,
    follow: true,
  },
});

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-center px-8 bg-surface overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 select-none z-0">
        <span className="text-[20rem] md:text-[30rem] font-headline font-black text-on-surface">
          404
        </span>
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
        {/* Floating Arcade Ghost */}
        <div className="mb-8 animate-[bounce_3s_infinite]">
          <div className="w-24 h-24 bg-surface-container-highest rounded-2xl flex items-center justify-center border-4 border-white/5 shadow-[0_8px_0_0_rgba(0,0,0,0.4)] transform -rotate-6">
            <FontAwesomeIcon icon={faGhost} className="text-primary" size="4x" />
          </div>
        </div>

        <span className="text-primary font-headline font-black uppercase tracking-[0.3em] text-sm mb-4 block">
          Error 404
        </span>

        <h1 className="text-5xl md:text-7xl font-headline font-black text-on-surface mb-6 leading-none tracking-tighter">
          Level Not <span className="italic">Found.</span>
        </h1>

        <p className="text-xl text-on-surface-variant font-medium leading-relaxed mb-10">
          Looks like you wandered off the map. The page you&apos;re looking for has desynchronized
          from the server or never existed in this timeline.
        </p>

        <Link href="/" className="chunky-button chunky-button-primary text-lg px-8 py-4">
          RETURN TO MAIN MENU
        </Link>
      </div>
    </main>
  );
}
