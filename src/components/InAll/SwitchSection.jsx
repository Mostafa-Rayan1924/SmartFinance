"use client";
import Image from "next/image";
import MainTitle from "./MainTitle";
import { Button } from "../ui/button";
import { Square } from "lucide-react";
import Link from "next/link";
import { UserContextFromRegisteration } from "../context/UserContext";
import { useContext } from "react";

const SwitchSection = ({ imgUrl }) => {
  let { user } = useContext(UserContextFromRegisteration);
  return (
    <section className="relative noprint">
      <Square className="size-10 absolute top-6 right-0 -z-20 text-pink-500 opacity-85 rotate-6 " />
      <div className="absolute left-0 w-[150px] h-[150px]     opacity-50 blur-3xl  rounded-full bg-gradient-to-r from-primary to-transparent -z-20 -bottom-[120px] " />
      <div className="text-center ">
        <MainTitle title={"Switch to smart accounting!"} />
        {!user.token && (
          <Link href={"/login"}>
            <Button className="text-white ">Start with a free trial</Button>
          </Link>
        )}
        <Image
          width={1920}
          className="sm:h-[500px] mt-10 w-full rounded-lg object-fill "
          height={500}
          alt="finance"
          src={imgUrl}
        />
      </div>
    </section>
  );
};

export default SwitchSection;
