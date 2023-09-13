import { Navigate } from "react-router-dom";
import { loggedIn } from "../App";
import { getUserLoggedInStatus } from "../features/users/UserSlice";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({ children }) => {
  // const loggedIn = useSelector(getUserLoggedInStatus)
  const loggedIn = localStorage.getItem('isLoggedIn') ?  JSON.parse(localStorage.getItem('isLoggedIn')) : false
  console.log('HERE 712' , loggedIn)
  return <>{loggedIn ? children : <Navigate to="/login" replace={true} />}</>;
};
