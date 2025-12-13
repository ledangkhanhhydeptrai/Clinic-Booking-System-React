import { all } from "redux-saga/effects";
import authSaga from "../features/auth/authSaga";
import RegisterSaga from "../features/register/registerSaga";

export default function* rootSaga() {
  yield all([authSaga(), RegisterSaga()]);
}
