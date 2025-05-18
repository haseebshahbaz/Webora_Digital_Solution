// "use client"

// import Link from "next/link"
// import Image from "next/image"
// import { ArrowRight, CheckCircle } from "lucide-react"
// import { motion, useScroll, useTransform } from "framer-motion"
// import HeroImg from "../assets/Hero.png"

// export default function Hero() {
//   const { scrollYProgress } = useScroll()
//   const y = useTransform(scrollYProgress, [0, 1], [0, 300])
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
//   const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

//   // Core services to highlight
//   const coreServices = ["Website Development", "Digital Marketing", "Brand Identity", "Business Growth"]

//   return (
//     <section id="home" className="relative bg-charcoal min-h-[90vh] flex items-center overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           className="absolute top-20 right-10 w-96 h-96 bg-teal/5 rounded-full blur-[100px]"
//           animate={{
//             x: [0, 50, 0],
//             y: [0, 30, 0],
//             scale: [1, 1.2, 1],
//             opacity: [0.3, 0.5, 0.3],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Number.POSITIVE_INFINITY,
//             repeatType: "reverse",
//           }}
//         />
//         <motion.div
//           className="absolute bottom-20 left-10 w-96 h-96 bg-electric-blue/5 rounded-full blur-[100px]"
//           animate={{
//             x: [0, -30, 0],
//             y: [0, 50, 0],
//             scale: [1, 1.3, 1],
//             opacity: [0.3, 0.6, 0.3],
//           }}
//           transition={{
//             duration: 25,
//             repeat: Number.POSITIVE_INFINITY,
//             repeatType: "reverse",
//             delay: 2,
//           }}
//         />
//       </div>

//       <div className="container-custom relative z-10 py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <motion.div
//             className="space-y-6"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{
//               duration: 0.8,
//               delay: 0.2,
//               type: "spring",
//               stiffness: 100,
//             }}
//             style={{ opacity, y }}
//           >
//             <motion.span
//               className="inline-block px-4 py-2 bg-teal/10 text-teal rounded-full font-montserrat text-sm"
//               initial={{ opacity: 0, y: 20, scale: 0.8 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               transition={{
//                 duration: 0.5,
//                 delay: 0.4,
//                 type: "spring",
//                 stiffness: 200,
//               }}
//             >
//               Your Digital Success Partner
//             </motion.span>

//             <motion.h1
//               className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.5,
//                 delay: 0.6,
//                 type: "spring",
//                 stiffness: 100,
//               }}
//             >
//               Transform Your{" "}
//               <motion.span
//                 className="text-teal inline-block"
//                 animate={{
//                   scale: [1, 1.03, 1],
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Number.POSITIVE_INFINITY,
//                   repeatType: "reverse",
//                 }}
//               >
//                 Digital Presence
//               </motion.span>{" "}
//               With Cutting-Edge Solutions
//             </motion.h1>

//             <motion.p
//               className="text-lg text-light-gray/90 max-w-xl"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.8 }}
//             >
//               We help businesses establish a powerful online identity through strategic digital solutions that drive
//               growth, enhance visibility, and connect with your target audience.
//             </motion.p>

//             {/* Core services highlights */}
//             <motion.div
//               className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 1 }}
//             >
//               {coreServices.map((service, index) => (
//                 <motion.div
//                   key={index}
//                   className="flex items-center gap-2"
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
//                 >
//                   <CheckCircle size={18} className="text-teal flex-shrink-0" />
//                   <span className="text-light-gray/80">{service}</span>
//                 </motion.div>
//               ))}
//             </motion.div>

//             <motion.div
//               className="flex flex-wrap gap-4 pt-6"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 1.2 }}
//             >
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 10 }}
//               >
//                 <Link href="#contact" className="btn-accent">
//                   Get Started
//                 </Link>
//               </motion.div>
//               <motion.div
//                 whileHover={{ scale: 1.05, x: 5 }}
//                 whileTap={{ scale: 0.95 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 10 }}
//               >
//                 <Link href="#services" className="btn-secondary flex items-center gap-2">
//                   Explore Services <ArrowRight size={18} />
//                 </Link>
//               </motion.div>
//             </motion.div>
//           </motion.div>

//           <motion.div
//             className="relative"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{
//               duration: 0.8,
//               delay: 0.5,
//               type: "spring",
//               stiffness: 100,
//             }}
//             style={{ scale }}
//           >
//             {/* Decorative elements */}
//             <motion.div
//               className="absolute -top-6 -right-6 w-24 h-24 bg-teal/10 rounded-full z-0"
//               animate={{
//                 scale: [1, 1.2, 1],
//                 opacity: [0.7, 0.4, 0.7],
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Number.POSITIVE_INFINITY,
//                 repeatType: "reverse",
//               }}
//             />
//             <motion.div
//               className="absolute -bottom-6 -left-6 w-32 h-32 bg-electric-blue/10 rounded-full z-0"
//               animate={{
//                 scale: [1, 1.3, 1],
//                 opacity: [0.7, 0.4, 0.7],
//               }}
//               transition={{
//                 duration: 5,
//                 repeat: Number.POSITIVE_INFINITY,
//                 repeatType: "reverse",
//                 delay: 1,
//               }}
//             />

