import { Typography, Box, useTheme } from "@mui/material";

export default function Header({ title, subtitle }) {
  const theme = useTheme();

  return (
    <Box mb={2}>
      <Typography variant="h3" fontWeight="bold" sx={{ m: "0 0 5px 0" }}>
        {title}
      </Typography>
      <Typography variant="h5" color={`${theme.palette.primary.dark}`}>
        {subtitle}
      </Typography>
    </Box>
  );
}
