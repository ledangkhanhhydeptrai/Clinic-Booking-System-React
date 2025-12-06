import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import { loginApi } from "./api";
import type { ApiError } from "./types";
import type { LoginPayload, LoginResponse } from "./authSaga";

export const useLogin = (): UseMutationResult<
  LoginResponse,
  ApiError,
  LoginPayload
> => {
  return useMutation<LoginResponse, ApiError, LoginPayload>({
    mutationFn: loginApi
  });
};
