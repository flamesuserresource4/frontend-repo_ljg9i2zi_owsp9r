import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, CreditCard } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-6 w-6 text-cyan-300" />,
    title: 'Bank‑level security',
    desc: 'Built with secure defaults and best practices to keep your data safe at every step.',
  },
  {
    icon: <Zap className="h-6 w-6 text-cyan-300" />,
    title: 'Blazing fast',
    desc: 'Optimized React components and animations that feel fluid on every device.',
  },
  {
    icon: <CreditCard className="h-6 w-6 text-cyan-300" />,
    title: 'Fintech‑ready UI',
    desc: 'Glassmorphic aesthetics paired with a 3D credit card experience for instant trust.',
  },
];

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-slate-950 py-24 text-white">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top_left,rgba(56,189,248,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold tracking-tight md:text-4xl"
        >
          Features that convert
        </motion.h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-300">
          Everything you need to communicate value clearly and drive signups.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:border-white/20 hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 ring-1 ring-cyan-300/20">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
