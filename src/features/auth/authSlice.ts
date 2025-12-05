import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import storage from "../../utils/storage";

interface AuthState {
  token: string | null;
  isLoading: boolean;
}

const initialState: AuthState = {
  token: storage.getToken(),
  isLoading: false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.isLoading = true;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isLoading = false;
      storage.setToken(action.payload);
    },
    loginFailure: (state) => {
      state.isLoading = false;
    },
    logout: (state) => {
      state.token = null;
      storage.removeToken();
    }
  }
});

export const { loginRequest, setToken, loginFailure, logout } =
  authSlice.actions;
export default authSlice.reducer;
