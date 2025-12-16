import { useQuery } from "@tanstack/react-query";
import { AppointmentApi } from "./api";
export type AppointmentStatus = "PENDING" | "CONFIRMED" | "DONE";
interface AppointmentProps {
  id: string;
  patientId: string;
  doctorId: string;
  appointmentDate: string;
  appointmentTime: string;
  status: AppointmentStatus;
  doctorName:string;
  specialty:string;
  scheduleId: string;
}
export const useAppointment = () => {
  const appointmentQuery = useQuery<AppointmentProps[]>({
    queryKey: ["appointments"],
    queryFn: async () => {
      const response = await AppointmentApi.getAllAppointment();
      return response.data.data;
    }
  });
  return {
    ...appointmentQuery
  };
};
