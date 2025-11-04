import { useRef, useState } from 'react';
import { motion, useSpring, useScroll, useMotionValueEvent, useTransform, AnimatePresence } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { BarChart3, MessageSquare, CreditCard } from 'lucide-react';

function AnalyticsScreen() {
  return (
    <div className="w-full h-full p-6 bg-white/90 dark:bg-zinc-900/80 backdrop-blur rounded-2xl border border-white/30 shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">Analytics</h4>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">Live</span>
      </div>
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[62, 83, 47].map((v, i) => (
          <div key={i} className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-800">
            <p className="text-[10px] text-zinc-500">Metric {i + 1}</p>
            <p className="text-lg font-bold text-zinc-800 dark:text-zinc-100">{v}%</p>
          </div>
        ))}
      </div>
      <div className="h-24 rounded-lg bg-gradient-to-tr from-indigo-200 via-sky-200 to-emerald-200 dark:from-indigo-700/40 dark:via-sky-700/40 dark:to-emerald-700/40 relative overflow-hidden">
        <div className="absolute inset-0 flex items-end gap-1 p-2">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="w-2 flex-1 rounded-t bg-indigo-500/70 dark:bg-indigo-300/70"
              style={{ height: `${20 + Math.sin(i) * 20 + (i % 3) * 10}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ChatScreen() {
  const messages = [
    { me: false, text: 'Hey, can you help me with onboarding?' },
    { me: true, text: 'Absolutely! Do you want a quick tour?' },
    { me: false, text: 'Yes, show me analytics first.' },
  ];
  return (
    <div className="w-full h-full p-4 bg-white/90 dark:bg-zinc-900/80 backdrop-blur rounded-2xl border border-white/30 shadow-xl">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <p className="text-xs text-zinc-600 dark:text-zinc-300">Support Chat</p>
      </div>
      <div className="space-y-2">
        {messages.map((m, i) => (
          <div key={i} className={`max-w-[80%] px-3 py-2 rounded-2xl text-xs ${m.me ? 'ml-auto bg-indigo-600 text-white rounded-tr-sm' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 rounded-tl-sm'}`}>
            {m.text}
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2">
        <input placeholder="Type a message" className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-white/20 outline-none" />
        <button className="px-3 py-2 text-xs rounded-lg bg-indigo-600 text-white shadow-[0_0_0_0_rgba(99,102,241,0.6)] hover:shadow-[0_0_20px_6px_rgba(99,102,241,0.35)] transition-shadow">Send</button>
      </div>
    </div>
  );
}

function CheckoutScreen() {
  return (
    <div className="w-full h-full p-6 bg-white/90 dark:bg-zinc-900/80 backdrop-blur rounded-2xl border border-white/30 shadow-xl">
      <div className="mb-4">
        <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">Checkout</p>
        <p className="text-xs text-zinc-500">Pro Plan – $29/mo</p>
      </div>
      <div className="space-y-3">
        <input placeholder="Cardholder Name" className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-white/20 outline-none" />
        <input placeholder="Card Number" className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-white/20 outline-none" />
        <div className="grid grid-cols-2 gap-3">
          <input placeholder="MM/YY" className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-white/20 outline-none" />
          <input placeholder="CVC" className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-white/20 outline-none" />
        </div>
      </div>
      <button className="mt-4 w-full py-2 text-sm rounded-lg bg-indigo-600 text-white shadow-[0_0_0_0_rgba(99,102,241,0.6)] hover:shadow-[0_0_28px_10px_rgba(99,102,241,0.35)] transition-all">Pay $29</button>
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const phoneRef = useRef(null);

  // Mouse-driven tilt values
  const rotateX = useSpring(0, { stiffness: 220, damping: 18 });
  const rotateY = useSpring(0, { stiffness: 220, damping: 18 });
  const scale = useSpring(1, { stiffness: 160, damping: 16 });

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width - 0.5;
    const py = y / rect.height - 0.5;
    const maxTilt = 14;
    rotateY.set(px * maxTilt * 2);
    rotateX.set(-py * maxTilt * 2);
    scale.set(1.04);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  };

  // Scroll-driven animation + screen swap
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const [screen, setScreen] = useState('analytics');

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (v < 0.33) setScreen('analytics');
    else if (v < 0.66) setScreen('chat');
    else setScreen('checkout');
  });

  // Parallax and reveal on copy
  const titleY = useTransform(scrollYProgress, [0, 0.7], [0, -80]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [1, 1, 0.6]);
  const phoneY = useTransform(scrollYProgress, [0, 0.6], [0, -60]);
  const glimmerOpacity = useTransform(scrollYProgress, [0, 0.3, 0.9], [0.4, 0.7, 0.2]);

  return (
    <section id="home" ref={heroRef} className="relative min-h-[110vh] w-full flex items-center overflow-hidden">
      {/* Spline 3D background (updated asset) */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/5fQlL0qinzob1I8q/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
      </div>

      {/* Soft vignette and glow accents */}
      <motion.div style={{ opacity: glimmerOpacity }} className="pointer-events-none absolute -top-24 -left-24 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-indigo-500/20 via-violet-500/20 to-fuchsia-500/20 blur-3xl" />
      <motion.div style={{ opacity: glimmerOpacity }} className="pointer-events-none absolute -bottom-24 -right-24 w-[36rem] h-[36rem] rounded-full bg-gradient-to-br from-cyan-500/20 via-sky-500/20 to-emerald-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div style={{ y: titleY, opacity: copyOpacity }} className="text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs border border-white/20 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Now with elevated 3D + parallax motion</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Build modern products with effortless clarity
            </h1>
            <p className="mt-4 text-zinc-200 max-w-xl">
              A vibrant, animated experience blending 3D, motion, and smart UI patterns to help your product stand out.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#pricing" className="relative group inline-flex items-center justify-center px-5 py-3 rounded-xl font-medium text-zinc-900 bg-white overflow-hidden">
                <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.35),transparent_60%)]" />
                <span className="relative">Start for free</span>
              </a>
              <a href="#features" className="relative group inline-flex items-center justify-center px-5 py-3 rounded-xl text-white border border-white/30 overflow-hidden">
                <span className="absolute -inset-px rounded-xl bg-gradient-to-r from-indigo-500/0 via-white/20 to-indigo-500/0 opacity-0 group-hover:opacity-100 blur transition-opacity" />
                <span className="relative">See features</span>
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-xs text-zinc-300">
              <div className="flex items-center gap-2"><BarChart3 size={16} /> Real-time analytics</div>
              <div className="flex items-center gap-2"><MessageSquare size={16} /> Integrated support</div>
              <div className="flex items-center gap-2"><CreditCard size={16} /> Secure payments</div>
            </div>
          </motion.div>

          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative h-[560px] md:h-[600px] flex items-center justify-center"
          >
            <motion.div
              ref={phoneRef}
              style={{ rotateX, rotateY, scale, y: phoneY, transformStyle: 'preserve-3d' }}
              className="relative w-[300px] h-[520px] md:w-[340px] md:h-[560px] rounded-[36px] p-3 bg-white/10 border border-white/20 shadow-2xl backdrop-blur-xl"
            >
              {/* Phone frame notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-5 bg-black/60 rounded-full" style={{ transform: 'translateZ(20px)' }} />

              {/* Glass highlight */}
              <div className="pointer-events-none absolute inset-0 rounded-[36px] bg-gradient-to-br from-white/20 via-transparent to-transparent" style={{ transform: 'translateZ(5px)' }} />

              {/* Iridescent rim glow */}
              <div className="pointer-events-none absolute inset-0 rounded-[36px] ring-1 ring-inset ring-white/20" />

              {/* Screen container */}
              <div className="relative w-full h-full rounded-[28px] bg-gradient-to-b from-zinc-50/90 to-zinc-100/70 dark:from-zinc-900/80 dark:to-zinc-900/60 overflow-hidden" style={{ transform: 'translateZ(10px)' }}>
                <div className="absolute inset-0 p-4">
                  <AnimatePresence mode="wait">
                    {screen === 'analytics' && (
                      <motion.div key="analytics" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="w-full h-full">
                        <AnalyticsScreen />
                      </motion.div>
                    )}
                    {screen === 'chat' && (
                      <motion.div key="chat" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="w-full h-full">
                        <ChatScreen />
                      </motion.div>
                    )}
                    {screen === 'checkout' && (
                      <motion.div key="checkout" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="w-full h-full">
                        <CheckoutScreen />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Floating badges with subtle scroll */}
            <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, -80]) }} className="hidden md:block absolute -left-10 top-10">
              <div className="rounded-xl px-3 py-2 text-[11px] bg-white/10 border border-white/20 text-white backdrop-blur">95% CSAT</div>
            </motion.div>
            <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }} className="hidden md:block absolute -right-10 bottom-16">
              <div className="rounded-xl px-3 py-2 text-[11px] bg-white/10 border border-white/20 text-white backdrop-blur">+38% Conversion</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
