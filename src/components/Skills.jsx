import { useState } from 'react'
import { skillCategories, platforms } from '../data/skills'
import { Award, ExternalLink } from 'lucide-react'
import Section from './Section'

export default function Skills() {
  const [expanded, setExpanded] = useState(null)

  return (
    <Section
      id="skills"
      title="Skills & Tools"
      subtitle="Organized by area of practice. Wording reflects honest experience level."
    >
      {/* Skill categories */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map(({ title, icon: Icon, items }, idx) => (
          <div
            key={title}
            className="glass-card rounded-2xl p-5 hover-lift cursor-pointer"
            onClick={() => setExpanded(expanded === idx ? null : idx)}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-cyber-50 dark:bg-cyber-400/10 text-cyber-600 dark:text-cyber-400">
                <Icon size={18} />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {items.slice(0, expanded === idx ? items.length : 6).map(({ name, level }) => (
                <span
                  key={name}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    level === 'hands-on'
                      ? 'bg-cyber-50 dark:bg-cyber-400/10 text-cyber-700 dark:text-cyber-400 border border-cyber-200 dark:border-cyber-400/20'
                      : 'bg-gray-100 dark:bg-white/[0.06] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/[0.08]'
                  }`}
                >
                  {name}
                  {level === 'familiar' && (
                    <span className="text-[10px] opacity-60">(familiar)</span>
                  )}
                </span>
              ))}
              {items.length > 6 && expanded !== idx && (
                <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium text-gray-400 dark:text-gray-500">
                  +{items.length - 6} more
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Platforms & Training */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <Award size={20} className="text-cyber-500" />
          Platforms & Training
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          {platforms.map(({ name, type, note, url }) => (
            <div key={name} className="glass-card rounded-2xl p-5 hover-lift group">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{name}</h4>
                  <p className="text-sm text-cyber-600 dark:text-cyber-400 mt-1">{type}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">{note}</p>
                </div>
                {url && url !== '#' && (
                  <a href={url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-500 transition-colors">
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
