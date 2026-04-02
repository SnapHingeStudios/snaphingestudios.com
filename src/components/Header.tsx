import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import { faReddit, faBluesky } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_0_0_rgba(0,0,0,0.3)] flex justify-between items-center px-8 py-6">
      <a href="/" className="flex items-center gap-3 group transition-transform active:scale-95">
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-[0_4px_0_0_#287A41]">
          <FontAwesomeIcon icon={faCube} className="text-on-primary w-6 h-6" />
        </div>
        <span className="text-2xl font-headline font-black italic text-primary tracking-tighter">
          Snap Hinge Studios
        </span>
      </a>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex gap-4 items-center mr-4">
          <a href="#" className="text-on-surface-variant hover:text-primary transition-all active:translate-y-1">
            <FontAwesomeIcon icon={faReddit} className="w-6 h-6" />
          </a>
          <a href="#" className="text-on-surface-variant hover:text-primary transition-all active:translate-y-1">
            <FontAwesomeIcon icon={faBluesky} className="w-6 h-6" />
          </a>
        </div>
        <a href="#join" className="chunky-button chunky-button-primary text-sm px-6 py-3">
          Join The Herd
        </a>
      </div>
    </nav>
  );
}
