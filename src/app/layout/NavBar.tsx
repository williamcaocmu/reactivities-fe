import { Group } from "@mui/icons-material";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  MenuItem,
} from "@mui/material";
import { Link, NavLink } from "react-router";

export default function NavBar() {
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
            <MenuItem>User menu</MenuItem>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
