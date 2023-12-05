import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../contexts/user.context";

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(UserContext);
    return user ? children : <Navigate to="/Auth" />;
}

export default ProtectedRoute;