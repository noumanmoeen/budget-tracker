import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [loginState, setLoginState] = useState(true);

  // const isLogin = async () => {
  //   const currState = localStorage.getItem("isLogin");
  //   setLoginState(JSON.parse(currState));
  //   console.log('CURRRR' , loginState )
  // };

  // useEffect(() => {
  //   isLogin();
  // }, []);

  useEffect(() => {
    console.log("HERE " , loginState);
  }, [loginState]);
  return (
    <>{loginState ?  <Outlet />  : <Navigate to="/login" replace={true} /> }</>
  );
};
