import { CircularProgress, Grid2 } from "@mui/material";
import { useParams } from "react-router";
import ProfileContent from "./ProfileContent";
import ProfileHeader from "./ProfileHeader";
import useProfile from "./hooks/useProfile";

export default function ProfilePage() {
  const { id } = useParams();
  const { profile, isLoading } = useProfile(id || "");

  if (isLoading) return <CircularProgress />;

  return (
    <Grid2 container>
      <Grid2 size={12}>
        <ProfileHeader profile={profile} />
        <ProfileContent />
      </Grid2>
    </Grid2>
  );
}
