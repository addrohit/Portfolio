import React, { useEffect, useState } from 'react'
import { ArrowDown, Download, Mail } from 'lucide-react'
import { profile } from '../data/portfolioData.js'

// Lines typed out in the terminal window — edit to customize
const TYPED_LINES = [
  { prompt: '$', text: 'whoami' },
  { output: profile.fullName },
  { prompt: '$', text: 'cat role.txt' },
  { output: `${profile.tagline} \u00B7 ${profile.year} \u00B7 ${profile.college}` },
  { prompt: '$', text: 'status --current' },
  { output: 'Building. Learning. Shipping. \u2192' },
]

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (visibleLines >= TYPED_LINES.length) return

    const current = TYPED_LINES[visibleLines]
    const fullText = current.prompt ? current.text : current.output

    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => setCharIndex((c) => c + 1), current.prompt ? 55 : 18)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setVisibleLines((v) => v + 1)
        setCharIndex(0)
      }, 250)
      return () => clearTimeout(timeout)
    }
  }, [charIndex, visibleLines])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-flare-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Introduction */}
        <div className="animate-fade-up">
          <p className="section-tag">// hello, world</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-900 dark:text-paper-50 mt-3 leading-tight">
            Hi, I'm {profile.fullName.split(' ')[0]}
            <span className="text-accent-500">.</span>
          </h1>
          <p className="mt-4 text-lg text-ink-700 dark:text-paper-200 max-w-xl">
            A {profile.year.toLowerCase()} {profile.tagline} at{' '}
            <span className="text-accent-600 dark:text-accent-400 font-medium">
              {profile.college}
            </span>
            , based in {profile.location}. I build software, explore AI, and enjoy turning
            ideas into working products.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
            <a href={profile.resumeLink} className="btn-secondary">
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>

          <a
            href="#about"
            className="mt-12 hidden sm:inline-flex items-center gap-2 font-mono text-sm text-ink-700/70 dark:text-paper-200/60 hover:text-accent-500 transition-colors"
          >
            Scroll to explore
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>

        {/* Right: Terminal signature element */}
        <div className="animate-fade-up" style={{ animationDelay: '0.15s' }}>
          <div className="relative rounded-2xl bg-ink-900 dark:bg-ink-950 border border-ink-700 shadow-glow-lg overflow-hidden font-mono text-sm">
            {/* Terminal title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-ink-800 border-b border-ink-700">
              <span className="w-3 h-3 rounded-full bg-red-400/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <span className="w-3 h-3 rounded-full bg-green-400/80" />
              <span className="ml-3 text-paper-200/50 text-xs">rohit@vit-pune ~ zsh</span>
            </div>

            {/* Terminal body */}
            <div className="p-6 min-h-[280px] text-paper-100 space-y-2">
              {TYPED_LINES.slice(0, visibleLines + 1).map((line, idx) => {
                const isCurrent = idx === visibleLines
                const fullText = line.prompt ? line.text : line.output
                const displayText = isCurrent ? fullText.slice(0, charIndex) : fullText
                const isDone = idx < visibleLines

                if (line.prompt) {
                  return (
                    <div key={idx} className="flex gap-2">
                      <span className="text-accent-400">{line.prompt}</span>
                      <span>
                        {displayText}
                        {isCurrent && !isDone && (
                          <span className="inline-block w-2 h-4 bg-accent-400 ml-1 animate-blink align-middle" />
                        )}
                      </span>
                    </div>
                  )
                }
                return (
                  <div key={idx} className="text-flare-400 pl-4">
                    {displayText}
                    {isCurrent && !isDone && (
                      <span className="inline-block w-2 h-4 bg-accent-400 ml-1 animate-blink align-middle" />
                    )}
                  </div>
                )
              })}
              {visibleLines >= TYPED_LINES.length && (
                <div className="flex gap-2 pt-1">
                  <span className="text-accent-400">$</span>
                  <span className="inline-block w-2 h-4 bg-accent-400 animate-blink align-middle" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
