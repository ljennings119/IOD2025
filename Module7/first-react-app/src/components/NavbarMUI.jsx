import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function NavbarMUI() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", gap: 2 }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My App
        </Typography>

        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>
        <Button color="inherit" component={Link} to="/bitcoin">
          Bitcoin Rates
        </Button>
      </Toolbar>
    </AppBar>
  );
}
