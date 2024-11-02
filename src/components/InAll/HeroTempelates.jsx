import { Circle, Square } from "lucide-react";

const HeroTempelates = ({ title, span, desc }) => {
  return (
    <section className="relative flex flex-col items-center   sm:mt-[-70px] h-[50vh] sm:h-[70vh]     justify-center  ">
      <div className="absolute right-20 sm:-right-20 w-[150px] h-[150px] sm:w-[220px] sm:h-[220px]    opacity-50 blur-3xl  rounded-full bg-gradient-to-r from-primary to-transparent -z-20 bottom-0 " />
      <div className="relative text-center ">
        <h2 className="text-3xl phoneHeroTitle mb-4 justify-center  mx-auto whitespace-nowrap font-bold md:text-4xl lg:text-5xl gap-1 sm:gap-4 capitalize flex items-center">
          {title}
          <span className="text-primary">{span}</span>
        </h2>
        <p className="text-muted-foreground sm:text-lg sm:max-w-[900px]">
          {desc}
        </p>
        <Square className="size-10 absolute -top-20 left-0 -z-20 text-pink-500 opacity-85 rotate-6 " />
        <Square className="size-10 text-primary absolute right-0 -bottom-10 -z-10  opacity-85 rotate-6 " />
        <Circle className="absolute size-10  flex text-pink-500  -top-10 right-0   -z-10  opacity-85 rotate-6 " />
        <Circle className="size-10 flex text-primary absolute -bottom-10 left-0  -z-10  opacity-85 rotate-6  " />
      </div>
    </section>
  );
};

export default HeroTempelates;
