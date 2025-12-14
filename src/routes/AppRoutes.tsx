import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { publicRoutes } from "./publicRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import AdminLayout from "../pages/admin/AdminLayout";
import { privateRoutes } from "./privateRoutes";
import UserLayout from "../components/layout/UserLayout";
const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public routes */}
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}

      {/* Protected routes */}
      <Route element={<ProtectedRoutes />}>
        {/* Admin routes */}
        <Route element={<AdminLayout />}>
          {privateRoutes
            .filter((r) => r.role === "ADMIN")
            .map(({ path, element }, index) => (
              <Route key={index} path={path} element={element} />
            ))}
        </Route>

        {/* User routes */}
        <Route element={<UserLayout />}>
          {privateRoutes
            .filter((r) => r.role === "USER")
            .map(({ path, element }, index) => (
              <Route key={index} path={path} element={element} />
            ))}
        </Route>
      </Route>

      {/* Default fallback */}
      <Route path="*" element={<Navigate to="/auth" />} />
    </Routes>
  );
};

export default AppRoutes;
