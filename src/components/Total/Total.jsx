import { Box, Paper, Typography, useTheme } from "@mui/material";
import { contacts } from "../../data/contacts";

export default function SimplePaper() {
  const theme = useTheme();
  const total = contacts.length - 1;
  return (
    <Box
      sx={{
        mb: 3,
        "& > :not(style)": {
          width: 350,
          height: 128,
        },
      }}
    >
      <Paper
        elevation={3}
        sx={{
          backgroundColor: `${theme.palette.background.add} !important`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: 32,
            color: `${theme.palette.primary.main} !important`,
          }}
        >
          Total contacts: {total}
        </Typography>
      </Paper>
    </Box>
  );
}
