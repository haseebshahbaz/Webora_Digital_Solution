"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import BM from "../assets/business marketing.jpg"
import WD from "../assets/website development.jpg"
import LD from "../assets/logo designing.jpg"
import GM from "../assets/google marketing.jpg"
import SMH from "../assets/social media handling.jpg"
import AF from "../assets/accounting and finance.jpg"

const services = [
  {
    title: "Business Marketing",
    description: "Effective strategies to enhance your brand visibility, attract customers, and drive business growth.",
    image: BM,
    link: "#services",
  },
  {
    title: "Website Development",
    description: "Professional and responsive websites tailored to meet your business needs.",
    image: WD,
    link: "#services",
  },
  {
    title: "Logo Designing",
    description: "Creative and impactful logo designs that represent your brand identity effectively.",
    image: LD,
    link: "#services",
  },
  {
    title: "Google Marketing",
    description: "Leverage Google Ads and SEO strategies to increase online presence and drive conversions.",
    image: GM,
    link: "#services",
  },
  {
    title: "Social Media Handling",
    description: "Engage with your audience and build a strong social media presence with expert management.",
    image: SMH,
    link: "#services",
  },
  {
    title: "Accounting & Financing",
    description: "Comprehensive financial solutions to manage your business accounts and financial planning.",
    image: AF,
    link: "#services",
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  return (
    <section id="services" className="section-padding bg-charcoal relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-electric-blue/5 rounded-full blur-[100px]"
          animate={{
            x: [0, -50, 0],
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
          className="absolute -bottom-20 left-20 w-96 h-96 bg-teal/5 rounded-full blur-[100px]"
          animate={{
            x: [0, 30, 0],
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
            Our Services
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Comprehensive Business Solutions
          </motion.h2>
          <motion.p
            className="text-light-gray/80"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            We provide expert solutions for marketing, branding, web development, and financial management to help your
            business thrive.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-gunmetal rounded-xl overflow-hidden border border-teal/10 hover:border-teal/30 transition-all duration-500"
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
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-gunmetal via-gunmetal/70 to-transparent opacity-70"
                  whileHover={{ opacity: 0.5 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div className="absolute inset-0 bg-teal/0 group-hover:bg-teal/10 transition-colors duration-300" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-light-gray/80 mb-6">{service.description}</p>
                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-teal hover:text-teal/80 transition-colors font-medium"
                  >
                    Learn More{" "}
                    <ArrowRight
                      size={18}
                      className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

