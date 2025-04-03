import { Zap, Shield, BarChart, Globe, Code, Users } from "lucide-react"

const features = [
  {
    icon: <Zap className="h-6 w-6 text-teal" />,
    title: "Lightning Fast Performance",
    description: "Optimized solutions that ensure your digital platforms load quickly and perform efficiently.",
  },
  {
    icon: <Shield className="h-6 w-6 text-teal" />,
    title: "Enterprise-Grade Security",
    description: "Robust security measures to protect your data and maintain customer trust.",
  },
  {
    icon: <BarChart className="h-6 w-6 text-teal" />,
    title: "Data-Driven Insights",
    description: "Advanced analytics to help you understand user behavior and make informed decisions.",
  },
  {
    icon: <Globe className="h-6 w-6 text-teal" />,
    title: "Global Reach",
    description: "Solutions designed to connect with audiences worldwide, regardless of location.",
  },
  {
    icon: <Code className="h-6 w-6 text-teal" />,
    title: "Cutting-Edge Technology",
    description: "Utilizing the latest technologies to keep your business ahead of the competition.",
  },
  {
    icon: <Users className="h-6 w-6 text-teal" />,
    title: "User-Centric Design",
    description: "Intuitive interfaces that prioritize user experience and drive engagement.",
  },
]

export default function Features() {
  return (
    <section className="section-padding bg-gunmetal">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-teal/10 text-teal rounded-full font-montserrat text-sm mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Features That Set Us Apart</h2>
          <p className="text-light-gray/80">
            We combine innovative technology with strategic thinking to deliver solutions that drive real business
            results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-charcoal p-8 rounded-xl border border-teal/10 hover:border-teal/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-light-gray/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

