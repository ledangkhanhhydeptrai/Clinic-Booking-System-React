import { useMutation } from "@tanstack/react-query";
import { loginApi } from "./api";
import type { ApiError } from "./types";
import type { LoginPayload, LoginResponse } from "./authSaga";

export const useLogin = () => {
  return useMutation<LoginResponse, ApiError, LoginPayload>({
    mutationFn: loginApi
  });
};
