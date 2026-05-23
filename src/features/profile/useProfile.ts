import { useMutation, useQuery } from "@tanstack/react-query";
import { getAllProfile } from "./api";
import ProfileUpdate from "../../pages/profile/components/ProfileUpdate";
import { queryClient } from "../../queries/queryClient";

export interface ProfileProps {
  id: string;
  username: string;
  fullName: string;
  phone: string;
}
export interface ProfileUpdate {
  id: string;
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

export const useUpdateProfileMutation = () => {
  return useMutation({
    mutationFn: async ({ id, fullName, phone }: ProfileUpdate) => {
      const res = await getAllProfile.updateProfile(id, {
        fullName,
        phone
      });

      return res.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["profile"]
      });
    }
  });
};
