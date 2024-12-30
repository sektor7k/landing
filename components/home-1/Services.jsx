'use client'
import { fadeUpAnimation, fadeFromLeftAnimation, fadeFromRightAnimation } from '@/data/animation'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import useWhileInView from '@/hooks/useWhileInView'
import { CardSpotlight } from '@/components/ui/card-spotlight'
import { FlipWords } from '../ui/flip-words'

const Services = () => {
  const ref = useRef(null)
  const controlAnimation = useWhileInView(ref)
  const words = ['Tournament', 'Chat', 'Bracket', 'Team']
  return (
    <div className="relative py-20 md:py-150">
      <div className="z-10 mb-8 text-center">
        <div className="text-2xl md:text-4xl font-normal text-neutral-600 dark:text-neutral-400">
          Step Into the World of
          <FlipWords words={words} /> <br />
          with Castrum Legions
        </div>
      </div>
      <div className="container relative mx-auto h-[600px] sm:h-[1000px] md:h-screen">
        {/* Video background */}
        <motion.div 
          className="absolute inset-0 -z-10 h-full w-full overflow-hidden" 
          initial="initial" 
          ref={ref} 
          animate={controlAnimation} 
          variants={fadeUpAnimation}
        >
          <video 
            className="h-full w-full object-contain sm:object-cover" 
            src="/videos/features.mp4" 
            autoPlay 
            loop 
            muted
            playsInline
          />
        </motion.div>

        {/* Relative container'ı full-height yapıyoruz */}
        <div className="relative h-full">
          {/* Top Left - Tournament */}
          <motion.div 
            className="absolute left-[2%] top-[2%] z-10 w-[35%] xs:w-[30%] sm:w-[25%] md:w-64" 
            initial="initial" 
            ref={ref} 
            animate={controlAnimation} 
            variants={fadeFromLeftAnimation}
          >
            <CardSpotlight className="h-auto border-none p-2 sm:p-4 md:p-10">
              <p className="relative z-20 mt-1 text-xs sm:text-sm md:text-xl font-bold text-white">Tournament</p>
              <div className="relative z-20 mt-1 sm:mt-2 md:mt-4 text-neutral-200">
                <ul className="text-[10px] xs:text-xs md:text-base">
                  <Step title="Custom Tournament " />
                  <Step title="Match Scheduling" />
                  <Step title="Live Match Tracking" />
                </ul>
              </div>
            </CardSpotlight>
          </motion.div>

          {/* Top Right - Chat */}
          <motion.div
            className="absolute right-[2%] top-[2%] z-10 w-[35%] xs:w-[30%] sm:w-[25%] md:w-64"
            initial="initial"
            ref={ref}
            animate={controlAnimation}
            variants={fadeFromRightAnimation}
          >
            <CardSpotlight className="h-auto border-none p-1 xs:p-2 sm:p-4 md:p-10">
              <p className="relative z-20 mt-0.5 text-[8px] xs:text-xs sm:text-sm md:text-xl font-bold text-white">Chat</p>
              <div className="relative z-20 mt-0.5 xs:mt-1 sm:mt-2 md:mt-4 text-neutral-200">
                <ul className="text-[3px] xs:text-[10px] sm:text-xs md:text-base">
                  <Step title="Live Chat" />
                  <Step title="Team Rooms" />
                  <Step title="Voice Chat" />
                </ul>
              </div>
            </CardSpotlight>
          </motion.div>

          {/* Bottom Left - Bracket */}
          <motion.div
            className="absolute bottom-[2%] left-[2%] z-10 w-[35%] xs:w-[30%] sm:w-[25%] md:w-64"
            initial="initial"
            ref={ref}
            animate={controlAnimation}
            variants={fadeFromLeftAnimation}
          >
            <CardSpotlight className="h-auto border-none p-2 sm:p-4 md:p-10">
              <p className="relative z-20 mt-1 text-xs sm:text-sm md:text-xl font-bold text-white">Bracket</p>
              <div className="relative z-20 mt-1 sm:mt-2 md:mt-4 text-neutral-200">
                <ul className="text-[10px]  xs:text-xs md:text-base">
                  <Step title="Dynamic Bracket " />
                  <Step title="Multiple Formats" />
                  <Step title="Easy Sharing & Embedding" />
                </ul>
              </div>
            </CardSpotlight>
          </motion.div>

          {/* Bottom Right - Team */}
          <motion.div
            className="absolute bottom-[2%] right-[2%] z-10 w-[35%] xs:w-[30%] sm:w-[25%] md:w-64"
            initial="initial"
            ref={ref}
            animate={controlAnimation}
            variants={fadeFromRightAnimation}
          >
            <CardSpotlight className="h-auto border-none p-2 sm:p-4 md:p-10">
              <p className="relative z-20 mt-1 text-xs sm:text-sm md:text-xl font-bold text-white">Team</p>
              <div className="relative z-20 mt-1 sm:mt-2 md:mt-4 text-neutral-200">
                <ul className="text-[10px] xs:text-xs md:text-base">
                  <Step title="Team Management" />
                  <Step title="Player Statistics" />
                  <Step title="Collaboration Tools" />
                </ul>
              </div>
            </CardSpotlight>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

const Step = ({ title }) => (
  <li className="flex items-start gap-2">
    <CheckIcon />
    <p className="text-white whitespace-nowrap">{title}</p>
  </li>
)

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="mt-1 h-4 w-4 flex-shrink-0 text-red-500">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path
      d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
      fill="currentColor"
      strokeWidth="0"
    />
  </svg>
)

export default Services
