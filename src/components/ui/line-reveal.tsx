"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useInView } from "@/components/hooks/use-in-view"
import type { Easing } from "framer-motion"

interface LineRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right"
  threshold?: number
}

export default function LineReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  direction = "up",
  threshold = 0.1,
}: LineRevealProps) {
  const { ref, isInView } = useInView({ threshold, triggerOnce: true })

  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: 100 }
      case "down":
        return { y: -100 }
      case "left":
        return { x: -100 }
      case "right":
        return { x: 100 }
      default:
        return { y: 100 }
    }
  }

  const variants = {
    hidden: {
      ...getInitialPosition(),
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: duration,
        ease: [0.25, 0.46, 0.45, 0.94] as Easing,
        delay: delay,
      },
    },
  }

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div variants={variants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
        {children}
      </motion.div>
    </div>
  )
}
