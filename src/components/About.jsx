import React from 'react'
import * as Icons from 'lucide-react'
import { MapPin, GraduationCap, User } from 'lucide-react'
import { profile } from '../data/portfolioData.js'
import { useReveal } from '../hooks/useReveal.js'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="reveal">
          <p className="section-tag">// about-me</p>
          <h2 className="section-heading">Who I Am</h2>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-10 items-start">
          {/* Photo + quick facts */}
          <div ref={ref} className="reveal lg:col-span-1">
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
              {/* Photo placeholder — replace src with your actual photo */}
              <div className="aspect-square rounded-2xl bg-ink-100 dark:bg-ink-800 border border-paper-200 dark:border-ink-700 flex items-center justify-center overflow-hidden shadow-glow">
                {profile.photo ? (
                  <img
                    src={profile.photo}
                    alt={`Portrait of ${profile.fullName}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-3 text-ink-700/40 dark:text-paper-200/30">
                    <User className="w-20 h-20" strokeWidth={1.25} />
                    <span className="font-mono text-xs">photo placeholder</span>
                  </div>
                )}
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-white dark:bg-ink-800 border border-paper-200 dark:border-ink-700 rounded-xl px-4 py-3 shadow-glow font-mono text-xs">
                <p className="text-ink-900 dark:text-paper-50 font-semibold">{profile.year}</p>
                <p className="text-ink-700/70 dark:text-paper-200/60">B.Tech CSE</p>
              </div>
            </div>

            {/* Quick facts */}
            <div className="mt-10 space-y-3 max-w-sm mx-auto lg:mx-0">
              <div className="flex items-center gap-3 text-ink-700 dark:text-paper-200">
                <GraduationCap className="w-5 h-5 text-accent-500 flex-shrink-0" />
                <span className="text-sm">{profile.college}</span>
              </div>
              <div className="flex items-center gap-3 text-ink-700 dark:text-paper-200">
                <MapPin className="w-5 h-5 text-accent-500 flex-shrink-0" />
                <span className="text-sm">{profile.location}</span>
              </div>
            </div>
          </div>

          {/* Intro text + interests */}
          <div ref={ref} className="reveal lg:col-span-2">
            <h3 className="font-display text-2xl font-semibold text-ink-900 dark:text-paper-50">
              {profile.fullName}
            </h3>
            <p className="mt-4 text-ink-700 dark:text-paper-200 leading-relaxed whitespace-pre-line">
              {profile.intro}
            </p>

            {/* Interests */}
            <div className="mt-10">
              <h4 className="font-mono text-sm text-ink-900 dark:text-paper-50 font-semibold mb-4">
                What I'm into
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {profile.interests.map((interest) => {
                  const IconComp = Icons[interest.icon] || Icons.Sparkle
                  return (
                    <div
                      key={interest.label}
                      className="card p-4 flex flex-col items-start gap-2 hover:-translate-y-1"
                    >
                      <IconComp className="w-5 h-5 text-accent-500" />
                      <span className="text-sm font-medium text-ink-900 dark:text-paper-50">
                        {interest.label}
                      </span>
                    </div>
                  )
                })}
              </div>
              {/* To add/remove interests, edit the `interests` array in src/data/portfolioData.js */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
