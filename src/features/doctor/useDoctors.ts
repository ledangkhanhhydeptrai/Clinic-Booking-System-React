import { useMutation, useQuery } from "@tanstack/react-query";
import { DoctorAPI } from "./api";
import { queryClient } from "../../queries/queryClient";
export interface DataDoctor {
  id: string;
  specialty: string;
  phone: string;
  name: string;
}
export function useDoctor(id?: string) {
  const doctorQuery = useQuery({
    queryKey: id ? ["doctor", id] : ["doctors"],
    queryFn: async () => {
      if (id) {
        const res = await DoctorAPI.getDoctorById(id);
        return res.data.data; // 1 doctor
      } else {
        const res = await DoctorAPI.getAllDoctor();
        return res.data.data; // list doctor
      }
    },
    retry: false,
    enabled: id !== "" // tránh call API với id rỗng
  });

  // CREATE doctor
  const createDoctorMutation = useMutation({
    mutationFn: DoctorAPI.createDoctor,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["doctors"] });
    }
  });

  // UPDATE doctor
  const updateDoctorMutation = useMutation({
    mutationFn: async ({
      id,
      name,
      specialty,
      phone
    }: {
      id: string;
      name: string;
      specialty: string;
      phone: string;
    }) => {
      return DoctorAPI.updateDoctorById(id, { name, specialty, phone });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["doctors"] });
    }
  });

  return {
    ...doctorQuery,

    // CREATE
    createDoctor: createDoctorMutation.mutate,
    createDoctorAsync: createDoctorMutation.mutateAsync,
    isCreating: createDoctorMutation.isPending,
    createError: createDoctorMutation.error,
    // UPDATE
    updateDoctor: updateDoctorMutation.mutate,
    updateDoctorAsync: updateDoctorMutation.mutateAsync,
    isUpdating: updateDoctorMutation.isPending,
    updateError: updateDoctorMutation.error
  };
}
