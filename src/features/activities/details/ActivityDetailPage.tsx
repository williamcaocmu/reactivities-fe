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
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  async function fetchActivityById(id: string) {
    setIsLoading(true);
    const activity = await getActivityById(id);
    setActivity(activity);
    setIsLoading(false);
  }

  useEffect(() => {
    if (id === undefined) return;
    fetchActivityById(id);
  }, [id]);

  const handleUpdateActivity = (activity: Activity) => {
    fetchActivityById(activity.id);
  };

  if (!activity) return <Typography>Activity not found</Typography>;

  return (
    <Grid2 container spacing={3}>
      <Grid2 size={8}>
        <ActivityDetailHeader
          activity={activity}
          onUpdateActivity={handleUpdateActivity}
        />
        <ActivityDetailInfo activity={activity} />
        <ActivityDetailChat />
      </Grid2>
      <Grid2 size={4}>
        <ActivityDetailSidebar activity={activity} />
      </Grid2>
    </Grid2>
  );
}
