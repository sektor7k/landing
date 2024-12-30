'use client'
import React from 'react'
import { motion, useAnimationFrame, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'
import clsx from 'clsx'

export function Button({
  borderRadius = '1.75rem',
  children,
  as: Component = 'button',
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}) {
  return (
    <Component
      className={clsx('relative h-12 w-40 overflow-hidden bg-transparent p-[1px]', containerClassName)}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}>
      <div className="absolute inset-0" style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}>
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={clsx(
              'h-40 w-40 bg-[radial-gradient(var(--red-400)_40%,transparent_60%)]',
              borderClassName,
            )}
          />
        </MovingBorder>
      </div>
      <div
        className={clsx(
          'relative flex h-full w-full items-center justify-center border-2 border-slate-800 bg-slate-900/[0.8] text-white backdrop-blur-xl',
          className,
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}>
        {children}
      </div>
    </Component>
  )
}

export const MovingBorder = ({ children, duration = 2000, rx, ry, ...otherProps }) => {
  const pathRef = useRef()
  const progress = useMotionValue(0)
  const [isReady, setIsReady] = React.useState(false)

  useEffect(() => {
    if (pathRef.current) {
      setIsReady(true)
    }
  }, [])

  useAnimationFrame((time) => {
    if (!isReady || !pathRef.current) return

    try {
      const length = pathRef.current.getTotalLength()
      if (length && length > 0) {
        const pxPerMillisecond = length / duration
        progress.set((time * pxPerMillisecond) % length)
      }
    } catch (error) {
      // Hata durumunda sessizce devam et
    }
  })

  const x = useTransform(progress, (val) => {
    if (!pathRef.current) return 0
    try {
      return pathRef.current.getPointAtLength(val)?.x || 0
    } catch {
      return 0
    }
  })

  const y = useTransform(progress, (val) => {
    if (!pathRef.current) return 0
    try {
      return pathRef.current.getPointAtLength(val)?.y || 0
    } catch {
      return 0
    }
  })

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
        style={{
          opacity: isReady ? 1 : 0,
        }}>
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: 'absolute',
          transform,
        }}>
        {children}
      </motion.div>
    </>
  )
}
