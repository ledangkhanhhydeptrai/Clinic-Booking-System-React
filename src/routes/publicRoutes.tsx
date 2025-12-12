import AuthPage from "../pages/auth/AuthPage";
import Homepage from "../pages/home/Homepage";

export const publicRoutes = [{ path: "/", element: <Homepage /> },
  { path: "/auth", element: <AuthPage /> }
];
