import { DiamondPercent, Square } from "lucide-react";
import MainTitle from "../InAll/MainTitle";

const Equation = () => {
  return (
    <section className="border relative rounded-lg p-6 max-w-[720px] mx-auto">
      <Square className="size-10 text-muted-foreground absolute right-0 md:-right-4 -top-6 -z-10  opacity-85 rotate-6 " />
      <MainTitle
        title={"The balance sheet equation"}
        desc={
          "The balance sheet is based on an equation where assets are on one side, liabilities and shareholders' equity are on the other side, and both sides balance out."
        }
      />
      <div className="flex items-center justify-center  my-4 gap-2">
        <DiamondPercent className="size-8 sm:flex hidden text-pink-500" />
        <h4 className="text-sm textEquations sm:text-lg font-semibold">
          Assets <span className="text-primary">=</span> Liabilities +
          Shareholders' Equity
        </h4>
      </div>
      <p className="text-muted-foreground text-sm">
        According to the equation, a company pays for what it owns (assets) by
        borrowing money as a service (liabilities) or taking from the
        shareholders or investors (equity).
      </p>
    </section>
  );
};

export default Equation;
