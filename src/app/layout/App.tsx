import { Box, Container, CssBaseline } from "@mui/material";
import { Outlet, useLocation } from "react-router";
import HomePage from "../../features/home/HomePage";
import NavBar from "./NavBar";
import { UserProvider } from "../../context/UserContext";

function App() {
  const location = useLocation();

  return (
    <UserProvider>
      <Box sx={{ bgcolor: "#eeeeee", minHeight: "100vh" }}>
        <CssBaseline />
        {location.pathname === "/" ? (
          <HomePage />
        ) : (
          <>
            <NavBar />
            <Container maxWidth="xl" sx={{ mt: 3 }}>
              <Outlet />
            </Container>
          </>
        )}
      </Box>
    </UserProvider>
  );
}

export default App;
