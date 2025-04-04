// "use client"

// import {
//   TrendingUp,
//   MonitorSmartphone,
//   Palette,
//   Search,
//   Users,
//   BarChart,
//   DollarSign,
//   Lock,
//   Globe,
//   ArrowRight,
// } from "lucide-react"
// import { motion, useInView } from "framer-motion"
// import { useRef, useState } from "react"
// import Link from "next/link"

// const features = [
//   {
//     icon: <TrendingUp className="h-7 w-7" />,
//     title: "Strategic Business Growth",
//     description: "Data-driven marketing and web solutions to help businesses scale efficiently.",
//     color: "from-teal/20 to-teal/5",
//     hoverColor: "group-hover:from-teal/30 group-hover:to-teal/10",
//     iconBg: "bg-teal/10",
//     iconColor: "text-teal",
//     link: "#services",
//   },
//   {
//     icon: <MonitorSmartphone className="h-7 w-7" />,
//     title: "Innovative Web Solutions",
//     description: "Custom website development with responsive design, performance, and security.",
//     color: "from-electric-blue/20 to-electric-blue/5",
//     hoverColor: "group-hover:from-electric-blue/30 group-hover:to-electric-blue/10",
//     iconBg: "bg-electric-blue/10",
//     iconColor: "text-electric-blue",
//     link: "#services",
//   },
//   {
//     icon: <Palette className="h-7 w-7" />,
//     title: "Brand Identity & Logo Design",
//     description: "Professional logo and branding services to establish a strong visual identity.",
//     color: "from-sunset-orange/20 to-sunset-orange/5",
//     hoverColor: "group-hover:from-sunset-orange/30 group-hover:to-sunset-orange/10",
//     iconBg: "bg-sunset-orange/10",
//     iconColor: "text-sunset-orange",
//     link: "#services",
//   },
//   {
//     icon: <Search className="h-7 w-7" />,
//     title: "SEO & Performance Optimization",
//     description: "Websites optimized for search engines and speed to rank higher and attract more customers.",
//     color: "from-deep-purple/20 to-deep-purple/5",
//     hoverColor: "group-hover:from-deep-purple/30 group-hover:to-deep-purple/10",
//     iconBg: "bg-deep-purple/10",
//     iconColor: "text-deep-purple",
//     link: "#services",
//   },
//   {
//     icon: <Users className="h-7 w-7" />,
//     title: "Social Media Optimization",
//     description: "Engaging social media strategies to enhance brand visibility and customer engagement.",
//     color: "from-teal/20 to-teal/5",
//     hoverColor: "group-hover:from-teal/30 group-hover:to-teal/10",
//     iconBg: "bg-teal/10",
//     iconColor: "text-teal",
//     link: "#services",
//   },
//   {
//     icon: <BarChart className="h-7 w-7" />,
//     title: "Data-Driven Digital Marketing",
//     description: "AI-powered analytics and Google marketing strategies to maximize conversions and online reach.",
//     color: "from-electric-blue/20 to-electric-blue/5",
//     hoverColor: "group-hover:from-electric-blue/30 group-hover:to-electric-blue/10",
//     iconBg: "bg-electric-blue/10",
//     iconColor: "text-electric-blue",
//     link: "#services",
//   },
//   {
//     icon: <DollarSign className="h-7 w-7" />,
//     title: "Smart Financial Solutions",
//     description: "Digital accounting and financing services to streamline financial management.",
//     color: "from-sunset-orange/20 to-sunset-orange/5",
//     hoverColor: "group-hover:from-sunset-orange/30 group-hover:to-sunset-orange/10",
//     iconBg: "bg-sunset-orange/10",
//     iconColor: "text-sunset-orange",
//     link: "#services",
//   },
//   {
//     icon: <Lock className="h-7 w-7" />,
//     title: "Secure & Scalable Technology",
//     description: "Secure, scalable, and future-proof digital solutions that adapt to business growth.",
//     color: "from-deep-purple/20 to-deep-purple/5",
//     hoverColor: "group-hover:from-deep-purple/30 group-hover:to-deep-purple/10",
//     iconBg: "bg-deep-purple/10",
//     iconColor: "text-deep-purple",
//     link: "#services",
//   },
//   {
//     icon: <Globe className="h-7 w-7" />,
//     title: "Multi-Platform Integration",
//     description: "Cross-platform compatibility, ensuring smooth performance across mobile, web, and desktop.",
//     color: "from-teal/20 to-teal/5",
//     hoverColor: "group-hover:from-teal/30 group-hover:to-teal/10",
//     iconBg: "bg-teal/10",
//     iconColor: "text-teal",
//     link: "#services",
//   },
// ]

// export default function Features() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: false, amount: 0.1 })
//   const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

