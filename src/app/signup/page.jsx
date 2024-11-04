"use client";
import { UserContextFromRegisteration } from "@/components/context/UserContext";
import AlertRegister from "@/components/InAll/AlertRegister";
import Error from "@/components/validations/Error";
import { signUpSchema } from "@/components/validations/loginSchema";
import axios from "axios";
import { useFormik } from "formik";
import { CircleUserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
const Signup = () => {
  let [loading, setLoading] = useState(false);
  let { setUser } = useContext(UserContextFromRegisteration);
  let router = useRouter();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validateOnBlur: true,
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      setLoading(true);
      let params = {
        name: values.username,
        email: values.email,
        password: values.password,
      };
      try {
        let res = await axios.post(
          "https://smart-finance-five.vercel.app/finance/api/auth/signup",
          params
        );
        let token = res?.data?.token;
        let user = res?.data?.data.result;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setUser({ token, user });
        toast.success("You have successfully signed up");
        formik.resetForm();
        setTimeout(() => {
          router.push("/");
        }, 1000);
      } catch (err) {
        console.error(err);
        toast.error(err.response?.data?.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <section>
      <div className="lg:grid pt-[120px] lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-center bg-muted-foreground lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute brightness-[0.7] inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <Link href={"/"}>
              <Image
                className="rounded-lg"
                src={"/logo.jpg"}
                alt="Logo"
                width={60}
                height={40}
              />
            </Link>

            <h2 className="mt-6 text-2xl font-bold capitalize text-white sm:text-3xl md:text-4xl">
              Welcome to smart finance
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Smart finance leverages technology, data analytics, and artificial
              intelligence (AI) to improve the way individuals and businesses
              manage, plan, and invest their finances. It combines advanced
              tools, algorithms, and automation to make financial processes more
              efficient, accessible, and tailored to individual needs.
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <Link href={"/"}>
                <Image
                  className="rounded-lg"
                  src={"/logo.jpg"}
                  alt="Logo"
                  width={60}
                  height={40}
                />
              </Link>

              <h1 className="mt-2 text-2xl capitalize font-bold text-muted-foreground sm:text-3xl md:text-4xl">
                Welcome to smart finance
              </h1>

              <p className="my-4 leading-relaxed text-gray-500">
                Smart finance leverages technology, data analytics, and
                artificial intelligence (AI) to improve the way individuals and
                businesses manage, plan, and invest their finances.
              </p>
            </div>
            <h2 className=" flex items-center gap-2 justify-center  text-primary font-bold  text-2xl">
              <CircleUserRound size={30} /> Sign Up
            </h2>
            <form
              onSubmit={formik.handleSubmit}
              disabled={loading}
              className="mt-8 grid  grid-cols-6 gap-6">
              <div className="col-span-6">
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-accent-foreground">
                  Enter Your Name
                </label>

                <input
                  type="text"
                  id="FirstName"
                  disabled={loading}
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  onBlur={formik.handleBlur}
                  name="username"
                  className={`mt-1 w-full ${
                    loading ? "cursor-not-allowed opacity-50" : ""
                  }  border-b-2 outline-none p-2 bg-background  text-sm text-accent-foreground `}
                />
                <Error formik={formik} nameOfField={"username"} />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-accent-foreground ">
                  Email
                </label>

                <input
                  type="email"
                  id="Email"
                  disabled={loading}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  name="email"
                  className={`mt-1 w-full ${
                    loading ? "cursor-not-allowed opacity-50" : ""
                  }  border-b-2 outline-none p-2 bg-background  text-sm text-accent-foreground `}
                />
                <Error formik={formik} nameOfField={"email"} />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-accent-foreground">
                  Password
                </label>

                <input
                  type="password"
                  id="Password"
                  disabled={loading}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                  name="password"
                  className={`mt-1 w-full ${
                    loading ? "cursor-not-allowed opacity-50" : ""
                  }  border-b-2 outline-none p-2 bg-background  text-sm text-accent-foreground `}
                />
                <Error formik={formik} nameOfField={"password"} />
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  className={`text-white w-full sm:w-fit block cursor-pointer   px-6 py-3 rounded-lg ${
                    loading
                      ? "cursor-not-allowed opacity-50 bg-gray-500"
                      : "bg-primary opacity-100 cursor-default"
                  }`}>
                  {loading ? "loading..." : "Create an account"}
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?
                  <Link
                    href="/login"
                    className="text-muted-foreground underline">
                    Log in
                  </Link>
                </p>
              </div>
            </form>
            <AlertRegister
              title={"Sign up in allows you to create only 3 sheets."}
            />
          </div>
        </main>
      </div>
    </section>
  );
};

export default Signup;
