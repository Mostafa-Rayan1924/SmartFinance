import CapapilitiesBussines from "@/components/BalancePage/CapapilitiesBussines";
import Equation from "@/components/BalancePage/Equation";
import ProjectBalance from "@/components/BalancePage/ProjectBalance";
import Structure from "@/components/BalancePage/Structure";
import SwitchBalance from "@/components/BalancePage/SwitchBalance";
import HeroTempelates from "@/components/InAll/HeroTempelates";

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
      <CapapilitiesBussines />
      <SwitchBalance />
    </main>
  );
}
