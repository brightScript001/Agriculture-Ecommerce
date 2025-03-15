import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DarkModeState {
  isDarkMode: boolean;
}

const getInitialTheme = () => {
  // Check localStorage
  const storedTheme = localStorage.getItem("isDarkMode");
  if (storedTheme !== null) return storedTheme === "true";

  // Check system preference
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const initialState: DarkModeState = {
  isDarkMode: getInitialTheme(),
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem("isDarkMode", state.isDarkMode.toString());
    },
    setDarkMode(state, action: PayloadAction<boolean>) {
      state.isDarkMode = action.payload;
      localStorage.setItem("isDarkMode", action.payload.toString());
    },
  },
});

export const { toggleDarkMode, setDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
