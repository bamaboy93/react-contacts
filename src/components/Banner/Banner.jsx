import Box from "@mui/material/Box";
import banner from "../../styles/images/main.png";

export default function Banner() {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "block" },
      }}
    >
      <img src={banner} alt="banner" width={520} height={520} />
    </Box>
  );
}
