import { useState, useEffect } from 'react'
import { ArrowRight, Mail, ChevronDown, Terminal } from 'lucide-react'

const titles = [
  'SOC Home Lab Builder',
  'Log & PCAP Analyst',
  'SIEM Configuration',
  'Detection Engineering',
  'Security Automation',
]

function useTypingEffect(words, typeSpeed = 80, deleteSpeed = 40, pause = 2000) {
  const [display, setDisplay] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    let timeout

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIndex + 1))
        setCharIndex(c => c + 1)
      }, typeSpeed)
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIndex - 1))
        setCharIndex(c => c - 1)
      }, deleteSpeed)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setWordIndex(i => (i + 1) % words.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pause])

  return display
}

export default function Hero() {
  const typed = useTypingEffect(titles)

  return (
    <section id="top" className="relative min-h-[90vh] flex items-center hero-grid overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-20 -left-40 w-80 h-80 bg-cyber-400/10 dark:bg-cyber-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-40 w-96 h-96 bg-brand-400/10 dark:bg-brand-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — text */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyber-50 dark:bg-cyber-400/10 border border-cyber-200 dark:border-cyber-400/20 text-cyber-700 dark:text-cyber-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-cyber-500 animate-pulse" />
              Available for freelance work
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-gray-900 dark:text-white">
              Hi, I'm{' '}
              <span className="text-gradient">Rashad</span>
            </h1>

            <div className="mt-3 text-xl md:text-2xl font-semibold text-gray-500 dark:text-gray-400 h-9">
              <span>{typed}</span>
              <span className="animate-terminal-blink text-cyber-500 ml-0.5">|</span>
            </div>

            <p className="mt-6 max-w-lg text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Information Technology student focused on{' '}
              <strong className="text-gray-900 dark:text-white font-semibold">defensive security </strong>. I build SOC labs,
              analyze logs and PCAPs, set up SIEMs, and deliver actionable investigation reports.
              I work on lab, educational, and small-scale environments.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#services"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyber-500 to-brand-500 text-white font-semibold shadow-lg shadow-cyber-500/20 hover:shadow-cyber-500/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                View Services
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:border-cyber-400 hover:text-cyber-600 dark:hover:text-cyber-400 hover:bg-cyber-50 dark:hover:bg-cyber-400/5 transition-all duration-300"
              >
                <Mail size={18} />
                Contact Me
              </a>
            </div>

            {/* Quick stats */}
            <div className="mt-10 flex gap-8">
              {[
                { value: '11', label: 'Services' },
                { value: '8+', label: 'Projects' },
                { value: '9+', label: 'Security Tools' },
              ].map(s => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{s.value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — terminal mock */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="terminal animate-pulse-glow">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-400" />
                <div className="terminal-dot bg-yellow-400" />
                <div className="terminal-dot bg-green-400" />
                <span className="ml-2 text-xs text-gray-500 flex items-center gap-1.5">
                  <Terminal size={12} />
                  alert-triage.log
                </span>
              </div>
              <pre className="p-4 text-[13px] leading-[1.8] whitespace-pre-wrap break-words text-gray-400">
                <span className="text-gray-600 dark:text-gray-600">$ cat /var/log/soc/alert-triage.log</span>
                {'\n\n'}
                <span className="text-gray-500">14:02:11</span>{' '}
                <span className="text-blue-400">4624</span>{' '}
                <span className="text-gray-300">logon  user=lab\jdoe  type=3</span>
                {'\n'}
                <span className="text-gray-500">14:02:40</span>{' '}
                <span className="text-purple-400">Sysmon 1</span>{' '}
                <span className="text-gray-300">winword.exe → powershell.exe</span>
                {'\n'}
                <span className="block -mx-4 px-4 border-l-2 border-amber-400 bg-amber-400/10">
                  <span className="text-gray-500">14:02:41</span>{' '}
                  <span className="text-amber-400">Sysmon 1</span>{' '}
                  <span className="text-amber-200">powershell.exe -enc JABz...</span>
                </span>
                <span className="text-gray-500">14:02:44</span>{' '}
                <span className="text-red-400">Sysmon 3</span>{' '}
                <span className="text-gray-300">powershell.exe → 203.0.113.9:443</span>
              </pre>
              <div className="px-4 py-3 border-t border-gray-700/50 bg-gray-800/30">
                <p className="text-sm">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-red-400/10 text-red-400 text-xs font-semibold mr-2">
                    ⚠ SUSPICIOUS — ESCALATE
                  </span>
                  <span className="text-gray-400">
                    Office app spawned encoded PowerShell, then an outbound connection.
                  </span>
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Deliverable: timeline, IOC list, containment steps
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex justify-center mt-12 animate-bounce">
          <a href="#about" className="text-gray-400 dark:text-gray-600 hover:text-cyber-500 transition-colors" aria-label="Scroll down">
            <ChevronDown size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
