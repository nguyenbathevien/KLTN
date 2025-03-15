import { configureStore } from "@reduxjs/toolkit";
import userReducer from './reducer/admin/userReducer'
export const Store = configureStore({
  reducer: {
    userReducer: userReducer
  },
});
