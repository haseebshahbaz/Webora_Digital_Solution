"use client"

import { Check, X } from "lucide-react"
import { motion } from "framer-motion"

interface PackageFeature {
  name: string
  included: boolean
}

interface PackageCardProps {
  name: string
  price: string
  features: PackageFeature[]
  popular?: boolean
  index: number
}

export default function PackageCard({ name, price, features, popular, index }: PackageCardProps) {
  // Get color classes based on package tier
  const getPackageColors = () => {
    switch (name.toLowerCase()) {
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

  const colors = getPackageColors()

  return (
    <motion.div
      className={`group relative rounded-xl overflow-hidden border ${colors.border} transition-all duration-500 bg-charcoal/50 backdrop-blur-sm`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.1 * index }}
      whileHover={{
        y: -5,
        boxShadow: `0 10px 30px -10px rgba(0, 0, 0, 0.3)`,
      }}
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} ${colors.hoverGradient} transition-all duration-500`}
      ></div>

      {/* Popular tag */}
      {popular && (
        <div className="absolute top-0 right-0">
          <div className={`${colors.bg} text-light-gray text-xs font-bold px-3 py-1 rounded-bl-lg shadow-lg`}>
            POPULAR
          </div>
        </div>
      )}

      <div className="relative p-6">
        <div className="text-center mb-6">
          <h3 className={`text-xl font-bold ${colors.text} mb-2 font-poppins`}>{name}</h3>
          <p className="text-3xl font-bold text-light-gray">{price}</p>
        </div>

        <ul className="space-y-3 mb-6">
          {features.map((feature, idx) => (
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
              <span className={feature.included ? "text-light-gray" : "text-light-gray/50"}>{feature.name}</span>
            </li>
          ))}
        </ul>

        <motion.a
          href="https://wa.me/12894061165"
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
}
