import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useState, ChangeEvent, FormEvent } from "react";
import { createActivity } from "../../../libs/apis/activites";
import { useNavigate } from "react-router";

export default function ActivityForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    date: "",
    city: "",
    venue: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      await createActivity({
        title: form.title,
        description: form.description,
        category: form.category,
        date: form.date,
        city: form.city,
        venue: form.venue,
      });
      setForm({
        title: "",
        description: "",
        category: "",
        date: "",
        city: "",
        venue: "",
      });
      navigate("/activities");
    } catch (error) {
      console.log(error);
    }
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
          name="title"
          label="Title"
          value={form.title}
          onChange={handleInputChange}
        />
        <TextField
          name="description"
          label="Description"
          value={form.description}
          onChange={handleInputChange}
        />
        <TextField
          name="category"
          label="Category"
          value={form.category}
          onChange={handleInputChange}
        />
        <TextField
          name="date"
          label="Date"
          type="date"
          value={form.date}
          onChange={handleInputChange}
        />
        <TextField
          name="city"
          label="City"
          value={form.city}
          onChange={handleInputChange}
        />
        <TextField
          name="venue"
          label="Venue"
          value={form.venue}
          onChange={handleInputChange}
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
