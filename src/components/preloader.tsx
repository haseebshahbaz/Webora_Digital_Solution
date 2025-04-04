"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import LoadingLogo from "../assets/Loading Logo.png"


export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time and/or wait for content to load
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500) // Adjust timing as needed

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
        >
          <div className="relative w-full max-w-xs flex flex-col items-center">
            {/* Logo container with pulsing effect */}
            <motion.div
              className="relative w-40 h-40 mb-6"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              {/* W logo with individual element animations */}
              <motion.div
                className="relative w-full h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
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
            </motion.div>

            {/* Loading text */}
            <motion.div
              className="flex items-center justify-center mt-4"
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
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
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

            {/* Loading bar */}
            <motion.div
              className="w-full h-1 bg-gunmetal rounded-full mt-6 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-teal via-electric-blue to-teal"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 2.3,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

