import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
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
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: theme.palette.secondary.dark,
    borderBottom: "none",
    fontSize: 14,
  },
  "& .MuiDataGrid-virtualScroller": {
    backgroundColor: theme.palette.background.add,
  },
  "& .MuiDataGrid-footerContainer": {
    borderTop: "none",
    backgroundColor: theme.palette.secondary.dark,
  },
  "& .MuiCheckbox-root": {
    color: theme.palette.secondary.main,
  },
  "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
    color: theme.palette.primary.main,
  },
}));
