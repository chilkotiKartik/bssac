"use client"

import { useState } from "react"
import Image from "next/image" // import next/image for emblem
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"

export function Logo() {
  const { language } = useLanguage()
  const [isHovered, setIsHovered] = useState(false)

  const title = "BSSC BADT" // concise foundation title for header space
  const subtitle =
    language === "hi"
      ? "बलिदानी सैनिक शिरोमणि चिलकोटी बॉर्डर एरिया डेवलपमेंट ट्रस्ट"
      : "Balidani Sainik Shiromani Chilkoti Border Area Development Trust"

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative z-10"
        initial={{ scale: 1 }}
        animate={{
          scale: isHovered ? 1.05 : 1,
          rotate: isHovered ? [0, -2, 2, -2, 0] : 0,
        }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 200,
        }}
      >
        <div className="flex items-center">
          <div className="relative w-12 h-12 mr-2 overflow-hidden rounded-full bg-gradient-to-br from-uttarakhand-mountain to-uttarakhand-pine">
            <Image
              src="/images/foundation-logo.jpg"
              alt="Foundation emblem"
              fill
              sizes="48px"
              className="object-contain p-1"
              priority
            />
          </div>
          <div>
            <motion.h1
              className="text-xl font-bold font-pahadi bg-gradient-to-r from-uttarakhand-mountain to-uttarakhand-pine bg-clip-text text-transparent"
              animate={{ y: isHovered ? [0, -2, 0] : 0 }}
              transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 300 }}
            >
              {title}
            </motion.h1>
            <motion.p
              className="text-[10px] md:text-xs text-muted-foreground font-pahadi"
              animate={{ y: isHovered ? [0, -2, 0] : 0, opacity: isHovered ? 1 : 0.9 }}
              transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 300 }}
            >
              {subtitle}
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Animated background elements */}
      {isHovered && (
        <>
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-uttarakhand-flower"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.7, 0],
              x: [0, 10, 20],
              y: [0, -10, -20],
            }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-uttarakhand-sunset"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.7, 0],
              x: [0, -10, -15],
              y: [0, 10, 15],
            }}
            transition={{ duration: 1.2, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
          />
          <motion.div
            className="absolute top-1/2 -right-2 w-2 h-2 rounded-full bg-uttarakhand-pine"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.7, 0],
              x: [0, 10, 15],
              y: [0, 5, 10],
            }}
            transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
          />
        </>
      )}
    </div>
  )
}
