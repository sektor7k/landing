'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'
import Image from 'next/image'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement newsletter signup
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
    }, 3000)
  }

  return (
    <div className="relative overflow-hidden py-16 md:py-24">
      {/* Background with Logo */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-red-500/5 to-red-500/10" />
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full bg-[url('/images/legionslogored.png')] bg-repeat"
            style={{ backgroundSize: '250px' }}
          />
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-red-500/30 bg-gradient-to-br from-gray-900 to-black p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            {/* Left Side - Logo and Info */}
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <Image
                  src="/images/legionslogored.png"
                  alt="Castrum Legions"
                  width={200}
                  height={60}
                  className="mb-6"
                />
                <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                  Stay <span className="text-red-500">Updated</span>
                </h3>
                <p className="text-gray-400">
                  Get the latest gaming news delivered directly to your inbox. Never miss an update!
                </p>
              </motion.div>
            </div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-lg border border-gray-700 bg-gray-800/50 py-4 pl-12 pr-4 text-white placeholder-gray-500 transition-all focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitted}
                  className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-red-500 to-red-600 px-6 py-4 font-semibold text-white transition-all hover:from-red-600 hover:to-red-700 hover:shadow-lg hover:shadow-red-500/50 disabled:opacity-50"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {submitted ? (
                      <>
                        <svg
                          className="h-5 w-5 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Subscribed!
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Subscribe to Newsletter
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 transition-opacity group-hover:opacity-100" />
                </button>
              </form>
              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-center text-sm text-green-400"
                >
                  Thank you for subscribing! 🎉
                </motion.p>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

