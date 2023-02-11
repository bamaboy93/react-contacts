import { useSelector } from "react-redux";
import { Box, Paper, Typography, useTheme } from "@mui/material";
import { selectAllContacts } from "../../redux/contacts/contacts-selectors";

export default function SimplePaper() {
  const theme = useTheme();
  const contacts = useSelector(selectAllContacts);
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
            fontSize: 28,
            color: `${theme.palette.primary.main}`,
          }}
        >
          Total contacts:
          {contacts ? (
            <Typography
              component="span"
              sx={{
                ml: 2,
                fontWeight: "bold",
                fontSize: 32,
                color: `${theme.palette.secondary.main}`,
              }}
            >
              {contacts.length}
            </Typography>
          ) : (
            <Typography
              component="span"
              sx={{
                ml: 2,
                fontWeight: "bold",
                fontSize: 32,
                color: `${theme.palette.secondary.main}`,
              }}
            >
              0
            </Typography>
          )}
        </Typography>
      </Paper>
    </Box>
  );
}
