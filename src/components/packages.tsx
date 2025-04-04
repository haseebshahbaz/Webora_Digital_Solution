// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { motion } from "framer-motion"
// import { Check, ChevronRight } from 'lucide-react'

// const packages = [
//   {
//     tier: "Basic",
//     price: "$300",
//     color: "from-[#b67fca]/50 to-[#b67fca]/20",
//     hoverColor: "group-hover:from-[#b67fca]/60 group-hover:to-[#b67fca]/10",
//     accentColor: "bg-[#b67fca]",
//     textColor: "text-[#b67fca]",
//     buttonClass: "border-[#b67fca] text-[#b67fca] hover:bg-[#b67fca] hover:text-white",
//     popular: false,
//     features: [
//       "4 PAGE PROFESSIONAL WEBSITE",
//       "4 BANNER DESIGN & 5 STOCKS IMAGES",
//       "SETUP OF SOCIAL PAGE",
//       "FEATURES LIKE CONTACT FORM & GOOGLE MAP INTEGRATION",
//       "FULLY RESPONSIVE WEBSITE"
//     ]
//   },
//   {
//     tier: "Standard",
//     price: "$500",
//     color: "from-[#5dc7a7]/50 to-[#5dc7a7]/20",
//     hoverColor: "group-hover:from-[#5dc7a7]/60 group-hover:to-[#5dc7a7]/10",
//     accentColor: "bg-[#5dc7a7]",
//     textColor: "text-[#5dc7a7]",
//     buttonClass: "border-[#5dc7a7] text-[#5dc7a7] hover:bg-[#5dc7a7] hover:text-white",
//     popular: true,
//     features: [
//       "6-PAGE CUSTOM-RESPONSIVE WEBSITE",
//       "WITH 7 BANNER DESIGNS & 8 STOCK IMAGES",
//       "BUSINESS PAGE SETUP INCLUDED",
//       "ADVANCED FEATURES LIKE E-COMMERCE INTEGRATION AND USER AUTHENTICATION",
//       "MOBILE-FRIENDLY RESPONSIVE DESIGN",
//       "SEO FOR BETTER SEARCH RANKINGS"
//     ]
//   },
//   {
//     tier: "Premium",
//     price: "$1000",
//     color: "from-[#f5a55b]/50 to-[#f5a55b]/20",
//     hoverColor: "group-hover:from-[#f5a55b]/60 group-hover:to-[#f5a55b]/10",
//     accentColor: "bg-[#f5a55b]",
//     textColor: "text-[#f5a55b]",
//     buttonClass: "border-[#f5a55b] text-[#f5a55b] hover:bg-[#f5a55b] hover:text-white",
//     popular: false,
//     features: [
//       "10-12 CUSTOM PAGES RESPONSIVE WEBSITE",
//       "5 CUSTOM BANNERS & 8 STOCK IMAGES",
//       "OPTIMIZED BUSINESS PAGE",
//       "E-COMMERCE & USER LOGIN SYSTEM",
//       "DATA ANALYTICS INTEGRATION",
//       "MOBILE RESPONSIVE & PWA SEO",
//       "ONLINE PAYMENT SETUP",
//       "SEARCH ENGINE SUBMISSION",
//       "CUSTOMIZABLE AS PER BUSINESS NEEDS"
//     ]
//   }
// ]

// export default function Packages() {
//   return (
//     <section id="packages" className="section-padding bg-charcoal">
//       <div className="container-custom">
//         <motion.div 
//           className="text-center max-w-3xl mx-auto mb-16"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.5 }}
//         >
//           <motion.span 
//             className="inline-block px-4 py-2 bg-teal/10 text-teal rounded-full font-montserrat text-sm mb-4"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.4, delay: 0.1 }}
//           >
//             Our Packages
//           </motion.span>
//           <motion.h2 
//             className="text-3xl md:text-4xl font-bold text-white mb-6"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.4, delay: 0.2 }}
//           >
//             Web Design & Development Packages
//           </motion.h2>
//           <motion.p 
//             className="text-light-gray/80"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.4, delay: 0.3 }}
//           >
//             Choose the perfect package that suits your business needs and budget.
//           </motion.p>
//         </motion.div>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
//           {packages.map((pkg, index) => (
//             <motion.div
//               key={index}
//               className={`group relative rounded-2xl overflow-hidden bg-gunmetal border border-teal/10 hover:border-teal/30 transition-all duration-500 ${pkg.popular ? 'md:-mt-4 md:mb-4' : ''}`}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.1 * index }}
//               whileHover={{ 
//                 y: -10,
//                 transition: { duration: 0.3 }
//               }}
//             >
//               {/* Background gradient */}
//               <div className={`absolute inset-0 bg-gradient-to-b ${pkg.color} ${pkg.hoverColor} transition-all duration-500`}></div>
              
//               {/* Popular badge */}
//               {pkg.popular && (
//                 <div className="absolute top-0 right-0">
//                   <div className={`${pkg.accentColor} text-white text-xs font-bold py-1 px-3 rounded-bl-lg`}>
//                     MOST POPULAR
//                   </div>
//                 </div>
//               )}
              
//               <div className="relative p-8">
//                 {/* Header */}
//                 <div className="text-center mb-8">
//                   <h3 className={`text-2xl font-bold ${pkg.textColor} mb-2`}>{pkg.tier}</h3>
//                   <div className="flex items-end justify-center">
//                     <span className="text-5xl font-bold text-white">{pkg.price}</span>
//                   </div>
//                 </div>
                
