import React, { useState } from 'react'
import * as Icons from 'lucide-react'
import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react'
import { contact } from '../data/portfolioData.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Contact() {
  const headingRef = useReveal()
  const formRef = useReveal()

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Please enter your name'
    if (!form.email.trim()) {
      newErrors.email = 'Please enter your email'
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!form.message.trim()) newErrors.message = 'Please enter a message'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) {
      // -----------------------------------------------------------------
      // CUSTOMIZE: Connect this form to a backend or service such as
      // Formspree, EmailJS, or your own API endpoint. Example with
      // Formspree:
      //
      // await fetch('https://formspree.io/f/your-form-id', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(form),
      // })
      // -----------------------------------------------------------------
      setSubmitted(true)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="reveal">
          <p className="section-tag">// contact</p>
          <h2 className="section-heading">Let's Connect</h2>
          <p className="mt-3 text-ink-700 dark:text-paper-200 max-w-2xl">
            Whether it's an opportunity, a collaboration, or just a chat about tech — feel free
            to reach out.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-10">
          {/* Contact info + socials */}
          <div ref={formRef} className="reveal space-y-6">
            <a
              href={`mailto:${contact.email}`}
              className="card p-5 flex items-center gap-4 hover:-translate-y-1"
            >
              <div className="p-3 rounded-lg bg-accent-glow">
                <Mail className="w-5 h-5 text-accent-600 dark:text-accent-400" />
              </div>
              <div>
                <p className="font-mono text-xs text-ink-700/60 dark:text-paper-200/50">Email</p>
                <p className="font-medium text-ink-900 dark:text-paper-50">{contact.email}</p>
              </div>
            </a>

            <a
              href={`tel:${contact.phone.replace(/\s+/g, '')}`}
              className="card p-5 flex items-center gap-4 hover:-translate-y-1"
            >
              <div className="p-3 rounded-lg bg-accent-glow">
                <Phone className="w-5 h-5 text-accent-600 dark:text-accent-400" />
              </div>
              <div>
                <p className="font-mono text-xs text-ink-700/60 dark:text-paper-200/50">Phone</p>
                <p className="font-medium text-ink-900 dark:text-paper-50">{contact.phone}</p>
              </div>
            </a>

            {/* Social links grid */}
            <div className="grid grid-cols-2 gap-4">
              {contact.social.map((social) => {
                const Icon = Icons[social.icon] || Icons.Link
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card p-4 flex items-center gap-3 hover:-translate-y-1"
                  >
                    <Icon className="w-5 h-5 text-accent-500" />
                    <span className="text-sm font-medium text-ink-900 dark:text-paper-50">
                      {social.label}
                    </span>
                  </a>
                )
              })}
            </div>
            {/* To add/edit contact details and social links, update the `contact` object
                in src/data/portfolioData.js */}
          </div>

          {/* Contact form */}
          <div ref={formRef} className="reveal">
            <form onSubmit={handleSubmit} className="card p-6 sm:p-8 space-y-5" noValidate>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-ink-900 dark:text-paper-50 mb-1.5"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className="w-full px-4 py-2.5 rounded-lg border border-paper-200 dark:border-ink-700 bg-paper-50 dark:bg-ink-900 text-ink-900 dark:text-paper-50 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-shadow"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-ink-900 dark:text-paper-50 mb-1.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className="w-full px-4 py-2.5 rounded-lg border border-paper-200 dark:border-ink-700 bg-paper-50 dark:bg-ink-900 text-ink-900 dark:text-paper-50 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-shadow"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-ink-900 dark:text-paper-50 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className="w-full px-4 py-2.5 rounded-lg border border-paper-200 dark:border-ink-700 bg-paper-50 dark:bg-ink-900 text-ink-900 dark:text-paper-50 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-shadow resize-none"
                  placeholder="Tell me about the opportunity or just say hi!"
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              <button type="submit" className="btn-primary w-full">
                {submitted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>

              {submitted && (
                <p className="text-sm text-center text-accent-600 dark:text-accent-400" role="status">
                  Thanks for reaching out — I'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
