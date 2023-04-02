import { createContext } from "react";
import { useState } from "react";

export const CreateQuizFormDataContext = createContext(null);

export const CreateQuizFormDataContextProvider = ({ children }) => {
    
  const [CreateQuizFormData, setCreateQuizFormData] = useState({});

  return (
    <CreateQuizFormDataContext.Provider
      value={{ CreateQuizFormData, setCreateQuizFormData }}
    >
      {children}
    </CreateQuizFormDataContext.Provider>
  );
};
