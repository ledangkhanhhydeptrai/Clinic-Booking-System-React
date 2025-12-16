import DoctorPageById from "../pages/admin/doctor/doctorId/DoctorPageById";
import DoctorPage from "../pages/admin/doctor/DoctorPage";
import ScheduleAdminPage from "../pages/admin/schedule/ScheduleAdminPage";
import UserPage from "../pages/admin/user/UserPage";
import Homepage from "../pages/home/Homepage";
import ProfilePage from "../pages/profile/ProfilePage";
import SchedulePage from "../pages/schedule/SchedulePage";

export const privateRoutes = [
  { path: "/", element: <Homepage />, role: "USER" },
  { path: "/user/profile", element: <ProfilePage />, role: "USER" },
  { path: "/admin/doctor", element: <DoctorPage />, role: "ADMIN" },
  {
    path: "/admin/doctor/doctorId/:id",
    element: <DoctorPageById />,
    role: "ADMIN"
  },
  { path: "/admin/user", element: <UserPage />, role: "ADMIN" },
  { path: "/admin/schedule", element: <ScheduleAdminPage />, role: "ADMIN" },
  { path: "/user/schedule", element: <SchedulePage />, role: "USER" }
];
