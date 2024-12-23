"use client"
import React from 'react'
import { Timeline } from '@/components/ui/timeline'
import { motion } from 'framer-motion'

export function Roadmap() {
  const data = [
    {
      title: 'Q4 2024',
      content: (
        <div>
          <motion.h3 
            className="mb-4 text-4xl font-extrabold text-red-900 dark:text-red-500 md:text-5xl font-serif relative" 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <span className="absolute inset-0 -z-10 blur-md text-red-700 dark:text-red-500">Platform Launch and Tournaments</span>
            Platform Launch and Tournaments
          </motion.h3>
          <p className="mb-8 text-sm font-normal text-neutral-800 dark:text-neutral-200 md:text-base">
            The Castrum platform will launch with its tournament system. The focus will be on engaging gameplay, integrating communities, and balancing features for esports enthusiasts.
          </p>
          <p className="mb-8 text-sm font-normal text-neutral-800 dark:text-neutral-200 md:text-base">
            A tournament-based ranking system will be introduced, allowing users to showcase their performance.
          </p>
          <p className="mb-8 text-sm font-normal text-neutral-800 dark:text-neutral-200 md:text-base">
            A profile system will launch to allow users to track their achievements, history, and community interactions.
          </p>
        </div>
      ),
    },
    {
      title: 'Q1 2025',
      content: (
        <div>
          <motion.h3 
            className="mb-4 text-4xl font-extrabold text-red-900 dark:text-red-500 md:text-5xl font-serif relative" 

            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="absolute inset-0 -z-10 blur-md text-red-700 dark:text-red-500">Trading System with Game-based Economy</span>
            Trading System with Game-based Economy
          </motion.h3>
          <p className="mb-8 text-sm font-normal text-neutral-800 dark:text-neutral-200 md:text-base">
            A trading system will be integrated for players to exchange in-game items and currencies, aligning with the Castrum ecosystem.
          </p>
          <p className="mb-8 text-sm font-normal text-neutral-800 dark:text-neutral-200 md:text-base">
            A leaderboard for personal achievements and community engagement will be introduced.
          </p>
          <p className="mb-8 text-sm font-normal text-neutral-800 dark:text-neutral-200 md:text-base">
            Affiliate system integration for tier-based missions.
          </p>
        </div>
      ),
    },
    {
      title: 'Q2 2025',
      content: (
        <div>
          <motion.h3 
            className="mb-4 text-4xl font-extrabold text-red-900 dark:text-red-500 md:text-5xl font-serif relative" 


            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="absolute inset-0 -z-10 blur-md text-red-700 dark:text-red-500">Community Sale and Launchpad Platform</span>
            Community Sale and Launchpad Platform
          </motion.h3>
          <p className="mb-8 text-sm font-normal text-neutral-800 dark:text-neutral-200 md:text-base">
            A launchpad for in-game assets and other features will become available, expanding opportunities for users.
          </p>
          <p className="mb-8 text-sm font-normal text-neutral-800 dark:text-neutral-200 md:text-base">
            New Projects: Users will have access to an ecosystem that supports diverse assets and communities.
          </p>
          <p className="mb-8 text-sm font-normal text-neutral-800 dark:text-neutral-200 md:text-base">
            Enhanced community support: The platform will include forums, interactive spaces, and better tools for player engagement.
          </p>
        </div>
      ),
    },
    {
      title: 'Q3 2025',
      content: (
        <div>
          <motion.h3 
          
            className="mb-4 text-4xl font-extrabold text-red-900 dark:text-red-500 md:text-5xl font-serif relative" 
            

            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <span className="absolute inset-0 -z-10 blur-md text-red-500 dark:text-red-500">DAO Governance</span>
            DAO Governance
          </motion.h3>
          <p className="mb-8 text-sm font-normal text-neutral-800 dark:text-neutral-200 md:text-base">
            The platform transitions to a DAO (Decentralized Autonomous Organization) system, ensuring community-driven governance and decision-making.
          </p>
          <p className="mb-8 text-sm font-normal text-neutral-800 dark:text-neutral-200 md:text-base">
            New Features: Advanced analytics and player performance tracking will be introduced.
          </p>
        </div>
      ),
    },
  ]

  return (
    <div id='roadmap' className="w-full py-10 px-4 md:px-8 lg:px-16">
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
