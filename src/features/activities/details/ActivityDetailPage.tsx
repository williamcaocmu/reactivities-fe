import { Grid2, Typography } from "@mui/material";
import ActivityDetailHeader from "./ActivityDetaislHeader";
import ActivityDetailChat from "./ActivityDetailsChat";
import ActivityDetailInfo from "./ActivityDetailsInfo";
import ActivityDetailSidebar from "./ActivityDetailsSidebar";

export default function ActivityDetailPage() {
  const activity: Activity | undefined = {
    id: "1",
    title: "Activity 1",
    date: new Date("2021-01-01"),
    description: "Description 1",
    category: "Category 1",
    city: "City 1",
    venue: "Venue 1",
    isCanceled: false,
    latitude: 1,
    longitude: 1,
  };
  const isLoadingActivity = false;

  if (isLoadingActivity) return <Typography>Loading...</Typography>;

  if (!activity) return <Typography>Activity not found</Typography>;

  return (
    <Grid2 container spacing={3}>
      <Grid2 size={8}>
        <ActivityDetailHeader activity={activity} />
        <ActivityDetailInfo activity={activity} />
        <ActivityDetailChat />
      </Grid2>
      <Grid2 size={4}>
        <ActivityDetailSidebar />
      </Grid2>
    </Grid2>
  );
}
