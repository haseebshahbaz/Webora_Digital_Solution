"use client"

import { useEffect } from "react"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Services from "@/components/services"
import Packages from "@/components/packages"
import CTA from "@/components/cta"

export default function Home() {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A") {
        const href = target.getAttribute("href")
        if (href && href.startsWith("#")) {
          e.preventDefault()
          const targetId = href.substring(1)
          const targetElement = document.getElementById(targetId)
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80, // Adjust for navbar height
              behavior: "smooth",
            })
          }
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])

  return (
    <>
      <Hero />
      <Features />
      <Services />
      <Packages />
      <CTA />
    </>
  )
}

