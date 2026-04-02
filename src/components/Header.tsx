// --- Next ---
import Image from 'next/image';
// --- Icons ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReddit,
  faBluesky,
  faFacebook,
  faXTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

export default function Header() {
  return (
    <nav className="absolute top-0 w-full z-50 bg-surface/60 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_0_0_rgba(0,0,0,0.3)] flex justify-between items-center px-8 py-6">
      <a
        href="/"
        className="flex items-center gap-3 group transition-transform active:scale-95"
        aria-label="Snap Hinge Studios Home">
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-[0_4px_0_0_#287A41]">
          <Image
            src="/icons/shs-logo.svg"
            alt="Snap Hinge Studios Logo"
            width={32}
            height={32}
            className="w-8 h-8 group-hover:scale-110 transition-transform"
            priority
          />
        </div>
        <span className="text-2xl font-headline font-black italic text-primary tracking-tighter">
          Snap Hinge Studios
        </span>
      </a>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex gap-4 items-center mr-4">
          <a
            href="https://www.facebook.com/SnapHingeStudios/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary transition-all active:translate-y-1"
            aria-label="Follow us on Facebook">
            <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
          </a>
          <a
            href="https://x.com/SnapHingeStudio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary transition-all active:translate-y-1"
            aria-label="Follow us on X (Twitter)">
            <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6" />
          </a>
          <a
            href="https://bsky.app/profile/snaphingestudios.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary transition-all active:translate-y-1"
            aria-label="Follow us on Bluesky">
            <FontAwesomeIcon icon={faBluesky} className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/snaphingestudios/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary transition-all active:translate-y-1"
            aria-label="Follow us on Instagram">
            <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
          </a>
          <a
            href="https://www.reddit.com/r/SnapHingeStudios/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary transition-all active:translate-y-1"
            aria-label="Follow us on Reddit">
            <FontAwesomeIcon icon={faReddit} className="w-6 h-6" />
          </a>
        </div>
        <a href="#join" className="chunky-button chunky-button-primary text-sm px-6 py-3">
          Join The Herd
        </a>
      </div>
    </nav>
  );
}
