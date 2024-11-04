import React, { useState } from "react";

const AlertRegister = ({ title }) => {
  let [open, setOpen] = useState(true);
  return (
    <div
      role="alert"
      className={`rounded-xl transition-all duration-300 mt-10 border bg-accent ${
        open ? "opacity-100" : "opacity-0"
      }  p-4`}>
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <strong className="block font-medium text-foreground">Hi!.</strong>

          <p className="mt-1 text-[12px] sm:text-base text-muted-foreground">
            {title}
          </p>
        </div>

        <button
          onClick={() => setOpen(false)}
          className="text-red-500 transition hover:text-red-600">
          <span className="sr-only">Dismiss popup</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AlertRegister;
