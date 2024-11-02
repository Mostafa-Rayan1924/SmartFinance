import {
  ArrowRightCircle,
  ArrowLeftCircle,
  Wallet,
  RefreshCcw,
  TrendingUp,
  Clipboard,
} from "lucide-react";

export let cashFlowFeatures = [
  {
    id: 1,
    icon: <Wallet size={40} />,
    title: "Operating Cash Flow",
    description:
      "Indicates the cash generated from a company's regular business operations.",
  },
  {
    id: 2,
    icon: <ArrowRightCircle size={40} />,
    title: "Investing Cash Flow",
    description:
      "Represents cash spent on or received from the purchase or sale of assets.",
  },
  {
    id: 3,
    icon: <ArrowLeftCircle size={40} />,
    title: "Financing Cash Flow",
    description:
      "Covers cash transactions related to borrowing and repaying debt, as well as issuing or buying back shares.",
  },
  {
    id: 4,
    icon: <TrendingUp size={40} />,
    title: "Free Cash Flow",
    description:
      "Calculates the cash available after capital expenditures, indicating the ability to generate cash after maintaining assets.",
  },
  {
    id: 5,
    icon: <RefreshCcw size={40} />,
    title: "Cash Flow Forecast",
    description:
      "Estimates future cash inflows and outflows to help businesses plan for upcoming financial needs.",
  },
  {
    id: 6,
    icon: <Clipboard size={40} />,
    title: "Cash Flow Statement",
    description:
      "A financial report that summarizes cash inflows and outflows over a specific period, providing insights into liquidity.",
  },
];
