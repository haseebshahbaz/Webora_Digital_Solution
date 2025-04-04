"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import LoadingLogo from "../assets/Loading Logo.png"


export default function AdvancedPreloader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Track actual page load progress
    const handleLoad = () => {
      // Start incrementing progress
      const interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + Math.random() * 10
          if (newProgress >= 100) {
            clearInterval(interval)
            // Add a small delay before removing preloader
            setTimeout(() => setLoading(false), 500)
            return 100
          }
          return newProgress
        })
      }, 200)

      return () => clearInterval(interval)
    }

    // Check if document is already loaded
    if (document.readyState === "complete") {
      handleLoad()
    } else {
      window.addEventListener("load", handleLoad)
      return () => window.removeEventListener("load", handleLoad)
    }
  }, [])

  // Icons that will animate in sequence
  // const icons = [
  //   { name: "chart", delay: 0.2 },
  //   { name: "gear", delay: 0.4 },
  //   { name: "pen", delay: 0.6 },
  //   { name: "dollar", delay: 0.8 },
  //   { name: "molecule", delay: 1.0 },
  // ]

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
        >
          <div className="relative w-full max-w-xs flex flex-col items-center">
            {/* Logo container with animations */}
            <div className="relative w-48 h-48 mb-8">
              {/* Main logo */}
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 0.5,
                  y: {
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  },
                }}
              >
                <Image
                  src={LoadingLogo}
                  alt="Webora Digital Solutions"
                  width={200}
                  height={200}
                  className="object-contain"
                  priority
                />
              </motion.div>

              {/* Animated glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-teal/20 blur-xl"
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  scale: [0.8, 1.1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Loading text with animated dots */}
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="text-teal text-lg font-medium mr-3">Loading</div>
              <div className="flex space-x-1">
                {[0, 1, 2].map((dot) => (
                  <motion.div
                    key={dot}
                    className="w-2 h-2 rounded-full bg-teal"
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      delay: dot * 0.3,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Progress percentage */}
            <motion.div
              className="text-light-gray/80 text-sm mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {Math.round(progress)}%
            </motion.div>

            {/* Progress bar */}
            <motion.div
              className="w-full h-1.5 bg-gunmetal rounded-full mt-4 overflow-hidden"
              initial={{ opacity: 0, width: "80%" }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-teal via-electric-blue to-teal"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

