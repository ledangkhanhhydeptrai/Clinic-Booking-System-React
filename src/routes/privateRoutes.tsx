import Homepage from "../pages/home/Homepage";
import ProfilePage from "../pages/profile/ProfilePage";

export const privateRoutes = [
  { path: "/", element: <Homepage /> },
  { path: "/profile", element: <ProfilePage /> }
];
