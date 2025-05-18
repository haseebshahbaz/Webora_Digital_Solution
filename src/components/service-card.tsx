"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface ServiceCardProps {
//   id: string
  title: string
  description: string
  image: string
  index: number
  onLearnMore: () => void
}

export default function ServiceCard({ title, description, image, index, onLearnMore }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group bg-gunmetal rounded-xl overflow-hidden border border-teal/10 hover:border-teal/30 transition-all duration-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
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
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={image || "/placeholder.svg?height=400&width=600"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-gunmetal via-gunmetal/70 to-transparent opacity-70"
          animate={{ opacity: isHovered ? 0.5 : 0.7 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute inset-0 bg-teal/0"
          animate={{ backgroundColor: isHovered ? "rgba(0, 169, 157, 0.1)" : "rgba(0, 169, 157, 0)" }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-light-gray mb-3 font-poppins">{title}</h3>
        <p className="text-light-gray/80 mb-6">{description}</p>
        <motion.button
          onClick={onLearnMore}
          className="inline-flex items-center text-teal hover:text-teal/80 transition-colors font-medium"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Learn More{" "}
          <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </motion.button>
      </div>
    </motion.div>
  )
}
