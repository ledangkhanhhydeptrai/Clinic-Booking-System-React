import axiosClient from "../../api/axiosClient";
import { API } from "../../api/endpoints";

export const AppointmentApi = {
  getAllAppointment: () =>
    axiosClient.get(`/api/${API.APPOINTMENT.APPOINTMENT}`),
  createAppointment: (data: {
    patientId: string;
    doctorId: string;
    appointmentDate: string;
    appointmentTime: string;
    scheduleId: string;
  }) => axiosClient.post(`/api/${API.APPOINTMENT.APPOINTMENT}`, data)
};
