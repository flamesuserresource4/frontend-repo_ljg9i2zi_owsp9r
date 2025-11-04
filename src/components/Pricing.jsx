import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Starter',
    price: 0,
    desc: 'For testing ideas and quick demos.',
    features: ['Unlimited previews', 'Community support', 'Basic analytics']
  },
  {
    name: 'Pro',
    price: 29,
    highlight: true,
    desc: 'For teams shipping to production.',
    features: ['All Starter features', 'Priority support', 'Advanced analytics', 'Custom domains']
  },
  {
    name: 'Business',
    price: 99,
    desc: 'For ambitious companies at scale.',
    features: ['Everything in Pro', 'SLA & SSO', 'Audit logs', 'Dedicated success manager']
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Simple, transparent pricing</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">Start free. Upgrade when you’re ready.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true, amount: 0.4 }}
              className={`relative rounded-2xl p-6 border ${t.highlight ? 'bg-white dark:bg-zinc-900 border-indigo-500 shadow-[0_0_0_1px_rgba(99,102,241,0.4)]' : 'bg-white/60 dark:bg-zinc-900/40 border-zinc-200 dark:border-zinc-800'}`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] px-2 py-0.5 rounded-full bg-indigo-600 text-white border border-indigo-400">Most Popular</span>
              )}
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{t.name}</h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">${t.price}</span>
                <span className="text-sm text-zinc-500">/mo</span>
              </div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{t.desc}</p>
              <ul className="mt-4 space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <Check className="text-emerald-500" size={16} /> {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full py-2 rounded-xl font-medium ${t.highlight ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700'} transition`}>
                {t.highlight ? 'Get Pro' : 'Choose plan'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
