import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CaseStudyLinkProps {
  href: string;
  variant?: "link" | "outline";
  showArrow?: boolean;
  className?: string;
}

export function CaseStudyLink({
  href,
  variant = "outline",
  showArrow = true,
  className,
}: CaseStudyLinkProps) {
  return (
    <div className="mt-4">
      <Link
        href={href}
        className={cn(
          buttonVariants({
            variant,
            size: "sm",
          }),
          variant === "link" && "p-0",
          className
        )}
      >
        Learn More {showArrow && <ArrowRightIcon className="w-4 h-4 ml-2" />}
      </Link>
    </div>
  );
}
