import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./slices/darkModeSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    user: userSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;

export default store;
