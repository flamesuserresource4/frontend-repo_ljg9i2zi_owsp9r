import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import TeamContact from './components/TeamContact';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40 border-b border-zinc-200/60 dark:border-zinc-800/60">
        <nav className="mx-auto max-w-7xl px-6 md:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="text-lg font-semibold text-zinc-900 dark:text-white">VibeSaaS</a>
          <div className="hidden md:flex items-center gap-6 text-sm text-zinc-700 dark:text-zinc-300">
            <a href="#features" className="hover:text-zinc-900 dark:hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-zinc-900 dark:hover:text-white">Pricing</a>
            <a href="#contact" className="hover:text-zinc-900 dark:hover:text-white">Contact</a>
          </div>
          <a href="#pricing" className="hidden md:inline-flex px-4 py-2 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900">Get started</a>
        </nav>
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
