import { useQuery } from "@tanstack/react-query";
import { getProfileById } from "../../../libs/apis/profiles";

export default function useProfile(id: string) {
  const { data, isLoading } = useQuery({
    queryKey: ["profiles", id],
    queryFn: () => getProfileById(id),
    enabled: Boolean(id),
  });

  return {
    profile: data,
    isLoading,
  };
}
