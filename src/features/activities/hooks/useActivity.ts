import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { attendActivity, getActivityById } from "../../../libs/apis/activties";

export default function useActivity(id: string) {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["activities", "detail", id],
    queryFn: () => getActivityById(id),
    enabled: Boolean(id),
  });

  const mutation = useMutation({
    mutationFn: () => attendActivity(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["activities", "detail", id],
      });
    },
  });

  return {
    activity: data,
    isLoading,
    attendActivity: mutation.mutate,
  };
}
