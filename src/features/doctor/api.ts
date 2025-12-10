import axiosClient from "../../api/axiosClient";
import { API } from "../../api/endpoints";

export const DoctorAPI = {
  getAllDoctor: () => axiosClient.get(`/api/${API.DOCTOR.DOCTOR}`)
};
