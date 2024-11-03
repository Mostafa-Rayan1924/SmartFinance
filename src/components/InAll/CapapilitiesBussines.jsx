import { marqueeBalance } from "@/constants/MarqueeBalance";
import MainTitle from "./MainTitle";
import { Circle, Square } from "lucide-react";
import CapapilitiesCard from "./CapapilitiesCard";

const CapapilitiesBussines = ({ ArrayToMap }) => {
  return (
    <section className="relative noprint">
      <div className="absolute right-20 sm:-right-20 w-[150px] h-[150px]     opacity-50 blur-3xl  rounded-full bg-gradient-to-r from-primary to-transparent -z-20 -bottom-[120px] " />
      <Square className="size-10 absolute -top-20 left-0 -z-20 text-pink-500 opacity-85 rotate-6 " />
      <Square className="size-10 text-primary absolute right-0 -bottom-10 -z-10  opacity-85 rotate-6 " />
      <Circle className="absolute size-10  flex text-pink-500  -top-10 right-0   -z-10  opacity-85 rotate-6 " />
      <Circle className="size-10 flex text-primary absolute -bottom-10 left-0  -z-10  opacity-85 rotate-6  " />
      <MainTitle
        title={"capabilities for business"}
        desc={
          "Ability to define a clear vision and set long-term goals aligned with market demands and company values."
        }
      />

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-6">
        {ArrayToMap.map((item) => {
          return <CapapilitiesCard key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
};

export default CapapilitiesBussines;
