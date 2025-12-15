import { useMutation, useQuery } from "@tanstack/react-query";
import { DoctorAPI } from "./api";
import { queryClient } from "../../queries/queryClient";
export interface DataDoctor {
  id: string;
  specialty: string;
  phone: string;
  name: string;
}
export function useDoctor() {
  const doctorQuery = useQuery<DataDoctor[]>({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await DoctorAPI.getAllDoctor();
      return res.data.data;
    },
    retry: false
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
  const deleteDoctorMutation = useMutation({
    mutationFn: async (id: string) => {
      return DoctorAPI.deleteDoctorById(id);
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
    updateError: updateDoctorMutation.error,
    deleteDoctor: deleteDoctorMutation.mutate,
    deleteDoctorAsync: deleteDoctorMutation.mutateAsync,
    isDeleting: deleteDoctorMutation.isPending,
    deleteError: deleteDoctorMutation.error
  };
}
export function useDoctorById(id: string) {
  return useQuery<DataDoctor>({
    queryKey: ["doctor", id],
    queryFn: async () => {
      if (!id) throw new Error("Invalid doctor id");
      const res = await DoctorAPI.getDoctorById(id);
      return res.data.data;
    },
    enabled: !!id,
    retry: false
  });
}
