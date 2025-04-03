import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative bg-charcoal min-h-[90vh] flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-electric-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block px-4 py-2 bg-teal/10 text-teal rounded-full font-montserrat text-sm">
              Innovative Digital Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Transform Your <span className="text-teal">Digital Presence</span> With Cutting-Edge Solutions
            </h1>
            <p className="text-lg text-light-gray/80 max-w-xl">
              We help businesses leverage the latest technologies to create impactful digital experiences that drive
              growth and engagement.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact" className="btn-accent">
                Get Started
              </Link>
              <Link href="/services" className="btn-secondary flex items-center gap-2">
                Explore Services <ArrowRight size={18} />
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-charcoal bg-gunmetal flex items-center justify-center"
                  >
                    <span className="text-xs font-medium text-teal">{String.fromCharCode(64 + i)}</span>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-light-gray/80 text-sm">
                  Trusted by <span className="text-teal font-medium">500+</span> companies worldwide
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 aspect-square max-w-lg mx-auto">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Digital Solutions"
                width={600}
                height={600}
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-teal/20 to-electric-blue/20 rounded-2xl transform rotate-3 scale-95"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

