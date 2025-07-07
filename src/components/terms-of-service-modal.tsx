"use client"

import { useEffect } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface TermsOfServiceModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function TermsOfServiceModal({ isOpen, onClose }: TermsOfServiceModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gunmetal border border-teal/20 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-charcoal border-b border-teal/10 p-4 flex justify-between items-center z-10">
                <h2 className="text-xl font-bold text-white">Terms of Service</h2>
                <button onClick={onClose} className="p-2 rounded-full hover:bg-teal/10 transition-colors">
                  <X className="text-light-gray" size={20} />
                </button>
              </div>

              <div className="p-6 text-light-gray/80 space-y-6">
                <section>
                  <h3 className="text-lg font-bold text-white mb-3">1. Introduction</h3>
                  <p>
                    Welcome to Webora Digital Solutions. These terms and conditions outline the rules and regulations
                    for the use of our website and services.
                  </p>
                  <p className="mt-3">
                    By accessing this website, we assume you accept these terms and conditions in full. Do not continue
                    to use our website if you do not accept all of the terms and conditions stated on this page.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-white mb-3">2. License to Use Website</h3>
                  <p>
                    Unless otherwise stated, Webora Digital Solutions and/or its licensors own the intellectual property
                    rights for all material on this website. All intellectual property rights are reserved.
                  </p>
                  <p className="mt-3">
                    You may view and/or print pages from the website for your own personal use subject to restrictions
                    set in these terms and conditions.
                  </p>
                  <p className="mt-3">You must not:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Republish material from this website</li>
                    <li>Sell, rent or sub-license material from this website</li>
                    <li>Reproduce, duplicate or copy material from this website</li>
                    <li>Redistribute content from this website</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-white mb-3">3. Service Description</h3>
                  <p>
                    Webora Digital Solutions provides various digital services including but not limited to web design,
                    development, digital marketing, logo design, and financial services. The specific details,
                    deliverables, and timelines for each service will be outlined in a separate agreement or statement
                    of work.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-white mb-3">4. Payment Terms</h3>
                  <p>
                    Payment terms will be specified in the individual service agreements. Generally, we require a
                    deposit before beginning work, with the remaining balance due upon completion or as specified in the
                    agreement.
                  </p>
                  <p className="mt-3">
                    All prices are subject to change without notice. We reserve the right to modify or discontinue any
                    service without notice at any time.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-white mb-3">5. Client Responsibilities</h3>
                  <p>Clients are responsible for:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Providing necessary content, information, and feedback in a timely manner</li>
                    <li>Reviewing and approving work at designated milestones</li>
                    <li>Ensuring all provided content does not infringe on any third-party rights</li>
                    <li>Making payments according to the agreed schedule</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-white mb-3">6. Limitation of Liability</h3>
                  <p>
                    In no event shall Webora Digital Solutions, nor any of its officers, directors, and employees, be
                    liable for anything arising out of or in any way connected with your use of this website or our
                    services, whether such liability is under contract, tort or otherwise.
                  </p>
                  <p className="mt-3">
                    Webora Digital Solutions, including its officers, directors, and employees, shall not be liable for
                    any indirect, consequential, or special liability arising out of or in any way related to your use
                    of this website or our services.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-white mb-3">7. Indemnification</h3>
                  <p>
                    You hereby indemnify to the fullest extent Webora Digital Solutions from and against any and all
                    liabilities, costs, demands, causes of action, damages, and expenses arising in any way related to
                    your breach of any of the provisions of these Terms.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-white mb-3">8. Severability</h3>
                  <p>
                    If any provision of these Terms is found to be invalid under any applicable law, such provisions
                    shall be deleted without affecting the remaining provisions herein.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-white mb-3">9. Variation of Terms</h3>
                  <p>
                    Webora Digital Solutions is permitted to revise these Terms at any time as it sees fit, and by using
                    this website you are expected to review these Terms regularly.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-white mb-3">10. Governing Law & Jurisdiction</h3>
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in
                    which Webora Digital Solutions is established, and you submit to the non-exclusive jurisdiction of
                    the state and federal courts located in said jurisdiction for the resolution of any disputes.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-white mb-3">11. Contact Information</h3>
                  <p>If you have any questions about these Terms, please contact us at:</p>
                 <p className="mt-2">
                    <strong className="text-teal">Email:</strong>{" "}
                    info@webora-inc.com
                    <br />
                    <strong className="text-teal">Phone:</strong> +1 (289) 374-0626
                    <br />
                    <strong className="text-teal">Address:</strong> 981 Main St W Hamilton ontario , L8s 1a8.
                  </p>
                </section>

                <p className="mt-6 text-light-gray/60 text-sm">
                  <strong>Last Updated:</strong> July 7, 2025
                </p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

