import CapapilitiesBussines from "@/components/InAll/CapapilitiesBussines";
import HeroTempelates from "@/components/InAll/HeroTempelates";
import SwitchSection from "@/components/InAll/SwitchSection";
import IncomeQuestions from "@/components/IncomePage/IncomeQuestions";
import { incomeStatementFeatures } from "@/constants/MarqueeIncome";

const IncomePage = () => {
  return (
    <main className="mt-[120px]  container space-y-28">
      <HeroTempelates
        title={"INCOME STATE"}
        span={"MENT"}
        desc={
          "Revenue reflects the total income generated from sales and other sources Cost of Goods Sold represents direct production costs like materials and labor Gross Profit is calculated by subtracting COGS from Revenue Operating Expenses include costs for running the business, such as rent, salaries, and utilities Net Income is the remaining profit after deducting Operating Expenses and taxes"
        }
      />
      <IncomeQuestions />
      <CapapilitiesBussines ArrayToMap={incomeStatementFeatures} />
      <SwitchSection imgUrl={"/financeIncome.jpg"} />
    </main>
  );
};

export default IncomePage;
