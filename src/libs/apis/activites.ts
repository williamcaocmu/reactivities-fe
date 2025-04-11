import axiosClient from "./axios-client";

// single source of truth for all activities

export const getActivities = async () => {
  const response = await axiosClient.get("/activities");
  return response.data;
};

export const getActivityById = async (id: string) => {
  const response = await axiosClient.get(`/activities/${id}`);
  return response.data;
};
