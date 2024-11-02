import CapapilitiesBussines from "@/components/InAll/CapapilitiesBussines";
import Equation from "@/components/BalancePage/Equation";
import ProjectBalance from "@/components/BalancePage/ProjectBalance";
import Structure from "@/components/BalancePage/Structure";
import SwitchBalance from "@/components/InAll/SwitchSection";
import HeroTempelates from "@/components/InAll/HeroTempelates";
import { marqueeBalance } from "@/constants/MarqueeBalance";
import SwitchSection from "@/components/InAll/SwitchSection";

export default function Home() {
  return (
    <main className="py-[120px]  container space-y-28">
      <HeroTempelates
        title={"Free balance sheet"}
        span={"template"}
        desc={
          "In financial accounting, a balance sheet serves as a reference document for investors and other stakeholders to get an idea of the financial health of a business. It enables them to compare current assets and liabilities to determine the business’ liquidity, or calculate the rate at which the company generates returns."
        }
      />
      {/* <ProjectBalance /> */}
      <Equation />
      <Structure />
      <CapapilitiesBussines ArrayToMap={marqueeBalance} />
      <SwitchSection imgUrl={"/finance.jpg"} />
    </main>
  );
}
