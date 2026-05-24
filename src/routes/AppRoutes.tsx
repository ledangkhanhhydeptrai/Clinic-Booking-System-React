import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { publicRoutes } from "./publicRoutes";
import { privateRoutes } from "./privateRoutes";

import ProtectedRoutes from "./ProtectedRoutes";

import UserLayout from "../components/layout/UserLayout";
import AdminLayout from "../pages/admin/AdminLayout";
import { authRoutes } from "./AuthRoutes";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* PUBLIC WITH LAYOUT */}
      <Route element={<UserLayout />}>
        {publicRoutes.map(route =>
          <Route key={route.path} path={route.path} element={route.element} />
        )}
      </Route>

      {/* AUTH WITHOUT LAYOUT */}
      {authRoutes.map(route =>
        <Route key={route.path} path={route.path} element={route.element} />
      )}

      {/* PROTECTED */}
      <Route element={<ProtectedRoutes />}>
        {/* USER */}
        <Route element={<UserLayout />}>
          {privateRoutes
            .filter(r => r.role === "USER")
            .map(({ path, element }, index) =>
              <Route key={index} path={path} element={element} />
            )}
        </Route>

        {/* ADMIN */}
        <Route element={<AdminLayout />}>
          {privateRoutes
            .filter(r => r.role === "ADMIN")
            .map(({ path, element }, index) =>
              <Route key={index} path={path} element={element} />
            )}
        </Route>
      </Route>

      {/* FALLBACK */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
