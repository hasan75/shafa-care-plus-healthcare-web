import { createContext } from "react";
import useServices from "../hooks/useServices";
import useCart from "../hooks/useCart";
import useDoctors from "../hooks/useDoctors";
// import useFirebase from "../hooks/useFirebase.js";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // hooks
//   const AllContexts = useFirebase();
  const { services } = useServices();
  const { doctors } = useDoctors();
  const { addToCart, selectedService, remove, setSelectedService } = useCart();

  const data = {

    services,
    doctors,
    addToCart,
    selectedService,
    remove,
    setSelectedService,
  };

  return (
   <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
  )
};

export default AuthProvider;
