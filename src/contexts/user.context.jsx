import { useEffect, useState, createContext, useMemo } from "react";
import { onAuthStateChangedListener} from "../utils/firebase-utils";
import GeneralLoadingSpinner from "../components/ui/loading/general-loading-spinner.component";
import { set } from "react-hook-form";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChangedListener((user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const contextValue = useMemo(() => {
    return { user, setUser, loading };
  }, [user]);

  if (loading) {
    return 
  }
  
  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;