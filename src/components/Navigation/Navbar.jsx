"use client";
import { navLinks } from "@/constants/navlinks";
import Image from "next/image";
import { Button, buttonVariants } from "../ui/button";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserContextFromRegisteration } from "../context/UserContext";
import { useContext } from "react";
import Profile from "./Profile";

const Navbar = () => {
  let { user, setUser } = useContext(UserContextFromRegisteration);
  const pathname = usePathname();

  return (
    <header className="fixed  top-0 left-0 h-fit z-50 w-full bg-background/50 backdrop-blur-md py-4 noprint">
      <div className="container flex items-center justify-between flex-wrap">
        <Link href={"/"}>
          <Image
            className="rounded-lg"
            src={"/logo.jpg"}
            alt="Logo"
            width={60}
            height={40}
          />
        </Link>
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
        <div className="flex relative items-center gap-2">
          {user.token ? (
            <div className="flex   items-center gap-2">
              <Profile />
            </div>
          ) : (
            <>
              <Link href={"/signup"}>
                <Button className="text-white hidden md:flex">
                  sign up for free trial
                </Button>
              </Link>
              <Link href={"/signup"}>
                <Button className="text-white flex md:hidden">sign up</Button>
              </Link>
            </>
          )}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
