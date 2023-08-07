import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  return <>{true ? children : <Navigate to="/login" replace={true} />}</>;
};
