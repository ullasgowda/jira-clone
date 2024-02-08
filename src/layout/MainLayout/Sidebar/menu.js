import {
  DashboardOutlined,
  SettingsOutlined,
  NoteAltOutlined,
  AssessmentOutlined,
  GroupOutlined,
} from "@mui/icons-material";

export const menu = [
  {
    label: "Dashboard",
    icon: <DashboardOutlined />,
    path: "/",
  },
  {
    label: "Projects",
    icon: <NoteAltOutlined />,
    path: "/projects",
  },
  {
    label: "Reports",
    icon: <AssessmentOutlined />,
    path: "/reports",
  },
  {
    label: "Users",
    icon: <GroupOutlined />,
    path: "/users",
  },
  {
    label: "Settings",
    icon: <SettingsOutlined />,
    path: "/settings",
  },
];
