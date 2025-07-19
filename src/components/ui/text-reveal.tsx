"use client"

import { motion } from "framer-motion"
import { useInView } from "@/components/hooks/use-in-view"
import type { Easing } from "framer-motion"

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  staggerChildren?: number
  threshold?: number
}

export default function Reveal({
  text,
  className = "",
  delay = 0,
  duration = 0.6,
  staggerChildren = 0.02,
  threshold = 0.1,
}: TextRevealProps) {
  const { ref, isInView } = useInView({ threshold, triggerOnce: true })

  const words = text.split(" ")

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delay,
      },
    },
  }

  const wordVariants = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: duration,
        ease: [0.25, 0.46, 0.45, 0.94] as Easing,
      },
    },
  }

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-wrap"
      >
        {words.map((word, index) => (
          <div key={index} className="overflow-hidden mr-2 mb-2">
            <motion.span variants={wordVariants} className="inline-block">
              {word}
            </motion.span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
