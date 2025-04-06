import { Box } from "@mui/material";
import ActivityCard from "./ActivityCard";

type Props = {
  activities: Activity[];
  onDeleteActivity: (id: string) => void;
  onOpenDetail: (id: string) => void;
};

export default function ActivityList({
  activities,
  onDeleteActivity,
  onOpenDetail,
}: Props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {activities.map((activity) => (
        <ActivityCard
          key={activity.id}
          activity={activity}
          onDeleteActivity={onDeleteActivity}
          onOpenDetail={onOpenDetail}
        />
      ))}
    </Box>
  );
}
