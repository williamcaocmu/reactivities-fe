import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import { Link } from "react-router";

type Props = {};

export default function ActivityCard({}: Props) {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h5">Activity title</Typography>
        <Typography sx={{ color: "text.secondary", mb: 1 }}>
          Activity date
        </Typography>
        <Typography variant="body2">Activity description</Typography>
        <Typography variant="subtitle1">City / Venue</Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "space-between", pb: 2 }}
      >
        <Chip label="Category Category" variant="outlined" />
        <Box display="flex" gap={3}>
          <Button
            size="medium"
            variant="contained"
            component={Link}
            to={`/activities/${1}`}
          >
            View
          </Button>
          <Button color="error" size="medium" variant="contained">
            Delete
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}
