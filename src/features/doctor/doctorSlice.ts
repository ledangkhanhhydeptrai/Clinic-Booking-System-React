import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { DataDoctor } from "./doctorSaga";

interface DoctorState {
  list: DataDoctor[];
  loading: boolean;
}
const initialState: DoctorState = {
  list: [],
  loading: false
};
const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    fetchDoctor: (state) => {
      state.loading = true;
    },
    fetchDoctorSuccess: (state, action: PayloadAction<DataDoctor[]>) => {
      state.list = action.payload;
      state.loading = false;
    },
    fetchDoctorsFailure: (state) => {
      state.loading = false;
    }
  }
});
export const { fetchDoctor, fetchDoctorSuccess, fetchDoctorsFailure } =
  doctorSlice.actions;
export default doctorSlice.reducer;
