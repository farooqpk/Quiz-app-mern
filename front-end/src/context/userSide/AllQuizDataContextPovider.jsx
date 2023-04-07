import { createContext, useState } from "react";


export const AllQuizDataContext = createContext(null);
export const AllQuizDataContextProvider = ({ children }) => {
  const [AllquizData, setAllQuizData] = useState([]);

  return (
    <>
      <AllQuizDataContext.Provider value={{ AllquizData, setAllQuizData }}>
        {children}
      </AllQuizDataContext.Provider>
    </>
  );
};
