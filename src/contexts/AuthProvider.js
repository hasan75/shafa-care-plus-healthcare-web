import { createContext } from "react";
import useServices from "../hooks/useServices";
// import useCart from "../hooks/useCart";
// import useFirebase from "../hooks/useFirebase.js";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // hooks
//   const AllContexts = useFirebase();
  const { services } = useServices();

  const data = {

    services
  };

  return (
   <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
  )
};

export default AuthProvider;
