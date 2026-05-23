import axiosClient from "../../api/axiosClient";
import { API } from "../../api/endpoints";

export const getAllProfile = {
  getProfile: () => axiosClient.get(`/api/${API.PROFILE.PROFILE}`),
  updateProfile: (
    id: string,
    data: {
      fullName: string;
      phone: string;
    }
  ) => axiosClient.put(`/api/${API.PROFILE.PROFILE}/${id}`, data)
};
