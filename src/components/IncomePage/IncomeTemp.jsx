"use client";

import { useContext, useEffect, useState } from "react";
import { Button, buttonVariants } from "../ui/button";
import { UserContextFromRegisteration } from "../context/UserContext";
import { useRouter } from "next/navigation";
import { numSheet } from "../context/NumOfSheet";
import axios from "axios";

const IncomeTemp = () => {
  let { user, setUser } = useContext(UserContextFromRegisteration);
  let { numOfSheet, setNum } = useContext(numSheet);
  let router = useRouter();

  let [organizationName, setOrganizationName] = useState("");
  let [organizationAddress, setOrganizationAddress] = useState("");
  let [getProfit, setGetProfit] = useState(0);
  let [getEBIT, setGetEBIT] = useState(0);
  let [getEarningbefTax, setGetEarningbefTax] = useState(0);
  let [getNetIncome, setGetNetIncome] = useState(0);
  let [data, setData] = useState({
    revenue: 0,
    Purchases: 0,
    Expenses: 0,
    Depreciation: 0,
    InterestExpense: 0,
    Tax: 0,
    Dividend: 0,
  });
  let getProfitFunc = () => {
    setGetProfit(data.revenue - data.Purchases);
  };
  let getEBITfunc = () => {
    setGetEBIT(getProfit - data.Expenses - data.Depreciation);
  };
  let getEarningbefTaxFunc = () => {
    setGetEarningbefTax(getEBIT - data.InterestExpense);
  };
  let getNetIncomeFunc = () => {
    setGetNetIncome(getEarningbefTax - data.Tax);
  };
  useEffect(() => {
    getProfitFunc();
  }, [data.revenue, data.Purchases]);
  useEffect(() => {
    getEBITfunc();
  }, [getProfit, data.Expenses, data.Depreciation]);
  useEffect(() => {
    getEarningbefTaxFunc();
  }, [getEBIT, data.InterestExpense]);
  useEffect(() => {
    getNetIncomeFunc();
  }, [getEarningbefTax, data.Tax]);
  const handlePrint = async () => {
    const headers = {
      Authorization: `Bearer ${user?.token}`,
    };
    if (
      user?.token &&
      numOfSheet.sheet < 3 &&
      organizationName &&
      organizationAddress
    ) {
      const confirmPrint = window.confirm("Do you want to print this report?");
      if (confirmPrint) {
        window.print();
        try {
          const res = await axios.post(
            "https://smart-finance-five.vercel.app/finance/api/balance/createsheet",
            {},
            {
              headers: headers,
            }
          );

          setNum(Math.random());
        } catch (error) {
          console.error("Error creating sheet:", error);
        }
      }
    } else if (!user.token) {
      router.push("/login");
    } else if (user && user?.user?.paid === false && numOfSheet.sheet === 3) {
      router.push("/payment");
    } else {
      alert(
        "Fill in the organization name and address fields before printing."
      );
    }
  };
  return (
    <section className="p-6 border rounded-lg print">
      <div className="flex flex-col items-center gap-3 mb-10">
        <input
          value={organizationName}
          onChange={(e) => setOrganizationName(e.target.value)}
          className="outline-none focus:border-primary px-2 border-2 border-dotted text-center py-2 rounded-lg"
          type="text"
          placeholder="Organization Name"
        />
        <h2>Income Statement REPORT</h2>
        <input
          value={organizationAddress}
          onChange={(e) => setOrganizationAddress(e.target.value)}
          className="outline-none focus:border-primary px-2 border-2 border-dotted text-center py-2 rounded-lg"
          type="text"
          placeholder="Organization address"
        />
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-3  justify-between">
          <span className="capitalize ">revenue:</span>
          <input
            className="outline-none bg-accent  w-[140px] sm:w-auto  border px-2 py-2 rounded-lg"
            type="number"
            min="0"
            value={data.revenue}
            onChange={(e) => setData({ ...data, revenue: e.target.value })}
          />
        </div>
        <div className="flex items-center  justify-between">
          <span className="capitalize">Purchases:</span>
          <input
            className="outline-none bg-accent w-[140px] sm:w-auto border px-2 py-2 rounded-lg"
            type="number"
            min="0"
            value={data.Purchases}
            onChange={(e) => setData({ ...data, Purchases: e.target.value })}
          />
        </div>
        <div className="flex items-center text-primary font-bold  justify-between">
          <span className="capitalize">Gross profit:</span>
          <h4>{getProfit}$</h4>
        </div>
        <div className="flex items-center  justify-between">
          <span className="capitalize">Expenses:</span>
          <input
            className="outline-none bg-accent w-[140px] sm:w-auto border px-2 py-2 rounded-lg"
            type="number"
            min="0"
            value={data.Expenses}
            onChange={(e) => setData({ ...data, Expenses: e.target.value })}
          />
        </div>
        <div className="flex items-center  justify-between">
          <span className="capitalize">Depreciation:</span>
          <input
            className="outline-none bg-accent w-[140px] sm:w-auto border px-2 py-2 rounded-lg"
            type="number"
            min="0"
            value={data.Depreciation}
            onChange={(e) => setData({ ...data, Depreciation: e.target.value })}
          />
        </div>
        <div className="flex items-center text-primary font-bold  justify-between">
          <span className="capitalize">Operating profit (EBIT):</span>
          <h4>{getEBIT}$</h4>
        </div>
        <div className="flex items-center  justify-between">
          <span className="capitalize">InterestExpense:</span>
          <input
            className="outline-none bg-accent w-[140px] sm:w-auto border px-2 py-2 rounded-lg"
            type="number"
            min="0"
            value={data.InterestExpense}
            onChange={(e) =>
              setData({ ...data, InterestExpense: e.target.value })
            }
          />
        </div>
        <div className="flex items-center text-primary font-bold  justify-between">
          <span className="capitalize">Earnings before tax:</span>
          <h4>{getEarningbefTax}$</h4>
        </div>
        <div className="flex items-center  justify-between">
          <span className="capitalize">Tax:</span>
          <input
            className="outline-none bg-accent w-[140px] sm:w-auto  border px-2 py-2 rounded-lg"
            type="number"
            min="0"
            value={data.Tax}
            onChange={(e) => setData({ ...data, Tax: e.target.value })}
          />
        </div>
        <div className="flex items-center text-primary font-bold  justify-between">
          <span className="capitalize">net income:</span>
          <h4>{getNetIncome}$</h4>
        </div>
        <div className="flex items-center  justify-between">
          <span className="capitalize">Dividend:</span>
          <input
            className="outline-none bg-accent w-[140px] sm:w-auto border px-2 py-2 rounded-lg"
            type="number"
            min="0"
            value={data.Dividend}
            onChange={(e) => setData({ ...data, Dividend: e.target.value })}
          />
        </div>
        <div className="flex items-center text-green-500 text-2xl font-bold  justify-evenly">
          <span className="capitalize">Retained earnings:</span>
          <h4>{getNetIncome - data.Dividend}$</h4>
        </div>
        {/* زر الطباعة */}
        <div className="flex justify-center mt-4">
          <Button
            onClick={handlePrint}
            className={buttonVariants({ size: "lg" })}>
            Print Report
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IncomeTemp;
