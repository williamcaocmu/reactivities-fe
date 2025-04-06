import { Container, CssBaseline } from "@mui/material";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { ActivityProvider } from "../../context/ActivityContext";

function App() {
  return (
    <ActivityProvider>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <ActivityDashboard />
      </Container>
    </ActivityProvider>
  );
}

export default App;
