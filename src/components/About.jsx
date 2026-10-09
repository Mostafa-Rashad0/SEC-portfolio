import { Target, Shield, BookOpen } from 'lucide-react'
import Section from './Section'

const highlights = [
  {
    icon: Shield,
    title: 'Blue Team Focus',
    desc: 'SOC operations, security monitoring, log analysis, and incident investigation — I specialize in the defensive side of cybersecurity.',
  },
  {
    icon: Target,
    title: 'Practical & Hands-On',
    desc: 'Every service I offer is backed by lab work and real tool experience — Splunk, Wazuh, Wireshark, Sysmon, and more.',
  },
  {
    icon: BookOpen,
    title: 'Clear Deliverables',
    desc: 'You get documentation, reports, and actionable findings — not vague advice. I focus on what you can actually use.',
  },
]

export default function About() {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Information Technology student with a focus on cybersecurity and blue team operations."
    >
      <div className="grid gap-8 lg:grid-cols-3">
        {highlights.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group glass-card rounded-2xl p-6 hover-lift"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-cyber-50 dark:bg-cyber-400/10 text-cyber-600 dark:text-cyber-400 mb-4 group-hover:scale-110 transition-transform">
              <Icon size={22} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 glass-card rounded-2xl p-8">
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
          I'm a <strong className="text-gray-900 dark:text-white">Information Technoloy / Software Engineering student</strong> focused on{' '}
          <strong className="text-cyber-600 dark:text-cyber-400">cybersecurity and Blue Team / SOC operations</strong>.
          My interests include SOC analysis, security monitoring, log analysis, SIEM implementation,
          network infrastructure,network security, incident investigation, threat detection, and security automation.
        </p>
        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
          I'm comfortable working with <strong className="text-gray-900 dark:text-white">Python</strong> and{' '}
          <strong className="text-gray-900 dark:text-white">Linux</strong>, and I spend my time building practical labs,
          completing cybersecurity challenges, and developing the technical skills needed to deliver real value to clients.
          I position myself honestly as a <strong className="text-gray-900 dark:text-white">junior-level practitioner</strong> —
          I focus on lab, educational, and small-scale environments where I can deliver high-quality work.
        </p>
      </div>
    </Section>
  )
}
