import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/animate-ui/radix/accordion";
import { Navbar } from "@/components/navbar";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="bg-[#F9F7f4] min-h-screen px-4 md:px-0">
      <Navbar />
      <main className="flex mx-auto" aria-label="page content">
        <div className="flex flex-col gap-6 items-center pt-2 pb-8 sm:pb-16 mx-auto">
          <div className="bg-[#1e1e1e] max-w-2xl w-full rounded-xl p-6 sm:p-10">
            <h2 className="text-white mb-4 sm:mb-6 text-2xl leading-8 font-semibold">
              Simple solutions for complex problems.
            </h2>
            <div className="text-white text-base leading-5">
              Our team is committed to understanding your unique challenges and
              building powerful, data-driven solutions that go beyond
              aesthetics—to deliver real impact. Whether you're a startup, a
              growing business, or a large enterprise, we create scalable,
              intuitive, and high-performance tools that help you harness your
              full potential of ahead of your competition.
            </div>
          </div>
          <div className="bg-[#b9e9c5] max-w-2xl w-full rounded-xl p-6 sm:p-10">
            <h3 className="text-gray-900 mb-1 text-lg leading-8 font-semibold">
              Our Mission
            </h3>
            <div className="text-gray-900 text-sm leading-6">
              To design and build simple, scalable and user-centric big data
              tools that help organizations unlock the power of their data,
              enabling them to make smarter, faster, and more impactful business
              decisions.
            </div>
          </div>

          <div className="bg-[#f2efe9] max-w-2xl w-full rounded-xl p-6 sm:p-10">
            <h3 className="text-gray-900 mb-1 text-lg leading-8 font-semibold">
              What we do
            </h3>
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
