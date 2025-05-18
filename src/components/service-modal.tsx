"use client"

import { useEffect } from "react"
import { X, Check } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

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

interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  packages: PricingTier[]
}

export default function ServiceModal({ isOpen, onClose, title, description, packages }: ServiceModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  // Get color classes based on package tier
  const getPackageColors = (tier: string) => {
    switch (tier.toLowerCase()) {
      case "basic":
        return {
          text: "text-teal",
          bg: "bg-teal",
          bgLight: "bg-teal/10",
          border: "border-teal/20 hover:border-teal/40",
          gradient: "from-teal/10 to-transparent",
          hoverGradient: "group-hover:from-teal/20 group-hover:to-teal/5",
        }
      case "standard":
        return {
          text: "text-sunset-orange",
          bg: "bg-sunset-orange",
          bgLight: "bg-sunset-orange/10",
          border: "border-sunset-orange/20 hover:border-sunset-orange/40",
          gradient: "from-sunset-orange/10 to-transparent",
          hoverGradient: "group-hover:from-sunset-orange/20 group-hover:to-sunset-orange/5",
        }
      case "premium":
        return {
          text: "text-deep-purple",
          bg: "bg-deep-purple",
          bgLight: "bg-deep-purple/10",
          border: "border-deep-purple/20 hover:border-deep-purple/40",
          gradient: "from-deep-purple/10 to-transparent",
          hoverGradient: "group-hover:from-deep-purple/20 group-hover:to-deep-purple/5",
        }
      default:
        return {
          text: "text-teal",
          bg: "bg-teal",
          bgLight: "bg-teal/10",
          border: "border-teal/20 hover:border-teal/40",
          gradient: "from-teal/10 to-transparent",
          hoverGradient: "group-hover:from-teal/20 group-hover:to-teal/5",
        }
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-charcoal/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-charcoal border border-gunmetal rounded-xl w-full max-w-5xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-charcoal border-b border-gunmetal p-4 flex justify-between items-center z-10">
                <div>
                  <h2 className="text-xl font-bold text-light-gray font-poppins">{title}</h2>
                  <p className="text-sm text-light-gray/70">{description}</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-gunmetal transition-colors"
                  aria-label="Close modal"
                >
                  <X className="text-light-gray" size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Packages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {packages.map((pkg, index) => {
                    const colors = getPackageColors(pkg.name)

                    return (
                      <motion.div
                        key={index}
                        className={`group relative rounded-xl overflow-hidden border ${colors.border} transition-all duration-500 bg-charcoal/80 backdrop-blur-sm`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 * index }}
                        whileHover={{
                          y: -5,
                          boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.3)",
                        }}
                      >
                        {/* Background gradient */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} ${colors.hoverGradient} transition-all duration-500`}
                        ></div>

                        {/* Popular tag */}
                        {pkg.popular && (
                          <div className="absolute top-0 right-0">
                            <div
                              className={`${colors.bg} text-light-gray text-xs font-bold px-3 py-1 rounded-bl-lg shadow-lg`}
                            >
                              POPULAR
                            </div>
                          </div>
                        )}

                        <div className="relative p-6">
                          <div className="text-center mb-6">
                            <h3 className={`text-xl font-bold ${colors.text} mb-2 font-poppins`}>{pkg.name}</h3>
                            <p className="text-3xl font-bold text-light-gray">{pkg.price}</p>
                          </div>

                          <ul className="space-y-3 mb-6">
                            {pkg.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-sm">
                                {feature.included ? (
                                  <span
                                    className={`flex-shrink-0 w-5 h-5 rounded-full ${colors.bg} flex items-center justify-center mt-0.5`}
                                  >
                                    <Check size={12} className="text-light-gray" />
                                  </span>
                                ) : (
                                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gunmetal flex items-center justify-center mt-0.5">
                                    <X size={12} className="text-light-gray/50" />
                                  </span>
                                )}
                                <span className={feature.included ? "text-light-gray" : "text-light-gray/50"}>
                                  {feature.name}
                                </span>
                              </li>
                            ))}
                          </ul>

                          <motion.a
                            href="https://wa.me/12898728256"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-full py-2 px-4 rounded-lg font-medium text-center block ${colors.bg} text-light-gray hover:opacity-90 transition-all duration-300`}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                          >
                            Get Started
                          </motion.a>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
