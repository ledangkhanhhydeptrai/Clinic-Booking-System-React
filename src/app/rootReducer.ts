import { combineReducers, AnyAction } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";

const appReducer = combineReducers({
  auth: authReducer
});

// Lấy type của root state trước khi reset
export type AppState = ReturnType<typeof appReducer>;

const rootReducer = (state: AppState | undefined, action: AnyAction): AppState => {
  if (action.type === "RESET_APP") {
    state = undefined; // reset toàn bộ redux
  }

  return appReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
