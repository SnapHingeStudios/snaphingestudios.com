import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import { faReddit, faBluesky } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low w-full py-12 px-8 border-t border-white/5 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
              <FontAwesomeIcon icon={faCube} className="text-on-primary w-4 h-4" />
            </div>
            <span className="text-lg font-headline font-black text-on-surface uppercase tracking-tight">
              Snap Hinge Studios
            </span>
          </div>
          <p className="text-sm font-medium text-on-surface-variant">
            Copyright 2026 Snap Hinge Studios. A One Buffalo Labs Company.
          </p>
        </div>

        <div className="flex gap-8">
          <a href="#" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Reddit</a>
          <a href="#" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">BlueSky</a>
          <a href="#" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</a>
        </div>

        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer border border-white/5">
            <FontAwesomeIcon icon={faReddit} className="w-5 h-5" />
          </div>
          <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer border border-white/5">
            <FontAwesomeIcon icon={faBluesky} className="w-5 h-5" />
          </div>
        </div>
      </div>
    </footer>
  );
}
