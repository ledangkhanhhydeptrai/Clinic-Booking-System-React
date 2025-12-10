import DoctorPage from "../pages/admin/doctor/DoctorPage";
import Homepage from "../pages/home/Homepage";
import ProfilePage from "../pages/profile/ProfilePage";

export const privateRoutes = [
  { path: "/", element: <Homepage /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/admin", element: <DoctorPage /> },
];
