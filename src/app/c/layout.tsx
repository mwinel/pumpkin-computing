import { Navbar } from "@/components/navbar";

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#F9F7f4] min-h-screen px-4 sm:px-6 md:px-8">
      <Navbar />
      <main className="flex mx-auto" aria-label="page content">
        <div className="flex flex-col gap-6 items-center pt-2 pb-8 sm:pb-16 w-full">
          <div className="w-full max-w-2xl mx-auto">
            {children}
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
