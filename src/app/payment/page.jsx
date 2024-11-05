"use client";
import { numSheet } from "@/components/context/NumOfSheet";
import axios from "axios";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";
const Payment = () => {
  let [loading, setLoading] = useState(false);
  let { setNum } = useContext(numSheet);

  let router = useRouter();
  // إعداد القيم الافتراضية والتحقق من صحة المدخلات
  const formik = useFormik({
    initialValues: {
      cardNumber: "",
      expiryDate: "",
      cvc: "",
    },
    validationSchema: Yup.object({
      cardNumber: Yup.string()
        .matches(/^[0-9]{16}$/, "Card number must be 16 digits")
        .required("Card number is required"),
      expiryDate: Yup.string()
        .matches(
          /^(0[1-9]|1[0-2])\/\d{2}$/,
          "Expiry date must be in MM/YY format"
        )
        .required("Expiry date is required"),
      cvc: Yup.string()
        .matches(/^[0-9]{3,4}$/, "CVC must be 3 or 4 digits")
        .required("CVC is required"),
    }),

    onSubmit: async (values) => {
      let headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      setLoading(true);
      try {
        let res = await axios.post(
          "https://smart-finance-five.vercel.app/finance/api/user/paid",
          {},
          {
            headers: headers,
          }
        );
        setNum(Math.random());
        toast.success("payment success");
        formik.resetForm();
        setTimeout(() => {
          router.push("/");
        }, 1000);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <section className=" mt-[80px] sm:mt-[140px] ">
      <div className="container flex flex-col md:flex-row items-center justify-center gap-6 md:justify-between ">
        {/* image */}
        <div className="flex-1">
          <Image
            src={"/payment.png"}
            alt="payment"
            width={500}
            height={500}
            className={"rounded-lg object-cover"}
          />
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="space-y-5 p-3 w-full sm:w-auto sm:p-6 flex-1  rounded-lg border ">
          <h2 className="sm:text-2xl text-center font-semibold mb-6">
            Credit card information
          </h2>
          {/* رقم البطاقة */}
          <div>
            <label className="block text-sm font-medium text-muted-foreground">
              Card number
            </label>
            <input
              type="text"
              name="cardNumber"
              maxLength="16"
              className={`mt-1 p-2 border rounded-md w-full ${
                formik.errors.cardNumber && formik.touched.cardNumber
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              {...formik.getFieldProps("cardNumber")}
            />
            {formik.errors.cardNumber && formik.touched.cardNumber && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.cardNumber}
              </p>
            )}
          </div>

          {/* تاريخ انتهاء الصلاحية */}
          <div>
            <label className="block text-sm font-medium text-muted-foreground">
              Expiry Date (MM/YY)
            </label>
            <input
              type="text"
              name="expiryDate"
              maxLength="5"
              className={`mt-1 p-2 border rounded-md w-full ${
                formik.errors.expiryDate && formik.touched.expiryDate
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              {...formik.getFieldProps("expiryDate")}
            />
            {formik.errors.expiryDate && formik.touched.expiryDate && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.expiryDate}
              </p>
            )}
          </div>

          {/* رمز CVC */}
          <div>
            <label className="block text-sm font-medium text-muted-foreground">
              CVC code
            </label>
            <input
              type="text"
              name="cvc"
              maxLength="4"
              className={`mt-1 p-2 border rounded-md w-full ${
                formik.errors.cvc && formik.touched.cvc
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              {...formik.getFieldProps("cvc")}
            />
            {formik.errors.cvc && formik.touched.cvc && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.cvc}</p>
            )}
          </div>

          {/* زر الإرسال */}
          <button
            type="submit"
            className={`w-full bg-primary ${
              loading
                ? "cursor-not-allowed opacity-50 bg-gray-500"
                : "bg-primary opacity-100 cursor-default"
            } py-3 hover:bg-blue-800 text-white transition-all duration-300 rounded-lg`}>
            {loading ? "Loading..." : "Confirm Payment"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Payment;
