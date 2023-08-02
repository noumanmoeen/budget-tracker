import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ children}) => {
  return (
    <>{false ?  children  : <Navigate to="/login" replace={true} /> }</>
  );
};
