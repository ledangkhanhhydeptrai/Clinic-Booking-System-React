import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegisterPayload } from "./registerSaga";

interface RegisterState {
  isLoading: boolean;
  payload?: RegisterPayload;
}
const initialState: RegisterState = {
  isLoading: false,
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
    },
    registerFailure(state) {
      state.isLoading = false;
    }
  }
});
export const { registerStart, registerSuccess, registerFailure } =
  registerSlice.actions;

export default registerSlice.reducer;
