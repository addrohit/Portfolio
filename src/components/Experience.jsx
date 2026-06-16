import React from 'react'
import { Briefcase, Trophy, Users, Code, Wrench, Crown } from 'lucide-react'
import { experience } from '../data/portfolioData.js'
import { useReveal } from '../hooks/useReveal.js'

// Map experience type to icon and accent color
const TYPE_META = {
  Internship: { icon: Briefcase, color: 'text-accent-500' },
  Freelance: { icon: Code, color: 'text-accent-500' },
  'College Activity': { icon: Users, color: 'text-flare-500' },
  Leadership: { icon: Crown, color: 'text-flare-500' },
  Hackathon: { icon: Trophy, color: 'text-accent-500' },
  Workshop: { icon: Wrench, color: 'text-flare-500' },
}

export default function Experience() {
  const headingRef = useReveal()

  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="reveal">
          <p className="section-tag">// experience</p>
          <h2 className="section-heading">Experience & Involvement</h2>
          <p className="mt-3 text-ink-700 dark:text-paper-200 max-w-2xl">
            Internships, freelance work, hackathons, workshops, and activities that have
            shaped my journey so far.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {experience.map((item, idx) => (
            <ExperienceCard key={idx} item={item} />
          ))}
        </div>
        {/* To add internships, freelance work, hackathons, etc., edit the `experience` array
            in src/data/portfolioData.js. Available `type` values: Internship, Freelance,
            College Activity, Leadership, Hackathon, Workshop */}
      </div>
    </section>
  )
}

function ExperienceCard({ item }) {
  const ref = useReveal()
  const meta = TYPE_META[item.type] || { icon: Briefcase, color: 'text-accent-500' }
  const Icon = meta.icon
  return (
    <div ref={ref} className="reveal card p-6 hover:-translate-y-1">
      <div className="flex items-start justify-between gap-3">
        <div className={`p-2 rounded-lg bg-accent-glow ${meta.color}`}>
          <Icon className="w-5 h-5" />
        </div>
        <span className="font-mono text-xs text-ink-700/60 dark:text-paper-200/50 whitespace-nowrap">
          {item.duration}
        </span>
      </div>

      <span className="inline-block mt-4 font-mono text-xs uppercase tracking-wide text-accent-600 dark:text-accent-400">
        {item.type}
      </span>
      <h3 className="mt-1 font-display text-lg font-semibold text-ink-900 dark:text-paper-50">
        {item.title}
      </h3>
      <p className="text-sm text-ink-700/70 dark:text-paper-200/60 font-medium">{item.org}</p>
      <p className="mt-3 text-sm text-ink-700 dark:text-paper-200 leading-relaxed">
        {item.description}
      </p>
    </div>
  )
}
