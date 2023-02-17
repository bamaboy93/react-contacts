import { useSelector } from "react-redux";
import { Box, Paper, Typography } from "@mui/material";
import { selectAllContacts } from "../../redux/contacts/contacts-selectors";

export default function SimplePaper() {
  const contacts = useSelector(selectAllContacts);
  return (
    <Box
      sx={{
        mb: 3,
        width: { xs: 1, sm: 350 },
      }}
    >
      <Paper
        elevation={3}
        sx={{
          backgroundColor: "background.add",
          textAlign: { sm: "center" },
          p: 1,
        }}
      >
        <Typography
          sx={{
            color: "secondary.main",
          }}
          variant="h2"
        >
          Total contacts:
          {contacts ? (
            <Typography
              component="span"
              sx={{
                ml: 2,
                fontWeight: "bold",
                fontSize: { xs: 28, sm: 32 },
                color: "primary.main",
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
                fontSize: { xs: 28, sm: 32 },
                color: "primary.dark",
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
