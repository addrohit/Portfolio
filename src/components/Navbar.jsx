import React, { useEffect, useState } from 'react'
import { Sun, Moon, Menu, X, TerminalSquare } from 'lucide-react'
import { useTheme } from '../context/ThemeContext.jsx'
import { profile } from '../data/portfolioData.js'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setIsOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-ink-900/80 backdrop-blur-md shadow-sm border-b border-paper-200 dark:border-ink-700'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo / Brand */}
        <a
          href="#home"
          className="flex items-center gap-2 font-display font-bold text-lg text-ink-900 dark:text-paper-50"
        >
          <TerminalSquare className="w-6 h-6 text-accent-500" />
          <span>
            Rohit<span className="text-accent-500">.</span>dev
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-ink-700 dark:text-paper-200 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg border border-paper-200 dark:border-ink-700 text-ink-700 dark:text-paper-200 hover:text-accent-500 hover:border-accent-500 transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen((p) => !p)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            className="lg:hidden p-2 rounded-lg border border-paper-200 dark:border-ink-700 text-ink-700 dark:text-paper-200"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-ink-900 border-b border-paper-200 dark:border-ink-700 px-4 sm:px-6 py-4 flex flex-col gap-4 animate-fade-in">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="font-mono text-sm text-ink-700 dark:text-paper-200 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
