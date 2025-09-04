"use client"

import { type PropsWithChildren, useRef } from "react"
import { motion, useInView } from "framer-motion"

export function AnimatedSection({ children }: PropsWithChildren) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
