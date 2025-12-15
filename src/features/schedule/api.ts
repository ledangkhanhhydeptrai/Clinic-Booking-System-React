import axiosClient from "../../api/axiosClient";
import { API } from "../../api/endpoints";

export const ScheduleApi = {
  getAllSchedule: () => axiosClient.get(`/api/${API.SCHEDULE.SCHEDULE}`)
};
