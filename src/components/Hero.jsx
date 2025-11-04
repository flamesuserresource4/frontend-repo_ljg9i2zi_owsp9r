import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent } from 'framer-motion';
import { Rocket, BarChart3, MessageSquare, CreditCard } from 'lucide-react';

const ScreenAnalytics = () => (
  <div className="h-full w-full rounded-[22px] bg-gradient-to-br from-slate-900 to-slate-800 p-4 text-slate-100">
    <div className="mb-3 flex items-center justify-between">
      <div className="flex items-center gap-2 text-sm text-slate-300">
        <BarChart3 className="h-4 w-4 text-cyan-300" /> Realtime Analytics
      </div>
      <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs text-emerald-300">Live</span>
    </div>
    <div className="grid h-[72%] grid-cols-6 gap-2">
      {Array.from({ length: 18 }).map((_, i) => (
        <div key={i} className="flex items-end">
          <div
            className="w-full rounded-t bg-cyan-400/70"
            style={{ height: `${30 + ((i * 37) % 60)}%` }}
          />
        </div>
      ))}
    </div>
    <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-slate-300">
      <div className="rounded-lg border border-white/10 bg-white/5 p-2">Active: 1,284</div>
      <div className="rounded-lg border border-white/10 bg-white/5 p-2">Conv: 7.2%</div>
      <div className="rounded-lg border border-white/10 bg-white/5 p-2">MRR: $48k</div>
    </div>
  </div>
);

const ScreenChat = () => (
  <div className="h-full w-full rounded-[22px] bg-gradient-to-br from-slate-900 to-slate-800 p-4 text-slate-100">
    <div className="mb-3 flex items-center gap-2 text-sm text-slate-300">
      <MessageSquare className="h-4 w-4 text-cyan-300" /> Support Inbox
    </div>
    <div className="space-y-2 text-sm">
      <div className="max-w-[80%] rounded-2xl bg-white/10 p-3">Hey! Can you help me set up my workspace?</div>
      <div className="ml-auto max-w-[80%] rounded-2xl bg-cyan-400/20 p-3 text-cyan-100">Absolutely! I’ll walk you through the steps.</div>
      <div className="max-w-[80%] rounded-2xl bg-white/10 p-3">Awesome, thanks! Do you support SSO?</div>
      <div className="ml-auto max-w-[80%] rounded-2xl bg-cyan-400/20 p-3 text-cyan-100">Yes — SAML & OAuth are included on Pro.</div>
    </div>
  </div>
);

const ScreenCheckout = () => (
  <div className="h-full w-full rounded-[22px] bg-gradient-to-br from-slate-900 to-slate-800 p-4 text-slate-100">
    <div className="mb-3 flex items-center gap-2 text-sm text-slate-300">
      <CreditCard className="h-4 w-4 text-cyan-300" /> Secure Checkout
    </div>
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-2">
        <input className="rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-xs outline-none placeholder:text-slate-500" placeholder="Cardholder Name" />
        <input className="rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-xs outline-none placeholder:text-slate-500" placeholder="Email" />
      </div>
      <input className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-sm outline-none placeholder:text-slate-500" placeholder="Card Number" />
      <div className="grid grid-cols-3 gap-2">
        <input className="rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-xs outline-none placeholder:text-slate-500" placeholder="MM/YY" />
        <input className="rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-xs outline-none placeholder:text-slate-500" placeholder="CVC" />
        <button className="rounded-xl bg-cyan-400/90 px-3 py-2 text-xs font-medium text-slate-900 hover:bg-cyan-300">Pay $29</button>
      </div>
    </div>
  </div>
);

const screens = [ScreenAnalytics, ScreenChat, ScreenCheckout];

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });

  // 3D motion for the phone as the user scrolls
  const y = useTransform(scrollYProgress, [0, 1], ['-4vh', '10vh']);
  const rotateX = useTransform(scrollYProgress, [0, 1], [8, 2]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-12, 6]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  const [screenIndex, setScreenIndex] = useState(0);
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(screens.length - 1, Math.floor(v * (screens.length + 0.999)));
    setScreenIndex(idx);
  });

  const Screen = screens[screenIndex];

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-[92vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
    >
      {/* Background aesthetics */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950" />

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
        >
          <Rocket className="h-4 w-4 text-cyan-300" />
          <span className="text-xs tracking-wide text-slate-200">Phone‑first • Interactive • 3D feel</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mt-6 bg-gradient-to-b from-white to-slate-300 bg-clip-text text-5xl font-bold leading-tight tracking-tight text-transparent md:text-6xl"
        >
          A 3D smartphone hero whose screen evolves as you scroll
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 max-w-2xl text-lg text-slate-300"
        >
          Showcase different moments — analytics, chat, and checkout — for a stunning, product‑led SaaS experience.
        </motion.p>

        {/* 3D Phone */}
        <div className="mt-12 w-full">
          <div className="mx-auto flex max-w-5xl items-center justify-center">
            <div className="perspective-[1600px]">
              <motion.div
                style={{ y, rotateX, rotateY, scale }}
                className="relative mx-auto h-[540px] w-[270px] rounded-[36px] p-2"
              >
                {/* Phone frame */}
                <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-white/15 to-white/5 shadow-[0_20px_60px_-15px_rgba(34,211,238,0.25)] ring-1 ring-white/15 backdrop-blur-xl" />
                {/* Inner bezel */}
                <div className="absolute inset-1 rounded-[30px] bg-slate-950/60 ring-1 ring-white/10" />

                {/* Dynamic screen */}
                <div className="absolute inset-[10px] rounded-[22px] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={screenIndex}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.45 }}
                      className="h-full w-full"
                    >
                      <Screen />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Notch */}
                <div className="absolute left-1/2 top-2 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-black/60" />
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
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
