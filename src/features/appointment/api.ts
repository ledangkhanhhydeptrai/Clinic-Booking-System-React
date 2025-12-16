import axiosClient from "../../api/axiosClient";
import { API } from "../../api/endpoints";

export const AppointmentApi = {
  getAllAppointment: () =>
    axiosClient.get(`/api/${API.APPOINTMENT.APPOINTMENT}`)
};
