import { all } from "redux-saga/effects";
import authSaga from "../features/auth/authSaga";
import { getAllDoctorSaga } from "../features/doctor/doctorSaga";

export default function* rootSaga() {
  yield all([authSaga(), getAllDoctorSaga()]);
}
