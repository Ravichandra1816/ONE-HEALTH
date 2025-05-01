import { createContext } from "react";
import { doctor } from "../assets/assets";
import TopDoctors from "../components/TopDoctors";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currencySymbol = "₹";

  const value = {
    doctor,
    currencySymbol,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
