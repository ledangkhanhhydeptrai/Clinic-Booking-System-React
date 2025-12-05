import type { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { loginRequest, setToken } from "./authSlice";
import { loginApi } from "./api";

interface LoginPayload {
  username: string;
  password: string;
}
interface LoginResponse {
  status: number;
  message: string;
  data: {
    token: string;
  };
}
function* handleLogin(action: PayloadAction<LoginPayload>) {
  try {
    const res: LoginResponse = yield call(
      loginApi,
      action.payload.username,
      action.payload.password
    );
    yield put(setToken(res.data.token));
  } catch (error) {
    console.error("Login failed", error);
  }
}
export default function* authSaga() {
  yield takeLatest(loginRequest.type, handleLogin);
}
