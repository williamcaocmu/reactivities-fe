import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

type Props = {
  onCreateActivity: (activity: Activity) => void;
  selectedActivity: Activity | null;
};

export default function ActivityForm({
  onCreateActivity,
  selectedActivity,
}: Props) {
  const [activity, setActivity] = useState({
    id: selectedActivity?.id || Math.random().toString(),
    title: selectedActivity?.title || "",
    description: selectedActivity?.description || "",
    category: selectedActivity?.category || "",
    date: selectedActivity?.date || "",
    city: selectedActivity?.city || "",
    venue: selectedActivity?.venue || "",
  });

  useEffect(() => {
    if (selectedActivity) {
      setActivity(selectedActivity);
    } else if (selectedActivity === null) {
      setActivity({
        id: Math.random().toString(),
        title: "",
        description: "",
        category: "",
        date: "",
        city: "",
        venue: "",
      });
    }
  }, [selectedActivity]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreateActivity(activity);
    setActivity({
      id: Math.random().toString(),
      title: "",
      description: "",
      category: "",
      date: "",
      city: "",
      venue: "",
    });
  };

  return (
    <Paper sx={{ borderRadius: 3, padding: 3 }}>
      <Typography variant="h5" gutterBottom color="primary">
        Create activity
      </Typography>
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        gap={3}
        onSubmit={handleSubmit}
      >
        <TextField
          value={activity.title}
          onChange={(e) => setActivity({ ...activity, title: e.target.value })}
          name="title"
          label="Title"
        />
        <TextField
          value={activity.description}
          onChange={(e) =>
            setActivity({ ...activity, description: e.target.value })
          }
          name="description"
          label="Description"
          multiline
          rows={3}
        />
        <TextField
          value={activity.category}
          onChange={(e) =>
            setActivity({ ...activity, category: e.target.value })
          }
          name="category"
          label="Category"
        />
        <TextField
          value={activity.date}
          onChange={(e) => setActivity({ ...activity, date: e.target.value })}
          name="date"
          label="Date"
          type="date"
        />
        <TextField
          value={activity.city}
          onChange={(e) => setActivity({ ...activity, city: e.target.value })}
          name="city"
          label="City"
        />
        <TextField
          value={activity.venue}
          onChange={(e) => setActivity({ ...activity, venue: e.target.value })}
          name="venue"
          label="Venue"
        />
        <Box display="flex" justifyContent="end" gap={3}>
          <Button color="inherit">Cancel</Button>
          <Button type="submit" color="success" variant="contained">
            Submit
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
