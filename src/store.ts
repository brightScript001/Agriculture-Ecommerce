import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./modules/core/states/ThemeSlice";
import userSlice from "./modules/core/states/userSlice";
import authSlice from "./modules/core/states/authSlice";
import cartSlice from "./modules/buyer/states/cartSlice";
import emailVerificationSlice from "@core/states/emailVerificationSlice";
import chatSlice from "@core/states/chatSlice";

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    user: userSlice,
    auth: authSlice,
    cart: cartSlice,
    emailVerification: emailVerificationSlice,
    chat: chatSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;

export default store;
