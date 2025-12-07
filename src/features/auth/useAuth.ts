import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setRole, setToken } from "./authSlice";
import { loginApi } from "./api";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: loginApi,
    retry: false,
    onSuccess: (data) => {
      dispatch(setToken(data.data.token));
      dispatch(setRole(data.data.role));
      switch (data.data.role) {
        case "ADMIN":
          navigate("/admin");
          break;
        case "DOCTOR":
          navigate("/doctor");
          break;
        case "PATIENT":
          navigate("/");
          break;
        default:
          navigate("/");
          break;
      }
    }
  });
}
