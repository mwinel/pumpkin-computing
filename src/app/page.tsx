import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/animate-ui/radix/accordion";
import { Navbar } from "@/components/navbar";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Enterprise AI, ML, and Data Automation Solutions",
  description:
    "Pumpkin Computing helps enterprises design and build AI-powered data automation, analytics platforms, and custom software systems for measurable growth.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Enterprise AI, ML, and Data Automation Solutions",
    description:
      "Enterprise AI/ML consulting, data engineering, analytics, and software architecture tailored to complex business operations.",
    url: "/",
  },
};

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pumpkin Computing",
    url: "https://pumpkincomputing.com",
    description:
      "Pumpkin Computing builds enterprise AI, machine learning, data automation, analytics, and software systems.",
    areaServed: "Global",
    serviceType: [
      "AI Consulting",
      "Machine Learning Solutions",
      "Data Engineering",
      "Data Analytics",
      "Software Architecture",
      "Custom Software Development",
    ],
  };

  return (
    <div className="bg-[#F9F7f4] min-h-screen px-4 md:px-0">
      <Script
        id="organization-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Navbar />
      <main className="flex mx-auto" aria-label="page content">
        <div className="flex flex-col gap-6 items-center pt-2 pb-8 sm:pb-16 mx-auto">
          <div className="bg-[#1e1e1e] max-w-2xl w-full rounded-xl p-6 sm:p-10">
            <h1 className="text-white mb-4 sm:mb-6 text-2xl leading-8 font-semibold">
              Enterprise AI, ML, and data automation solutions.
            </h1>
            <div className="text-white text-base leading-5">
              Our team is committed to understanding your unique challenges and
              building powerful, AI-driven solutions that go beyond
              aesthetics to deliver measurable impact. Whether you are a
              startup, a growing business, or a large enterprise, we build
              scalable, intuitive, and high-performance systems that help you
              automate workflows, analyze data, and outperform the competition.
            </div>
          </div>
          <div className="bg-[#b9e9c5] max-w-2xl w-full rounded-xl p-6 sm:p-10">
            <h2 className="text-gray-900 mb-1 text-lg leading-8 font-semibold">
              Our Mission
            </h2>
            <div className="text-gray-900 text-sm leading-6">
              To design and build simple, scalable and user-centric big data
              tools that help organizations unlock the power of their data,
              enabling them to make smarter, faster, and more impactful business
              decisions.
            </div>
          </div>

          <div className="bg-[#f2efe9] max-w-2xl w-full rounded-xl p-6 sm:p-10">
            <h2 className="text-gray-900 mb-1 text-lg leading-8 font-semibold">
              What we do for enterprises
            </h2>
            <Accordion type="single" defaultValue="item-1" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Data Engineering</AccordionTrigger>
                <AccordionContent>
                  In today's data-saturated world, your organization's success
                  hinges on its ability to extract meaningful insights from vast
                  amounts of information. However, raw data, scattered across
                  disparate systems and in varying formats, can be overwhelming
                  and unusable. This is where we become invaluable. We are the
                  architects of your data's journey, meticulously designing and
                  building the infrastructure required to transform raw, chaotic
                  data into a powerful, organized asset. We specialize in
                  building scalable, efficient, and secure data pipelines that
                  ensure your data is always ready for analysis and decision-
                  making.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Software & Systems Architecture
                </AccordionTrigger>
                <AccordionContent>
                  Building complex software and systems is like constructing a
                  skyscraper. Without a solid blueprint and expert architects,
                  you risk instability, inefficiency, and costly rework down the
                  line. A poorly designed system can hinder growth, compromise
                  security, and lead to performance bottlenecks. We are the
                  architects of your software's journey, meticulously designing
                  and building the infrastructure required to transform how you
                  run things in your organization.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Software Development</AccordionTrigger>
                <AccordionContent>
                  Off-the-shelf software often falls short. Generic solutions
                  can be clunky, inefficient, and fail to address your specific
                  business needs. To truly gain a competitive edge and
                  streamline your operations, you need software that is
                  custom-built to fit your exact requirements, workflows, and
                  goals.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Link
              href="/contact-us"
              className={cn(
                "mt-6",
                buttonVariants({
                  size: "lg",
                })
              )}
            >
              Talk to us <ArrowRightIcon className="w-4 h-4" />
            </Link>
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
