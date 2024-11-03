import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MainTitle from "../InAll/MainTitle";
import { incomeStatementQuestions } from "@/constants/IncomestateQst";
import SquareIcon from "../InAll/SquareIcon";
import CircleIcon from "../InAll/CircleIcon";

const IncomeQuestions = () => {
  return (
    <section className="relative noprint">
      <SquareIcon color={"primary"} y={"-top-10"} x={"right-0"} />
      <CircleIcon color={"pink-500"} y={"-bottom-10"} x={"right-0"} />
      <div className="absolute left-20 sm:-left-20 w-[150px] h-[150px] sm:w-[220px] sm:h-[220px]    opacity-50 blur-3xl  rounded-full bg-gradient-to-r from-primary to-transparent -z-20 -bottom-20 " />
      <MainTitle
        title={"Frequently asked questions"}
        desc={"All Questions Which You Need About Income Statement"}
      />
      <Accordion
        type="single"
        collapsible
        className="w-full mt-10 max-w-[700px] mx-auto">
        {incomeStatementQuestions.map((item, index) => {
          return (
            <AccordionItem
              className="p-2 odd:bg-card-light rounded-lg dark:odd:bg-card-dark"
              value={index + 1}>
              <AccordionTrigger className="hover:no-underline hover:text-primary">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
};

export default IncomeQuestions;
