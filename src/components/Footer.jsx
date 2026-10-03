import { ShieldCheck, Heart, Github, Linkedin, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="section-divider bg-gray-50 dark:bg-[#060a12]">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & tagline */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-cyber-400 to-brand-500 text-white">
              <ShieldCheck size={18} />
            </div>
            <div>
              <p className="font-bold text-gray-900 dark:text-white">Rashad</p>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                Junior Cybersecurity / Blue Team Freelancer
              </p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/[username]"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/[0.06] text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/[0.1] transition-all"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/[username]"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/[0.06] text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/[0.1] transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 hover:text-cyber-500 dark:hover:text-cyber-400 transition-colors"
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200/60 dark:border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-600">
            © {new Date().getFullYear()} Rashad. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-600 flex items-center gap-1">
            Built with <Heart size={12} className="text-red-400" /> and defensive mindset
          </p>
        </div>
      </div>
    </footer>
  )
}
