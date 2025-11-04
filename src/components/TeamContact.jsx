import { Mail, Phone, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const team = [
  { name: 'Avery Chen', role: 'Product Lead' },
  { name: 'Jonas Patel', role: 'Design Engineer' },
  { name: 'Mina Torres', role: 'Motion Architect' },
];

export default function TeamContact() {
  return (
    <section id="contact" className="relative py-24 bg-white dark:bg-black">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-2 text-indigo-600 mb-3"><Users size={18} /> Team</div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">People behind the polish</h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">A small, senior team focused on craft, velocity, and calm communication.</p>
            <div className="mt-8 grid sm:grid-cols-3 gap-6">
              {team.map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true, amount: 0.4 }}
                  className="rounded-2xl p-4 border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500" />
                  <h3 className="mt-3 font-semibold text-zinc-900 dark:text-zinc-100">{m.name}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{m.role}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-indigo-600 mb-3"><Mail size={18} /> Contact</div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Let’s talk about your launch</h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">Tell us about your goals and timeline. We’ll get back within one business day.</p>
            <form className="mt-6 grid grid-cols-1 gap-4">
              <input type="text" placeholder="Full name" className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500" />
              <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500" />
              <textarea rows="4" placeholder="What are you building?" className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500" />
              <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition">
                <Phone size={18} /> Request callback
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
