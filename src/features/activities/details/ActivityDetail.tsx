import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

type Props = {
  selectedActivity: Activity | null;
  onCancel: () => void;
};

export default function ActivityDetail({ selectedActivity, onCancel }: Props) {
  const handleCancel = () => {
    onCancel();
  };

  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardMedia component="img" src={`/images/categoryImages/food.jpg`} />
      <CardContent>
        <Typography variant="h5">{selectedActivity?.title}</Typography>
        <Typography variant="subtitle1" fontWeight="light">
          {selectedActivity?.date.toLocaleString()}
        </Typography>
        <Typography variant="body1">{selectedActivity?.description}</Typography>
      </CardContent>
      <CardActions>
        <Button color="primary">Edit</Button>
        <Button color="inherit" onClick={handleCancel}>
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
}
