import type { Metadata } from "next";

import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact us for any questions or inquiries.",
};

export default function ContactUs() {
  return (
    <div className="bg-[#F9F7f4] min-h-screen px-4 md:px-0">
      <Navbar />
      <main className="flex mx-auto" aria-label="page content">
        <div className="flex flex-col gap-6 items-center pt-2 pb-8 sm:pb-16 mx-auto">
          <div className="bg-[#f2efe9] max-w-2xl w-full rounded-xl p-6 sm:p-10">
            <h3 className="text-gray-900 mb-1 text-lg leading-8 font-semibold">
              Who we are...
            </h3>
            <div className="space-y-4 sm:space-y-2">
              <div className="text-gray-900 text-sm leading-6 min-w-full">
                We are a young, vibrant tech company with a deep passion for
                data and software. Our core focus? Crafting powerful data
                engineering and software development solutions for enterprises
                of all sizes — from scrappy startups to seasoned industry
                leaders. We live at the intersection of clean code and
                meaningful impact, building tools that not only work, but work
                beautifully.
              </div>

              <div className="text-gray-900 text-sm leading-6 min-w-full">
                We're not here to chase trends. We're builders. Every product we
                touch is shaped with craftsmanship in mind —{" "}
                <span className="font-bold">optimized for performance</span>,
                <span className="font-bold">scalability</span>, and a{" "}
                <span className="font-bold">great user experience</span>.
                Whether it's a custom data platform or an enterprise-grade web
                application, we obsess over the details that turn good into
                great. But technical skill is only half the story.
              </div>

              <div className="text-gray-900 text-sm leading-6 min-w-full">
                What drives us most is <span className="font-bold">impact</span>
                . We’re not interested in building flashy solutions that gather
                dust. Our work is rooted in real-world problems. We{" "}
                <span className="font-bold">
                  collaborate closely with our clients
                </span>
                , understand their pain points, and deliver tools that transform
                how they operate. We measure our success by the measurable value
                we bring to their businesses.
              </div>

              <div className="text-gray-900 text-sm leading-6 min-w-full">
                That collaboration doesn’t stop at kickoff. We treat our clients
                as true partners. We ask questions. We listen. We iterate. And
                we adapt our solutions as their needs evolve. This
                human-centered approach leads to smarter, more relevant, and
                more resilient technology.
              </div>

              <div className="text-gray-900 text-sm leading-6 min-w-full">
                One of our biggest inspirations? The way elite football clubs
                like <span className="font-bold">Manchester United</span> use
                big data to gain a competitive edge.
                From player recruitment to matchday decisions, they harness
                information to make smarter moves, faster. That is the kind of
                transformation we aim to bring to every client — helping
                organizations unlock the power of their data so they can make
                faster, smarter, more impactful decisions.
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
