import { useState, useContext, createContext } from "react";
const StateData = createContext();

export const ContextProvider = ({ children }) => {
  const [estimateAmount, setEstimateAmount] = useState(null);
  const [backOffice, setBackOffice] = useState(true);
  const [connect, setConnect] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <StateData.Provider
      value={{
        estimateAmount,
        setEstimateAmount,
        backOffice,
        setBackOffice,
        scrollToTop,
        connect,
        setConnect,
      }}
    >
      {children}
    </StateData.Provider>
  );
};
export const useDataContext = () => useContext(StateData);
