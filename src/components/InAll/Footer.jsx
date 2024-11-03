import React from "react";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative noprint">
      <div className=" container pb-8 pt-16  lg:pt-24">
        <div className="text-center space-y-3">
          <h2 className=" text-2xl font-extrabold sm:text-5xl">
            Customise Your Project
          </h2>
          <p className="mx-auto  max-w-sm text-muted-foreground  capitalize">
            start with a free trial,no credit card required
          </p>

          <Button
            className={buttonVariants({ size: "lg" })}
            href="#projectBalance">
            Get Started
          </Button>
        </div>

        <div className="mt-16 border-t pb-16 sm:pb-0 pt-8 flex flex-col-reverse sm:flex-row sm:items-center  sm:justify-between lg:mt-24">
          <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
            <li>
              <a
                href="#"
                className="text-muted-foreground transition hover:opacity-75">
                Terms & Conditions
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-muted-foreground transition hover:opacity-75">
                Privacy Policy
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-muted-foreground transition hover:opacity-75">
                Cookies
              </a>
            </li>
          </ul>

          <Link className="flex mb-4 sm:mb-0 justify-center" href={"/"}>
            <Image
              className="rounded-lg"
              src={"/logo.jpg"}
              alt="Logo"
              width={60}
              height={40}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
