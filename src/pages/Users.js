import { Grid } from "@mui/material";

import UserSummary from "../components/ui/UsersSummary";
import UserList from "../components/ui/UserList";

const Users = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <UserSummary />
      </Grid>
      <Grid item xs={12} sx={{ mt: 2 }}>
        <UserList />
      </Grid>
    </Grid>
  );
};

export default Users;
