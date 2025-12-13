import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import registerReducer from "../features/register/registerSlice";

const appReducer = combineReducers({
  auth: authReducer,
  register: registerReducer
});

/**
 * Root reducer có khả năng reset toàn bộ store
 */
const rootReducer = (
  state: ReturnType<typeof appReducer> | undefined,
  action: { type: string }
) => {
  if (action.type === "RESET_APP") {
    state = undefined;
  }

  return appReducer(state, action);
};

export type RootState = ReturnType<typeof appReducer>;
export default rootReducer;
