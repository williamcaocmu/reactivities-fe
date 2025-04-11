import { Grid2, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getActivityById } from "../../../libs/apis/activites";
import ActivityDetailChat from "./ActivityDetailsChat";
import ActivityDetailInfo from "./ActivityDetailsInfo";
import ActivityDetailSidebar from "./ActivityDetailsSidebar";
import ActivityDetailHeader from "./ActivityDetaislHeader";

export default function ActivityDetailPage() {
  const [activity, setActivity] = useState<Activity | undefined>(undefined);
  const { id } = useParams();

  useEffect(() => {
    async function fetchActivityById(id: string) {
      const activity = await getActivityById(id);
      setActivity(activity);
    }

    if (id === undefined) return;
    fetchActivityById(id);
  }, [id]);

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
