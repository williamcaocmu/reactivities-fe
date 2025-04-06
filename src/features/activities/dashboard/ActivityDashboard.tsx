import { Grid2 } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";
import ActivityForm from "../form/ActivityForm";
import { useActivity } from "../../../context/ActivityContext";

export default function ActivityDashboard() {
  const {
    activities,
    openDetail,
    selectedActivity,
    openForm,
    activityForm,
    handleCreateActivity,
    handleDeleteActivity,
    handleOpenDetail,
    handleCancel,
    handleEdit,
  } = useActivity();

  return (
    <Grid2 container spacing={3}>
      <Grid2 size={7}>
        <ActivityList
          activities={activities}
          onDeleteActivity={handleDeleteActivity}
          onOpenDetail={handleOpenDetail}
        />
      </Grid2>
      <Grid2 size={5} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {openDetail && (
          <ActivityDetail
            selectedActivity={selectedActivity}
            onCancel={handleCancel}
            onEdit={handleEdit}
          />
        )}
        {openForm && (
          <ActivityForm
            onCreateActivity={handleCreateActivity}
            selectedActivity={activityForm}
          />
        )}
      </Grid2>
    </Grid2>
  );
}
