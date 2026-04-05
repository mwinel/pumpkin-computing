import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Calendar } from "lucide-react";
import Script from "next/script";

import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Contact Pumpkin Computing - Start Your AI/ML Project",
  description:
    "Contact Pumpkin Computing to discuss enterprise AI, machine learning, data engineering, analytics, and custom software initiatives.",
  alternates: {
    canonical: "/contact-us",
  },
};

export default function ContactUs() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Pumpkin Computing",
    url: "https://pumpkincomputing.com/contact-us",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "hello@pumpkincomputing.com",
      telephone: "+256705777086",
      areaServed: "Global",
      availableLanguage: ["English"],
    },
  };

  return (
    <div className="bg-[#F9F7f4] min-h-screen px-4 md:px-0">
      <Script
        id="contact-page-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <Navbar />
      <main className="flex mx-auto" aria-label="page content">
        <div className="flex flex-col gap-6 items-center pt-2 pb-8 sm:pb-16 mx-auto">
          <div className="bg-[#f2efe9] max-w-2xl w-full rounded-xl p-6 sm:p-10">
            <h1 className="text-gray-900 mb-1 text-lg leading-8 font-semibold">
              Talk to us about your enterprise data and AI goals
            </h1>
            <div className="space-y-4 sm:space-y-2">
              <div className="text-gray-900 text-sm leading-6 min-w-full">
                Ready to jump on the collaboration train with us? Just send us
                an email on{" "}
                <span className="font-bold">hello@pumpkincomputing.com</span>{" "}
                and a real human will start a conversation with you promptly.
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 text-gray-900 text-sm leading-6 min-w-full">
                Prefer WhatsApp? Reach out to us on:{" "}
                <span className="font-bold inline-flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  +256 705 777086
                </span>
              </div>
              <div className="flex items-center gap-1 text-gray-900 text-sm leading-6 min-w-full">
                Want to schedule a meeting?{" "}
                <Link
                  href="https://cal.com/pumpkin-computing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold inline-flex items-center gap-1 hover:text-gray-700 transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  Book a call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <p className="text-center text-xs text-gray-600 pb-4">
          © {new Date().getFullYear()} Pumpkin Computing. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
