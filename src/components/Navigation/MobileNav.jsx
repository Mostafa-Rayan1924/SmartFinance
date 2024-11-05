"use client";
import { navLinks } from "@/constants/navlinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
const MobileNav = () => {
  const pathname = usePathname();
  return (
    <header className="flex md:hidden fixed bottom-0 left-0 z-50 border-t border-border py-4 w-full bg-background">
      <div className="container ">
        <nav className="flex items-center gap-4 justify-evenly ">
          {navLinks.map((link) => (
            <Link
              href={`${link.url}`}
              key={link.id}
              className={`text-sm text-muted-foreground  ${
                pathname == link.url ? "text-primary" : "text-muted-foreground"
              } hover:text-primary transition-all duration-300 `}>
              <div className="flex  items-center flex-col gap-y-[2px]">
                <span>{link.icon}</span>
                <span className="capitalize text-[10px] text-center leading-tight ">
                  {link.title}
                </span>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default MobileNav;
