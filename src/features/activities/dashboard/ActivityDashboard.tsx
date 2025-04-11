import { useEffect, useState } from "react";
import { Grid2 } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityFilters from "./ActivityFilters";
import { getActivities } from "../../../libs/apis/activites";

export default function ActivityDashboard() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    async function fetchActivities() {
      const activities = await getActivities();
      setActivities(activities);
    }
    fetchActivities();
  }, []);

  return (
    <Grid2 container spacing={3}>
      <Grid2 size={7}>
        <ActivityList activities={activities} />
      </Grid2>
      <Grid2 size={4}>
        <ActivityFilters />
      </Grid2>
    </Grid2>
  );
}
