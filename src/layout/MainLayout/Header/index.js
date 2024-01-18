import React from "react";
import { styled } from "@mui/material/styles";
import {
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import { MenuOutlined, MenuOpenOutlined } from "@mui/icons-material";

const DRAWER_WIDTH = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: `${DRAWER_WIDTH}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Header = ({ open, onDrawerOpen, onDrawerClose }) => {
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={open ? onDrawerClose : onDrawerOpen}
          edge="start"
          sx={{ mr: 2 }}
        >
          {open ? <MenuOpenOutlined /> : <MenuOutlined />}
        </IconButton>

        <Typography variant="h6" noWrap component="div">
          App Name
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
