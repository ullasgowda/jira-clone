import { lazy } from "react";

import MainLayout from "../layout/MainLayout";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Tasks = lazy(() => import("../pages/Tasks"));

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/tasks",
      element: <Tasks />,
    },
  ],
};

export default MainRoutes;
