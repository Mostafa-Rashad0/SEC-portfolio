import { useState } from 'react'
import { Mail, MapPin, Phone, Github, Linkedin, Send, CheckCircle, ArrowUpRight } from 'lucide-react'
import Section from './Section'

export default function Contact() {
  const [copied, setCopied] = useState(null)

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label)
      setTimeout(() => setCopied(null), 2000)
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: '[your.email@example.com]',
      href: 'mailto:[your.email@example.com]',
      copyable: true,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '[+XX XXX XXX XXXX]',
      href: 'tel:+XXXXXXXXXXX',
      copyable: true,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: '[Your City, Country]',
      href: null,
      copyable: false,
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      value: '[GitHub username]',
      href: 'https://github.com/[username]',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '[LinkedIn profile]',
      href: 'https://linkedin.com/in/[username]',
    },
  ]

  return (
    <Section
      id="contact"
      title="Get in Touch"
      subtitle="Available for freelance work. Let's discuss your project."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left — Contact info */}
        <div className="space-y-6">
          {/* CTA card */}
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Let's Work Together
            </h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              Whether you need a SOC home lab, SIEM configuration, log analysis, or security automation —
              I'm ready to deliver. Send me your requirements and I'll respond within 24 hours.
            </p>

            {/* Contact details */}
            <div className="space-y-3">
              {contactInfo.map(({ icon: Icon, label, value, href, copyable }) => (
                <div key={label} className="flex items-center gap-3 group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-cyber-50 dark:bg-cyber-400/10 text-cyber-600 dark:text-cyber-400">
                    <Icon size={18} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm font-medium text-gray-900 dark:text-white hover:text-cyber-600 dark:hover:text-cyber-400 transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{value}</p>
                    )}
                  </div>
                  {copyable && !value.includes('[') && (
                    <button
                      onClick={() => copyToClipboard(value, label)}
                      className="opacity-0 group-hover:opacity-100 text-xs text-gray-400 hover:text-cyber-500 transition-all"
                    >
                      {copied === label ? <CheckCircle size={14} className="text-green-500" /> : 'Copy'}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Social links */}
          <div className="grid grid-cols-2 gap-4">
            {socialLinks.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-5 hover-lift group flex items-center gap-3"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/[0.06] text-gray-600 dark:text-gray-400 group-hover:bg-cyber-50 dark:group-hover:bg-cyber-400/10 group-hover:text-cyber-600 dark:group-hover:text-cyber-400 transition-all">
                  <Icon size={18} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{label}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">{value}</p>
                </div>
                <ArrowUpRight size={14} className="text-gray-400 group-hover:text-cyber-500 transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Right — Quick message CTA */}
        <div className="glass-card rounded-2xl p-8 flex flex-col justify-center">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyber-400/20 to-brand-400/20 text-cyber-500 mb-6">
              <Send size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Ready to Start?
            </h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6 max-w-sm mx-auto">
              Check my services section above, pick what you need, and reach out.
              I'll provide a clear scope, timeline, and deliverables.
            </p>

            {/* What to include */}
            <div className="text-left bg-gray-50 dark:bg-white/[0.03] rounded-xl p-5 mb-6">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-3">
                Include in your message:
              </p>
              <ul className="space-y-2">
                {[
                  'Which service you need',
                  'Brief description of your environment',
                  'Any specific tools or preferences',
                  'Your timeline expectations',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyber-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="mailto:[your.email@example.com]?subject=Freelance%20Inquiry&body=Hi%20Rashad%2C%0A%0AI'm%20interested%20in%3A%0A%0A"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyber-500 to-brand-500 text-white font-semibold shadow-lg shadow-cyber-500/20 hover:shadow-cyber-500/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Mail size={18} />
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}
