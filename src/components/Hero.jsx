import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Subtle parallax + tilt as user scrolls past the hero
  const y = useTransform(scrollYProgress, [0, 1], ['-6vh', '12vh']);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 8]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-[92vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
    >
      {/* 3D Scene with scroll-reactive positioning */}
      <motion.div
        style={{ y, rotate, scale }}
        className="absolute inset-0"
      >
        <Spline
          scene="https://prod.spline.design/gL1OurO-6gihUrEW/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* soft gradient vignettes that don't block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950" />
        <div className="pointer-events-none absolute -inset-x-20 -bottom-20 h-[40vh] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.25),transparent_60%)] blur-2xl" />
      </motion.div>

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
        >
          <Rocket className="h-4 w-4 text-cyan-300" />
          <span className="text-xs tracking-wide text-slate-200">Futuristic • Fintech • 3D motion</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mt-6 bg-gradient-to-b from-white to-slate-300 bg-clip-text text-5xl font-bold leading-tight tracking-tight text-transparent md:text-6xl"
        >
          A phone‑first SaaS hero that moves with you
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 max-w-2xl text-lg text-slate-300"
        >
          Scroll to see the 3D scene subtly shift—creating a premium, interactive feel that fits modern SaaS brands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#pricing"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-cyan-400/90 px-6 py-3 font-medium text-slate-900 shadow-[0_10px_30px_-10px_rgba(34,211,238,0.7)] transition hover:bg-cyan-300"
          >
            Get Started
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur-md transition hover:border-white/20 hover:bg-white/10"
          >
            Explore Features
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
