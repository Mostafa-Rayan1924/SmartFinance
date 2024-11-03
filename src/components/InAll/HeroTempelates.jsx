import CircleIcon from "./CircleIcon";
import SquareIcon from "./SquareIcon";
const HeroTempelates = ({ title, span, desc }) => {
  return (
    <section className="relative noprint flex flex-col items-center   sm:mt-[-70px] h-[50vh] sm:h-[70vh]     justify-center  ">
      <div className="absolute right-20 sm:-right-20 w-[150px] h-[150px] sm:w-[220px] sm:h-[220px]    opacity-50 blur-3xl  rounded-full bg-gradient-to-r from-primary to-transparent -z-20 bottom-0 " />
      <div className="relative text-center ">
        <h2 className="text-3xl phoneHeroTitle mb-4 justify-center  mx-auto whitespace-nowrap font-bold md:text-4xl lg:text-5xl gap-1 sm:gap-4 capitalize flex items-center">
          {title}
          <span className="text-primary">{span}</span>
        </h2>
        <p className="text-muted-foreground sm:text-lg sm:max-w-[900px]">
          {desc}
        </p>
        <SquareIcon y={"-top-20"} x={"left-0"} color={"pink-500"} />
        <SquareIcon y={"-bottom-10"} x={"right-0"} color={"primary"} />
        <CircleIcon color={"primary"} x={"left-10"} y={"-bottom-10"} />
        <CircleIcon color={"pink-500"} x={"right-0"} y={"-top-10"} />
      </div>
    </section>
  );
};

export default HeroTempelates;
