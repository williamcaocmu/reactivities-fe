import axiosClient from "./axios-client";

// single source of truth for all activities

export const getActivities = async (filters: string) => {
  const response = await axiosClient.get("/activities", {
    params: {
      filters,
    },
  });
  return response.data;
};

export const getActivityById = async (id: string) => {
  const response = await axiosClient.get(`/activities/${id}`);
  return response.data;
};

type CreateActivityParams = {
  title: string;
  description: string;
  category: string;
  date: string;
  city: string;
  venue: string;
};
export const createActivity = async (activity: CreateActivityParams) => {
  const response = await axiosClient.post("/activities", activity);
  return response.data;
};

export const attendActivity = async (id: string) => {
  const response = await axiosClient.get(`/activities/${id}/attend`);
  return response.data;
};
