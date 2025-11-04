import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$9',
    period: '/mo',
    highlight: false,
    features: ['All core features', 'Email support', 'Basic analytics'],
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/mo',
    highlight: true,
    features: ['Everything in Starter', 'Priority support', 'Advanced analytics', 'Team collaboration'],
  },
  {
    name: 'Business',
    price: '$99',
    period: '/mo',
    highlight: false,
    features: ['Custom onboarding', 'Dedicated manager', 'SLA & security reviews'],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="w-full bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold tracking-tight md:text-4xl"
        >
          Simple, transparent pricing
        </motion.h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-300">
          Start small and scale as you grow. Cancel anytime.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative rounded-2xl border p-6 backdrop-blur-md ${
                t.highlight
                  ? 'border-cyan-300/40 bg-cyan-400/10 shadow-[0_20px_60px_-15px_rgba(34,211,238,0.35)]'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              {t.highlight && (
                <span className="absolute -top-3 right-4 rounded-full bg-cyan-400/90 px-3 py-1 text-xs font-medium text-slate-900">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <div className="mt-2 flex items-end gap-1">
                <span className="text-4xl font-bold">{t.price}</span>
                <span className="pb-1 text-slate-300">{t.period}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-cyan-300" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 font-medium transition ${
                  t.highlight
                    ? 'bg-cyan-400/90 text-slate-900 hover:bg-cyan-300'
                    : 'border border-white/10 bg-white/5 text-white hover:border-white/20 hover:bg-white/10'
                }`}
              >
                Choose {t.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
