import { useQuery } from "@tanstack/react-query";
import { getAllProfile } from "./api";

export interface ProfileProps {
  id: string;
  username: string;
  fullName: string;
  phone: string;
}
export default function useProfile() {
  const profileQuery = useQuery<ProfileProps>({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await getAllProfile.getProfile();
      return res.data.data;
    }
  });
  return {
    ...profileQuery
  };
}
