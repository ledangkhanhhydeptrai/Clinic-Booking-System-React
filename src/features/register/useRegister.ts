import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/rootReducer";
import { RegisterPayload } from "./registerSaga";
import { registerStart } from "./registerSlice";
export default function useRegister() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.register.isLoading);
  const register = (payload: RegisterPayload) => {
    dispatch(registerStart(payload));
  };
  return {
    register,
    isLoading
  };
}
