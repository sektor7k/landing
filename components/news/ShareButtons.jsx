'use client'

import { Facebook, Twitter, Linkedin, Link2, Copy } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ShareButtons({ url, title }) {
  const [copied, setCopied] = useState(false)

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const buttons = [
    { icon: Twitter, label: 'Twitter', href: shareLinks.twitter, color: 'hover:text-blue-400' },
    { icon: Facebook, label: 'Facebook', href: shareLinks.facebook, color: 'hover:text-blue-600' },
    { icon: Linkedin, label: 'LinkedIn', href: shareLinks.linkedin, color: 'hover:text-blue-500' },
  ]

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-400">Share:</span>
      {buttons.map((button) => {
        const Icon = button.icon
        return (
          <a
            key={button.label}
            href={button.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex h-10 w-10 items-center justify-center rounded-lg border border-gray-700 bg-gray-800/50 text-gray-400 transition-all ${button.color} hover:border-red-500/50 hover:bg-red-500/10`}
            aria-label={`Share on ${button.label}`}
          >
            <Icon className="h-4 w-4" />
          </a>
        )
      })}
      <button
        onClick={copyToClipboard}
        className={`flex h-10 w-10 items-center justify-center rounded-lg border border-gray-700 bg-gray-800/50 text-gray-400 transition-all hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-500`}
        aria-label="Copy link"
      >
        {copied ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-green-400"
          >
            <Copy className="h-4 w-4" />
          </motion.div>
        ) : (
          <Link2 className="h-4 w-4" />
        )}
      </button>
    </div>
  )
}

