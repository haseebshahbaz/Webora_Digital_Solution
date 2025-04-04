"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import HeroImg from "../assets/Hero.png"

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

  // Core services to highlight
  const coreServices = ["Website Development", "Digital Marketing", "Brand Identity", "Business Growth"]

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
              Your Digital Success Partner
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
              className="text-lg text-light-gray/90 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              We help businesses establish a powerful online identity through strategic digital solutions that drive
              growth, enhance visibility, and connect with your target audience.
            </motion.p>

            {/* Core services highlights */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              {coreServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                >
                  <CheckCircle size={18} className="text-teal flex-shrink-0" />
                  <span className="text-light-gray/80">{service}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
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
            {/* Decorative elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 bg-teal/10 rounded-full z-0"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 0.4, 0.7],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-electric-blue/10 rounded-full z-0"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 0.4, 0.7],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 1,
              }}
            />

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

