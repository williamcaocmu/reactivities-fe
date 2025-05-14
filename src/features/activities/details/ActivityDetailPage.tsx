import { Grid2, Typography } from "@mui/material";
import { useParams } from "react-router";
import useActivity from "../hooks/useActivity";
import ActivityDetailChat from "./ActivityDetailsChat";
import ActivityDetailInfo from "./ActivityDetailsInfo";
import ActivityDetailSidebar from "./ActivityDetailsSidebar";
import ActivityDetailHeader from "./ActivityDetaislHeader";

export default function ActivityDetailPage() {
  const { id } = useParams();

  const { activity } = useActivity(id || "");

  if (!activity) return <Typography>Activity not found</Typography>;

  return (
    <Grid2 container spacing={3}>
      <Grid2 size={8}>
        <ActivityDetailHeader activity={activity} />
        <ActivityDetailInfo activity={activity} />
        <ActivityDetailChat />
      </Grid2>
      <Grid2 size={4}>
        <ActivityDetailSidebar activity={activity} />
      </Grid2>
    </Grid2>
  );
}
