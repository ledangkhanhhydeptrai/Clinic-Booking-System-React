import axiosClient from "../../api/axiosClient";
import { API } from "../../api/endpoints";

export const ScheduleApi = {
  getAllSchedule: () => axiosClient.get(`/api/${API.SCHEDULE.SCHEDULE}`),
  createSchedule: (data: {
    doctorId: string;
    workDate: string;
    startTime: string;
    endTime: string;
  }) => axiosClient.post(`/api/${API.SCHEDULE.SCHEDULE}`, data)
};
