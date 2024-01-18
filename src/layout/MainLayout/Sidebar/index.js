import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";

import { menu } from "./menu";

const DRAWER_WIDTH = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Sidebar = ({ open }) => {
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState("/");

  const handleMenuItemClick = (path) => {
    setSelectedMenu(path);
    navigate(path); // Using navigate here
  };

  return (
    <Drawer
      variant="persistent"
      open={open}
      anchor="left"
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: DRAWER_WIDTH,
          boxSizing: "border-box",
        },
      }}
    >
      <DrawerHeader sx={{ justifyContent: "center", alignItems: "center" }}>
        <Typography variant="body2" sx={{ ml: 1 }}>
          app icon
        </Typography>
      </DrawerHeader>

      <Divider />

      <List>
        {menu.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            selected={selectedMenu === item.path}
            onClick={() => handleMenuItemClick(item.path)}
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
