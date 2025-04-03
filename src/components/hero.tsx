"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import HeroImg from "../assets/hero.jpg"

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

  return (
    <section id="home" className="relative bg-charcoal min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-teal/5 rounded-full blur-[100px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-electric-blue/5 rounded-full blur-[100px]"
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 2,
          }}
        />
      </div>

      <div className="container-custom relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            style={{ opacity, y }}
          >
            <motion.span
              className="inline-block px-4 py-2 bg-teal/10 text-teal rounded-full font-montserrat text-sm"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.4,
                type: "spring",
                stiffness: 200,
              }}
            >
              Innovative Digital Solutions
            </motion.span>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.6,
                type: "spring",
                stiffness: 100,
              }}
            >
              Transform Your{" "}
              <motion.span
                className="text-teal inline-block"
                animate={{
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                Digital Presence
              </motion.span>{" "}
              With Cutting-Edge Solutions
            </motion.h1>
            <motion.p
              className="text-lg text-light-gray/80 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              We provide business marketing, website development, Logo designing, Google Marketing, Social media
              handling, accounting and financing services.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link href="#contact" className="btn-accent">
                  Get Started
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link href="#services" className="btn-secondary flex items-center gap-2">
                  Explore Services <ArrowRight size={18} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex items-center gap-6 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-charcoal bg-gunmetal flex items-center justify-center"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 1.2 + i * 0.1 }}
                    whileHover={{
                      y: -5,
                      zIndex: 10,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <span className="text-xs font-medium text-teal">{String.fromCharCode(64 + i)}</span>
                  </motion.div>
                ))}
              </div>
              <div>
                <p className="text-light-gray/80 text-sm">
                  Trusted by{" "}
                  <motion.span
                    className="text-teal font-medium"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      delay: 1,
                    }}
                  >
                    500+
                  </motion.span>{" "}
                  companies worldwide
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            style={{ scale }}
          >
            <motion.div
              className="relative z-10 aspect-square max-w-lg mx-auto"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Image
                src={HeroImg || "/placeholder.svg"}
                alt="Digital Solutions"
                width={600}
                height={600}
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-teal/30 to-transparent rounded-2xl opacity-60"
                animate={{
                  opacity: [0.6, 0.3, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-teal/20 to-electric-blue/20 rounded-2xl transform rotate-3 scale-95"
              animate={{
                rotate: [3, 6, 3],
                scale: [0.95, 0.98, 0.95],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

