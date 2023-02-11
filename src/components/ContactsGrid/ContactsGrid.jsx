import { useDispatch, useSelector } from "react-redux";
import { Box, Button } from "@mui/material";
import { toast } from "react-toastify";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useTheme } from "@mui/material";
import { selectAllContacts } from "../../redux/contacts/contacts-selectors";
import { deleteContact } from "../../redux/contacts/contacts-operations";

export default function ContactsGrid() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);

  const onDeleteContact = (id) => {
    dispatch(deleteContact(id));
    toast.success("Contact successfully deleted!", {
      position: "bottom-left",
      autoClose: 3000,
      closeOnClick: true,
      theme: "colored",
    });
  };

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
      {contacts && (
        <DataGrid
          rows={contacts}
          columns={[
            {
              field: "id",
              headerName: "№",
              width: 80,
              sortable: false,
              valueGetter: (params) => `${contacts.indexOf(params.row) + 1}`,
            },
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
              field: "action",
              headerName: "Delete",
              width: 180,
              sortable: false,
              disableClickEventBubbling: true,

              renderCell: ({ row }) => {
                return (
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => onDeleteContact(row.id)}
                  >
                    Delete
                  </Button>
                );
              },
            },
          ]}
          components={{ Toolbar: GridToolbar }}
        />
      )}
    </Box>
  );
}
