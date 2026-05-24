import ContactPage from "../pages/contact/Contact";
import GuidePage from "../pages/guide/GuidePage";
import Homepage from "../pages/home/Homepage";

export const publicRoutes = [
  { path: "/", element: <Homepage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/guide", element: <GuidePage /> }
];
