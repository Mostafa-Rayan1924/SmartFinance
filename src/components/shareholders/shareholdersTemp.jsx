"use client";
import { useContext, useState } from "react";
import { UserContextFromRegisteration } from "../context/UserContext";
import { numSheet } from "../context/NumOfSheet";
import { useRouter } from "next/navigation";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import axios from "axios";

const ShareholdersTemp = () => {
  let [organizationName, setOrganizationName] = useState("");
  let [organizationAddress, setOrganizationAddress] = useState("");
  let { user, setUser } = useContext(UserContextFromRegisteration);
  let { numOfSheet, setNum } = useContext(numSheet);
  let router = useRouter();
  let [data, setData] = useState({
    CommonStock: 0,
    RetainedEarnings: 0,
  });
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
          <span className="text-sm capitalize sm:text-base ">CommonStock:</span>
          <input
            className="outline-none bg-accent  w-[80px] sm:w-auto  border px-2 py-2 rounded-lg"
            type="number"
            min="0"
            value={data.CommonStock}
            onChange={(e) => setData({ ...data, CommonStock: e.target.value })}
          />
        </div>
        <div className="flex items-center  justify-between">
          <span className="text-sm capitalize sm:text-base">
            RetainedEarnings:
          </span>
          <input
            className="outline-none bg-accent w-[80px] sm:w-auto border px-2 py-2 rounded-lg"
            type="number"
            min="0"
            value={data.RetainedEarnings}
            onChange={(e) =>
              setData({ ...data, RetainedEarnings: e.target.value })
            }
          />
        </div>
        <div className="flex items-center text-green-500 text-2xl font-bold  justify-evenly">
          <span className="text-sm capitalize sm:text-base">
            Retained earnings:
          </span>
          <h4>{+data.CommonStock + +data.RetainedEarnings}$</h4>
        </div>
        <div className="flex justify-center mt-4">
          <Button
            onClick={handlePrint}
            className={cn(buttonVariants({ size: "lg" }), "mt-6")}>
            Print Report
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShareholdersTemp;
