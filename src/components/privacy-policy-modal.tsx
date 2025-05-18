"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({
  isOpen,
  onClose,
}: PrivacyPolicyModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

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
                <h2 className="text-xl font-bold text-white">Privacy Policy</h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-teal/10 transition-colors"
                >
                  <X className="text-light-gray" size={20} />
                </button>
              </div>

              <div className="p-6 text-light-gray/80 space-y-6">
                <section>
                  <h3 className="text-lg font-bold text-white mb-3">
                    1. Introduction
                  </h3>
                  <p>
                    Welcome to Webora Digital Solutions. We respect your privacy
                    and are committed to protecting your personal data. This
                    privacy policy will inform you about how we look after your
                    personal data when you visit our website and tell you about
                    your privacy rights and how the law protects you.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-white mb-3">
                    2. The Data We Collect About You
                  </h3>
                  <p>
                    Personal data, or personal information, means any
                    information about an individual from which that person can
                    be identified. It does not include data where the identity
                    has been removed (anonymous data).
                  </p>
                  <p className="mt-3">
                    We may collect, use, store and transfer different kinds of
                    personal data about you which we have grouped together as
                    follows:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>
                      Identity Data: includes first name, last name, username or
                      similar identifier.
                    </li>
                    <li>
                      Contact Data: includes billing address, delivery address,
                      email address and telephone numbers.
                    </li>
                    <li>
                      Technical Data: includes internet protocol (IP) address,
                      your login data, browser type and version, time zone
                      setting and location, browser plug-in types and versions,
                      operating system and platform, and other technology on the
                      devices you use to access this website.
                    </li>
                    <li>
                      Usage Data: includes information about how you use our
                      website, products and services.
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-white mb-3">
                    3. How We Use Your Personal Data
                  </h3>
                  <p>
                    We will only use your personal data when the law allows us
                    to. Most commonly, we will use your personal data in the
                    following circumstances:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>
                      Where we need to perform the contract we are about to
                      enter into or have entered into with you.
                    </li>
                    <li>
                      Where it is necessary for our legitimate interests (or
                      those of a third party) and your interests and fundamental
                      rights do not override those interests.
                    </li>
                    <li>Where we need to comply with a legal obligation.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-white mb-3">
                    4. Data Security
                  </h3>
                  <p>
                    We have put in place appropriate security measures to
                    prevent your personal data from being accidentally lost,
                    used or accessed in an unauthorized way, altered or
                    disclosed. In addition, we limit access to your personal
                    data to those employees, agents, contractors and other third
                    parties who have a business need to know.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-white mb-3">
                    5. Data Retention
                  </h3>
                  <p>
                    We will only retain your personal data for as long as
                    reasonably necessary to fulfill the purposes we collected it
                    for, including for the purposes of satisfying any legal,
                    regulatory, tax, accounting or reporting requirements.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-white mb-3">
                    6. Your Legal Rights
                  </h3>
                  <p>
                    Under certain circumstances, you have rights under data
                    protection laws in relation to your personal data, including
                    the right to:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Request access to your personal data.</li>
                    <li>Request correction of your personal data.</li>
                    <li>Request erasure of your personal data.</li>
                    <li>Object to processing of your personal data.</li>
                    <li>
                      Request restriction of processing your personal data.
                    </li>
                    <li>Request transfer of your personal data.</li>
                    <li>Right to withdraw consent.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-white mb-3">
                    7. Contact Us
                  </h3>
                  <p>
                    If you have any questions about this privacy policy or our
                    privacy practices, please contact us at:
                  </p>
                  <p className="mt-2">
                    <strong className="text-teal">Email:</strong>{" "}
                    saleswebora@gmail.com
                    <br />
                    <strong className="text-teal">Phone:</strong> +1 (289) 872-8256
                    <br />
                    <strong className="text-teal">Address:</strong> 1243 Ronald Inche Drive, Oshawa, Ontario, L1K 0Y5, Canada.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-white mb-3">
                    8. Changes to the Privacy Policy
                  </h3>
                  <p>
                    We may update our privacy policy from time to time. We will
                    notify you of any changes by posting the new privacy policy
                    on this page and updating the &quot;Last Updated&quot; date.
                  </p>
                  <p className="mt-3">
                    <strong>Last Updated:</strong> April 3, 2025
                  </p>
                </section>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
