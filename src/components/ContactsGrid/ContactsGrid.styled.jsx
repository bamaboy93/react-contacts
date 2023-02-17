import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  height: "70vh",

  "& .MuiDataGrid-root": {
    border: "none",
  },

  "& .MuiDataGrid-row": {
    fontWeight: 700,
    fontSize: 14,
  },
  "& .name-column--cell": {
    color: theme.palette.secondary.main,
  },
  "& .name-column--id": {
    color: theme.palette.primary.main,
  },
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: theme.palette.secondary.main,
    borderBottom: "none",
    fontSize: 14,
  },
  "& .MuiDataGrid-virtualScroller": {
    backgroundColor: theme.palette.background.table,
  },
  "& .MuiDataGrid-footerContainer": {
    borderTop: "none",
    backgroundColor: theme.palette.secondary.main,
  },
  "& .MuiCheckbox-root": {
    color: theme.palette.secondary.main,
  },
  "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
    color: theme.palette.primary.main,
  },
}));
