import { CircleDollarSign, DiamondPlusIcon, Scale } from "lucide-react";

export let navLinks = [
  {
    id: 1,
    title: "balance sheet",
    url: "/",
    icon: <Scale className="size-4" />,
  },

  {
    id: 2,
    title: "income statement",
    url: "/IncomeStatement",
    icon: <DiamondPlusIcon className="size-4" />,
  },
  {
    id: 3,
    title: "cash flow",
    url: "/cashFlow",
    icon: <CircleDollarSign className="size-4" />,
  },
];
