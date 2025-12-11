import axiosClient from "../../api/axiosClient";
import { API } from "../../api/endpoints";

export const DoctorAPI = {
  getAllDoctor: () => axiosClient.get(`/api/${API.DOCTOR.DOCTOR}`),
  getDoctorById: (id: string) =>
    axiosClient.get(`/api/${API.DOCTOR.DOCTOR}/${id}`),
  createDoctor: (data: { name: string; specialty: string; phone: string }) =>
    axiosClient.post(`/api/${API.DOCTOR.DOCTOR}`, data),
  updateDoctorById: (
    id: string,
    data: { name: string; specialty: string; phone: string }
  ) => axiosClient.put(`/api/${API.DOCTOR.DOCTOR}/${id}`, data),
  deleteDoctorById: (id: string) =>
    axiosClient.delete(`/api/${API.DOCTOR.DOCTOR}/${id}`)
};
