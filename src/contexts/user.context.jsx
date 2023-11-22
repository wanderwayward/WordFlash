import { useEffect, useState, createContext, useMemo } from "react";
import { onAuthStateChangedListener} from "../utils/firebase-utils";
import GeneralLoadingSpinner from "../components/ui/loading/general-loading-spinner.component";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const contextValue = useMemo(() => {
    return { user, setUser };
  }, [user]);

  if (loading) {
    return <GeneralLoadingSpinner />;
  }

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;