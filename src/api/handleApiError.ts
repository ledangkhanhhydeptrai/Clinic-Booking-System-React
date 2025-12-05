import { AxiosError } from "axios";

interface ApiErrorResponse {
  message: string;
}

export const handleApiError = (error: AxiosError<ApiErrorResponse>) => {
  let message = "Có lỗi xảy ra, vui lòng thử lại";

  if (error && error.response && error.response.data) {
    if (error.response.data.message) {
      message = error.response.data.message;
    }
  }

  return message;
};
