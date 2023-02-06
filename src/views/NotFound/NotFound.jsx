import Box from "@mui/material/Box";
import banner from "../../styles/images/404.png";

export default function NotFound() {
  return (
    <Box
      sx={{
        m: "0 auto",
        height: "80vh",
        backgroundImage: `url(${banner})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}
