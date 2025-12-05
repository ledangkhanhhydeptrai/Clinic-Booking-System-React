import axiosClient from "../../api/axiosClient";

export const loginApi = (username: string, password: string) => {
  return axiosClient.post("/api/auth/login", { username, password });
};
