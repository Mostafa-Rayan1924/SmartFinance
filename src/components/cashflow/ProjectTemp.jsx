"use client";
import { useContext, useEffect, useMemo, useState } from "react";
import { Button, buttonVariants } from "../ui/button";
import { UserContextFromRegisteration } from "../context/UserContext";
import { useRouter } from "next/navigation";
import { numSheet } from "../context/NumOfSheet";
import axios from "axios";

const ProjectTemp = () => {
  let { user, setUser } = useContext(UserContextFromRegisteration);
  let { numOfSheet, setNum } = useContext(numSheet);
  let router = useRouter();
  let [organizationName, setOrganizationName] = useState("");
  let [organizationAddress, setOrganizationAddress] = useState("");
  // state for operation1
  const [OperatingCashFlows, setOperatingCashFlows] = useState({
    NetIncome: 0,
    Depreciation: 0,
    UnpaidTaxes: 0,
    IncreaseInReceivables: 0,
    IncreaseInInventory: 0,
    IncreaseInPayables: 0,
  });
  // state for operation 2
  let [InvestingCashFlows, setInvestingCashFlows] = useState(0);
  // state for operation3
  const [FinancingCashFlows, setFinancingCashFlows] = useState({
    RepaymentShort: 0,
    RepaymentLong: 0,
    Dividend: 0,
  });
  // operation1
  const totalOfOperatingCashFlows = useMemo(() => {
    return (
      Number(OperatingCashFlows.NetIncome) +
      Number(OperatingCashFlows.Depreciation) -
      Number(OperatingCashFlows.UnpaidTaxes) -
      Number(OperatingCashFlows.IncreaseInReceivables) -
      Number(OperatingCashFlows.IncreaseInInventory) +
      Number(OperatingCashFlows.IncreaseInPayables)
    );
  }, [OperatingCashFlows]);
  // operation 3
  const totalOfFinancingCashFlows = useMemo(() => {
    return (
      Number(FinancingCashFlows.RepaymentShort) +
      Number(FinancingCashFlows.RepaymentLong) +
      Number(FinancingCashFlows.Dividend)
    );
  }, [FinancingCashFlows]);
  // for printing
  const handlePrint = async () => {
    const headers = {
      Authorization: `Bearer ${user?.token}`,
    };
    if (
      user?.token &&
      numOfSheet.paid &&
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
          console.log(res.data);
          setNum(Math.random());
        } catch (error) {
          console.error("Error creating sheet:", error);
        }
      }
    } else if (
      user?.token &&
      numOfSheet.paid == false &&
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
    } else if (!user?.token) {
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
      <div className="flex flex-col items-center gap-3">
        <input
          value={organizationName}
          onChange={(e) => setOrganizationName(e.target.value)}
          className="outline-none focus:border-primary px-2 border-2 border-dotted text-center py-2 rounded-lg"
          type="text"
          placeholder="Organization Name"
        />
        <h2>CashFlow Report</h2>
        <input
          value={organizationAddress}
          onChange={(e) => setOrganizationAddress(e.target.value)}
          className="outline-none focus:border-primary px-2 border-2 border-dotted text-center py-2 rounded-lg"
          type="text"
          placeholder="Organization address"
        />
      </div>
      {/*1- OperatingCashFlows */}
      <div>
        <div className="border-b pb-4 space-y-4">
          <h2 className="font-semibold mb-2">Operating cash flows</h2>
          <div className="flex items-center gap-3  justify-between">
            <span className="text-sm capitalize sm:text-base ">NetIncome:</span>
            <input
              className="outline-none bg-accent  w-[80px] sm:w-auto  border px-2 py-2 rounded-lg"
              type="number"
              min="0"
              value={OperatingCashFlows.NetIncome}
              onChange={(e) =>
                setOperatingCashFlows({
                  ...OperatingCashFlows,
                  NetIncome: e.target.value,
                })
              }
            />
          </div>
          <div className="flex items-center gap-3  justify-between">
            <span className="text-sm capitalize sm:text-base ">
              Depreciation:
            </span>
            <input
              className="outline-none bg-accent  w-[80px] sm:w-auto  border px-2 py-2 rounded-lg"
              type="number"
              min="0"
              value={OperatingCashFlows.Depreciation}
              onChange={(e) =>
                setOperatingCashFlows({
                  ...OperatingCashFlows,
                  Depreciation: e.target.value,
                })
              }
            />
          </div>
          <div className="flex items-center gap-3  justify-between">
            <span className="text-sm capitalize sm:text-base ">
              UnpaidTaxes:
            </span>
            <input
              className="outline-none bg-accent  w-[80px] sm:w-auto  border px-2 py-2 rounded-lg"
              type="number"
              min="0"
              value={OperatingCashFlows.UnpaidTaxes}
              onChange={(e) =>
                setOperatingCashFlows({
                  ...OperatingCashFlows,
                  UnpaidTaxes: e.target.value,
                })
              }
            />
          </div>
          <div className="flex items-center gap-3  justify-between">
            <span className="text-sm capitalize sm:text-base ">
              IncreaseInReceivables:
            </span>
            <input
              className="outline-none bg-accent  w-[80px] sm:w-auto  border px-2 py-2 rounded-lg"
              type="number"
              min="0"
              value={OperatingCashFlows.IncreaseInReceivables}
              onChange={(e) =>
                setOperatingCashFlows({
                  ...OperatingCashFlows,
                  IncreaseInReceivables: e.target.value,
                })
              }
            />
          </div>
          <div className="flex items-center gap-3  justify-between">
            <span className="text-sm capitalize sm:text-base ">
              IncreaseInInventory:
            </span>
            <input
              className="outline-none bg-accent  w-[80px] sm:w-auto  border px-2 py-2 rounded-lg"
              type="number"
              min="0"
              value={OperatingCashFlows.IncreaseInInventory}
              onChange={(e) =>
                setOperatingCashFlows({
                  ...OperatingCashFlows,
                  IncreaseInInventory: e.target.value,
                })
              }
            />
          </div>
          <div className="flex items-center gap-3  justify-between">
            <span className="text-sm capitalize sm:text-base ">
              IncreaseInPayables:
            </span>
            <input
              className="outline-none bg-accent  w-[80px] sm:w-auto  border px-2 py-2 rounded-lg"
              type="number"
              min="0"
              value={OperatingCashFlows.IncreaseInPayables}
              onChange={(e) =>
                setOperatingCashFlows({
                  ...OperatingCashFlows,
                  IncreaseInPayables: e.target.value,
                })
              }
            />
          </div>
          <div className="flex items-center text-primary font-bold  justify-between">
            <span className="text-sm capitalize sm:text-base">
              Total of OperatingCashFlows :
            </span>
            <h4>{totalOfOperatingCashFlows}$</h4>
          </div>
        </div>
        {/* 2- InvestingCashFlows */}
        <div className="py-4 border-b ">
          <h2 className="font-semibold mb-2">Investing cash flows</h2>
          <div className="flex items-center gap-3  justify-between">
            <span className="text-sm capitalize sm:text-base ">Net capex:</span>
            <input
              className="outline-none bg-accent  w-[80px] sm:w-auto  border px-2 py-2 rounded-lg"
              type="number"
              min="0"
              value={InvestingCashFlows}
              onChange={(e) => setInvestingCashFlows(e.target.value)}
            />
          </div>
        </div>
        {/* 3- FinancingCashFlows */}
        <div className="mt-4 space-y-4">
          <h2 className="font-semibold mb-2">Financing cash flows</h2>
          <div className="flex items-center gap-3  justify-between">
            <span className="text-sm capitalize sm:text-base ">
              Repayment of short term loans:
            </span>
            <input
              className="outline-none bg-accent  w-[80px] sm:w-auto  border px-2 py-2 rounded-lg"
              type="number"
              min="0"
              value={FinancingCashFlows.RepaymentShort}
              onChange={(e) =>
                setFinancingCashFlows({
                  ...FinancingCashFlows,
                  RepaymentShort: e.target.value,
                })
              }
            />
          </div>
          <div className="flex items-center gap-3  justify-between">
            <span className="text-sm capitalize sm:text-base ">
              Repayment of long term loans:
            </span>
            <input
              className="outline-none bg-accent  w-[80px] sm:w-auto  border px-2 py-2 rounded-lg"
              type="number"
              min="0"
              value={FinancingCashFlows.RepaymentLong}
              onChange={(e) =>
                setFinancingCashFlows({
                  ...FinancingCashFlows,
                  RepaymentLong: e.target.value,
                })
              }
            />
          </div>
          <div className="flex items-center gap-3  justify-between">
            <span className="text-sm capitalize sm:text-base ">
              Dividend payment:
            </span>
            <input
              className="outline-none bg-accent  w-[80px] sm:w-auto  border px-2 py-2 rounded-lg"
              type="number"
              min="0"
              value={FinancingCashFlows.Dividend}
              onChange={(e) =>
                setFinancingCashFlows({
                  ...FinancingCashFlows,
                  Dividend: e.target.value,
                })
              }
            />
          </div>
          <div className="flex items-center text-primary font-bold  justify-between">
            <span className="text-sm capitalize sm:text-base">
              Total of Financing Cash Flows :
            </span>
            <h4>{totalOfFinancingCashFlows}$</h4>
          </div>
        </div>
        <div className="flex items-center mt-4 text-green-500 text-2xl  font-bold  justify-evenly">
          <span className="text-sm capitalize sm:text-base">
            Change in cash:
          </span>
          <h4>
            {+InvestingCashFlows +
              +totalOfFinancingCashFlows -
              +totalOfOperatingCashFlows}
            $
          </h4>
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

export default ProjectTemp;
