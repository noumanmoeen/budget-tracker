import { Navigate } from "react-router-dom";
import { loggedIn } from "../App";

export const ProtectedRoute = ({ children }) => {
  return <>{loggedIn ? children : <Navigate to="/login" replace={true} />}</>;
};
