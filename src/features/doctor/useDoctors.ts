import { useMutation, useQuery } from "@tanstack/react-query";
import { DoctorAPI } from "./api";
import { queryClient } from "../../queries/queryClient";
import type { DataDoctor } from "./doctorSaga";

export function useDoctor() {
  const doctorQuery = useQuery<DataDoctor[]>({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await DoctorAPI.getAllDoctor();
      return res.data.data;
    },
    retry: false
  });
  const createDoctorMutation = useMutation({
    mutationFn: DoctorAPI.createDoctor,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["doctors"] });
    }
  });
  return {
    ...doctorQuery,
    createDoctor: createDoctorMutation.mutate,
    createDoctorAsync: createDoctorMutation.mutateAsync,
    isCreating: createDoctorMutation.isPending,
    createError: createDoctorMutation.error
  };
}
