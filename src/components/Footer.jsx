import React from 'react'
import { profile } from '../data/portfolioData.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-paper-200 dark:border-ink-700 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <p className="font-mono text-xs text-ink-700/60 dark:text-paper-200/50">
          © {year} {profile.fullName}. Built with React &amp; Tailwind CSS.
        </p>
        <a
          href="#home"
          className="font-mono text-xs text-accent-600 dark:text-accent-400 hover:underline"
        >
          back to top ↑
        </a>
      </div>
    </footer>
  )
}
