import { Grid2 } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";
import ActivityForm from "../form/ActivityForm";

type Props = {
  activities: Activity[];
  onCreateActivity: (activity: Activity) => void;
  onDeleteActivity: (id: string) => void;
  openDetail: boolean;
  onOpenDetail: (id: string) => void;
  selectedActivity: Activity | null;
  onCancel: () => void;
  openForm: boolean;
};

export default function ActivityDashboard({
  activities,
  onCreateActivity,
  onDeleteActivity,
  openDetail,
  onOpenDetail,
  selectedActivity,
  onCancel,
  openForm,
}: Props) {
  return (
    <Grid2 container spacing={3}>
      <Grid2 size={7}>
        <ActivityList
          activities={activities}
          onDeleteActivity={onDeleteActivity}
          onOpenDetail={onOpenDetail}
        />
      </Grid2>
      <Grid2 size={5} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {openDetail && (
          <ActivityDetail
            selectedActivity={selectedActivity}
            onCancel={onCancel}
          />
        )}
        {openForm && <ActivityForm onCreateActivity={onCreateActivity} />}
      </Grid2>
    </Grid2>
  );
}
