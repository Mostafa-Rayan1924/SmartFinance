import { structureBalanceBoxes } from "@/constants/BalanceStructureBoxes";
import MainTitle from "../InAll/MainTitle";
import Image from "next/image";

const Structure = () => {
  return (
    <section>
      <MainTitle
        title={"Structure of a balance sheet"}
        desc={
          "The balance sheet has three important components: assets, liabilities, and equity."
        }
      />
      <div className="grid mt-10  md:grid-cols-2 lg:grid-cols-3 gap-4">
        {structureBalanceBoxes.map((item) => {
          return (
            <article className="overflow-hidden  rounded-lg bg-card-light dark:bg-card-dark  transition hover:shadow-lg">
              <Image
                alt={item.title}
                width={400}
                height={200}
                src={item.img}
                className="h-56 w-full  object-cover"
              />

              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-2">
                  <span className="text-primary">{item.icon}</span>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Structure;
