'use client'

import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import React, { createContext, useContext, useEffect, useRef, useState } from 'react'

const ModalContext = createContext(undefined)

export const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false)

  return <ModalContext.Provider value={{ open, setOpen }}>{children}</ModalContext.Provider>
}

export const useModal = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}

export const Modal = ({ children }) => {
  return <ModalProvider>{children}</ModalProvider>
}

export const ModalTrigger = ({ className }) => {
  const { setOpen } = useModal()

  const playSound = (soundPath, volume = 1) => {
    const audio = new Audio(soundPath)
    audio.volume = volume
    audio.play()
  }

  return (
    <button
      className={cn(
        'font-tournament group relative flex h-16 w-56 items-center justify-center overflow-hidden rounded-full bg-red-700 text-xl font-bold text-white transition duration-500 hover:bg-red-800',
        className,
      )}
      onMouseEnter={() => playSound('/sounds/click1.mp3', 1)}
      onClick={() => {
        playSound('/sounds/click2.mp3', 1)
        setOpen(true)
      }}>
      <div className="absolute inset-0 z-10 flex items-center justify-center bg-red-900 transition-all duration-500 group-hover:translate-x-40 group-hover:opacity-0">
        Elevate Your Game
      </div>
      <div className="absolute inset-0 z-20 flex -translate-x-40 items-center justify-center transition-all duration-500 group-hover:translate-x-0">
        <img src="/images/favicons/favicon-96x96.png" alt="Castrum Logo" className="h-8 w-8" />
      </div>
    </button>
  )
}

export const ModalBody = ({ children, className }) => {
  const { open, setOpen } = useModal()
  const modalRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto'
  }, [open])

  useOutsideClick(modalRef, () => setOpen(false))

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, backdropFilter: 'blur(10px)' }}
          exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          className="fixed inset-0 z-50 flex h-full w-full items-center justify-center">
          <Overlay />
          <motion.div
            ref={modalRef}
            className={cn(
              'relative z-50 flex max-h-[90%] min-h-[50%] flex-1 flex-col overflow-hidden border border-transparent bg-white dark:border-neutral-800 dark:bg-neutral-950 md:max-w-[40%] md:rounded-2xl',
              className,
            )}
            initial={{ opacity: 0, scale: 0.5, rotateX: 40, y: 40 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateX: 10 }}
            transition={{ type: 'spring', stiffness: 260, damping: 15 }}>
            <CloseIcon />
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export const ModalContent = ({ children, className }) => {
  return <div className={cn('flex flex-1 flex-col', className)}>{children}</div>
}

export const ModalFooter = ({ children, className }) => {
  return <div className={cn('flex justify-end bg-black p-4', className)}>{children}</div>
}

const Overlay = ({ className }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, backdropFilter: 'blur(10px)' }}
      exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
      className={`fixed inset-0 z-50 h-full w-full bg-black bg-opacity-50 ${className}`}></motion.div>
  )
}

const CloseIcon = () => {
  const { setOpen } = useModal()
  return (
    <button onClick={() => setOpen(false)} className="group absolute right-4 top-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 text-black transition duration-200 group-hover:rotate-3 group-hover:scale-125 dark:text-white">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18 6l-12 12" />
        <path d="M6 6l12 12" />
      </svg>
    </button>
  )
}

export const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      callback(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, callback])
}
