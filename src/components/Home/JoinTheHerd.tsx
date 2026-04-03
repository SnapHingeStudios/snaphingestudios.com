'use client';

import { useState } from 'react';
import { motion } from 'motion/react'; // Adjust import if using framer-motion instead
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faCircleCheck,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';

export default function JoinTheHerd() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // Spam honeypot check
    const formData = new FormData(e.currentTarget);
    if (formData.get('shs-bot-trap')) {
      setStatus('error');
      setErrorMessage('Invalid submission.');
      return;
    }

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong.');
      } else {
        setStatus('success');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
    }
  }

  return (
    <section id="join" className="py-24 px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary p-8 md:p-20 rounded-xl md:rounded-[3rem] shadow-[0_24px_0_0_#287A41] relative overflow-hidden group">
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

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-on-primary/10 border-4 border-on-primary/20 rounded-3xl p-8 max-w-2xl mx-auto">
                <FontAwesomeIcon icon={faCircleCheck} className="text-on-primary w-12 h-12 mb-4" />
                <h3 className="text-3xl font-headline font-black text-on-primary mb-2">
                  Welcome to the Herd.
                </h3>
                <p className="text-on-primary/80 font-bold">Your email has been locked in.</p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto relative">
                {/* SPAM HONEYPOT */}
                <div aria-hidden="true" className="absolute left-[-9999px]">
                  <input type="text" name="shs-bot-trap" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="flex-1 relative">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="absolute left-6 top-1/2 -translate-y-1/2 text-on-primary/40 w-6 h-6"
                  />
                  <input
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-on-primary/10 border-4 border-on-primary/20 rounded-full pl-16 pr-8 py-5 text-xl font-bold placeholder:text-on-primary/40 focus:outline-none focus:border-on-primary transition-all text-on-primary disabled:opacity-50"
                    placeholder="your@email.com"
                    type="email"
                    required
                    disabled={status === 'loading'}
                  />
                </div>
                <button
                  className="chunky-button chunky-button-dark text-xl px-10 py-5 disabled:opacity-50 disabled:cursor-not-allowed"
                  type="submit"
                  disabled={status === 'loading'}>
                  {status === 'loading' ? 'INCOMING...' : 'SIGN UP'}
                </button>
              </form>
            )}

            {status === 'error' && (
              <div className="mt-4 flex items-center justify-center gap-2 text-on-primary font-bold bg-black/20 py-2 px-4 rounded-full max-w-fit mx-auto">
                <FontAwesomeIcon icon={faTriangleExclamation} />
                <span>{errorMessage}</span>
              </div>
            )}

            <p className="mt-8 text-on-primary/60 font-bold uppercase tracking-widest text-xs">
              NO SPAM. JUST PURE GAINS.
              <br className="md:hidden" />
              <a href="/privacy" className="underline ml-2 hover:text-on-primary transition-colors">
                Privacy Policy
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
