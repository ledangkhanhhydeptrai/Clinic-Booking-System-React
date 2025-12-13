import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegisterPayload } from "./registerSaga";

interface RegisterState {
  isLoading: boolean;
  isSuccess: boolean;
  payload?: RegisterPayload;
}
const initialState: RegisterState = {
  isLoading: false,
  isSuccess: false
};
const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    registerStart(state, action: PayloadAction<RegisterPayload>) {
      state.isLoading = true;
      state.payload = action.payload;
    },
    registerSuccess(state) {
      state.isLoading = false;
      state.isSuccess = true;
    },
    registerFailure(state) {
      state.isLoading = false;
    }
  }
});
export const { registerStart, registerSuccess, registerFailure } =
  registerSlice.actions;

export default registerSlice.reducer;
