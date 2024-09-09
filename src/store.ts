import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./slices/darkModeSlice";
import userSlice from "./slices/userSlice";
import productSlice from "./slices/productSlice";
import orderSlice from "./slices/orderSlice";

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    user: userSlice,
    product: productSlice,
    orders: orderSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;

export default store;
