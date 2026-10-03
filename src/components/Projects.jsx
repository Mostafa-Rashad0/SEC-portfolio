import { useState } from 'react'
import { projects } from '../data/projects'
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'
import Section from './Section'

const categories = ['All', ...new Set(projects.map(p => p.category))]

function ProjectCard({ project }) {
  const { title, category, icon: Icon, problem, solution, tools, features, github, demo } = project
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="glass-card rounded-2xl overflow-hidden hover-lift group">
      {/* Category stripe */}
      <div className="h-1 bg-gradient-to-r from-cyber-400 to-brand-500" />

      <div className="p-6">
        <div className="flex items-start gap-3 mb-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-cyber-50 dark:bg-cyber-400/10 text-cyber-600 dark:text-cyber-400 group-hover:scale-110 transition-transform">
            <Icon size={18} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white leading-tight">{title}</h3>
            <span className="text-xs font-medium text-cyber-600 dark:text-cyber-400 mt-0.5">{category}</span>
          </div>
        </div>

        <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
          <div>
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-1">Challenge</p>
            <p className="leading-relaxed">{problem}</p>
          </div>

          {expanded && (
            <>
              <div>
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-1">Solution</p>
                <p className="leading-relaxed">{solution}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-1">Key Features</p>
                <ul className="space-y-1">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyber-400" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>

        {/* Tools */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tools.map(t => (
            <span
              key={t}
              className="px-2 py-1 rounded-md bg-gray-100 dark:bg-white/[0.06] text-gray-600 dark:text-gray-400 text-xs font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 text-sm font-medium text-cyber-600 dark:text-cyber-400 hover:text-cyber-700 dark:hover:text-cyber-300 transition-colors"
          >
            {expanded ? 'Show less' : 'Read more'}
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          <div className="flex items-center gap-2">
            {github && !github.includes('[') && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-lg text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/[0.06] transition-all"
                aria-label={`GitHub: ${title}`}
              >
                <Github size={16} />
              </a>
            )}
            {demo && !demo.includes('[') && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-lg text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/[0.06] transition-all"
                aria-label={`Demo: ${title}`}
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Hands-on labs, personal projects, and technical work — presented as learning, not client experience."
    >
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              filter === cat
                ? 'bg-cyber-500 text-white shadow-sm'
                : 'bg-gray-100 dark:bg-white/[0.06] text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/[0.1]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-500 py-12">No projects in this category yet.</p>
      )}
    </Section>
  )
}
