import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Users } from 'lucide-react';

const team = [
  {
    name: 'Ava Patel',
    role: 'CEO & Product',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop',
  },
  {
    name: 'Liam Chen',
    role: 'CTO',
    img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1000&auto=format&fit=crop',
  },
  {
    name: 'Sofia Garcia',
    role: 'Design Lead',
    img: 'https://images.unsplash.com/photo-1544005316-04ce71de9f6b?q=80&w=1000&auto=format&fit=crop',
  },
];

const TeamContact = () => {
  return (
    <section id="about" className="w-full bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Team */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 text-3xl font-semibold tracking-tight md:text-4xl"
            >
              <Users className="h-7 w-7 text-cyan-300" /> Meet the team
            </motion.h2>
            <p className="mt-3 max-w-xl text-slate-300">
              A small, focused group crafting delightful software and customer experiences.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {team.map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
                >
                  <img
                    src={m.img}
                    alt={m.name}
                    className="h-14 w-14 rounded-xl object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="font-semibold">{m.name}</h3>
                    <p className="text-sm text-slate-300">{m.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div id="contact" className="lg:pl-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-semibold tracking-tight md:text-4xl"
            >
              Contact us
            </motion.h2>
            <p className="mt-3 max-w-xl text-slate-300">
              We’re here to help you launch faster. Send us a message and we’ll get back within 24 hours.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm text-slate-300">Name</label>
                  <input
                    type="text"
                    required
                    className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-white outline-none ring-cyan-300/40 placeholder:text-slate-500 focus:ring-2"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="text-sm text-slate-300">Email</label>
                  <input
                    type="email"
                    required
                    className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-white outline-none ring-cyan-300/40 placeholder:text-slate-500 focus:ring-2"
                    placeholder="jane@company.com"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-slate-300">Message</label>
                <textarea
                  rows={4}
                  required
                  className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-white outline-none ring-cyan-300/40 placeholder:text-slate-500 focus:ring-2"
                  placeholder="Tell us a bit about your project..."
                />
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400/90 px-5 py-2 font-medium text-slate-900 transition hover:bg-cyan-300"
                >
                  <Mail className="h-4 w-4" /> Send message
                </button>
                <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 text-slate-300 hover:text-white">
                  <Mail className="h-4 w-4" /> hello@example.com
                </a>
                <a href="tel:+1234567890" className="inline-flex items-center gap-2 text-slate-300 hover:text-white">
                  <Phone className="h-4 w-4" /> +1 (234) 567-890
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamContact;
