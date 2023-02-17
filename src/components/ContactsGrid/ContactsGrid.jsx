import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
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
              sortable: false,
              width: 30,
              minWidth: 30,
              MaxWidth: 30,
              valueGetter: (params) => `${contacts.indexOf(params.row) + 1}`,
              cellClassName: "name-column--id",
            },
            {
              field: "name",
              headerName: "Name",
              flex: 1,
              cellClassName: "name-column--cell",
            },
            {
              field: "number",
              headerName: "Number",
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
                    sx={{ minWidth: "40px", width: { xs: "50px", sm: 1 } }}
                    onClick={() => onDeleteContact(row.id)}
                  >
                    <DeleteIcon />
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
