import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gunmetal border-t border-teal/10">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              <div className="relative h-10 w-40">
                <Image src="/logo.png" alt="Webora Digital Solutions" fill className="object-contain" />
              </div>
            </Link>
            <p className="text-light-gray/70 mb-6">
              Innovative digital solutions for modern businesses. We help transform your digital presence with
              cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center text-teal hover:bg-teal hover:text-white transition-colors"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center text-teal hover:bg-teal hover:text-white transition-colors"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center text-teal hover:bg-teal hover:text-white transition-colors"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center text-teal hover:bg-teal hover:text-white transition-colors"
              >
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-light-gray/70 hover:text-teal transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-light-gray/70 hover:text-teal transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-light-gray/70 hover:text-teal transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-light-gray/70 hover:text-teal transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-light-gray/70 hover:text-teal transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-light-gray/70 hover:text-teal transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/services/web-development" className="text-light-gray/70 hover:text-teal transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mobile-applications"
                  className="text-light-gray/70 hover:text-teal transition-colors"
                >
                  Mobile Applications
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital-marketing"
                  className="text-light-gray/70 hover:text-teal transition-colors"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux-design" className="text-light-gray/70 hover:text-teal transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce" className="text-light-gray/70 hover:text-teal transition-colors">
                  E-Commerce Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/consulting" className="text-light-gray/70 hover:text-teal transition-colors">
                  IT Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-teal mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-light-gray/70">123 Innovation Street, Tech City, TC 10101</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-teal mr-3 flex-shrink-0" size={18} />
                <span className="text-light-gray/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-teal mr-3 flex-shrink-0" size={18} />
                <span className="text-light-gray/70">info@weboradigital.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-teal/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light-gray/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Webora Digital Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-light-gray/60 text-sm hover:text-teal transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-light-gray/60 text-sm hover:text-teal transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