//                 {/* Features */}
//                 <ul className="space-y-4 mb-8">
//                   {pkg.features.map((feature, idx) => (
//                     <motion.li 
//                       key={idx} 
//                       className="flex items-start text-light-gray/90 text-sm"
//                       initial={{ opacity: 0, x: -10 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.3, delay: 0.1 * idx + 0.2 }}
//                     >
//                       <div className={`${pkg.accentColor} p-1 rounded-full mr-3 mt-0.5 flex-shrink-0`}>
//                         <Check className="h-3 w-3 text-white" />
//                       </div>
//                       <span>{feature}</span>
//                     </motion.li>
//                   ))}
//                 </ul>
                
//                 {/* CTA Button */}
//                 <motion.div
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <Link 
//                     href="#contact" 
//                     className={`w-full py-3 px-6 rounded-md font-medium text-center block transition-all duration-300 border-2 ${pkg.buttonClass} flex items-center justify-center`}
//                   >
//                     GET IN TOUCH
//                     <ChevronRight className="ml-1 h-4 w-4" />
//                   </Link>
//                 </motion.div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }



"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, X } from "lucide-react"
import { motion } from "framer-motion"

const packages = [
  {
    tier: "Basic",
    price: "$300",
    color: "from-[#b67fca]/20 to-[#b67fca]/5",
    hoverColor: "group-hover:from-[#b67fca]/30 group-hover:to-[#b67fca]/10",
    accentColor: "bg-[#b67fca]",
    textColor: "text-[#b67fca]",
    borderColor: "border-[#b67fca]/20 group-hover:border-[#b67fca]/50",
    buttonClass: "bg-[#b67fca] hover:bg-[#b67fca]/80",
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
      { name: "Online Payment Setup", included: false },
    ],
  },
  {
    tier: "Standard",
    price: "$500",
    color: "from-[#5dc7a7]/20 to-[#5dc7a7]/5",
    hoverColor: "group-hover:from-[#5dc7a7]/30 group-hover:to-[#5dc7a7]/10",
    accentColor: "bg-[#5dc7a7]",
    textColor: "text-[#5dc7a7]",
    borderColor: "border-[#5dc7a7]/20 group-hover:border-[#5dc7a7]/50",
    buttonClass: "bg-[#5dc7a7] hover:bg-[#5dc7a7]/80",
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
      { name: "SEO Optimization", included: true },
      { name: "Online Payment Setup", included: false },
    ],
  },
  {
    tier: "Premium",
    price: "$1000",
    color: "from-[#f5a55b]/20 to-[#f5a55b]/5",
    hoverColor: "group-hover:from-[#f5a55b]/30 group-hover:to-[#f5a55b]/10",
    accentColor: "bg-[#f5a55b]",
    textColor: "text-[#f5a55b]",
    borderColor: "border-[#f5a55b]/20 group-hover:border-[#f5a55b]/50",
    buttonClass: "bg-[#f5a55b] hover:bg-[#f5a55b]/80",
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
]

export default function Packages() {
  const [hoveredPackage, setHoveredPackage] = useState<number | null>(null)

  return (
    <section id="packages" className="section-padding bg-charcoal relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-teal/5 rounded-full blur-[100px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-electric-blue/5 rounded-full blur-[100px]"
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

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-teal/10 text-teal rounded-full font-montserrat text-sm mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Our Packages
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Web Design & Development Packages
          </motion.h2>
          <motion.p
            className="text-light-gray/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Choose the perfect package that suits your business needs and budget.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className={`group relative rounded-2xl overflow-hidden border ${pkg.borderColor} transition-all duration-500 bg-charcoal/80 backdrop-blur-sm`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              onHoverStart={() => setHoveredPackage(index)}
              onHoverEnd={() => setHoveredPackage(null)}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px -20px rgba(0, 169, 157, 0.3)",
                scale: 1.02,
              }}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${pkg.color} ${pkg.hoverColor} transition-all duration-500`}
              ></div>

              {/* Popular tag */}
              {pkg.popular && (
                <div className="absolute top-0 right-0">
                  <div className={`${pkg.accentColor} text-white text-xs font-bold px-4 py-1 rounded-bl-lg shadow-lg`}>
                    POPULAR
                  </div>
                </div>
              )}

              <div className="relative p-8">
                <div className="text-center mb-8">
                  <h3 className={`text-xl font-bold ${pkg.textColor} mb-2`}>{pkg.tier}</h3>
                  <p className="text-4xl font-bold text-white mb-0">{pkg.price}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: hoveredPackage === index || hoveredPackage === null ? 1 : 0.7,
                        x: 0,
                      }}
                      transition={{ duration: 0.3, delay: 0.05 * idx }}
                    >
                      {feature.included ? (
                        <span
                          className={`flex-shrink-0 w-5 h-5 rounded-full ${pkg.accentColor} flex items-center justify-center`}
                        >
                          <Check size={12} className="text-white" />
                        </span>
                      ) : (
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gunmetal flex items-center justify-center">
                          <X size={12} className="text-gray-500" />
                        </span>
                      )}
                      <span className={feature.included ? "text-light-gray" : "text-light-gray/50"}>
                        {feature.name}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
                  <Link
                    href="https://wa.me/923472807194"
                    className={`w-full py-3 px-6 rounded-lg font-medium text-center block text-white transition-all duration-300 ${pkg.buttonClass}`}
                  >
                    GET IN TOUCH
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

