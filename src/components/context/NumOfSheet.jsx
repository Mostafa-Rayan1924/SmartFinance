"use client";
import { createContext, useState } from "react";

export let numSheet = createContext();
const NumOfSheet = ({ children }) => {
  let [numOfSheet, setNumOfSheet] = useState(0);
  let [num, setNum] = useState(0);

  return (
    <numSheet.Provider value={{ numOfSheet, setNumOfSheet, num, setNum }}>
      {children}
    </numSheet.Provider>
  );
};

export default NumOfSheet;
