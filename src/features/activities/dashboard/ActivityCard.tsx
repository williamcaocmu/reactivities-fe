import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";

type Props = {
  activity: Activity;
  onDeleteActivity: (id: string) => void;
  onOpenDetail: (id: string) => void;
};

export default function ActivityCard({
  activity,
  onDeleteActivity,
  onOpenDetail,
}: Props) {
  const handleDeleteActivity = () => {
    onDeleteActivity(activity.id);
  };

  const handleOpenDetail = () => {
    onOpenDetail(activity.id);
  };

  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h5">{activity.title}</Typography>
        <Typography sx={{ color: "text.secondary", mb: 1 }}>
          {activity.date.toLocaleString()}
        </Typography>
        <Typography variant="body2">{activity.description}</Typography>
        <Typography variant="subtitle1">
          {activity.city} / {activity.venue}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "space-between", pb: 2 }}
      >
        <Chip label={activity.category} variant="outlined" />
        <Box display="flex" gap={3}>
          <Button size="medium" variant="contained" onClick={handleOpenDetail}>
            View
          </Button>
          <Button
            color="error"
            size="medium"
            variant="contained"
            onClick={handleDeleteActivity}
          >
            Delete
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}
