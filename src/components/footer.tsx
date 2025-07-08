"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import Logo from "../assets/Vintage_Retro_Automotive_Garage_Service_Badge_Logo-removebg-preview.png"
import PrivacyPolicyModal from "./privacy-policy-modal"
import TermsOfServiceModal from "./terms-of-service-modal"

export default function Footer() {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false)
  const [termsModalOpen, setTermsModalOpen] = useState(false)

  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0.8, 1], [0, 1])

  const socialLinks = [
    { icon: <Facebook size={18} />, href: "https://www.facebook.com/share/19NvsXjj5V/?mibextid=wwXIfr", label: "Facebook" },
    // { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
    { icon: <Instagram size={18} />, href: "https://www.instagram.com/webora_inc?igsh=MWNnYzYwcHRoenhvMA==", label: "Instagram" },
    // { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
  ]

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Services", href: "#services" },
    { name: "Packages", href: "#packages" },
    { name: "Contact", href: "#contact" },
  ]

  const serviceLinks = [
    { name: "App Development", href: "#services" },
    { name: "Website Development", href: "#services" },
    { name: "Graphic Designing", href: "#services" },
    { name: "Social Media Marketing", href: "#services" },
    { name: "Social Media Handling", href: "#services" },
    { name: "SEO Services", href: "#services" },
  ]

  const contactInfo = [
    {
      icon: <MapPin className="text-teal mr-3 mt-1 flex-shrink-0" size={18} />,
      text: "981 Main St W Hamilton ontario , L8s 1a8",
    },
    {
      icon: <Phone className="text-teal mr-3 flex-shrink-0" size={18} />,
      text: "+1 (289) 374 0626",
    },
    {
      icon: <Mail className="text-teal mr-3 flex-shrink-0" size={18} />,
      text: "info@webora-inc.com",
    },
  ]

  return (
    <footer className="bg-gunmetal border-t border-teal/10">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="#home" className="inline-block mb-6">
              <motion.div
                className="relative h-10 w-40"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  src={Logo || "/placeholder.svg"}
                  alt="Webora Digital Solutions"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </Link>
            <p className="text-light-gray/70 mb-6">
              Innovative digital solutions for modern businesses. We help transform your digital presence with
              cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center text-teal hover:bg-teal hover:text-white transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: 0.1 * index,
                    type: "spring",
                    stiffness: 300,
                  }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                >
                  <Link
                    href={link.href}
                    className="text-light-gray/70 hover:text-teal transition-colors flex items-center"
                  >
                    <motion.span
                      className="inline-block"
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-4">
              {serviceLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                >
                  <Link
                    href={link.href}
                    className="text-light-gray/70 hover:text-teal transition-colors flex items-center"
                  >
                    <motion.span
                      className="inline-block"
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                >
                  {item.icon}
                  <span className="text-light-gray/70">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-teal/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          style={{ opacity }}
        >
          <p className="text-light-gray/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Webora Digital Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <button
              onClick={() => setPrivacyModalOpen(true)}
              className="text-light-gray/60 text-sm hover:text-teal transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setTermsModalOpen(true)}
              className="text-light-gray/60 text-sm hover:text-teal transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </motion.div>
      </div>

      {/* Modals */}
      <PrivacyPolicyModal isOpen={privacyModalOpen} onClose={() => setPrivacyModalOpen(false)} />
      <TermsOfServiceModal isOpen={termsModalOpen} onClose={() => setTermsModalOpen(false)} />
    </footer>
  )
}

