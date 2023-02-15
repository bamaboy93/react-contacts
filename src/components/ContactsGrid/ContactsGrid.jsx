import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { selectAllContacts } from "../../redux/contacts/contacts-selectors";
import { deleteContact } from "../../redux/contacts/contacts-operations";
import { Wrapper } from "./ContactsGrid.styled";

export default function ContactsGrid() {
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
    <Wrapper>
      {contacts && (
        <DataGrid
          rows={contacts}
          columns={[
            {
              field: "id",
              headerName: "№",
              flex: 0.5,
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
              flex: 0.5,
              sortable: false,
              disableClickEventBubbling: true,

              renderCell: ({ row }) => {
                return (
                  <Button
                    variant="contained"
                    color="error"
                    sx={{ width: "100%" }}
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
    </Wrapper>
  );
}
