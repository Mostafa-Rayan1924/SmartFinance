import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  PieChart,
  FileText,
  Percent,
} from "lucide-react";

export let incomeStatementFeatures = [
  {
    id: 1,
    icon: <DollarSign size={40} />,
    title: "Total Revenue",
    description:
      "Shows the total income generated from sales and other sources.",
  },
  {
    id: 2,
    icon: <TrendingDown size={40} />,
    title: "Cost of Goods Sold (COGS)",
    description:
      "Displays direct costs associated with production, like materials and labor.",
  },
  {
    id: 3,
    icon: <TrendingUp size={40} />,
    title: "Gross Profit",
    description:
      "Calculated as Revenue minus COGS, indicating profit from core operations.",
  },
  {
    id: 4,
    icon: <PieChart size={40} />,
    title: "Operating Expenses",
    description:
      "Lists expenses necessary for running the business, such as rent, utilities, and salaries.",
  },
  {
    id: 5,
    icon: <FileText size={40} />,
    title: "Net Income",
    description:
      "Shows the final profit after subtracting all expenses and taxes from Gross Profit.",
  },
  {
    id: 6,
    icon: <Percent size={40} />,
    title: "Taxes",
    description:
      "Represents the total tax expense deducted from Gross Profit to determine Net Income.",
  },
];
