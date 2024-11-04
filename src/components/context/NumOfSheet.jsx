"use client";
import { createContext, useState } from "react";

export let numSheet = createContext();
const NumOfSheet = ({ children }) => {
  let [numOfSheet, setNumOfSheet] = useState(0);

  return (
    <numSheet.Provider value={{ numOfSheet, setNumOfSheet }}>
      {children}
    </numSheet.Provider>
  );
};

export default NumOfSheet;