//   return (
//     <section id="features" className="section-padding bg-gunmetal relative overflow-hidden">
//       {/* Background elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           className="absolute top-40 left-20 w-96 h-96 bg-teal/5 rounded-full blur-[100px]"
//           animate={{
//             x: [0, 50, 0],
//             y: [0, 30, 0],
//             opacity: [0.2, 0.4, 0.2],
//           }}
//           transition={{
//             duration: 15,
//             repeat: Number.POSITIVE_INFINITY,
//             repeatType: "reverse",
//           }}
//         />
//         <motion.div
//           className="absolute -bottom-20 right-20 w-96 h-96 bg-electric-blue/5 rounded-full blur-[100px]"
//           animate={{
//             x: [0, -30, 0],
//             y: [0, 50, 0],
//             opacity: [0.2, 0.4, 0.2],
//           }}
//           transition={{
//             duration: 18,
//             repeat: Number.POSITIVE_INFINITY,
//             repeatType: "reverse",
//             delay: 2,
//           }}
//         />
//       </div>

//       <div className="container-custom relative z-10" ref={ref}>
//         <motion.div
//           className="text-center max-w-3xl mx-auto mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.6 }}
//         >
//           <motion.span
//             className="inline-block px-4 py-2 bg-teal/10 text-teal rounded-full font-montserrat text-sm mb-4"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
//             transition={{ duration: 0.4, delay: 0.2 }}
//           >
//             Why Choose Us
//           </motion.span>
//           <motion.h2
//             className="text-3xl md:text-4xl font-bold text-white mb-6"
//             initial={{ opacity: 0 }}
//             animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//           >
//             Features That Set Us Apart
//           </motion.h2>
//           <motion.p
//             className="text-light-gray/80"
//             initial={{ opacity: 0 }}
//             animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//           >
//             We provide cutting-edge digital solutions tailored to help your business grow, optimize, and succeed.
//           </motion.p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               className={`group relative rounded-xl overflow-hidden border border-gunmetal hover:border-${feature.iconColor.split("-")[1]}/30 transition-all duration-500`}
//               initial={{ opacity: 0, y: 50 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//               transition={{
//                 duration: 0.5,
//                 delay: 0.1 * (index % 3),
//                 type: "spring",
//                 stiffness: 100,
//               }}
//               whileHover={{
//                 y: -10,
//                 boxShadow: "0 20px 40px -20px rgba(0, 169, 157, 0.3)",
//                 scale: 1.02,
//               }}
//               onHoverStart={() => setHoveredFeature(index)}
//               onHoverEnd={() => setHoveredFeature(null)}
//             >
//               {/* Background gradient */}
//               <div
//                 className={`absolute inset-0 bg-gradient-to-br ${feature.color} ${feature.hoverColor} transition-all duration-500`}
//               ></div>

//               <div className="relative p-8">
//                 <div className="flex items-start gap-5 mb-4">
//                   <motion.div
//                     className={`w-14 h-14 ${feature.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}
//                     whileHover={{
//                       scale: 1.1,
//                       rotate: 5,
//                     }}
//                     animate={{
//                       scale: hoveredFeature === index ? [1, 1.1, 1] : 1,
//                       rotate: hoveredFeature === index ? [0, 5, 0] : 0,
//                     }}
//                     transition={{
//                       duration: hoveredFeature === index ? 0.8 : 0.3,
//                       repeat: hoveredFeature === index ? Number.POSITIVE_INFINITY : 0,
//                       repeatType: "reverse",
//                     }}
//                   >
//                     <span className={feature.iconColor}>{feature.icon}</span>
//                   </motion.div>
//                   <h3 className="text-xl font-bold text-white">{feature.title}</h3>
//                 </div>

//                 <p className="text-light-gray/80 mb-6">{feature.description}</p>

//                 <motion.div
//                   className="mt-auto"
//                   whileHover={{ x: 5 }}
//                   transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                 >
//                   <Link
//                     href={feature.link}
//                     className={`inline-flex items-center ${feature.iconColor} hover:opacity-80 transition-colors font-medium text-sm`}
//                   >
//                     Learn More{" "}
//                     <ArrowRight
//                       size={16}
//                       className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
//                     />
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

import {
  TrendingUp,
  MonitorSmartphone,
  Palette,
  Search,
  Users,
  BarChart,
  DollarSign,
  Lock,
  Globe,
  ArrowRight,
} from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Link from "next/link"

