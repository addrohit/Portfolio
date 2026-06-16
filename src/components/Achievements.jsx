import React from 'react'
import { Award, ExternalLink } from 'lucide-react'
import { certifications } from '../data/portfolioData.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Achievements() {
  const headingRef = useReveal()

  return (
    <section id="achievements" className="py-20 sm:py-28 bg-paper-100/60 dark:bg-ink-800/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="reveal">
          <p className="section-tag">// achievements</p>
          <h2 className="section-heading">Certifications & Achievements</h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <CertCard key={cert.title} cert={cert} />
          ))}
        </div>
        {/* To add more certifications or achievements, edit the `certifications` array
            in src/data/portfolioData.js */}
      </div>
    </section>
  )
}

function CertCard({ cert }) {
  const ref = useReveal()
  return (
    <a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      className="reveal card p-6 flex flex-col gap-3 hover:-translate-y-1 group"
    >
      <div className="flex items-start justify-between">
        <div className="p-2 rounded-lg bg-accent-glow">
          <Award className="w-5 h-5 text-accent-600 dark:text-accent-400" />
        </div>
        <ExternalLink className="w-4 h-4 text-ink-700/40 dark:text-paper-200/30 group-hover:text-accent-500 transition-colors" />
      </div>
      <h3 className="font-display font-semibold text-ink-900 dark:text-paper-50">{cert.title}</h3>
      <p className="text-sm text-ink-700 dark:text-paper-200">{cert.issuer}</p>
      <span className="font-mono text-xs text-accent-600 dark:text-accent-400 mt-auto">
        {cert.date}
      </span>
    </a>
  )
}
