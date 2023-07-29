import { Route, Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isLogin = async () => {
    const isLogin = localStorage.getItem("isLogin");
    console.log("HERE ", isLogin);
    return true;
  };

  return (
   
        <>
          {true ? <Navigate to="/login" replace={true} /> : <Outlet />}
        </>
      
  );
};
