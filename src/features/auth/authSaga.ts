import type { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { loginRequest, setToken } from "./authSlice";
import { loginApi } from "./api";

export interface LoginPayload {
  username: string;
  password: string;
}
export interface LoginResponse {
  status: number;
  message: string;
  data: {
    token: string;
  };
}
function* handleLogin(action: PayloadAction<LoginPayload>) {
  try {
    const res: LoginResponse = yield call(loginApi, action.payload);
    yield put(setToken(res.data.token));
  } catch (error) {
    console.error("Login failed", error);
  }
}
export default function* authSaga() {
  yield takeLatest(loginRequest.type, handleLogin);
}
