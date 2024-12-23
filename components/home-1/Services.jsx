'use client'
import { fadeUpAnimation, fadeFromLeftAnimation, fadeFromRightAnimation } from '@/data/animation'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import useWhileInView from '@/hooks/useWhileInView'
import { CardSpotlight } from '@/components/ui/card-spotlight'

const Services = () => {
  const ref = useRef(null)
  const controlAnimation = useWhileInView(ref)

  return (
    <div className="relative pb-150 pt-150">
      <div className="container relative mx-auto flex h-screen items-center justify-center">
        {/* Background Video */}
        <motion.div
          className="absolute inset-0 -z-10 h-full w-full"
          initial="initial"
          ref={ref}
          animate={controlAnimation}
          variants={fadeUpAnimation}>
          <video className="h-full w-full object-cover" src="/videos/features.mp4" autoPlay loop muted></video>
        </motion.div>

        {/* Top Left - Tournament */}
        <motion.div
          className="absolute left-10 top-10 z-10"
          initial="initial"
          ref={ref}
          animate={controlAnimation}
          variants={fadeFromLeftAnimation}>
          <CardSpotlight className="h-64 w-64">
            <p className="relative z-20 mt-2 text-xl font-bold text-white">Tournament</p>
            <div className="relative z-20 mt-4 text-neutral-200">
              <ul>
                <Step title="Custom Tournament " />
                <Step title="Match Scheduling" />
                <Step title="Live Match Tracking" />
              </ul>
            </div>
          </CardSpotlight>
        </motion.div>

        {/* Top Right - Chat */}
        <motion.div
          className="absolute right-10 top-10 z-10"
          initial="initial"
          ref={ref}
          animate={controlAnimation}
          variants={fadeFromRightAnimation}>
          <CardSpotlight className="h-64 w-64">
            <p className="relative z-20 mt-2 text-xl font-bold text-white">Chat</p>
            <div className="relative z-20 mt-4 text-neutral-200">
              <ul>
                <Step title="Real-Time Messaging" />
                <Step title="Team Chat Rooms" />
                <Step title="Integrated Voice Chat" />
              </ul>
            </div>
          </CardSpotlight>
        </motion.div>

        {/* Bottom Left - Bracket */}
        <motion.div
          className="absolute bottom-10 left-10 z-10"
          initial="initial"
          ref={ref}
          animate={controlAnimation}
          variants={fadeFromLeftAnimation}>
          <CardSpotlight className="h-64 w-64">
            <p className="relative z-20 mt-2 text-xl font-bold text-white">Bracket</p>
            <div className="relative z-20 mt-4 text-neutral-200">
              <ul>
                <Step title="Dynamic Bracket " />
                <Step title="Multiple Formats" />
                <Step title="Easy Sharing & Embedding" />
              </ul>
            </div>
          </CardSpotlight>
        </motion.div>

        {/* Bottom Right - Team */}
        <motion.div
          className="absolute bottom-10 right-10 z-10"
          initial="initial"
          ref={ref}
          animate={controlAnimation}
          variants={fadeFromRightAnimation}>
          <CardSpotlight className="h-64 w-64">
            <p className="relative z-20 mt-2 text-xl font-bold text-white">Team</p>
            <div className="relative z-20 mt-4 text-neutral-200">
              <ul>
                <Step title="Team Management" />
                <Step title="Player Statistics" />
                <Step title="Collaboration Tools" />
              </ul>
            </div>
          </CardSpotlight>
        </motion.div>
      </div>
    </div>
  )
}

const Step = ({ title }) => (
  <li className="flex items-start gap-2">
    <CheckIcon />
    <p className="text-white">{title}</p>
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
