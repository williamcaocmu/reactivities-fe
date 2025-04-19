import { Group, Logout } from "@mui/icons-material";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  MenuItem,
  Avatar,
  IconButton,
} from "@mui/material";
import { Link, NavLink } from "react-router";
import { useUser } from "../../context/UserContext";

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
                <Avatar
                  src={user?.image}
                  alt={user?.displayName}
                  sx={{ width: 32, height: 32 }}
                />
                <Typography>{user?.displayName}</Typography>
                <IconButton
                  color="inherit"
                  onClick={handleLogout}
                  title="Logout"
                >
                  <Logout />
                </IconButton>
              </Box>
            ) : (
              <Button
                color="inherit"
                variant="outlined"
                component={Link}
                to="/login"
              >
                Login
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
