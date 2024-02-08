import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Chip } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "role",
    headerName: "Role",
    type: "string",
    width: 110,
  },
  {
    field: "status",
    headerName: "Status",
    width: 120,
    renderCell: (params) => (
      <Chip
        label={params.row.status}
        sx={{
          color: params.row.status === "Active" ? "green" : "red",
        }}
      />
    ),
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 31,
    status: "Active",
    role: "User",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 31,
    status: "Active",
    role: "User",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    age: 11,
    status: "Active",
    role: "User",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: null,
    status: "Active",
    role: "User",
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: null,
    age: 150,
    status: "Active",
    role: "User",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    status: "Active",
    role: "User",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
    status: "Active",
    role: "User",
  },
  {
    id: 9,
    lastName: "Roxie",
    role: "User",
    firstName: "Harvey",
    age: 65,
    status: "Active",
  },
];

const UserList = () => {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </Box>
  );
};
export default UserList;
