import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { useState } from "react";
import useToggle from "../../hooks/useToggle";

export default function ProfileAbout() {
  const { toggle, state: editMode } = useToggle();
  const [value, setValue] = useState("");

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5">About</Typography>

        <Button onClick={() => toggle()}>
          {editMode ? "Cancel" : "Update About"}
        </Button>
      </Box>
      <Divider sx={{ my: 2 }} />

      <Box>
        {editMode ? (
          <TextField
            sx={{ width: "100%" }}
            label="Multiline"
            multiline
            rows={10}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        ) : null}
      </Box>
    </Box>
  );
}
