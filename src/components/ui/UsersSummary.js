import * as React from "react";
import { Chip, Box, Grid, Card, Typography } from "@mui/material";

const UserSummary = () => {
  return (
    <Box
      sx={{
        m: 1,
        textAlign: "center",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Card sx={{ p: 1 }}>
            <Typography variant="h5">Active Users</Typography>
            <Typography variant="h6">104</Typography>
          </Card>
        </Grid>

        <Grid item xs={2}>
          <Card sx={{ p: 1 }}>
            <Typography variant="h5">Inactive Users</Typography>
            <Typography variant="h6">4</Typography>
          </Card>
        </Grid>

        <Grid item xs={2}>
          <Card sx={{ p: 1 }}>
            <Typography variant="h5">Admin Users</Typography>
            <Typography variant="h6">2</Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
export default UserSummary;
