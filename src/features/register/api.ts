import axiosClient from "../../api/axiosClient";
import { API } from "../../api/endpoints";
import { RegisterPayload, RegisterResponse } from "./registerSaga";

export const RegisterAPI = async (
  data: RegisterPayload
): Promise<RegisterResponse> => {
  const response = await axiosClient.post(`/api/${API.AUTH.REGISTER}`, data);
  return response.data;
};
