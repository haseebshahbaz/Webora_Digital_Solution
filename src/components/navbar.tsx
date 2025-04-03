// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { Menu, X } from "lucide-react"
// import { motion, AnimatePresence } from "framer-motion"
// import Logo from "../assets/Website Logo.png"

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen)
//   }

//   // Handle scroll effect for navbar
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true)
//       } else {
//         setScrolled(false)
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   // Navigation items
//   const navItems = [
//     { name: "Home", href: "#home" },
//     { name: "Features", href: "#features" },
//     { name: "Services", href: "#services" },
//     { name: "Packages", href: "#packages" },
//     { name: "Contact", href: "#contact" },
//   ]

//   return (
//     <motion.header
//       className={`sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
//         scrolled ? "bg-charcoal/95 border-gunmetal shadow-lg" : "bg-charcoal/80 border-transparent"
//       }`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="container-custom flex items-center justify-between py-4">
//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
//           <Link href="#home" className="flex items-center">
//             <div className="relative h-10 w-40">
//               <Image
//                 src={Logo || "/placeholder.svg"}
//                 alt="Webora Digital Solutions"
//                 fill
//                 className="object-contain"
//                 priority
//               />
//             </div>
//           </Link>
//         </motion.div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center space-x-8">
//           {navItems.map((item, index) => (
//             <motion.div
//               key={item.name}
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: 0.1 * index }}
//             >
//               <Link href={item.href} className="text-light-gray hover:text-teal transition-colors">
//                 {item.name}
//               </Link>
//             </motion.div>
//           ))}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.3, delay: 0.6 }}
//           >
//             <Link href="#contact" className="btn-primary">
//               Get Started
//             </Link>
//           </motion.div>
//         </nav>

//         {/* Mobile Menu Button */}
//         <motion.button
//           className="md:hidden text-light-gray"
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.3, delay: 0.3 }}
//         >
//           {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </motion.button>
//       </div>

//       {/* Mobile Navigation */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.nav
//             className="md:hidden bg-gunmetal border-b border-teal/20"
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <div className="container-custom py-4 flex flex-col space-y-4">
//               {navItems.map((item, index) => (
//                 <motion.div
//                   key={item.name}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3, delay: 0.05 * index }}
//                 >
//                   <Link
//                     href={item.href}
//                     className="text-light-gray hover:text-teal transition-colors py-2 block"
//                     onClick={toggleMenu}
//                   >
//                     {item.name}
//                   </Link>
//                 </motion.div>
//               ))}
//               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.3 }}>
//                 <Link href="#contact" className="btn-primary inline-block text-center w-full" onClick={toggleMenu}>
//                   Get Started
//                 </Link>
//               </motion.div>
//             </div>
//           </motion.nav>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   )
// }



"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import Logo from "../assets/Website Logo.png"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { scrollY } = useScroll()

  const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(18, 18, 18, 0.8)", "rgba(18, 18, 18, 0.95)"])

  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.1])

  const scale = useTransform(scrollY, [0, 100], [1, 0.95])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Handle scroll effect for navbar and active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionId = section.getAttribute("id") || ""
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Navigation items
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Services", href: "#services" },
    { name: "Packages", href: "#packages" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.header
      className="sticky top-0 z-50 backdrop-blur-md border-b"
      style={{
        backgroundColor,
        borderColor: `rgba(35, 39, 42, ${borderOpacity.get()})`,
      }}
    >
      <div className="container-custom flex items-center justify-between py-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} style={{ scale }}>
          <Link href="#home" className="flex items-center">
            <div className="relative h-10 w-40">
              <Image
                src={Logo || "/placeholder.svg"}
                alt="Webora Digital Solutions"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <Link
                href={item.href}
                className={`relative px-2 py-1 transition-colors ${
                  activeSection === item.href.substring(1) ? "text-teal" : "text-light-gray hover:text-teal"
                }`}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-teal rounded-full"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="#contact" className="btn-primary">
              Get Started
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-light-gray"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="md:hidden bg-gunmetal border-b border-teal/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-custom py-4 flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                >
                  <Link
                    href={item.href}
                    className={`block py-2 transition-colors ${
                      activeSection === item.href.substring(1) ? "text-teal" : "text-light-gray hover:text-teal"
                    }`}
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="#contact" className="btn-primary inline-block text-center w-full" onClick={toggleMenu}>
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

