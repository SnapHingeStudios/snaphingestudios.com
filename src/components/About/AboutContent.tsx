'use client';

import { motion, type Variants } from 'motion/react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function AboutContent() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <main className="min-h-screen py-32 px-8 bg-surface text-on-surface overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-16">
          <Link
            href="/"
            className="flex items-center gap-2 text-primary hover:underline font-bold w-fit">
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-24">
          <h1 className="text-5xl md:text-7xl font-headline font-black uppercase tracking-tight mb-6">
            Arcade Grit.
            <br />
            <span className="text-primary">716 Roots.</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-medium leading-relaxed max-w-3xl">
            We build games and apps with an edge. Started right here in Buffalo, New York, Snap
            Hinge Studios is an independent team focused on making software that just feels
            incredibly satisfying to use.
          </p>
        </motion.section>

        {/* The Grit Section */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="mb-24 bg-surface-container rounded-3xl p-8 md:p-16 border border-white/5 shadow-2xl relative overflow-hidden group">
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700" />

          <div className="relative z-10">
            <h2 className="text-3xl font-headline font-bold mb-6">
              No Corporate Fluff. Just Code.
            </h2>
            <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
              <p>
                Buffalo is a city built on hard work and deep winters. We bring that exact same
                blue-collar mentality to everything we build. We aren&apos;t backed by massive VC
                funding or driven by boardrooms. We forge our products by hand, line by line,
                focusing entirely on what matters most: how it feels to the player.
              </p>
              <p>
                Snap Hinge Studios operates as the dedicated entertainment wing of{' '}
                <a
                  href="https://onebuffalolabs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-on-surface underline decoration-primary underline-offset-4 hover:text-primary transition-colors font-bold">
                  One Buffalo Labs
                </a>
                . Built on a foundation of nearly 20 years of full-stack engineering experience, we
                don&apos;t just know how to design games—we know how to architect robust, scalable
                infrastructure to keep them running smoothly.
              </p>
            </div>
          </div>
        </motion.section>

        {/* The Mascot / Herd Section */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="mb-24 flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3 aspect-square bg-surface-container-highest rounded-2xl border border-white/10 flex items-center justify-center p-8 shadow-inner relative overflow-hidden">
            {/* Replace this div with your actual Mac Mascot Image/SVG later */}
            <div className="text-6xl text-primary/40 font-black font-headline tracking-tighter transform -rotate-12 select-none">
              MAC.
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-headline font-bold mb-6">The Way of the Herd</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
              In nature, when a storm hits the plains, cows run away from it—which just keeps them
              in the storm longer. The bison? The bison turns and charges directly into the storm,
              getting through it faster.
            </p>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              That&apos;s the philosophy behind our mascot, <strong>Mac</strong>. Game development
              is incredibly difficult. Bugs pile up, engines crash, and the grind gets heavy. But we
              don&apos;t run from the friction. We face the storm head-on. When you play a Snap
              Hinge game, you are running with the Herd.
            </p>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
          className="text-center pt-12 border-t border-white/5">
          <h2 className="text-3xl font-headline font-black mb-6 uppercase">
            Ready to join the stampede?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/#join" className="chunky-button chunky-button-primary px-8 py-4 text-lg">
              JOIN THE HERD
            </Link>
            <a
              href="mailto:snaphingestudios@gmail.com"
              className="px-8 py-4 text-lg font-bold text-on-surface bg-surface-container border-2 border-white/10 rounded-xl hover:bg-white/5 hover:border-white/20 transition-all flex items-center justify-center gap-3">
              <FontAwesomeIcon icon={faEnvelope} />
              CONTACT US
            </a>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
