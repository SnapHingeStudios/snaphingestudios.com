'use client';

// --- React ---
import { useEffect, useState } from 'react';
// --- Next ---
import Image from 'next/image';
// --- Animation & Icons ---
import { motion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faSnowflake } from '@fortawesome/free-solid-svg-icons';

// --- Types ---
interface Particle {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 14 + 10,
      duration: Math.random() * 5 + 7,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.4 + 0.2,
    }));

    setParticles(generatedParticles);
  }, []);

  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((particle) => (
          <FontAwesomeIcon
            key={particle.id}
            icon={faSnowflake}
            className="absolute text-white"
            style={{
              left: `${particle.left}%`,
              fontSize: `${particle.size}px`,
              opacity: particle.opacity,
              animation: `snow ${particle.duration}s linear ${particle.delay}s infinite`,
            }}
          />
        ))}

        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full blur-xl animate-float" />
        <div
          className="absolute top-1/2 right-1/3 w-8 h-8 bg-tertiary rounded-full blur-2xl animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute bottom-1/4 left-1/2 w-6 h-6 bg-primary rounded-full blur-xl animate-float"
          style={{ animationDelay: '4s' }}
        />
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: -3 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="mb-8 flex justify-center">
          <div className="w-48 h-48 md:w-64 md:h-64 bg-primary rounded-[3rem] flex items-center justify-center shadow-[0_20px_0_0_#287A41] hover:rotate-0 transition-transform duration-500 cursor-pointer group">
            <Image
              src="/icons/shs-logo.svg"
              alt="Snap Hinge Studios Logo"
              width={224}
              height={224}
              className="w-40 h-40 md:w-56 md:h-56 group-hover:scale-110 transition-transform"
              priority
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-9xl font-headline font-black text-on-surface tracking-tighter leading-none mb-4">
          Snap Hinge Studios.
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-2xl md:text-4xl font-headline font-bold text-primary italic tracking-tight opacity-90">
          Arcade Grit. 716 Roots.
        </motion.p>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <FontAwesomeIcon icon={faChevronDown} className="text-on-surface-variant w-10 h-10" />
      </motion.div>
    </header>
  );
}
