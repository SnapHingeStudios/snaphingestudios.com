import { motion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';

export default function Identity() {
  return (
    <section className="py-32 px-8 bg-surface-container-low relative overflow-hidden">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-8">
          <h2 className="text-4xl md:text-6xl font-headline font-black text-on-surface mb-8 leading-tight">
            Unapologetic Digital <br />
            <span className="text-primary">Experiences.</span>
          </h2>
          <div className="space-y-6 text-xl md:text-2xl text-on-surface-variant font-medium leading-relaxed">
            <p>
              We are an independent software and game development studio out of{' '}
              <span className="text-on-surface font-bold">Buffalo, NY.</span> We don't limit
              ourselves to one genre or style.
            </p>
            <p>
              Our goal is simple: build high-impact digital experiences inspired by the undeniable
              energy of the 716. From industrial grit to playful dopamine loops, we are currently
              engineering our first title.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, rotate: 12, scale: 0.8 }}
          whileInView={{ opacity: 1, rotate: 6, scale: 1 }}
          viewport={{ once: true }}
          className="md:col-span-4 flex justify-center">
          <div className="glass-card p-12 rounded-xl border-4 border-white/5 transform transition-transform hover:rotate-0">
            <FontAwesomeIcon icon={faGamepad} className="text-primary w-24 h-24" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
