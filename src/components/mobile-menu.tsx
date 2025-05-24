"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <span className="md:hidden">
          {open ? <X size={26} /> : <Menu size={26} />}
          <span className="sr-only">Toggle menu</span>
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem asChild>
          <Link 
            href="/" 
            className={cn(
              "cursor-pointer w-full",
              isActive("/") && "bg-accent"
            )}
          >
            Home
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link 
            href="/case-studies" 
            className={cn(
              "cursor-pointer w-full",
              isActive("/case-studies") && "bg-accent"
            )}
          >
            Case Studies
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link 
            href="/contact-us" 
            className={cn(
              "cursor-pointer w-full",
              isActive("/contact-us") && "bg-accent"
            )}
          >
            Contact Us
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
