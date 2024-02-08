import { lazy } from "react";

import MainLayout from "../layout/MainLayout";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Projects = lazy(() => import("../pages/Projects"));
const Reports = lazy(() => import("../pages/Reports"));
const Settings = lazy(() => import("../pages/Settings"));
const Users = lazy(() => import("../pages/Users"));

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
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/reports",
      element: <Reports />,
    },
    {
      path: "/settings",
      element: <Settings />,
    },
    {
      path: "/users",
      element: <Users />,
    },
  ],
};

export default MainRoutes;
