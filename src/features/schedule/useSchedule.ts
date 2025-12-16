import { useMutation, useQuery } from "@tanstack/react-query";
import { ScheduleApi } from "./api";
import { queryClient } from "../../queries/queryClient";
type ScheduleStatus = "ACTIVE" | "FULL" | "CANCELLED" | "COMPLETED" | "BLOCKED";
export interface ScheduleProps {
  id: string;
  doctorId: string;
  doctorName: string;
  totalSlots: number;
  bookedSlots: number;
  scheduleStatus: ScheduleStatus;
  specialty:string;
  workDate: string;
  startTime: string;
  endTime: string;
}
export function useSchedule() {
  const scheduleQuery = useQuery<ScheduleProps[]>({
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
  const createScheduleMutation = useMutation({
    mutationFn: ScheduleApi.createSchedule,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["schedules"] });
    }
  });
  return {
    ...scheduleQuery,
    createSchedule: createScheduleMutation.mutate,
    createScheduleAsync: createScheduleMutation.mutateAsync,
    isCreating: createScheduleMutation.isPending,
    createError: createScheduleMutation.error
  };
}
