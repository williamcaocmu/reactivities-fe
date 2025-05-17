import { useParams } from "react-router";

import {
  Box,
  Button,
  Divider,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function ProfilePhotos() {
  const { id } = useParams();
  const photos: any[] = [
    { id: 1, url: "https://placehold.co/200" },
    { id: 2, url: "https://placehold.co/200" },
    { id: 3, url: "https://placehold.co/200" },
  ];
  const [editMode, setEditMode] = useState(false);

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5">Photos</Typography>

        <Button onClick={() => setEditMode(!editMode)}>
          {editMode ? "Cancel" : "Add photo"}
        </Button>
      </Box>
      <Divider sx={{ my: 2 }} />

      <Box>
        <ImageList sx={{ height: 450 }} cols={6} rowHeight={164}>
          <>
            {photos?.map((photo) => (
              <ImageListItem key={photo.id}>
                <img alt={"user profile image"} src={photo.url} />

                {/* <div>
                  <Box sx={{ position: "absolute", top: 0, left: 0 }}>
                    Star Button
                  </Box>

                  <Box sx={{ position: "absolute", top: 0, right: 0 }}>
                    Delete Button
                  </Box>
                </div> */}
              </ImageListItem>
            ))}
          </>
        </ImageList>
      </Box>
    </Box>
  );
}
