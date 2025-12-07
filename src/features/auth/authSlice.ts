import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import storage from "../../utils/storage";

interface AuthState {
  token: string | null;
  isLoading: boolean;
  role: string | null;
}

const initialState: AuthState = {
  token: storage.getToken(),
  isLoading: false,
  role: storage.getRole() || null
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
    setRole: (state, action: PayloadAction<string>) => {
      state.role = action.payload;
      storage.setRole(action.payload);
      state.isLoading = false;
    },
    loginFailure: (state) => {
      state.isLoading = false;
    },
    logout: (state) => {
      state.token = null;
      state.role = null;
      storage.removeToken();
      storage.removeRole();
    }
  }
});

export const { loginRequest, setToken, setRole, loginFailure, logout } =
  authSlice.actions;
export default authSlice.reducer;
