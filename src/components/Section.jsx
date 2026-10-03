import { useScrollReveal } from '../hooks'

export default function Section({ id, title, subtitle, children, className = '' }) {
  const ref = useScrollReveal()

  return (
    <section id={id} className={`section-divider py-20 lg:py-24 ${className}`}>
      <div ref={ref} className="animate-on-scroll mx-auto max-w-6xl px-5">
        {title && (
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
              <span className="text-cyber-500">.</span>
            </h2>
            {subtitle && (
              <p className="mt-3 max-w-2xl text-gray-500 dark:text-gray-400 text-lg">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
