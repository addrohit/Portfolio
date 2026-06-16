import React from 'react'
import { Github, ExternalLink, Image as ImageIcon, CheckCircle2 } from 'lucide-react'
import { projects } from '../data/portfolioData.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Projects() {
  const headingRef = useReveal()

  return (
    <section id="projects" className="py-20 sm:py-28 bg-paper-100/60 dark:bg-ink-800/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="reveal">
          <p className="section-tag">// projects</p>
          <h2 className="section-heading">Things I've Built</h2>
          <p className="mt-3 text-ink-700 dark:text-paper-200 max-w-2xl">
            A selection of projects spanning systems programming, full-stack web development,
            and this very site.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
        {/* To add more projects, edit the `projects` array in src/data/portfolioData.js */}
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal card overflow-hidden flex flex-col hover:-translate-y-1">
      {/* Screenshot placeholder */}
      <div className="aspect-video bg-ink-100 dark:bg-ink-700 flex items-center justify-center border-b border-paper-200 dark:border-ink-700">
        {project.image ? (
          <img
            src={project.image}
            alt={`Screenshot of ${project.name}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-ink-700/30 dark:text-paper-200/25">
            <ImageIcon className="w-10 h-10" strokeWidth={1.25} />
            <span className="font-mono text-xs">screenshot placeholder</span>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-paper-50">
          {project.name}
        </h3>
        <p className="mt-2 text-sm text-ink-700 dark:text-paper-200 leading-relaxed">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="tag-pill">
              {t}
            </span>
          ))}
        </div>

        {/* Key features */}
        {project.features?.length > 0 && (
          <ul className="mt-4 space-y-1.5">
            {project.features.slice(0, 3).map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-ink-700 dark:text-paper-200"
              >
                <CheckCircle2 className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Links */}
        <div className="mt-6 pt-4 border-t border-paper-200 dark:border-ink-700 flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-900 dark:text-paper-50 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-900 dark:text-paper-50 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
