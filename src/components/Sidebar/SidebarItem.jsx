import { MenuItem } from "react-pro-sidebar";
import { Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

export default function Item({ title, to, icon, selected, setSelected }) {
  const theme = useTheme();
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: `${theme.palette.primary.dark}`,
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography sx={{ fontWeight: 700, fontSize: 16 }}>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
}
