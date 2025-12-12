import { useQuery } from "@tanstack/react-query";
import { UserApi } from "./api";
export interface PatientProps {
  id: string;
  fullName: string;
  phone: string;
  dob: string;
}
export function useUser() {
  const userQuery = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await UserApi.getAllUser();
      return res.data.data;
    }
  });
  return {
    ...userQuery
  };
}
