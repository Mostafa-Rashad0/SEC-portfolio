import { GraduationCap, BookOpen, Calendar } from 'lucide-react'
import Section from './Section'

export default function Education() {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="Academic background and continuous learning."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {/* University */}
        <div className="glass-card rounded-2xl p-6 hover-lift">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-cyber-50 dark:bg-cyber-400/10 text-cyber-600 dark:text-cyber-400">
              <GraduationCap size={22} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                Information Technology
              </h3>
              <p className="text-cyber-600 dark:text-cyber-400 text-sm mt-1">
                Minia University
              </p>
              <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-500 mt-2">
                <Calendar size={13} />
                2027
              </div>

              <div className="mt-4 space-y-2">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider">Relevant coursework</p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Data Structures & Algorithms',
                    'Operating Systems',
                    'Computer Networks',
                    'Information Security',
                    'Database Systems',
                    'Software Engineering',
                  ].map(c => (
                    <span
                      key={c}
                      className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/[0.06] text-gray-600 dark:text-gray-400 text-xs font-medium"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Self-learning */}
        <div className="glass-card rounded-2xl p-6 hover-lift">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-400/10 text-brand-600 dark:text-brand-400">
              <BookOpen size={22} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                Self-Directed Cybersecurity Training
              </h3>
              <p className="text-brand-600 dark:text-brand-400 text-sm mt-1">
                Continuous learning & hands-on practice
              </p>

              <div className="mt-4 space-y-3">
                {[
                  { platform: 'TryHackMe', desc: 'Defensive security paths, SOC analyst training' },
                  { platform: 'PortSwigger Academy', desc: 'Web security labs and vulnerability analysis' },
                  { platform: 'CyberTalents', desc: 'CTF challenges and cybersecurity competitions' },
                ].map(({ platform, desc }) => (
                  <div key={platform} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{platform}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
