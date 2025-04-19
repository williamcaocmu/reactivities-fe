import axiosClient from "./axios-client";

export const registerUser = async (data: object) => {
  const response = await axiosClient.post("/users/sign-up", data);
  return response.data;
};

export const loginUser = async (data: object) => {
  const response = await axiosClient.post("/users/sign-in", data);
  return response.data;
};

// /me , /whoami
export const getCurrentUser = async () => {
  const response = await axiosClient.get("/users/me");
  return response.data;
};
