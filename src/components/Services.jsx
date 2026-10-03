import { useState } from 'react'
import { services } from '../data/services'
import { Clock, ChevronDown, ChevronUp, User, Crosshair } from 'lucide-react'
import Section from './Section'

function ServiceCard({ service, isExpanded, onToggle }) {
  const { name, icon: Icon, time, deliver, tools, client, scope, blurb, featured } = service

  return (
    <div
      className={`glass-card rounded-2xl overflow-hidden hover-lift transition-all duration-300 ${
        featured ? 'ring-1 ring-cyber-400/20' : ''
      }`}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className={`flex items-center justify-center w-11 h-11 rounded-xl ${
              featured
                ? 'bg-gradient-to-br from-cyber-400/20 to-brand-400/20 text-cyber-500'
                : 'bg-gray-100 dark:bg-white/[0.06] text-gray-500 dark:text-gray-400'
            }`}>
              <Icon size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white leading-tight">{name}</h3>
              <div className="flex items-center gap-1.5 mt-1 text-sm text-gray-500 dark:text-gray-500">
                <Clock size={13} />
                {time}
              </div>
            </div>
          </div>
          {featured && (
            <span className="shrink-0 px-2 py-1 rounded-md bg-cyber-50 dark:bg-cyber-400/10 text-cyber-600 dark:text-cyber-400 text-xs font-semibold">
              Popular
            </span>
          )}
        </div>

        {/* Description */}
        <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{blurb}</p>

        {/* Tools pills */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {(Array.isArray(tools) ? tools : tools.split(', ')).slice(0, 4).map(t => (
            <span
              key={t}
              className="px-2 py-1 rounded-md bg-gray-100 dark:bg-white/[0.06] text-gray-600 dark:text-gray-400 text-xs font-medium"
            >
              {t}
            </span>
          ))}
          {(Array.isArray(tools) ? tools : tools.split(', ')).length > 4 && (
            <span className="px-2 py-1 text-xs text-gray-400">
              +{(Array.isArray(tools) ? tools : tools.split(', ')).length - 4}
            </span>
          )}
        </div>

        {/* Expand toggle */}
        <button
          onClick={onToggle}
          className="mt-4 flex items-center gap-1.5 text-sm font-medium text-cyber-600 dark:text-cyber-400 hover:text-cyber-700 dark:hover:text-cyber-300 transition-colors"
        >
          {isExpanded ? 'Show less' : 'See details'}
          {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      </div>

      {/* Expanded details */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pt-2 space-y-3 border-t border-gray-200/60 dark:border-white/[0.06]">
          <div className="flex items-start gap-2">
            <Crosshair size={14} className="mt-1 text-cyber-500 shrink-0" />
            <div>
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider">What you receive</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-0.5">{deliver}</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <User size={14} className="mt-1 text-cyber-500 shrink-0" />
            <div>
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider">What you provide</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-0.5">{client}</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Crosshair size={14} className="mt-1 text-cyber-500 shrink-0" />
            <div>
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider">Scope</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-0.5">{scope}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  const [expandedIdx, setExpandedIdx] = useState(null)
  const [showAll, setShowAll] = useState(false)

  const displayed = showAll ? services : services.slice(0, 6)

  return (
    <Section
      id="services"
      title="Services"
      subtitle="Realistic freelance services I can deliver. Each includes clear deliverables, tools, and scope."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {displayed.map((service, idx) => (
          <ServiceCard
            key={service.name}
            service={service}
            isExpanded={expandedIdx === idx}
            onToggle={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
          />
        ))}
      </div>

      {services.length > 6 && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:border-cyber-400 hover:text-cyber-600 dark:hover:text-cyber-400 transition-all"
          >
            {showAll ? 'Show fewer' : `View all ${services.length} services`}
            {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      )}
    </Section>
  )
}
