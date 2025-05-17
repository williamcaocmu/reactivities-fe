import { Group } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Container,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, NavLink } from "react-router";
import { useUser } from "../../context/UserContext";
import UserMenu from "./UserMenu";

export default function NavBar() {
  const { user, isLoggedIn, logout } = useUser();

  const handleLogout = () => {
    logout();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundImage:
            "linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <MenuItem
                sx={{ display: "flex", gap: 2 }}
                component={Link}
                to="/"
              >
                <Group fontSize="large" />
                <Typography variant="h4" fontWeight="bold">
                  Reactivities
                </Typography>
              </MenuItem>
            </Box>
            <Box sx={{ display: "flex" }}>
              <MenuItem
                sx={{
                  fontSize: "1.2rem",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  "&.active": {
                    color: "yellow",
                  },
                }}
                component={NavLink}
                to="/activities"
              >
                Activities
              </MenuItem>

              <MenuItem
                sx={{
                  fontSize: "1.2rem",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  "&.active": {
                    color: "yellow",
                  },
                }}
                component={NavLink}
                to="/createActivity"
              >
                Create Activity
              </MenuItem>
            </Box>
            {isLoggedIn ? (
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <UserMenu />
              </Box>
            ) : (
              <>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
