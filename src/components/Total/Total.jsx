import { useSelector } from "react-redux";
import { Box, Paper, Typography } from "@mui/material";
import { selectAllContacts } from "../../redux/contacts/contacts-selectors";

export default function SimplePaper() {
  const contacts = useSelector(selectAllContacts);
  return (
    <Box
      sx={{
        mb: { sm: 3 },
        width: { xs: 1, sm: 350 },
      }}
    >
      <Paper
        elevation={3}
        sx={{
          backgroundColor: "background.add",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 1,
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { xs: 24, sm: 28 },
            color: "primary.main",
          }}
        >
          Total contacts:
          {contacts ? (
            <Typography
              component="span"
              sx={{
                ml: 2,
                fontWeight: "bold",
                fontSize: { xs: 28, sm: 32 },
                color: "secondary.main",
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
                color: "secondary.main",
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
