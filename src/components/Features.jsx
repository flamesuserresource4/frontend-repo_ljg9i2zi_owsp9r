import { motion, useScroll, useTransform } from 'framer-motion';
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
  const { scrollYProgress } = useScroll();
  const bgShift = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section id="features" className="relative py-24 bg-white dark:bg-black overflow-hidden">
      {/* Parallax gradient backdrop */}
      <motion.div style={{ y: bgShift }} className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[80rem] h-[80rem] rounded-full bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10 blur-3xl" />

      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Features that move people</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">Thoughtful details, delightful interactions, and solid foundations.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              viewport={{ once: true, amount: 0.4 }}
              className="group relative rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/40 backdrop-blur hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.35)] transition"
            >
              <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.18),transparent_60%)]" />
              <div className="relative w-12 h-12 rounded-xl bg-indigo-600/10 text-indigo-500 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <f.icon />
              </div>
              <h3 className="relative font-semibold text-zinc-900 dark:text-zinc-100">{f.title}</h3>
              <p className="relative mt-2 text-sm text-zinc-600 dark:text-zinc-400">{f.desc}</p>
              <button className="relative mt-5 inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-medium text-indigo-600 hover:text-indigo-700">
                Learn more
                <span className="absolute inset-0 rounded-lg ring-1 ring-indigo-500/30 group-hover:ring-indigo-500/60" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