//             <motion.div
//               className="relative z-10 aspect-square max-w-lg mx-auto"
//               whileHover={{ scale: 1.03 }}
//               transition={{ type: "spring", stiffness: 300, damping: 10 }}
//             >
//               <Image
//                 src={HeroImg || "/placeholder.svg"}
//                 alt="Digital Solutions"
//                 width={600}
//                 height={600}
//                 className="object-cover rounded-2xl shadow-2xl"
//                 priority
//               />
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-br from-teal/30 to-transparent rounded-2xl opacity-60"
//                 animate={{
//                   opacity: [0.6, 0.3, 0.6],
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Number.POSITIVE_INFINITY,
//                   repeatType: "reverse",
//                 }}
//               />
//             </motion.div>
//             <motion.div
//               className="absolute inset-0 bg-gradient-to-br from-teal/20 to-electric-blue/20 rounded-2xl transform rotate-3 scale-95"
//               animate={{
//                 rotate: [3, 6, 3],
//                 scale: [0.95, 0.98, 0.95],
//               }}
//               transition={{
//                 duration: 8,
//                 repeat: Number.POSITIVE_INFINITY,
//                 repeatType: "reverse",
//               }}
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Monitor,
  Smartphone,
  Search,
  Share2,
} from "lucide-react";

export default function HeroRedesign() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  // const { scrollYProgress } = useScroll();
  // const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  // const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  const [displayText, setDisplayText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const textOptions = [
    "Business Growth",
    "Online Success",
    "Brand Visibility",
    "Sales Growth",
    "Digital Innovation",
  ];

  useEffect(() => {
    let index = 0;
    let direction = 1; // 1: typing, -1: erasing

    const interval = setInterval(() => {
      const fullText = textOptions[currentTextIndex];

      if (direction === 1) {
        if (index <= fullText.length) {
          setDisplayText(fullText.substring(0, index));
          index++;
        } else {
          setTimeout(() => {
            direction = -1;
          }, 1500);
        }
      } else {
        if (index >= 0) {
          setDisplayText(fullText.substring(0, index));
          index--;
        } else {
          direction = 1;
          setCurrentTextIndex((prev) => (prev + 1) % textOptions.length);
        }
      }
    }, 80);

    return () => clearInterval(interval);
  }, [currentTextIndex]);

  const services = [
    {
      icon: <Monitor className="w-5 h-5 md:w-6 md:h-6" />,
      label: "Web Development",
      color: "text-teal",
      bgColor: "bg-teal/10",
    },
    {
      icon: <Smartphone className="w-5 h-5 md:w-6 md:h-6" />,
      label: "App Development",
      color: "text-sunset-orange",
      bgColor: "bg-sunset-orange/10",
    },
    {
      icon: <Search className="w-5 h-5 md:w-6 md:h-6" />,
      label: "SEO Services",
      color: "text-teal",
      bgColor: "bg-teal/10",
    },
    {
      icon: <Share2 className="w-5 h-5 md:w-6 md:h-6" />,
      label: "Digital Marketing",
      color: "text-sunset-orange",
      bgColor: "bg-sunset-orange/10",
    },
  ];

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-charcoal px-4 sm:px-6 py-16 md:py-24"
      aria-label="Hero section"
    >
      <div className="max-w-7xl w-full z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {/* Eyebrow text */}
          <motion.div
            className="inline-block px-4 py-2 bg-teal/10 text-teal rounded-full font-montserrat text-sm mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            Innovative Digital Solutions
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-light-gray font-poppins mb-4 leading-tight">
            Powering Your{" "}
            <span className="relative inline-block">
              <span className="text-teal z-10">{displayText}</span>
              <motion.span
                className="inline-block w-[3px] h-[0.9em] bg-teal ml-1 align-middle"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-2 left-0 h-3 w-full bg-teal/20 -z-10"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </span>
          </h1>

          {/* Subheading */}
          <motion.p
            className="text-lg md:text-xl text-light-gray/80 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We help businesses leverage cutting-edge technologies to create
            impactful digital experiences that drive growth, engagement, and
            measurable results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 bg-teal hover:bg-teal/90 text-charcoal font-medium py-3 px-8 rounded-full transition-all duration-300"
              >
                Get Started
                <ArrowRight
                  className="transition-transform group-hover:translate-x-1"
                  size={18}
                />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#services"
                className="group inline-flex items-center gap-2 border-2 border-sunset-orange text-sunset-orange hover:bg-sunset-orange/10 font-medium py-3 px-8 rounded-full transition-all duration-300"
              >
                Our Services
                <ArrowRight
                  className="transition-transform group-hover:translate-x-1"
                  size={18}
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Services */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`${service.bgColor} p-2 rounded-lg mb-2`}>
                  <span className={service.color}>{service.icon}</span>
                </div>
                <p className="text-light-gray font-medium text-xs sm:text-sm">
                  {service.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <p className="text-light-gray/60 text-sm mb-2">Scroll to explore</p>
        <motion.div
          className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-teal" />
        </motion.div>
      </motion.div>
    </section>
  );
}
