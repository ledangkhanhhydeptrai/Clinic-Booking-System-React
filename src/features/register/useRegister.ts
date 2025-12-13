import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/rootReducer";
import { RegisterPayload } from "./registerSaga";
import { registerStart } from "./registerSlice";
import React from "react";
import { useNavigate } from "react-router-dom";
export default function useRegister() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isSuccess } = useSelector(
    (state: RootState) => state.register
  );
  const register = (payload: RegisterPayload) => {
    dispatch(registerStart(payload));
  };
  React.useEffect(() => {
    if (isSuccess) {
      console.log("isSuccess:", isSuccess);
      navigate("/auth");
    }
  }, [isSuccess, navigate]);
  return {
    isSuccess,
    register,
    isLoading
  };
}
