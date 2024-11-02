import { navLinks } from "@/constants/navlinks";
import Image from "next/image";
import { Button } from "../ui/button";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <header className="fixed  top-0 left-0 h-fit z-50 w-full bg-background/50 backdrop-blur-md py-4">
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
            <a
              key={link.id}
              className="text-sm text-muted-foreground  capitalize hover:text-foreground transition-all duration-300"
              href={`#${link.title}`}>
              {link.title}
            </a>
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
