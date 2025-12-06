import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import type { RootState } from "../app/rootReducer";

const ProtectedRoutes: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  if (!token) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};
export default ProtectedRoutes;
