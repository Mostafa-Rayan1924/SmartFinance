import Image from "next/image";
import MainTitle from "./MainTitle";
import { Button } from "../ui/button";
import { Square } from "lucide-react";

const SwitchSection = ({ imgUrl }) => {
  return (
    <section className="relative noprint">
      <Square className="size-10 absolute top-10 right-0 -z-20 text-pink-500 opacity-85 rotate-6 " />
      <div className="absolute left-0 w-[150px] h-[150px]     opacity-50 blur-3xl  rounded-full bg-gradient-to-r from-primary to-transparent -z-20 -bottom-[120px] " />
      <div className="text-center ">
        <MainTitle title={"Switch to smart accounting!"} />
        <Button className="text-white mb-10">Start with a free trial</Button>
        <Image
          width={1920}
          className="sm:h-[600px] w-full rounded-lg object-cover "
          height={500}
          alt="finance"
          src={imgUrl}
        />
      </div>
    </section>
  );
};

export default SwitchSection;
