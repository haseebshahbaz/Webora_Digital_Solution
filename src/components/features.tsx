"use client"

import { TrendingUp, MonitorSmartphone, Palette, Search, Users, BarChart, DollarSign, Lock, Globe } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const features = [
  {
    icon: <TrendingUp className="h-6 w-6 text-teal" />,
    title: "Strategic Business Growth",
    description: "Data-driven marketing and web solutions to help businesses scale efficiently.",
  },
  {
    icon: <MonitorSmartphone className="h-6 w-6 text-teal" />,
    title: "Innovative Web Solutions",
    description: "Custom website development with responsive design, performance, and security.",
  },
  {
    icon: <Palette className="h-6 w-6 text-teal" />,
    title: "Brand Identity & Logo Design",
    description: "Professional logo and branding services to establish a strong visual identity.",
  },
  {
    icon: <Search className="h-6 w-6 text-teal" />,
    title: "SEO & Performance Optimization",
    description: "Websites optimized for search engines and speed to rank higher and attract more customers.",
  },
  {
    icon: <Users className="h-6 w-6 text-teal" />,
    title: "Social Media Optimization",
    description: "Engaging social media strategies to enhance brand visibility and customer engagement.",
  },
  {
    icon: <BarChart className="h-6 w-6 text-teal" />,
    title: "Data-Driven Digital Marketing",
    description: "AI-powered analytics and Google marketing strategies to maximize conversions and online reach.",
  },
  {
    icon: <DollarSign className="h-6 w-6 text-teal" />,
    title: "Smart Financial Solutions",
    description: "Digital accounting and financing services to streamline financial management.",
  },
  {
    icon: <Lock className="h-6 w-6 text-teal" />,
    title: "Secure & Scalable Technology",
    description: "Secure, scalable, and future-proof digital solutions that adapt to business growth.",
  },
  {
    icon: <Globe className="h-6 w-6 text-teal" />,
    title: "Multi-Platform Integration",
    description: "Cross-platform compatibility, ensuring smooth performance across mobile, web, and desktop.",
  },
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  return (
    <section id="features" className="section-padding bg-gunmetal relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-40 left-20 w-96 h-96 bg-teal/5 rounded-full blur-[100px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-20 right-20 w-96 h-96 bg-electric-blue/5 rounded-full blur-[100px]"
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 2,
          }}
        />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-teal/10 text-teal rounded-full font-montserrat text-sm mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Features That Set Us Apart
          </motion.h2>
          <motion.p
            className="text-light-gray/80"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            We provide cutting-edge digital solutions tailored to help your business grow, optimize, and succeed.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-charcoal p-8 rounded-xl border border-teal/10 hover:border-teal/30 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                duration: 0.5,
                delay: 0.1 * (index % 3),
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px -20px rgba(0, 169, 157, 0.3)",
                scale: 1.02,
              }}
            >
              <motion.div
                className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-6"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  backgroundColor: "rgba(0, 169, 157, 0.2)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-light-gray/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

