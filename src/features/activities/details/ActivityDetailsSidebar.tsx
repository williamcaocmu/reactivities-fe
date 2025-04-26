import {
  Paper,
  Typography,
  List,
  ListItem,
  Chip,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Grid2,
} from "@mui/material";
import pluralize from "pluralize";

type Props = {
  activity: Activity;
};

export default function ActivityDetailsSidebar({ activity }: Props) {
  return (
    <>
      <Paper
        sx={{
          textAlign: "center",
          border: "none",
          backgroundColor: "primary.main",
          color: "white",
          p: 2,
        }}
      >
        <Typography variant="h6">
          {activity.attendees.length}{" "}
          {pluralize("person", activity.attendees.length)} going
        </Typography>
      </Paper>
      <Paper sx={{ padding: 2 }}>
        <Grid2 container alignItems="center">
          <Grid2 size={12}>
            <List sx={{ display: "flex", flexDirection: "column" }}>
              {activity.attendees.map((att) => (
                <ListItem key={att.id}>
                  <ListItemAvatar>
                    <Avatar alt={att.displayName} src={att.imageUrl} />
                  </ListItemAvatar>
                  <ListItemText>
                    <Typography variant="h6">{att.displayName}</Typography>
                  </ListItemText>
                  {att.isHost && (
                    <Chip
                      label="Host"
                      color="warning"
                      variant="filled"
                      sx={{ borderRadius: 2 }}
                    />
                  )}
                </ListItem>
              ))}
            </List>
          </Grid2>
        </Grid2>
      </Paper>
    </>
  );
}
