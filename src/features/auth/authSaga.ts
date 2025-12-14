import { jwtDecode } from "jwt-decode";
import { call, put, takeLatest } from "redux-saga/effects";
import { loginApi } from "./api";
import { loginRequest, setToken, setRole, setUser } from "./authSlice";

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

export interface JwtPayload {
  sub: string; // username
  iat: number;
  exp: number;
}

function* handleLogin(action: { type: string; payload: LoginPayload }) {
  try {
    const res: LoginResponse = yield call(loginApi, action.payload);
    yield put(setToken(res.data.token));
    yield put(setRole(res.data.role));

    const decoded = jwtDecode<JwtPayload>(res.data.token);
    console.log("Decoded token:", decoded); // 🔹 xem sub có đúng
    yield put(setUser({ username: decoded.sub })); // ✅ set user
  } catch (error) {
    console.error("Login failed", error);
  }
}

export default function* authSaga() {
  yield takeLatest(loginRequest.type, handleLogin);
}
