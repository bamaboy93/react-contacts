import { Box, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { useTheme } from "@mui/material";

export default function ContactsGrid({ contacts }) {
  const theme = useTheme();

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },

    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },

    {
      field: "number",
      headerName: "Phone Number",
      flex: 1,
    },

    {
      headerName: "Delete",
      flex: 0.5,

      renderCell: () => {
        return <Button color="error">Delete</Button>;
      },
    },
  ];

  return (
    <Box
      mt={6}
      height="70vh"
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },

        "& .MuiDataGrid-row": {
          fontWeight: 700,
          fontSize: 14,
        },
        "& .name-column--cell": {
          color: `${theme.palette.secondary.main} `,
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: `${theme.palette.secondary.dark}`,
          borderBottom: "none",
          fontSize: 14,
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: `${theme.palette.background.add} !important`,
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: `${theme.palette.secondary.dark} `,
        },
        "& .MuiCheckbox-root": {
          color: `${theme.palette.secondary.main} !important`,
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          color: `${theme.palette.primary.main} !important`,
        },
      }}
    >
      <DataGrid
        rows={""}
        columns={columns}
        components={{ Toolbar: GridToolbar }}
      />
    </Box>
  );
}
