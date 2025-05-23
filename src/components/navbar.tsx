import Image from "next/image";
import Link from "next/link";
import { NavbarMenu } from "./navigation-menu";

export function Navbar() {
  return (
    <header className="flex mx-auto max-w-2xl w-full h-16" aria-label="header">
      <div className="flex justify-between items-center w-full gap-2">
        <Link href="/" className="w-[110px]">
          <Image src="/pumpkin.jpg" alt="logo" width={110} height={110} />
        </Link>
        <NavbarMenu />
      </div>
    </header>
  );
}
