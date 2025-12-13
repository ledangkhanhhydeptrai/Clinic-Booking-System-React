import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { RegisterAPI } from "./api";
import { registerFailure, registerStart, registerSuccess } from "./registerSlice";
import { toast } from "react-toastify";

export interface RegisterPayload {
  username: string;
  password: string;
  fullName: string;
  phone: string;
  dob: string;
}
export interface RegisterResponse {
  status: number;
  message: string;
  data: null;
}
function* handleRegister(action: PayloadAction<RegisterPayload>) {
  try {
    const res: RegisterResponse = yield call(RegisterAPI, action.payload);

    if (res.status === 200) {
      yield put(registerSuccess());
      toast.success("🎉 Đăng ký thành công!");
    }
  } catch (error) {
    console.error("Error:",error);
    yield put(registerFailure());
    toast.error("❌ Có lỗi xảy ra, vui lòng thử lại");
  }
}
export default function* RegisterSaga() {
  yield takeLatest(registerStart.type, handleRegister);
}
