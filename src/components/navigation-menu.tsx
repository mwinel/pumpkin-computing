"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { MobileMenu } from "./mobile-menu";

export function NavbarMenu() {
  return (
    <>
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/about-us" className={navigationMenuTriggerStyle()}>
              About Us
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/case-studies" className={navigationMenuTriggerStyle()}>
              Case Studies
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact-us" className={navigationMenuTriggerStyle()}>
              Contact Us
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <MobileMenu />
    </>
  );
}
