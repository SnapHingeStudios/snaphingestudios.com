// --- Next ---
import Image from 'next/image';
import Link from 'next/link';

// --- Icons ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReddit,
  faBluesky,
  faFacebook,
  faXTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const startYear = 2026;
  const currentYear = new Date().getFullYear();

  // If we are past 2026, show the range. Otherwise, just show 2026.
  const displayYear = currentYear > startYear ? `${startYear} - ${currentYear}` : `${startYear}`;

  return (
    <footer className="bg-surface-container-low w-full py-12 px-8 border-t border-white/5 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-[0_4px_0_0_#287A41]">
              <Image
                src="/icons/shs-logo.svg"
                alt="Snap Hinge Studios Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
            <span className="text-xl font-headline font-black text-on-surface uppercase tracking-tight">
              Snap Hinge Studios
            </span>
          </div>
          <p className="text-sm font-medium text-on-surface-variant mt-2">
            &copy; {displayYear} Snap Hinge Studios. A{' '}
            <a
              href="https://onebuffalolabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface hover:text-primary transition-colors underline decoration-white/20 underline-offset-4">
              One Buffalo Labs
            </a>{' '}
            Company.
          </p>
        </div>

        <div className="flex gap-8">
          <Link
            href="/about"
            className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">
            About Us
          </Link>
          <Link
            href="/privacy"
            className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">
            Terms of Service
          </Link>
        </div>

        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/SnapHingeStudios/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer border border-white/5"
            aria-label="Follow us on Facebook">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a
            href="https://x.com/SnapHingeStudio"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer border border-white/5"
            aria-label="Follow us on X (Twitter)">
            <FontAwesomeIcon icon={faXTwitter} size="lg" />
          </a>
          <a
            href="https://bsky.app/profile/snaphingestudios.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer border border-white/5"
            aria-label="Follow us on Bluesky">
            <FontAwesomeIcon icon={faBluesky} size="lg" />
          </a>
          <a
            href="https://www.instagram.com/snaphingestudios/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer border border-white/5"
            aria-label="Follow us on Instagram">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a
            href="https://www.reddit.com/r/SnapHingeStudios/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer border border-white/5"
            aria-label="Follow us on Reddit">
            <FontAwesomeIcon icon={faReddit} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
}
