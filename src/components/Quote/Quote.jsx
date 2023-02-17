import { Box, Paper, Typography } from "@mui/material";
import { quotes } from "../../data/quotes";
export default function Quote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <Box
      sx={{
        width: 1,
      }}
    >
      <Paper
        sx={{
          backgroundColor: "background.add",
          p: 2,
        }}
        elevation={3}
      >
        <Typography sx={{ mb: 4, color: "primary.main" }} variant="h3">
          Quote of the day:
        </Typography>
        <Typography sx={{ mb: 2, color: "secondary.main" }} variant="h2">
          {quote.quote}
        </Typography>
        <Typography
          sx={{ color: "primary.light", textAlign: "right" }}
          variant="body1"
        >
          {quote.author}
        </Typography>
      </Paper>
    </Box>
  );
}
