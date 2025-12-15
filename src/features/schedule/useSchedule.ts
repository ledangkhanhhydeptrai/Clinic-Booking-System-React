import { useQuery } from "@tanstack/react-query";
import { ScheduleApi } from "./api";
export interface ScheduleProps {
  id: string;
  doctorId: string;
  workDate: string;
  startTime: string;
  endTime: string;
}
export function useSchedule() {
  return useQuery<ScheduleProps[]>({
    queryKey: ["schedules"],
    queryFn: async () => {
      try {
        const response = await ScheduleApi.getAllSchedule();
        return response.data.data;
      } catch (error) {
        console.error("Error:", error);
      }
    }
  });
}
