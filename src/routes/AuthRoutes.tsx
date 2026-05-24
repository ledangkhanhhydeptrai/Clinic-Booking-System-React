import AuthPage from "../pages/auth/AuthPage";
import RegisterPage from "../pages/register/RegisterPage";

export const authRoutes = [
  { path: "/auth", element: <AuthPage /> },
  { path: "/auth/register", element: <RegisterPage /> }
];
