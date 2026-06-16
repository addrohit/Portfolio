import React from 'react'
import {
  Code2,
  Globe,
  Database,
  Wrench,
  Layers,
} from 'lucide-react'
import { skills } from '../data/portfolioData.js'
import { useReveal } from '../hooks/useReveal.js'

// Map category names to icons — edit if you rename categories in portfolioData.js
const CATEGORY_ICONS = {
  'Programming Languages': Code2,
  'Web Development': Globe,
  Database: Database,
  'Tools & Platforms': Wrench,
  'Other Technologies': Layers,
}

function ProficiencyBar({ level }) {
  // level expected 1-5
  return (
    <div className="flex gap-1" aria-label={`Proficiency level ${level} out of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className={`h-1.5 w-4 rounded-full ${
            n <= level ? 'bg-accent-500' : 'bg-paper-200 dark:bg-ink-700'
          }`}
        />
      ))}
    </div>
  )
}

export default function Skills() {
  const headingRef = useReveal()

  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="reveal">
          <p className="section-tag">// skills</p>
          <h2 className="section-heading">Skills & Technologies</h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <SkillCategoryCard key={category} category={category} items={items} />
          ))}
        </div>
        {/* To add/edit skills or categories, update src/data/portfolioData.js (`skills` object) */}
      </div>
    </section>
  )
}

function SkillCategoryCard({ category, items }) {
  const ref = useReveal()
  const Icon = CATEGORY_ICONS[category] || Code2
  return (
    <div ref={ref} className="reveal card p-6 hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2 rounded-lg bg-accent-glow">
          <Icon className="w-5 h-5 text-accent-600 dark:text-accent-400" />
        </div>
        <h3 className="font-display font-semibold text-ink-900 dark:text-paper-50">{category}</h3>
      </div>

      <div className="space-y-4">
        {items.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-sm font-medium text-ink-700 dark:text-paper-200">
                {skill.name}
              </span>
            </div>
            <ProficiencyBar level={skill.level} />
          </div>
        ))}
      </div>
    </div>
  )
}
