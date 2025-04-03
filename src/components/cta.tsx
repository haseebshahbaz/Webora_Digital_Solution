import Link from "next/link"

export default function CTA() {
  return (
    <section className="section-padding bg-charcoal">
      <div className="container-custom">
        <div className="bg-gradient-to-r from-teal/20 to-electric-blue/20 rounded-2xl p-8 md:p-12 lg:p-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-light-gray/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's work together to create innovative digital solutions that drive growth and engagement for your
              business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-accent">
                Get Started Today
              </Link>
              <Link href="/portfolio" className="btn-secondary">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

