import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/animate-ui/radix/accordion";
import { buttonVariants } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { CaseStudyLink } from "@/components/case-study-link";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Our case studies and projects.",
};

export default function CaseStudies() {
  return (
    <div className="bg-[#F9F7f4] min-h-screen px-4 md:px-0">
      <Navbar />
      <main className="flex mx-auto" aria-label="page content">
        <div className="flex flex-col gap-6 items-center pt-2 pb-8 sm:pb-16 mx-auto">
          <div className="bg-[#f2efe9] max-w-2xl w-full rounded-xl p-6 sm:p-10">
            <h3 className="text-gray-900 mb-1 text-lg leading-8 font-semibold">
              We have been busy...
            </h3>
            <Accordion type="single" defaultValue="item-1" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Case Study 1: Data Transformation & Engineering at Xclusive
                  Cuttings Uganda
                </AccordionTrigger>
                <AccordionContent>
                  Xclusive Cuttings Uganda, a premier exporter of flower
                  cuttings to European and Asian markets, faced significant
                  challenges with their manual data collection and management
                  processes. These inefficiencies were impacting their ability
                  to make timely, data-driven decisions crucial for maintaining
                  their competitive edge in the international market.
                  <br />
                  <br /> Our team delivered a comprehensive digital
                  transformation solution that revolutionized their data
                  collection, processing, and analysis capabilities.
                  <CaseStudyLink href="/c/1" variant="link" showArrow={false} />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Case Study 2: eD3chain, Kyoto University
                </AccordionTrigger>
                <AccordionContent>
                  Developed the front-end interface for ed3chain, an innovative
                  blockchain-based distributed learning platform. This research
                  initiative, conducted at Kyoto University's Academic Center
                  for Computing & Media Studies on Yoshida Campus, explores the
                  integration of distributed ledger technology with educational
                  systems to create decentralized learning experiences for
                  students and educators.
                  <CaseStudyLink href="/c/2" variant="link" showArrow={false} />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Case Study 3: Destination Management System, Karama
                  Expeditions
                </AccordionTrigger>
                <AccordionContent>
                  Developing a comprehensive digital platform for Karama
                  Expeditions Uganda that streamlines operations and enhances
                  customer experience. The system enables the team to
                  efficiently manage and organize bookings while providing
                  customers with an intuitive interface to plan their dream
                  destinations. A key innovation is the integrated installment
                  payment feature, allowing travelers to book their desired
                  trips and make payments over time, making premium travel
                  experiences more accessible. This solution addresses both
                  operational efficiency for the expedition company and customer
                  convenience, transforming how travel bookings are managed and
                  paid for in the Ugandan tourism market.
                  <CaseStudyLink href="/c/3" variant="link" showArrow={false} />
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
