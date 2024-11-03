"use client";
import { navLinks } from "@/constants/navlinks";
import Image from "next/image";
import { Button } from "../ui/button";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header className="fixed  top-0 left-0 h-fit z-50 w-full bg-background/50 backdrop-blur-md py-4 noprint">
      <div className="container flex items-center justify-between flex-wrap">
        <Image
          className="rounded-lg"
          src={"/logo.jpg"}
          alt="Logo"
          width={60}
          height={40}
        />
        {/* links on large screen */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              className={`text-sm ${
                pathname == link.url
                  ? "text-foreground"
                  : "text-muted-foreground"
              } capitalize hover:text-foreground transition-all duration-300`}
              href={`${link.url}`}>
              {link.title}
            </Link>
          ))}
        </nav>
        {/* mode */}
        <div className="flex items-center gap-2">
          <Button className="text-white hidden md:flex">
            sign up for free trial
          </Button>
          <Button className="text-white flex md:hidden">sign up</Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
