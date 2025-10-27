'use client'
import React from 'react'
import { Timeline } from '@/components/ui/timeline'
import { motion } from 'framer-motion'

export function Roadmap() {
  const data = [
    {
      title: 'Q2 2025',
      content: (
        <div>
          <motion.h3
            className="relative mb-4 text-4xl font-extrabold  dark:text-neutral-200  md:text-5xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            Beta Launch & Core Systems
          </motion.h3>
          <p className="mb-8 flex items-start gap-2 text-sm font-normal text-neutral-800 dark:text-neutral-300 md:text-base">
            <span className="text-green-500 dark:text-green-400">✓</span>
            <span>Beta platform released — the first public version of Castrum Legions went live.</span>
          </p>
          <p className="mb-8 flex items-start gap-2 text-sm font-normal text-neutral-800 dark:text-neutral-300 md:text-base">
            <span className="text-green-500 dark:text-green-400">✓</span>
            <span>Tournament system completed — organizers can create, manage, and score tournaments.</span>
          </p>
          <p className="mb-8 flex items-start gap-2 text-sm font-normal text-neutral-800 dark:text-neutral-300 md:text-base">
            <span className="text-green-500 dark:text-green-400">✓</span>
            <span>Team & Player profiles introduced — basic stats and profile data are now visible.</span>
          </p>
          <p className="mb-8 flex items-start gap-2 text-sm font-normal text-neutral-800 dark:text-neutral-300 md:text-base">
            <span className="text-green-500 dark:text-green-400">✓</span>
            <span>E-Pin Marketplace integrated — reward and payment structure added.</span>
          </p>
          <p className="mb-8 flex items-start gap-2 text-sm font-normal text-neutral-800 dark:text-neutral-300 md:text-base">
            <span className="text-green-500 dark:text-green-400">✓</span>
            <span>First closed community tournaments hosted successfully.</span>
          </p>
          <p className="mb-8 flex items-start gap-2 text-sm font-normal text-neutral-800 dark:text-neutral-300 md:text-base">
            <span className="text-green-500 dark:text-green-400">✓</span>
            <span>Manual match assignment system tested and finalized.</span>
          </p>
        </div>
      ),
    },
    {
      title: 'Q3 2025',
      content: (
        <div>
          <motion.h3
            className="relative mb-4 text-4xl font-extrabold  dark:text-neutral-200  md:text-5xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            Stabilization & Community Growth
          </motion.h3>
          <p className="mb-8 flex items-start gap-2 text-sm font-normal text-neutral-800 dark:text-neutral-300 md:text-base">
            <span className="text-green-500 dark:text-green-400">✓</span>
            <span>Major bug fixes and performance improvements applied.</span>
          </p>
          <p className="mb-8 flex items-start gap-2 text-sm font-normal text-neutral-800 dark:text-neutral-300 md:text-base">
            <span className="text-green-500 dark:text-green-400">✓</span>
            <span>Community events and invitational tournaments launched.</span>
          </p>
          <p className="mb-8 flex items-start gap-2 text-sm font-normal text-neutral-800 dark:text-neutral-300 md:text-base">
            <span className="text-green-500 dark:text-green-400">✓</span>
            <span>UI/UX redesign — dashboard and profile interfaces updated for smoother use.</span>
          </p>
          <p className="mb-8 flex items-start gap-2 text-sm font-normal text-neutral-800 dark:text-neutral-300 md:text-base">
            <span className="text-green-500 dark:text-green-400">✓</span>
            <span>Partnerships established with games and esports teams.</span>
          </p>
          <p className="mb-8 flex items-start gap-2 text-sm font-normal text-neutral-800 dark:text-neutral-300 md:text-base">
            <span className="text-green-500 dark:text-green-400">✓</span>
            <span>Reward & Quest system designed to boost player engagement.</span>
          </p>
          <p className="mb-8 text-sm font-normal text-neutral-800 dark:text-neutral-300 md:text-base">
            PvP Arena infrastructure testing in progress.
          </p>
        </div>
      ),
    },
    {
      title: 'Q4 2025',
      content: (
        <div>
          <motion.h3
            className="relative mb-4 text-4xl font-extrabold dark:text-neutral-200  md:text-5xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}>
            Data & Ranking Expansion
          </motion.h3>
          <p className="mb-8 text-sm font-normal text-neutral-800 dark:text-neutral-300 md:text-base">
            Leaderboard System: Win/Loss-based global ranking will go live this quarter.
          </p>
          <p className="mb-8 text-sm font-normal text-neutral-800 dark:text-neutral-300 md:text-base">
            PvP Arena: 1v1 and team-based battle system entering public beta.
          </p>
          <p className="mb-8 text-sm font-normal text-neutral-800 dark:text-neutral-300 md:text-base">
            Analytics Module: Player and team performance tracking under development.
          </p>
          <p className="mb-8 text-sm font-normal text-neutral-800 dark:text-neutral-300 md:text-base">
            Quest & Reward System: To be launched with daily and weekly missions.
          </p>
          <p className="mb-8 text-sm font-normal text-neutral-800 dark:text-neutral-300 md:text-base">
            Organizer Tools: Match result verification and moderation panels expanding.
          </p>
          <p className="mb-8 text-sm font-normal text-neutral-800 dark:text-neutral-300 md:text-base">
            Seasonal tournaments: Partner game integrations for recurring competitive events.
          </p>
        </div>
      ),
    },
    {
      title: 'Q1 2026',
      content: (
        <div>
          <motion.h3
            className="relative mb-4 text-4xl font-extrabold  dark:text-neutral-200  md:text-5xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}>
            Automation & Advanced Analytics
          </motion.h3>
          <p className="mb-8 text-sm font-normal text-neutral-800 dark:text-neutral-300 md:text-base">
            CompCal 2.0: Full automation for tournament scheduling and management.
          </p>
          <p className="mb-8 text-sm font-normal text-neutral-800 dark:text-neutral-300 md:text-base">
            Advanced Reporting: Team and player performance comparison dashboards.
          </p>
          <p className="mb-8 text-sm font-normal text-neutral-800 dark:text-neutral-300 md:text-base">
            Arena Stats: Match history and analytical insights for every tournament.
          </p>
          <p className="mb-8 text-sm font-normal text-neutral-800 dark:text-neutral-300 md:text-base">
            API Integrations: Direct match data synchronization from partner games.
          </p>
          <p className="mb-8 text-sm font-normal text-neutral-800 dark:text-neutral-300 md:text-base">
            UI 2.0: Refreshed interface for dashboards and analytics modules.
          </p>
        </div>
      ),
    },
    {
      title: 'Q2 2026',
      content: (
        <div>
          <motion.h3
            className="relative mb-4 text-4xl font-extrabold  dark:text-neutral-200  md:text-5xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}>
            Ecosystem Expansion
          </motion.h3>
          <p className="mb-8 text-sm font-normal text-neutral-800 dark:text-neutral-300 md:text-base">
            Regional Leagues: Launch of Europe, MENA, and Asia competitive divisions.
          </p>
          <p className="mb-8 text-sm font-normal text-neutral-800 dark:text-neutral-300 md:text-base">
            Castrum Arena Seasons: Seasonal PvP leagues and prize-based ranking cycles.
          </p>
          <p className="mb-8 text-sm font-normal text-neutral-800 dark:text-neutral-300 md:text-base">
            Cross-Organizer Tournaments: Multiple organizers hosting joint events.
          </p>
          <p className="mb-8 text-sm font-normal text-neutral-800 dark:text-neutral-300 md:text-base">
            Mobile Platform: Responsive + PWA version for full mobile accessibility.
          </p>
          <p className="mb-8 text-sm font-normal text-neutral-800 dark:text-neutral-300 md:text-base">
            Public Stats Access: Read-only player and team database available for community use.
          </p>
        </div>
      ),
    },
    {
      title: 'Q3 2026',
      content: (
        <div>
          <motion.h3
            className="relative mb-4 text-4xl font-extrabold  dark:text-neutral-200  md:text-5xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}>
            Professional Expansion
          </motion.h3>
          <p className="mb-8 text-sm font-normal text-neutral-800 dark:text-neutral-300 md:text-base">
            Global-scale sponsored tournaments with brand partners.
          </p>
          <p className="mb-8 text-sm font-normal text-neutral-800 dark:text-neutral-300 md:text-base">
            Scout & analytics tools for professional teams and organizations.
          </p>
          <p className="mb-8 text-sm font-normal text-neutral-800 dark:text-neutral-300 md:text-base">
            Multi-game infrastructure expansion to new partner titles.
          </p>
          <p className="mb-8 text-sm font-normal text-neutral-800 dark:text-neutral-300 md:text-base">
            Achievements & Badge system for user profiles.
          </p>
          <p className="mb-8 text-sm font-normal text-neutral-800 dark:text-neutral-300 md:text-base">
            Community Organizer Program: Reward-based ecosystem for local hosts.
          </p>
        </div>
      ),
    },
  ]

  return (
    <div id="roadmap" className="w-full px-4 py-10 md:px-8 lg:px-16">
      <Timeline
        data={data}
        customStyle={{
          lineColor: 'red', // Highlighting the timeline with a red color
        }}
      />
    </div>
  )
}

export default Roadmap
