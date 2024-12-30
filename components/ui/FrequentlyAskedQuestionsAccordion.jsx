'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react'
import { cn } from '@/lib/utils'
const FAQs = [
  {
    question: 'What is Castrum Legions?',
    answer:
      'Castrum Legions is a cutting-edge Web3 platform designed to revolutionize the way communities engage, build, and grow in the decentralized space. We provide a seamless experience with innovative tools like tournaments, team management, and blockchain-powered interactions.',
  },

  {
    question: 'What makes Castrum Legions unique in the Web3 ecosystem?',
    answer:
      'Our unique approach combines state-of-the-art blockchain technology with user-friendly interfaces. With features like on-chain tournament organization, NFT-backed achievements, and an intuitive bracket management system, Castrum Legions stands as a pioneer in Web3 community solutions.',
  },
  {
    question: 'How can I participate in tournaments on Castrum Legions?',
    answer:
      'Joining tournaments is easy! Simply create an account, explore the active tournaments in our ecosystem, and register your team. All matches and results are securely recorded on the blockchain for complete transparency.',
  },
  {
    question: 'Is Castrum Legions secure for my data and assets?',
    answer:
      'Absolutely. Castrum Legions employs advanced encryption protocols and decentralized storage to ensure the safety of your data and assets. We prioritize security at every level, allowing you to focus on building your community and enjoying the experience.',
  },

]

export function SimpleFaqsWithBackground() {
  const [open, setOpen] = useState(null)
  return (
    <div className="mx-auto grid w-full max-w-7xl gap-4 px-4 py-20 md:px-8 md:py-40">
      <h2 className="text-center text-4xl font-medium tracking-tight text-neutral-600 dark:text-neutral-50 md:text-5xl">
        Frequently Asked Questions
      </h2>
      <p className="mx-auto max-w-lg text-center text-base text-neutral-600 dark:text-neutral-50">
        Have questions about Castrum Legions? Contact us at{' '}
        <a href="mailto:support@castrumlegions.com" className="text-blue-500 underline">
          support@castrumlegions.com
        </a>
        .
      </p>

      <div className="mx-auto mt-10 w-full max-w-3xl">
        {FAQs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} open={open} setOpen={setOpen} />
        ))}
      </div>
    </div>
  )
}
const FAQItem = ({ question, answer, setOpen, open }) => {
  const isOpen = open === question

  return (
    <div
      className="shadow-input mb-8 w-full cursor-pointer rounded-lg bg-white p-4 dark:bg-neutral-900"
      onClick={() => {
        if (isOpen) {
          setOpen(null)
        } else {
          setOpen(question)
        }
      }}>
      <div className="flex items-start">
        <div className="relative mr-4 mt-1 h-6 w-6 flex-shrink-0">
          <IconChevronUp
            className={cn(
              'absolute inset-0 h-6 w-6 transform text-red-500 transition-all duration-200 dark:text-red-400',
              isOpen && 'rotate-90 scale-0',
            )}
          />
          <IconChevronDown
            className={cn(
              'absolute inset-0 h-6 w-6 rotate-90 scale-0 transform text-red-500 transition-all duration-200 dark:text-red-400',
              isOpen && 'rotate-0 scale-100',
            )}
          />
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-200">{question}</h3>
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="overflow-hidden text-neutral-500 dark:text-neutral-400">
                {answer.split(' ').map((line, index) => (
                  <motion.span
                    initial={{ opacity: 0, filter: 'blur(5px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, filter: 'blur(0px)' }}
                    transition={{
                      duration: 0.2,
                      ease: 'easeOut',
                      delay: index * 0.03,
                    }}
                    key={index}>
                    {line}&nbsp;
                  </motion.span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
