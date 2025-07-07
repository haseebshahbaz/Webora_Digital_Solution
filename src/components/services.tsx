"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import ServiceModal from "./service-modal"

// Service images
import AppDev from "../assets/app development.jpg"
import WebDev from "../assets/website development.jpg"
import GraphicDesign from "../assets/logo designing.jpg"
import SocialMarketing from "../assets/business marketing.jpg"
import SocialHandling from "../assets/social media handling.jpg"
import SEO from "../assets/seo.jpg"

// Define service data structure
interface PackageFeature {
  name: string
  included: boolean
}

interface PricingTier {
  name: string
  price: string
  features: PackageFeature[]
  popular?: boolean
}

interface Service {
  id: string
  title: string
  description: string
  image: string
  packages: PricingTier[]
}

// Services data
const services: Service[] = [
  {
    id: "web-dev",
    title: "Website Development",
    description: "Professional and responsive websites tailored to meet your business needs.",
    image: WebDev.src,
    packages: [
      {
        name: "Basic",
        price: "$300",
        features: [
          { name: "4 Page Professional Website", included: true },
          { name: "4 Banner Design & 5 Stock Images", included: true },
          { name: "Setup of Social Page", included: true },
          { name: "Contact Form & Google Map Integration", included: true },
          { name: "Fully Responsive Design", included: true },
          { name: "Business Page Setup", included: false },
          { name: "E-Commerce Integration", included: false },
          { name: "User Authentication", included: false },
          { name: "SEO Optimization", included: false },
        ],
      },
      {
        name: "Standard",
        price: "$500",
        popular: true,
        features: [
          { name: "6 Page Custom-Responsive Website", included: true },
          { name: "7 Banner Designs & 8 Stock Images", included: true },
          { name: "Setup of Social Page", included: true },
          { name: "Contact Form & Google Map Integration", included: true },
          { name: "Fully Responsive Design", included: true },
          { name: "Business Page Setup", included: true },
          { name: "E-Commerce Integration", included: true },
          { name: "User Authentication", included: true },
          { name: "SEO Optimization", included: false },
        ],
      },
      {
        name: "Premium",
        price: "$999",
        features: [
          { name: "10-12 Custom Pages", included: true },
          { name: "5 Custom Banners & 8 Stock Images", included: true },
          { name: "Setup of Social Page", included: true },
          { name: "Contact Form & Google Map Integration", included: true },
          { name: "Fully Responsive Design", included: true },
          { name: "Business Page Setup", included: true },
          { name: "E-Commerce Integration", included: true },
          { name: "User Authentication", included: true },
          { name: "SEO Optimization", included: true },
          { name: "Online Payment Setup", included: true },
        ],
      },
    ],
  },
  {
    id: "graphic-design",
    title: "Graphic Designing",
    description: "Creative and impactful designs that represent your brand identity effectively.",
    image: GraphicDesign.src,
    packages: [
      {
        name: "Basic",
        price: "$300",
        features: [
          { name: "Logo Design (3 Concepts)", included: true },
          { name: "Business Card Design", included: true },
          { name: "Social Media Profile Setup", included: true },
          { name: "Basic Brand Guidelines", included: true },
          { name: "1 Revision Round", included: true },
          { name: "Letterhead & Envelope Design", included: false },
          { name: "Social Media Templates", included: false },
          { name: "Marketing Materials", included: false },
          { name: "Brand Style Guide", included: false },
        ],
      },
      {
        name: "Standard",
        price: "$500",
        popular: true,
        features: [
          { name: "Logo Design (5 Concepts)", included: true },
          { name: "Business Card Design", included: true },
          { name: "Social Media Profile Setup", included: true },
          { name: "Comprehensive Brand Guidelines", included: true },
          { name: "3 Revision Rounds", included: true },
          { name: "Letterhead & Envelope Design", included: true },
          { name: "Social Media Templates (5)", included: true },
          { name: "Marketing Materials", included: false },
          { name: "Brand Style Guide", included: false },
        ],
      },
      {
        name: "Premium",
        price: "$999",
        features: [
          { name: "Logo Design (8 Concepts)", included: true },
          { name: "Business Card Design", included: true },
          { name: "Social Media Profile Setup", included: true },
          { name: "Comprehensive Brand Guidelines", included: true },
          { name: "Unlimited Revision Rounds", included: true },
          { name: "Letterhead & Envelope Design", included: true },
          { name: "Social Media Templates (10)", included: true },
          { name: "Marketing Materials", included: true },
          { name: "Complete Brand Style Guide", included: true },
        ],
      },
    ],
  },
  {
    id: "social-marketing",
    title: "Social Media Marketing",
    description: "Strategic marketing campaigns to increase visibility and drive engagement on social platforms.",
    image: SocialMarketing.src,
    packages: [
      {
        name: "Basic",
        price: "$200",
        features: [
          { name: "2 Social Media Platforms", included: true },
          { name: "8 Posts Per Month", included: true },
          { name: "Basic Content Strategy", included: true },
          { name: "Monthly Performance Report", included: true },
          { name: "Paid Advertising", included: true },
          { name: "Community Management", included: false },
          { name: "Influencer Outreach", included: false },
          { name: "Competitor Analysis", included: false },
        ],
      },
      {
        name: "Standard",
        price: "$300",
        popular: true,
        features: [
          { name: "4 Social Media Platforms", included: true },
          { name: "16 Posts Per Month", included: true },
          { name: "Advanced Content Strategy", included: true },
          { name: "Bi-weekly Performance Reports", included: true },
          { name: "Community Management", included: true },
          { name: "Paid Advertising ($100 Budget)", included: true },
          { name: "Influencer Outreach", included: false },
          { name: "Competitor Analysis", included: false },
        ],
      },
      {
        name: "Premium",
        price: "$750",
        features: [
          { name: "All Major Social Platforms", included: true },
          { name: "30 Posts Per Month", included: true },
          { name: "Comprehensive Content Strategy", included: true },
          { name: "Weekly Performance Reports", included: true },
          { name: "24/7 Community Management", included: true },
          { name: "Paid Advertising ($300 Budget)", included: true },
          { name: "Influencer Outreach & Management", included: true },
          { name: "Detailed Competitor Analysis", included: true },
        ],
      },
    ],
  },
  {
    id: "social-handling",
    title: "Social Media Management",
    description: "Comprehensive management of your social media presence to build and engage your audience.",
    image: SocialHandling.src,
    packages: [
      {
        name: "Basic",
        price: "$200",
        features: [
          { name: "2 Social Media Platforms", included: true },
          { name: "Profile Optimization", included: true },
          { name: "8 Posts Per Month", included: true },
          { name: "Basic Engagement", included: true },
          { name: "Monthly Analytics", included: true },
          { name: "Content Calendar", included: false },
          { name: "Story Creation", included: false },
          { name: "Hashtag Research", included: false },
        ],
      },
      {
        name: "Standard",
        price: "$500",
        popular: true,
        features: [
          { name: "4 Social Media Platforms", included: true },
          { name: "Profile Optimization", included: true },
          { name: "16 Posts Per Month", included: true },
          { name: "Daily Engagement", included: true },
          { name: "Bi-weekly Analytics", included: true },
          { name: "Content Calendar", included: true },
          { name: "Story Creation (8/month)", included: true },
          { name: "Hashtag Research", included: true },
        ],
      },
      {
        name: "Premium",
        price: "$700",
        features: [
          { name: "All Major Social Platforms", included: true },
          { name: "Profile Optimization", included: true },
          { name: "30 Posts Per Month", included: true },
          { name: "24/7 Engagement", included: true },
          { name: "Weekly Analytics", included: true },
          { name: "Content Calendar", included: true },
          { name: "Story Creation (20/month)", included: true },
          { name: "Advanced Hashtag Strategy", included: true },
        ],
      },
    ],
  },
  {
    id: "app-dev",
    title: "App Development",
    description: "Custom mobile applications designed to enhance user experience and drive engagement.",
    image: AppDev.src,
    packages: [
      {
        name: "Basic",
        price: "$1500",
        features: [
          { name: "Single Platform (iOS or Android)", included: true },
          { name: "Basic UI/UX Design", included: true },
          { name: "Up to 5 Screens", included: true },
          { name: "Basic Authentication", included: true },
          { name: "Push Notifications", included: true },
          { name: "Cloud Database Integration", included: false },
          { name: "Payment Gateway Integration", included: false },
          { name: "Admin Dashboard", included: false },
          { name: "Analytics Integration", included: false },
        ],
      },
      {
        name: "Standard",
        price: "$2500",
        popular: true,
        features: [
          { name: "Dual Platform (iOS & Android)", included: true },
          { name: "Advanced UI/UX Design", included: true },
          { name: "Up to 10 Screens", included: true },
          { name: "Social Authentication", included: true },
          { name: "Push Notifications", included: true },
          { name: "Cloud Database Integration", included: true },
          { name: "Payment Gateway Integration", included: true },
          { name: "Admin Dashboard", included: true },
          { name: "Analytics Integration", included: false },
        ],
      },
      {
        name: "Premium",
        price: "$4000",
        features: [
          { name: "Dual Platform (iOS & Android)", included: true },
          { name: "Premium UI/UX Design", included: true },
          { name: "Unlimited Screens", included: true },
          { name: "Advanced Authentication", included: true },
          { name: "Push Notifications", included: true },
          { name: "Cloud Database Integration", included: true },
          { name: "Payment Gateway Integration", included: true },
          { name: "Admin Dashboard", included: true },
          { name: "Analytics Integration", included: true },
          { name: "Maintenance Support (3 months)", included: true },
        ],
      },
    ],
  },
  {
    id: "seo-services",
    title: "SEO Services",
    description: "Optimize your online presence to improve search engine rankings and drive organic traffic.",
    image: SEO.src,
    packages: [
      {
        name: "Basic",
        price: "$500",
        features: [
          { name: "Keyword Research (10 Keywords)", included: true },
          { name: "On-Page SEO Optimization", included: true },
          { name: "Google My Business Setup", included: true },
          { name: "Monthly Performance Report", included: true },
          { name: "Competitor Analysis", included: true },
          { name: "Link Building", included: false },
          { name: "Content Creation", included: false },
          { name: "Local SEO", included: false },
        ],
      },
      {
        name: "Standard",
        price: "$700",
        popular: true,
        features: [
          { name: "Keyword Research (25 Keywords)", included: true },
          { name: "On-Page SEO Optimization", included: true },
          { name: "Google My Business Management", included: true },
          { name: "Bi-weekly Performance Reports", included: true },
          { name: "Competitor Analysis", included: true },
          { name: "Link Building (10/month)", included: true },
          { name: "Content Creation (2 articles/month)", included: true },
          { name: "Local SEO", included: false },
        ],
      },
      {
        name: "Premium",
        price: "$999",
        features: [
          { name: "Keyword Research (50+ Keywords)", included: true },
          { name: "Advanced On-Page SEO", included: true },
          { name: "Google My Business Management", included: true },
          { name: "Weekly Performance Reports", included: true },
          { name: "Comprehensive Competitor Analysis", included: true },
          { name: "Link Building (20/month)", included: true },
          { name: "Content Creation (4 articles/month)", included: true },
          { name: "Local SEO Optimization", included: true },
        ],
      },
    ],
  },
]

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  const openServiceDetails = (service: Service) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  const closeServiceDetails = () => {
    setIsModalOpen(false)
  }

  return (
    <section id="services" className="section-padding bg-charcoal relative overflow-hidden">
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
            className="text-3xl md:text-4xl font-bold text-light-gray mb-6 font-poppins"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Comprehensive Digital Solutions
          </motion.h2>
          <motion.p
            className="text-light-gray/80"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            We provide expert solutions for app development, web development, design, and marketing to help your
            business thrive in the digital landscape.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
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
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg?height=400&width=600"}
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
              <div className="p-6">
                <h3 className="text-xl font-bold text-light-gray mb-3 font-poppins">{service.title}</h3>
                <p className="text-light-gray/80 mb-6">{service.description}</p>
                <motion.button
                  onClick={() => openServiceDetails(service)}
                  className="inline-flex items-center text-teal hover:text-teal/80 transition-colors font-medium"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Learn More{" "}
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <ServiceModal
          isOpen={isModalOpen}
          onClose={closeServiceDetails}
          title={`${selectedService.title} Packages`}
          description={selectedService.description}
          packages={selectedService.packages}
        />
      )}
    </section>
  )
}
