import axiosClient from "../../api/axiosClient";
import { API } from "../../api/endpoints";
import type { LoginPayload, LoginResponse } from "./authSaga";

export const loginApi = async (data: LoginPayload): Promise<LoginResponse> => {
  const response = await axiosClient.post<LoginResponse>(
    `/api/${API.AUTH.LOGIN}`,
    data
  );
  return response.data; // chỉ trả về data
};
