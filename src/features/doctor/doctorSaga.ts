import { call, put } from "redux-saga/effects";
import { DoctorAPI } from "./api";
import { fetchDoctorsFailure, fetchDoctorSuccess } from "./doctorSlice";
import type { AxiosResponse } from "axios";

export interface DataDoctor {
  id: string;
  specialty: string;
  phone: string;
  name: string;
}
export function* getAllDoctorSaga(): Generator {
  try {
    const response: AxiosResponse<{ data: DataDoctor[] }> = yield call(
      DoctorAPI.getAllDoctor
    );
    yield put(fetchDoctorSuccess(response.data.data));
  } catch (error) {
    yield put(fetchDoctorsFailure());
    console.error("Get doctor failed:", error);
  }
}
