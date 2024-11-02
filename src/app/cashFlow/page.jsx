import CapapilitiesBussines from "@/components/InAll/CapapilitiesBussines";
import HeroTempelates from "@/components/InAll/HeroTempelates";
import SwitchSection from "@/components/InAll/SwitchSection";
import { cashFlowFeatures } from "@/constants/MarqueeCash";

const CashFlow = () => {
  return (
    <main className="mt-[120px]  container space-y-28">
      <HeroTempelates
        title={"Cash"}
        span={"Flow"}
        desc={
          "Cash flow refers to the movement of money into and out of a business over a specific period. It is a crucial indicator of a company's financial health, as it shows how well the company generates cash to meet its obligations, such as paying bills and investing in growth. Positive cash flow indicates that a company has sufficient liquidity to support its operations."
        }
      />
      <CapapilitiesBussines ArrayToMap={cashFlowFeatures} />
      <SwitchSection imgUrl={"/financeCash.svg"} />
    </main>
  );
};

export default CashFlow;
