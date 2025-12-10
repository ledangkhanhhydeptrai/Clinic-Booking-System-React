import { useQuery } from "@tanstack/react-query";
import { DoctorAPI } from "./api";

export function useDoctor() {
  return useQuery({
    queryKey: ["doctors"],
    queryFn: DoctorAPI.getAllDoctor,
    retry: false
  });
}
