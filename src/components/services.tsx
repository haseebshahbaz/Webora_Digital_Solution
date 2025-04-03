import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Web Development",
    description:
      "Custom websites and web applications built with the latest technologies to deliver exceptional user experiences.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/services/web-development",
  },
  {
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps designed to engage users and extend your digital reach.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/services/mobile-applications",
  },
  {
    title: "Digital Marketing",
    description:
      "Strategic marketing campaigns that increase visibility, drive traffic, and generate leads for your business.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/services/digital-marketing",
  },
  {
    title: "UI/UX Design",
    description: "User-centered design solutions that create intuitive, engaging, and memorable digital experiences.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/services/ui-ux-design",
  },
]

export default function Services() {
  return (
    <section className="section-padding bg-charcoal">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-teal/10 text-teal rounded-full font-montserrat text-sm mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Comprehensive Digital Solutions</h2>
          <p className="text-light-gray/80">
            From concept to execution, we provide end-to-end services to help your business thrive in the digital
            landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gunmetal rounded-xl overflow-hidden border border-teal/10 hover:border-teal/30 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gunmetal to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-light-gray/80 mb-6">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-teal hover:text-teal/80 transition-colors font-medium"
                >
                  Learn More <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

