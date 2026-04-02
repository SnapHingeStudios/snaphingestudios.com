import { motion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function JoinTheHerd() {
  return (
    <section id="join" className="py-24 px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary p-8 md:p-20 rounded-xl md:rounded-[3rem] shadow-[0_24px_0_0_#287A41] relative overflow-hidden group">
          {/* Background Accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-on-primary/10 rounded-full -mr-20 -mt-20 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-on-primary/10 rounded-full -ml-20 -mb-20 blur-3xl" />

          <div className="relative z-10 text-center">
            <h2 className="text-5xl md:text-8xl font-headline font-black text-on-primary leading-none mb-6 tracking-tighter">
              Join The Herd.
            </h2>
            <p className="text-xl md:text-2xl text-on-primary/80 font-bold mb-12 max-w-2xl mx-auto leading-tight">
              Drop your email to get early access to our projects, behind-the-scenes updates, and
              exclusive digital drops.
            </p>

            <form
              className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto"
              onSubmit={(e) => e.preventDefault()}>
              <div className="flex-1 relative">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="absolute left-6 top-1/2 -translate-y-1/2 text-on-primary/40 w-6 h-6"
                />
                <input
                  className="w-full bg-on-primary/10 border-4 border-on-primary/20 rounded-full pl-16 pr-8 py-5 text-xl font-bold placeholder:text-on-primary/40 focus:outline-none focus:border-on-primary transition-all text-on-primary"
                  placeholder="your@email.com"
                  type="email"
                />
              </div>
              <button className="chunky-button chunky-button-dark text-xl px-10 py-5" type="submit">
                SIGN UP
              </button>
            </form>

            <p className="mt-8 text-on-primary/60 font-bold uppercase tracking-widest text-xs">
              NO SPAM. JUST PURE GAINS.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
