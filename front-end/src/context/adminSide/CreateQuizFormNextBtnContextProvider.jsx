import { createContext, useState } from "react";

export const CreateQuizFormNextBtnContext = createContext(null);

export const CreateQuizFormNextBtnContextProvider = ({ children }) => {
  const [isNextClick, setIsNextClick] = useState(false);

  return (
    <CreateQuizFormNextBtnContext.Provider
      value={{ isNextClick, setIsNextClick }}
    >
      {children}
    </CreateQuizFormNextBtnContext.Provider>
  );
};
