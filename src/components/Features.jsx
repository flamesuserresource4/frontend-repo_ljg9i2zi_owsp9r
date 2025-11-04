import { motion } from 'framer-motion';
import { Rocket, Shield, Zap, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Launch Faster',
    desc: 'Prebuilt components and motion patterns to ship in days, not weeks.'
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    desc: 'Best practices baked in with robust, audited dependencies.'
  },
  {
    icon: Zap,
    title: 'Blazing Performance',
    desc: 'Smooth 60fps animations and optimized rendering out of the box.'
  },
  {
    icon: BarChart3,
    title: 'Actionable Insights',
    desc: 'Measure engagement and conversion with built-in analytics patterns.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-white dark:bg-black">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Features that move people</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">Thoughtful details, delightful interactions, and solid foundations.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true, amount: 0.4 }}
              className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40 backdrop-blur hover:shadow-xl transition"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-600/10 text-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <f.icon />
              </div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{f.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
