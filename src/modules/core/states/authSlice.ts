import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "./userSlice";

interface AuthState {
  role: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  user: UserState | null;
  token: string | null;
}

const initialState: AuthState = {
  role: null,
  isAuthenticated: false,
  isLoading: false,
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setRole: (
      state,
      action: PayloadAction<{
        role: string;
        user: UserState | null;
        token: string | null;
      }>
    ) => {
      state.role = action.payload.role;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    updateAuthUser: (state, action: PayloadAction<UserState>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
    authenticate: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.role = null;
      state.isAuthenticated = false;
      state.isLoading = false;
      state.user = null;
      state.token = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setRole, updateAuthUser, authenticate, logout, setLoading } =
  authSlice.actions;
export default authSlice.reducer;
