import { Grid2 } from "@mui/material";
import useActivities from "../hooks/useActivities";
import ActivityFilters from "./ActivityFilters";
import ActivityList from "./ActivityList";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";

export default function ActivityDashboard() {
  const [filters, setFilters] = useState<string>("all");
  const { activities, isLoading } = useActivities(filters);

  const handleChangeFilters = (filters: string) => {
    setFilters(filters);
  };

  if (isLoading) return <CircularProgress />;

  return (
    <Grid2 container spacing={3}>
      <Grid2 size={7}>
        <button onClick={() => setFilters(Math.random().toString())}>
          change event
        </button>
        <ActivityList activities={activities} />
      </Grid2>
      <Grid2 size={4}>
        <ActivityFilters
          onChangeFilters={handleChangeFilters}
          filters={filters}
        />
      </Grid2>
    </Grid2>
  );
}
