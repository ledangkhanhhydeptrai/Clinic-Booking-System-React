import React from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./publicRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import { privateRoutes } from "./privateRoutes";
import Layout from "../pages/admin/layout";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route element={<ProtectedRoutes />}>
        <Route element={<Layout />}>
          {privateRoutes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Route>
      </Route>
    </Routes>
  );
};
export default AppRoutes;
