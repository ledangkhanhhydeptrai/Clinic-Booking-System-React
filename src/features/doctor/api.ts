import axiosClient from "../../api/axiosClient";
import { API } from "../../api/endpoints";

export const DoctorAPI = {
  getAllDoctor: () => axiosClient.get(`/api/${API.DOCTOR.DOCTOR}`),
  createDoctor: (data: { name: string; specialty: string; phone: string }) =>
    axiosClient.post(`/api/${API.DOCTOR.DOCTOR}`, data)
};
