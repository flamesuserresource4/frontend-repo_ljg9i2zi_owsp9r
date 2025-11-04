import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import TeamContact from './components/TeamContact';

export default function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40 border-b border-zinc-200/60 dark:border-zinc-800/60">
        <nav className="mx-auto max-w-7xl px-6 md:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="relative text-lg font-semibold text-zinc-900 dark:text-white">
            VibeSaaS
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-indigo-500 to-violet-500 transition-all group-hover:w-full" />
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm text-zinc-700 dark:text-zinc-300">
            <a href="#features" className="relative group hover:text-zinc-900 dark:hover:text-white">
              Features
              <span className="pointer-events-none absolute -inset-x-2 -inset-y-1 rounded-lg opacity-0 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.18),transparent_60%)] transition" />
            </a>
            <a href="#pricing" className="relative group hover:text-zinc-900 dark:hover:text-white">
              Pricing
              <span className="pointer-events-none absolute -inset-x-2 -inset-y-1 rounded-lg opacity-0 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.18),transparent_60%)] transition" />
            </a>
            <a href="#contact" className="relative group hover:text-zinc-900 dark:hover:text-white">
              Contact
              <span className="pointer-events-none absolute -inset-x-2 -inset-y-1 rounded-lg opacity-0 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.18),transparent_60%)] transition" />
            </a>
          </div>
          <a href="#pricing" className="relative hidden md:inline-flex px-4 py-2 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 overflow-hidden">
            <span className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.25),transparent_60%)]" />
            <span className="relative">Get started</span>
          </a>
        </nav>
        {/* Scroll progress bar */}
        <motion.div style={{ scaleX: progress }} className="origin-left h-0.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500" />
      </header>

      <main>
        <Hero />
        <Features />
        <Pricing />
        <TeamContact />
      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 md:px-8 h-16 flex items-center justify-between text-sm text-zinc-600 dark:text-zinc-400">
          <p>© {new Date().getFullYear()} VibeSaaS. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#features" className="hover:text-zinc-900 dark:hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-zinc-900 dark:hover:text-white">Pricing</a>
            <a href="#contact" className="hover:text-zinc-900 dark:hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
