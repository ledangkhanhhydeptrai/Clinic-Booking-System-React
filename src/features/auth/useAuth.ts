import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setRole, setToken, setUser } from "./authSlice";
import { loginApi } from "./api";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { NotificationProps } from "../../notification/Notification";
import { AxiosError } from "axios";
import { JwtPayload } from "./authSaga";

export function useLogin(onNotify?: (payload: NotificationProps) => void) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginApi,
    retry: false,

    onSuccess: (data) => {
      const decoded = jwtDecode<JwtPayload>(data.data.token);

      dispatch(setToken(data.data.token));
      dispatch(setRole(data.data.role));
      dispatch(setUser({ username: decoded.sub || "" }));

      // ✅ notify success
      onNotify?.({
        open: true,
        message: "Đăng nhập thành công",
        severity: "success"
      });

      setTimeout(() => {
        switch (data.data.role) {
          case "ADMIN":
            navigate("/admin/doctor", {
              state: { loginSuccess: true }
            });
            break;
          case "DOCTOR":
            navigate("/doctor", {
              state: { loginSuccess: true }
            });
            break;
          case "PATIENT":
            navigate("/", {
              state: { loginSuccess: true }
            });
            break;
          default:
            navigate("/", {
              state: { loginSuccess: true }
            });
        }
      }, 500);
    },

    onError: (error: AxiosError) => {
      // ✅ notify error
      onNotify?.({
        open: true,
        message: error.message || "Sai tài khoản hoặc mật khẩu",
        severity: "error"
      });
    }
  });
}