const features = [
  {
    icon: <TrendingUp className="h-6 w-6 sm:h-7 sm:w-7" />,
    title: "Strategic Business Growth",
    description: "Data-driven marketing and web solutions to help businesses scale efficiently.",
    color: "from-teal/20 to-teal/5",
    hoverColor: "group-hover:from-teal/30 group-hover:to-teal/10",
    iconBg: "bg-teal/10",
    iconColor: "text-teal",
    link: "#services",
  },
  {
    icon: <MonitorSmartphone className="h-6 w-6 sm:h-7 sm:w-7" />,
    title: "Innovative Web Solutions",
    description: "Custom website development with responsive design, performance, and security.",
    color: "from-electric-blue/20 to-electric-blue/5",
    hoverColor: "group-hover:from-electric-blue/30 group-hover:to-electric-blue/10",
    iconBg: "bg-electric-blue/10",
    iconColor: "text-electric-blue",
    link: "#services",
  },
  {
    icon: <Palette className="h-6 w-6 sm:h-7 sm:w-7" />,
    title: "Brand Identity & Logo Design",
    description: "Professional logo and branding services to establish a strong visual identity.",
    color: "from-sunset-orange/20 to-sunset-orange/5",
    hoverColor: "group-hover:from-sunset-orange/30 group-hover:to-sunset-orange/10",
    iconBg: "bg-sunset-orange/10",
    iconColor: "text-sunset-orange",
    link: "#services",
  },
  {
    icon: <Search className="h-6 w-6 sm:h-7 sm:w-7" />,
    title: "SEO & Performance Optimization",
    description: "Websites optimized for search engines and speed to rank higher and attract more customers.",
    color: "from-deep-purple/20 to-deep-purple/5",
    hoverColor: "group-hover:from-deep-purple/30 group-hover:to-deep-purple/10",
    iconBg: "bg-deep-purple/10",
    iconColor: "text-deep-purple",
    link: "#services",
  },
  {
    icon: <Users className="h-6 w-6 sm:h-7 sm:w-7" />,
    title: "Social Media Optimization",
    description: "Engaging social media strategies to enhance brand visibility and customer engagement.",
    color: "from-teal/20 to-teal/5",
    hoverColor: "group-hover:from-teal/30 group-hover:to-teal/10",
    iconBg: "bg-teal/10",
    iconColor: "text-teal",
    link: "#services",
  },
  {
    icon: <BarChart className="h-6 w-6 sm:h-7 sm:w-7" />,
    title: "Data-Driven Digital Marketing",
    description: "AI-powered analytics and Google marketing strategies to maximize conversions and online reach.",
    color: "from-electric-blue/20 to-electric-blue/5",
    hoverColor: "group-hover:from-electric-blue/30 group-hover:to-electric-blue/10",
    iconBg: "bg-electric-blue/10",
    iconColor: "text-electric-blue",
    link: "#services",
  },
  {
    icon: <DollarSign className="h-6 w-6 sm:h-7 sm:w-7" />,
    title: "Smart Financial Solutions",
    description: "Digital accounting and financing services to streamline financial management.",
    color: "from-sunset-orange/20 to-sunset-orange/5",
    hoverColor: "group-hover:from-sunset-orange/30 group-hover:to-sunset-orange/10",
    iconBg: "bg-sunset-orange/10",
    iconColor: "text-sunset-orange",
    link: "#services",
  },
  {
    icon: <Lock className="h-6 w-6 sm:h-7 sm:w-7" />,
    title: "Secure & Scalable Technology",
    description: "Secure, scalable, and future-proof digital solutions that adapt to business growth.",
    color: "from-deep-purple/20 to-deep-purple/5",
    hoverColor: "group-hover:from-deep-purple/30 group-hover:to-deep-purple/10",
    iconBg: "bg-deep-purple/10",
    iconColor: "text-deep-purple",
    link: "#services",
  },
  {
    icon: <Globe className="h-6 w-6 sm:h-7 sm:w-7" />,
    title: "Multi-Platform Integration",
    description: "Cross-platform compatibility, ensuring smooth performance across mobile, web, and desktop.",
    color: "from-teal/20 to-teal/5",
    hoverColor: "group-hover:from-teal/30 group-hover:to-teal/10",
    iconBg: "bg-teal/10",
    iconColor: "text-teal",
    link: "#services",
  },
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

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
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
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
            className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Features That Set Us Apart
          </motion.h2>
          <motion.p
            className="text-light-gray/80 px-4 sm:px-0"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            We provide cutting-edge digital solutions tailored to help your business grow, optimize, and succeed.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`group relative rounded-xl overflow-hidden border border-gunmetal hover:border-${feature.iconColor.split("-")[1]}/30 transition-all duration-500`}
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
              onHoverStart={() => setHoveredFeature(index)}
              onHoverEnd={() => setHoveredFeature(null)}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} ${feature.hoverColor} transition-all duration-500`}
              ></div>

              <div className="relative p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <motion.div
                    className={`w-12 h-12 sm:w-14 sm:h-14 ${feature.iconBg} rounded-lg flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0`}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                    }}
                    animate={{
                      scale: hoveredFeature === index ? [1, 1.1, 1] : 1,
                      rotate: hoveredFeature === index ? [0, 5, 0] : 0,
                    }}
                    transition={{
                      duration: hoveredFeature === index ? 0.8 : 0.3,
                      repeat: hoveredFeature === index ? Number.POSITIVE_INFINITY : 0,
                      repeatType: "reverse",
                    }}
                  >
                    <span className={feature.iconColor}>{feature.icon}</span>
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-bold text-white text-center sm:text-left">{feature.title}</h3>
                </div>

                <p className="text-light-gray/80 text-sm sm:text-base mb-4 sm:mb-6 text-center sm:text-left">
                  {feature.description}
                </p>

                <motion.div
                  className="mt-auto text-center sm:text-left"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={feature.link}
                    className={`inline-flex items-center ${feature.iconColor} hover:opacity-80 transition-colors font-medium text-sm`}
                  >
                    Learn More{" "}
                    <ArrowRight
                      size={16}
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


