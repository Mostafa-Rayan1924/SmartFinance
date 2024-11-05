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
export let shareholdersEquityFeatures = [
  {
    id: 1,
    icon: <PieChart size={40} />,
    title: "Common Stock",
    description:
      "Represents the equity raised through the issuance of shares to investors.",
  },
  {
    id: 2,
    icon: <DollarSign size={40} />,
    title: "Preferred Stock",
    description:
      "A type of equity that provides dividends and has priority over common stock in asset distribution.",
  },
  {
    id: 3,
    icon: <TrendingUp size={40} />,
    title: "Retained Earnings",
    description:
      "Accumulated profits that are reinvested in the business rather than distributed as dividends.",
  },
  {
    id: 4,
    icon: <TrendingDown size={40} />,
    title: "Treasury Stock",
    description:
      "Shares that were issued and later reacquired by the company, reducing total shareholders' equity.",
  },
  {
    id: 5,
    icon: <FileText size={40} />,
    title: "Additional Paid-In Capital",
    description:
      "Capital received from shareholders above the par value of stock, contributing to total equity.",
  },
  {
    id: 6,
    icon: <Percent size={40} />,
    title: "Accumulated Other Comprehensive Income",
    description:
      "Reflects gains or losses not yet realized, such as foreign currency adjustments or unrealized gains on investments.",
  },
];
