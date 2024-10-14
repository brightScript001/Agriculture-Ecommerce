import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  role: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const initialState: AuthState = {
  role: null,
  isAuthenticated: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<string | null>) => {
      state.role = action.payload;
      state.isAuthenticated = true;
    },
    authenticate: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.role = null;
      state.isAuthenticated = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setRole, authenticate, logout, setLoading } = authSlice.actions;
export default authSlice.reducer;
