import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    content:
      "Working with Webora has been transformative for our business. Their team delivered a website that not only looks stunning but also performs exceptionally well.",
    rating: 5,
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Michael Chen",
    position: "Marketing Director, GrowthLabs",
    content:
      "The digital marketing strategy developed by Webora helped us increase our online presence and generate 40% more qualified leads within just three months.",
    rating: 5,
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Emily Rodriguez",
    position: "Product Manager, InnovateCorp",
    content:
      "The mobile app developed by Webora exceeded our expectations. User engagement has increased significantly, and we've received fantastic feedback from our customers.",
    rating: 4,
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-gunmetal">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-teal/10 text-teal rounded-full font-montserrat text-sm mb-4">
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What Our Clients Say</h2>
          <p className="text-light-gray/80">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-charcoal p-8 rounded-xl border border-teal/10 hover:border-teal/30 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${
                      i < testimonial.rating ? "text-sunset-orange fill-sunset-orange" : "text-gray-500"
                    } mr-1`}
                  />
                ))}
              </div>
              <p className="text-light-gray/80 mb-6">&quot;{testimonial.content}&quot;</p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-light-gray/60">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

