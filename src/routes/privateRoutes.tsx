import DoctorPageById from "../pages/admin/doctor/doctorId/DoctorPageById";
import DoctorPage from "../pages/admin/doctor/DoctorPage";
import UserPage from "../pages/admin/user/UserPage";
import Homepage from "../pages/home/Homepage";
import ProfilePage from "../pages/profile/ProfilePage";

export const privateRoutes = [
  { path: "/", element: <Homepage /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/admin/doctor", element: <DoctorPage /> },
  { path: "/admin/doctor/doctorId/:id", element: <DoctorPageById /> },
  { path: "/admin/user", element: <UserPage /> }
];
