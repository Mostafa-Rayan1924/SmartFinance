import CapapilitiesBussines from "@/components/InAll/CapapilitiesBussines";
import HeroTempelates from "@/components/InAll/HeroTempelates";
import SwitchSection from "@/components/InAll/SwitchSection";
import ShareholdersTemp from "@/components/shareholders/shareholdersTemp";
import { shareholdersEquityFeatures } from "@/constants/MarqueeIncome";

const shareholders = () => {
  return (
    <section className="mt-[120px] container space-y-28">
      <HeroTempelates
        title={"shareholders'"}
        span={"equity"}
        desc={
          "Shareholders' equity represents the owners' stake in a company, calculated as the difference between total assets and total liabilities. It reflects the residual interest that shareholders hold after all debts and obligations are paid. Often a key metric in assessing a company's financial health, shareholders' equity grows through retained earnings and additional capital investments."
        }
      />
      <ShareholdersTemp />
      <CapapilitiesBussines ArrayToMap={shareholdersEquityFeatures} />
      <SwitchSection imgUrl={"/shareholders.jpg"} />
    </section>
  );
};

export default shareholders;
