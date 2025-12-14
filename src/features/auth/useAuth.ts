import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setRole, setToken, setUser } from "./authSlice";
import { loginApi } from "./api";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export function useLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: loginApi,
    retry: false,
    onSuccess: (data) => {
      const decoded = jwtDecode(data.data.token);
      dispatch(setToken(data.data.token));
      dispatch(setRole(data.data.role));
      dispatch(setUser({ username: decoded.sub || "" }));

      switch (data.data.role) {
        case "ADMIN":
          navigate("/admin/doctor");
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
