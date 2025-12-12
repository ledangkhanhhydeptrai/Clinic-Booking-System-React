import axiosClient from "../../api/axiosClient";
import { API } from "../../api/endpoints";

export const UserApi = {
  getAllUser: () =>
    axiosClient.get(`/api/${API.PATIENT.PATIENT}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
};
