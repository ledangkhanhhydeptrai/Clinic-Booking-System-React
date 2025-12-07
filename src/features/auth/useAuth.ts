import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setToken } from "./authSlice";
import { loginApi } from "./api";

export function useLogin() {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: loginApi,
    retry: false,
    onSuccess: (data) => {
      dispatch(setToken(data.data.token));
    }
  });
}
