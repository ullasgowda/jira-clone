import react from "react";
import { Box, Container, Grid } from "@mui/material";

import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";

const AppLayout = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            bgcolor: "primary.main",
            color: "primary.contrastText",
            p: 2,
            height: "10vh",
          }}
        >
          <Header />
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            bgcolor: "secondary.main",
            color: "primary.contrastText",
            p: 2,
          }}
        >
          <SideBar />
        </Grid>
        <Grid item xs={10}>
          <Container sx={{ p: 2, height: "80vh" }}>{children}</Container>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            bgcolor: "primary.main",
            color: "primary.contrastText",
            p: 2,
            height: "10vh",
          }}
        >
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppLayout;
