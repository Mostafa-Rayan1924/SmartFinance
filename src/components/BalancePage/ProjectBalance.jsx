"use client";
import React, { use, useContext, useEffect, useState } from "react";
import { initialData1, initialData2 } from "@/constants/BalanceSheetData";
import { Button, buttonVariants } from "../ui/button";
import { UserContextFromRegisteration } from "../context/UserContext";
import { useRouter } from "next/navigation";
import axios from "axios";
import { numSheet } from "../context/NumOfSheet";

const ProjectBalance = () => {
  let { user, setUser } = useContext(UserContextFromRegisteration);
  let { numOfSheet, setNumOfSheet, num, setNum } = useContext(numSheet);

  let router = useRouter();
  const [data, setData] = useState(initialData1);
  const [data2, setData2] = useState(initialData2);

  const [organizationName, setOrganizationName] = useState("");
  const [organizationAddress, setOrganizationAddress] = useState("");

  const handleInputChange = (categoryIndex, itemIndex, newValue) => {
    const updatedData = [...data];
    updatedData[categoryIndex].items[itemIndex].value = Number(newValue);
    setData(updatedData);
  };

  const handleInputChange2 = (categoryIndex, itemIndex, newValue) => {
    const updatedData = [...data2];
    updatedData[categoryIndex].items[itemIndex].value = Number(newValue);
    setData2(updatedData);
  };

  const calculateTotal = () => {
    return data.reduce((total, group) => {
      return total + group.items.reduce((sum, item) => sum + item.value, 0);
    }, 0);
  };

  const calculateCategoryTotal = (categoryIndex) => {
    const category = data[categoryIndex];
    return category.items.reduce((total, item) => total + item.value, 0);
  };

  const calculateCategoryTotal2 = (categoryIndex) => {
    const category = data2[categoryIndex];
    return category.items.reduce((total, item) => total + item.value, 0);
  };

  const calculateTotal2 = () => {
    return data2.reduce((total, group) => {
      return total + group.items.reduce((sum, item) => sum + item.value, 0);
    }, 0);
  };

  const handlePrint = async () => {
    const totalAssets = calculateTotal();
    const totalLiabilities = calculateTotal2();
    const headers = {
      Authorization: `Bearer ${user?.token}`,
    };

    if (
      user?.token &&
      numOfSheet.paid &&
      totalAssets !== 0 &&
      totalLiabilities !== 0 &&
      totalAssets === totalLiabilities &&
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
      totalAssets !== 0 &&
      totalLiabilities !== 0 &&
      totalAssets === totalLiabilities &&
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
    } else if (user && numOfSheet.paid === false && numOfSheet.sheet === 3) {
      router.push("/payment");
    } else {
      alert(
        "The totals must not equal zero, and the organization name and address fields must be filled in."
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
        <h2>BALANCE SHEET REPORT</h2>
        <input
          value={organizationAddress}
          onChange={(e) => setOrganizationAddress(e.target.value)}
          className="outline-none focus:border-primary px-2 border-2 border-dotted text-center py-2 rounded-lg"
          type="text"
          placeholder="Organization address"
        />
      </div>

      <div className="border-b-2">
        <h3 className="font-semibold text-primary text-2xl">Assets</h3>
        {data.map((category, categoryIndex) => (
          <div key={category.category}>
            <h4 className="font-semibold my-2">{category.category}</h4>
            <ul>
              {category.items.map((item, itemIndex) => (
                <li
                  className="flex items-center my-2 justify-between"
                  key={item.label}>
                  <span className="text-sm">{item.label}:</span>
                  <input
                    className="outline-none bg-accent w-[80px] sm:w-auto border px-2 py-2 rounded-lg"
                    type="number"
                    min="0" // تعيين الحد الأدنى للقيمة
                    value={item.value}
                    onChange={(e) =>
                      handleInputChange(
                        categoryIndex,
                        itemIndex,
                        e.target.value
                      )
                    }
                  />
                </li>
              ))}
            </ul>
            <h5 className="text-muted-foreground font-semibold">
              Total {category.category}: {calculateCategoryTotal(categoryIndex)}
            </h5>
          </div>
        ))}
        <h4 className="font-semibold my-2 flex items-center justify-evenly text-2xl text-green-500">
          Total Assets: <span>{calculateTotal()}$</span>
        </h4>
      </div>

      <div className="border-b-2">
        <h3 className="font-semibold text-primary mt-4 text-2xl">
          liabilities and equity
        </h3>
        {data2.map((category, categoryIndex) => (
          <div key={category.category}>
            <h4 className="font-semibold my-2">{category.category}</h4>
            <ul>
              {category.items.map((item, itemIndex) => (
                <li
                  className="flex items-center my-2 justify-between"
                  key={item.label}>
                  <span className="text-sm">{item.label}:</span>
                  <input
                    className="outline-none bg-accent w-[80px] sm:w-auto border px-2 py-2 rounded-lg"
                    type="number"
                    min="0" // تعيين الحد الأدنى للقيمة
                    value={item.value}
                    onChange={(e) =>
                      handleInputChange2(
                        categoryIndex,
                        itemIndex,
                        e.target.value
                      )
                    }
                  />
                </li>
              ))}
            </ul>
            <h5 className="text-muted-foreground font-semibold">
              Total {category.category}:{" "}
              {calculateCategoryTotal2(categoryIndex)}
            </h5>
          </div>
        ))}
        <h4 className="font-semibold my-5 flex items-center justify-evenly text-2xl text-green-500">
          Total liabilites and equity: <span>{calculateTotal2()}$</span>
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
    </section>
  );
};

export default ProjectBalance;
