"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 bg-charcoal/90 backdrop-blur-md border-b border-gunmetal">
      <div className="container-custom flex items-center justify-between py-4">
        <Link href="/" className="flex items-center">
          <div className="relative h-10 w-40">
            <Image src="/logo.png" alt="Webora Digital Solutions" fill className="object-contain" priority />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-light-gray hover:text-teal transition-colors">
            Home
          </Link>
          <Link href="/services" className="text-light-gray hover:text-teal transition-colors">
            Services
          </Link>
          <Link href="/about" className="text-light-gray hover:text-teal transition-colors">
            About
          </Link>
          <Link href="/portfolio" className="text-light-gray hover:text-teal transition-colors">
            Portfolio
          </Link>
          <Link href="/contact" className="text-light-gray hover:text-teal transition-colors">
            Contact
          </Link>
          <Link href="/contact" className="btn-primary">
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-light-gray" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gunmetal border-b border-teal/20">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link href="/" className="text-light-gray hover:text-teal transition-colors py-2" onClick={toggleMenu}>
              Home
            </Link>
            <Link
              href="/services"
              className="text-light-gray hover:text-teal transition-colors py-2"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link href="/about" className="text-light-gray hover:text-teal transition-colors py-2" onClick={toggleMenu}>
              About
            </Link>
            <Link
              href="/portfolio"
              className="text-light-gray hover:text-teal transition-colors py-2"
              onClick={toggleMenu}
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="text-light-gray hover:text-teal transition-colors py-2"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link href="/contact" className="btn-primary inline-block text-center" onClick={toggleMenu}>
              Get Started
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}

