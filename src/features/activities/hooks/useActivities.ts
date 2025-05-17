import { useQuery } from "@tanstack/react-query";
import { getActivities } from "../../../libs/apis/activties";

export default function useActivities(filters: string) {
  const { data, isLoading } = useQuery({
    queryKey: ["activities", "list", filters],
    queryFn: () => getActivities(filters),
  });

  return {
    activities: data || [],
    isLoading,
  };
}

// component => hooks => useQuery + apis (service layer)
