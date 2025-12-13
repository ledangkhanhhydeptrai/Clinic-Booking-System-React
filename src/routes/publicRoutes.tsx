import AuthPage from "../pages/auth/AuthPage";
import Homepage from "../pages/home/Homepage";
import RegisterPage from "../pages/register/RegisterPage";

export const publicRoutes = [
  { path: "/", element: <Homepage /> },
  { path: "/auth", element: <AuthPage /> },
  { path: "/auth/register", element: <RegisterPage /> }
];
