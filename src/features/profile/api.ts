import axiosClient from "../../api/axiosClient";
import { API } from "../../api/endpoints";

export const getAllProfile = {
  getProfile: () => axiosClient.get(`/api/${API.PROFILE.PROFILE}`)
};
