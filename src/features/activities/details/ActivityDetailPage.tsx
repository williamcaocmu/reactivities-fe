import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

type Props = {};

export default function ActivityDetailPage({}: Props) {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardMedia component="img" src={`/images/categoryImages/food.jpg`} />
      <CardContent>
        <Typography variant="h5">Activity title</Typography>
        <Typography variant="subtitle1" fontWeight="light">
          {new Date().toLocaleString()}
        </Typography>
        <Typography variant="body1">Activity description</Typography>
      </CardContent>
      <CardActions>
        <Button color="primary">Edit</Button>
        <Button color="inherit">Cancel</Button>
      </CardActions>
    </Card>
  );
}
