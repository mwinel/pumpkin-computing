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
              Talk to us
            </h3>
            <div className="text-gray-900 text-sm leading-6 min-w-full">
              Ready to jump on the collaboration train with us? Just send us an
              email on{" "}
              <span className="font-bold">hello@pumpkincomputing.com</span> and
              real human will initiate conversation with you via google.
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
