import React from 'react'
import { GraduationCap, Award, BookOpen } from 'lucide-react'
import { education } from '../data/portfolioData.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Education() {
  const headingRef = useReveal()

  return (
    <section id="education" className="py-20 sm:py-28 bg-paper-100/60 dark:bg-ink-800/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="reveal">
          <p className="section-tag">// education</p>
          <h2 className="section-heading">Academic Journey</h2>
        </div>

        <div className="mt-12 relative">
          {/* Timeline vertical line */}
          <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-paper-200 dark:bg-ink-700" />

          <div className="space-y-10">
            {education.map((item, idx) => (
              <EducationItem key={idx} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function EducationItem({ item }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal relative pl-12 sm:pl-16">
      {/* Timeline node */}
      <div className="absolute left-0 sm:left-2 top-1 w-8 h-8 rounded-full bg-accent-500 flex items-center justify-center shadow-glow">
        <GraduationCap className="w-4 h-4 text-ink-900" />
      </div>

      <div className="card p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-paper-50">
            {item.degree}
          </h3>
          <span className="font-mono text-xs text-accent-600 dark:text-accent-400">
            {item.duration}
          </span>
        </div>
        <p className="mt-1 text-ink-700 dark:text-paper-200 font-medium">{item.institution}</p>

        {item.score && (
          <p className="mt-2 inline-flex items-center gap-2 font-mono text-sm text-flare-600 dark:text-flare-400">
            <Award className="w-4 h-4" />
            {item.score}
          </p>
        )}

        {item.coursework?.length > 0 && (
          <div className="mt-4">
            <p className="flex items-center gap-2 text-sm font-semibold text-ink-900 dark:text-paper-50 mb-2">
              <BookOpen className="w-4 h-4 text-accent-500" />
              Relevant Coursework
            </p>
            <div className="flex flex-wrap gap-2">
              {item.coursework.map((course) => (
                <span key={course} className="tag-pill">
                  {course}
                </span>
              ))}
            </div>
          </div>
        )}

        {item.achievements?.length > 0 && (
          <ul className="mt-4 space-y-1.5 text-sm text-ink-700 dark:text-paper-200 list-disc list-inside">
            {item.achievements.map((ach) => (
              <li key={ach}>{ach}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
