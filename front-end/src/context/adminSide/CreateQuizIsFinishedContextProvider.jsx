import { createContext, useState } from "react";

export const CreateQuizIsFinishedContext = createContext(null);

export const CreateQuizIsFinishedContextProvider = ({ children }) => {

  const [isFinished, SetisFinished] = useState(false);

 return(<>
 
 
 <CreateQuizIsFinishedContext.Provider value={{ isFinished, SetisFinished }}>
    {children}
  </CreateQuizIsFinishedContext.Provider>;
 
 
 </>)
};
