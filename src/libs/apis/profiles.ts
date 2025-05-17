import axiosClient from "./axios-client";

export const getProfileById = async (id: string) => {
  const response = await axiosClient.get(`/profiles/${id}`);
  return response.data;
};
