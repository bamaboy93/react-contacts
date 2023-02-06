import Box from "@mui/material/Box";
import banner from "../../styles/images/main.png";

export default function Banner() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: 750,
        height: 550,
      }}
    />
  );
}
