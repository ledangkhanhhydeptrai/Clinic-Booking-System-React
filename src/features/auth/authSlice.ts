import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import storage from "../../utils/storage";
import { LoginPayload } from "./authSaga";

interface AuthState {
  token: string | null;
  isLoading: boolean;
  role: string | null;
  user: {
    username: string;
  } | null;
}

const initialState: AuthState = {
  token: storage.getToken(),
  isLoading: false,
  role: storage.getRole() || null,
  user: storage.getUser() || null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest: (state, action: PayloadAction<LoginPayload>) => {
      state.isLoading = true;
      state.user = action.payload;
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
    setUser: (state, action: PayloadAction<{ username: string }>) => {
      state.user = action.payload;
      storage.setUser(action.payload); // lưu vào localStorage nếu cần
    },
    loginFailure: (state) => {
      state.isLoading = false;
    },
    logout: (state) => {
      state.token = null;
      state.role = null;
      state.user = null; // ✅ thêm dòng này
      storage.removeToken();
      storage.removeRole();
      storage.removeUser(); // ✅ xóa user khỏi localStorage
    }
  }
});

export const {
  loginRequest,
  setToken,
  setRole,
  loginFailure,
  logout,
  setUser
} = authSlice.actions;
export default authSlice.reducer;
