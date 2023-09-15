import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  // const loggedIn = useSelector(getUserLoggedInStatus)
  const loggedIn = localStorage.getItem('isLoggedIn') ?  JSON.parse(localStorage.getItem('isLoggedIn')) : false
  return <>{loggedIn ? children : <Navigate to="/login" replace={true} />}</>;
};
