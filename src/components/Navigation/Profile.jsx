"use client";

import { useContext, useEffect, useState } from "react";
import { UserContextFromRegisteration } from "../context/UserContext";
import { DollarSign, MailCheck, Sheet, UserRound } from "lucide-react";
import Image from "next/image";
import axios from "axios";
import { numSheet } from "../context/NumOfSheet";

const Profile = () => {
  let [open, setOpen] = useState(false);
  let { setUser } = useContext(UserContextFromRegisteration);
  let { numOfSheet } = useContext(numSheet);

  let handleLogout = (e) => {
    e.preventDefault();
    let confirm = window.confirm("Are you sure you want to logout?");
    if (confirm) {
      setUser({});
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  };
  return (
    <div className="block ">
      <button
        type="button"
        className="overflow-hidden rounded-full border  shadow-inner">
        <span className="sr-only">Toggle dashboard menu</span>

        <Image
          onClick={() => setOpen(!open)}
          src="/icon.webp"
          width={40}
          height={40}
          alt={numOfSheet.name}
          className="size-10 object-cover"
        />
      </button>

      <div
        className={`absolute end-0 z-10 mt-0.5 w-fit  divide-y divide-border  rounded-md border ${
          open ? " block" : " hidden"
        }  border bg-background  shadow-lg`}
        role="menu">
        <div className="p-2">
          <div
            className=" flex items-center whitespace-nowrap gap-2 rounded-lg px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-primary"
            role="menuitem">
            <UserRound size={20} />
            {numOfSheet.name}
          </div>

          <div
            className=" flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-muted-foreground whitespace-normal hover:bg-accent hover:text-primary"
            role="menuitem">
            <MailCheck size={20} />
            {numOfSheet.email}
          </div>

          {numOfSheet.paid ? (
            <div
              className=" flex items-center whitespace-nowrap gap-2 rounded-lg px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-primary"
              role="menuitem">
              <DollarSign size={20} />
              Available Sheet:
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-infinity">
                <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z" />
              </svg>
            </div>
          ) : (
            <div
              className=" flex items-center whitespace-nowrap gap-2 rounded-lg px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-primary"
              role="menuitem">
              <Sheet size={20} />
              <h3>Free Sheet: {numOfSheet.sheet}/3</h3>
            </div>
          )}
        </div>

        <div className="p-2">
          <form action="#">
            <button
              onClick={handleLogout}
              type="submit"
              className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-700 hover:text-white transition-all duration-300"
              role="menuitem">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                />
              </svg>
              Logout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
