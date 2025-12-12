import type { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { loginRequest, logout, setRole, setToken } from "./authSlice";
import { loginApi } from "./api";
import { queryClient } from "../../queries/queryClient";
import { push } from "redux-first-history";
export interface LoginPayload {
  username: string;
  password: string;
}
export interface LoginResponse {
  status: number;
  message: string;
  data: {
    token: string;
    role: string;
  };
}
function* handleLogin(action: PayloadAction<LoginPayload>) {
  try {
    const res: LoginResponse = yield call(loginApi, action.payload);
    yield put(setToken(res.data.token));
    yield put(setRole(res.data.role));
  } catch (error) {
    console.error("Login failed", error);
  }
}
export default function* authSaga() {
  yield takeLatest(loginRequest.type, handleLogin);
  yield takeLatest(logout.type, handleLogout); // 👈 Thêm dòng này
}
function* handleLogout() {
  // Xoá localStorage nếu cần
  queryClient.clear(); 
  yield put(push("/"));
  // Reset toàn bộ redux
  yield put({ type: "RESET_APP" });
}