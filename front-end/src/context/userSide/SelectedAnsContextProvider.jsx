import { createContext, useState } from "react";

export const SelectedAnsContext = createContext(null);
export const SelectedAnsContextProvider = ({ children }) => {
  const [selectedAns, setSelectedAns] = useState({});

  return (
    <>
      <SelectedAnsContext.Provider value={{ selectedAns, setSelectedAns }}>
        {children}
      </SelectedAnsContext.Provider>
    </>
  );
};
