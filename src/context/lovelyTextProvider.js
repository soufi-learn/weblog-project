import React, { createContext, useState } from "react";
import lovelyTexts from "./lovelyTexts";

export const lovelyTextContext = createContext(null);

const LovelyTextProvider = ({ children }) => {
  return (
    <lovelyTextContext.Provider value={lovelyTexts}>
      {children}
    </lovelyTextContext.Provider>
  );
};

export default LovelyTextProvider;
