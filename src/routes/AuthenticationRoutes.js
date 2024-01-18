import { lazy } from "react";

import MainLayout from "../layout/MainLayout";

const Landing = lazy(() => import("../pages/Landing"));

const AuthenticationRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/home",
      element: <Landing />,
    },
  ],
};

export default AuthenticationRoutes;
