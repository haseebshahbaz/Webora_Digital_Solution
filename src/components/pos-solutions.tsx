"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Zap, ArrowRight } from "lucide-react"

// Import placeholder images - replace these with your actual Clover and Elavon images
import CloverImage from "../assets/CloverPOSImg.webp"
import ElavonImage from "../assets/ElavonPOSImg.jpeg"

interface POSPartner {
  id: string
  name: string
  logo: string
  description: string
  features: string[]
  primaryColor: string
  whatsappNumber: string
}

const posPartners: POSPartner[] = [
  {
    id: "clover",
    name: "Clover",
    logo: CloverImage.src,
    description:
      "Clover offers versatile point-of-sale solutions that help businesses accept payments, manage inventory, and gain valuable insights through detailed reporting.",
    features: [
      "All-in-one POS system",
      "Contactless payments",
      "Inventory management",
      "Employee management",
      "Customer engagement tools",
      "Advanced reporting",
    ],
    primaryColor: "teal",
    whatsappNumber: "12894061165", // Replace with your actual WhatsApp number
  },
  {
    id: "elavon",
    name: "Elavon",
    logo: ElavonImage.src,
    description:
      "Elavon provides secure payment processing solutions with flexible hardware options, helping businesses streamline operations and enhance customer experience.",
    features: [
      "Secure payment processing",
      "Multiple hardware options",
      "Online payment integration",
      "Mobile payment solutions",
      "Multi-currency support",
      "24/7 customer support",
    ],
    primaryColor: "sunset-orange",
    whatsappNumber: "12894061165", // Replace with your actual WhatsApp number
  },
]

export default function POSSolutionsSimplified() {
  const [activePartner, setActivePartner] = useState<string>(posPartners[0].id)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

//   const getPartnerColor = (partnerId: string) => {
//     const partner = posPartners.find((p) => p.id === partnerId)
//     return partner ? partner.primaryColor : "teal"
//   }

//   const activeColor = getPartnerColor(activePartner)
  const activePartnerObj = posPartners.find((p) => p.id === activePartner) || posPartners[0]

  return (
    <section id="pos-solutions" className="section-padding bg-charcoal relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-teal/5 rounded-full blur-[100px]"
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
          className="absolute -bottom-20 left-20 w-96 h-96 bg-sunset-orange/5 rounded-full blur-[100px]"
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
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
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
            Point of Sale Solutions
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-light-gray mb-6 font-poppins"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Streamline Your Business Operations
          </motion.h2>
          <motion.p
            className="text-light-gray/80"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            We partner with industry-leading POS providers to offer comprehensive solutions that help you manage sales,
            inventory, and customer relationships all in one place.
          </motion.p>
        </motion.div>

        {/* Partner Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {posPartners.map((partner, index) => (
              <motion.button
                key={partner.id}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activePartner === partner.id
                    ? `bg-${partner.primaryColor} text-light-gray`
                    : `bg-gunmetal text-light-gray/70 hover:text-light-gray`
                }`}
                onClick={() => setActivePartner(partner.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {partner.name}
              </motion.button>
            ))}
          </div>

          {/* Partner Content */}
          <motion.div
            key={activePartner}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            {/* Partner Image */}
            <motion.div
              className="relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden border border-gunmetal"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={activePartnerObj.logo || "/placeholder.svg"}
                alt={`${activePartnerObj.name} POS System`}
                fill
                className="object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-charcoal to-transparent opacity-60`}></div>
              <div className={`absolute bottom-0 left-0 right-0 p-6`}>
                <div
                  className={`inline-block px-3 py-1 bg-${activePartnerObj.primaryColor} rounded-md text-light-gray font-medium mb-2`}
                >
                  Official Partner
                </div>
                <h3 className="text-2xl font-bold text-light-gray">{activePartnerObj.name}</h3>
              </div>
            </motion.div>

            {/* Partner Details */}
            <div className="space-y-6">
              <p className="text-light-gray/80 text-lg">{activePartnerObj.description}</p>

              <div>
                <h4 className="text-xl font-bold text-light-gray mb-4 font-poppins">Key Features</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {activePartnerObj.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div
                        className={`w-5 h-5 rounded-full bg-${activePartnerObj.primaryColor} flex items-center justify-center flex-shrink-0`}
                      >
                        <Zap size={12} className="text-light-gray" />
                      </div>
                      <span className="text-light-gray/90">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* WhatsApp Contact Button */}
              <motion.a
                href={`https://wa.me/${activePartnerObj.whatsappNumber}?text=I'm interested in learning more about your ${activePartnerObj.name} POS solution.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 bg-${activePartnerObj.primaryColor} text-light-gray rounded-lg font-medium hover:opacity-90 transition-all duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Now About {activePartnerObj.name}
                <ArrowRight size={18} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
