import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import TeamContact from './components/TeamContact';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 font-inter text-white">
      {/* Simple translucent navbar */}
      <header className="fixed left-0 right-0 top-0 z-50 mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
        <a href="#home" className="flex items-center gap-2 font-semibold">
          <span className="inline-block h-2 w-2 rounded-full bg-cyan-300" />
          FinCard
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a className="hover:text-white" href="#features">Features</a>
          <a className="hover:text-white" href="#pricing">Pricing</a>
          <a className="hover:text-white" href="#about">Team</a>
          <a className="hover:text-white" href="#contact">Contact</a>
        </nav>
        <a
          href="#pricing"
          className="rounded-xl bg-cyan-400/90 px-3 py-2 text-sm font-medium text-slate-900 transition hover:bg-cyan-300"
        >
          Get Started
        </a>
      </header>

      <main>
        <Hero />
        <Features />
        <Pricing />
        <TeamContact />
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80 py-10 text-center text-sm text-slate-400">
        <div className="mx-auto max-w-7xl px-6">
          <p>© {new Date().getFullYear()} FinCard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
