import { BadgeEuro, ChartCandlestick, CircleEqual } from "lucide-react";

export let structureBalanceBoxes = [
  {
    id: 1,
    title: "Assets",
    desc: "Assets are resources that a company owns, that help in the positive financial growth of the company. Assets can be of different types like, current and non-current, tangible and intangible, and operating and non-operating. Some examples of assets are short-term deposits, buildings, office supplies, patents, machinery and equipment, and marketable securities. The assets are listed on the left side of the balance sheet.",
    img: "/assets.jpeg",
    icon: <ChartCandlestick size={20} />,
  },
  {
    id: 2,
    title: "Liabilities",
    desc: "Liabilities are obligations that a company owes to other parties. They are financial commitments, including debts, that a company settles by paying in cash or providing equivalent services to the other party. They can be classified as current and non-current. Examples include short-term loans, accounts payable, and deferred tax. The liabilities are listed on the right side of the balance sheet.",
    img: "/equality.jpg",
    icon: <CircleEqual size={20} />,
  },
  {
    id: 3,
    title: "Equity",
    desc: "Equity is equal to the total assets minus total liabilities. It is the amount that has to be handed over to the shareholders after paying debts and liquidating assets. Equity represents the net value of the company. If equity is positive, it means the company has enough assets to pay for its liabilities, and if it is negative, the liabilities exceed the assets.",
    icon: <BadgeEuro size={20} />,
    img: "/liabilities.jpg",
  },
];
