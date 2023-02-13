import { Box } from "@mui/material";

export default function Contacts({ children }) {
  return (
    <Box sx={{ paddingLeft: { xs: 2, md: 4 }, paddingRight: { xs: 2, md: 4 } }}>
      {children}
    </Box>
  );
}
