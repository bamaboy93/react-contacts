import { Typography, Box } from "@mui/material";

export default function Header({ title, subtitle }) {
  return (
    <Box sx={{ mb: { xs: 4, md: 2 } }}>
      <Typography variant="h3" fontWeight="bold" sx={{ m: "0 0 5px 0" }}>
        {title}
      </Typography>
      <Typography variant="h5" color={"primary.dark"}>
        {subtitle}
      </Typography>
    </Box>
  );
}
