import { createContext, useState } from "react";


export const SpecificQuizDataContext = createContext(null);
export const SpecificQuizDataContextProvider = ({ children }) => {
  const [SpecificQuizData, setSpecificQuizData] = useState({});

  return (
    <>
      <SpecificQuizDataContext.Provider value={{ SpecificQuizData, setSpecificQuizData }}>
        {children}
      </SpecificQuizDataContext.Provider>
    </>
  );
};