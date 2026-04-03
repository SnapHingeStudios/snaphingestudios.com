// --- Next ---
import Image from 'next/image';
// --- Animation & Icons ---
import { motion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

export default function Mascot() {
  return (
    <section className="py-32 px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 rounded-xl blur-3xl group-hover:bg-primary/30 transition-all" />
              <Image
                alt="Mac the Mascot"
                width={600}
                height={500}
                className="relative rounded-xl shadow-2xl w-full h-[500px] object-cover border-8 border-surface-container-highest"
                src="/mascot/mascot-player-one.webp"
              />
              <div className="absolute -bottom-8 -right-8 glass-card px-8 py-4 rounded-xl border-2 border-primary/30">
                <span className="text-primary font-headline font-black text-3xl tracking-widest uppercase">
                  Mac
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2">
            <span className="text-tertiary font-headline font-black uppercase tracking-[0.3em] text-sm mb-4 block">
              Meet The Mascot
            </span>
            <h2 className="text-5xl md:text-7xl font-headline font-black text-on-surface mb-8 leading-none">
              The Spirit of the <span className="italic">Herd.</span>
            </h2>
            <p className="text-xl text-on-surface-variant font-medium leading-relaxed mb-12">
              Meet Mac. He&apos;s more than just a logo to us—he&apos;s the heavy-hitting heart of
              the studio. Tough, resilient, and always ready to put the work in, Mac represents the
              blue-collar grit and unapologetic creativity we pour into every game and app we build.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-surface-container-highest px-6 py-4 rounded-full">
                <FontAwesomeIcon icon={faCircleCheck} className="text-primary w-6 h-6" />
                <span className="font-bold">Original Art</span>
              </div>
              <div className="flex items-center gap-3 bg-surface-container-highest px-6 py-4 rounded-full">
                <FontAwesomeIcon icon={faCircleCheck} className="text-primary w-6 h-6" />
                <span className="font-bold">Buffalo Soul</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
