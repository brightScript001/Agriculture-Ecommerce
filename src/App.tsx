import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import { AppState } from "./store";
import { router } from "./app/router";
import { theme } from "@style/theme";
import { setDarkMode } from "@modules/core/states/ThemeSlice";
import ThemeToggle from "@shared/components/ThemeToggle";
import socketService from "@modules/chat/services/socketService";

function App() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(
    (state: AppState) => state.darkMode.isDarkMode
  );
  const { user } = useSelector((state: AppState) => state.auth);

  useEffect(() => {
    if (user && user.id) {
      socketService.connect();

      return () => {
        socketService.disconnect();
      };
    }
  }, [user]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      dispatch(setDarkMode(e.matches));
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [dispatch]);

  const lightTheme = theme;
  const darkTheme = {
    ...theme,
    colors: {
      ...theme.colors,
      background: "#0D0D0D",
      text: "#B0B0B0",
      border: "#3A3A3A",
      divider: "#1C1C1C",
      primary: "#5BAA60",
      secondary: "#FFAD32",
      error: "#FF4C4C",
      warning: "#FFA726",
      success: "#3DDC84",
      info: "#1E90FF",
    },
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <RouterProvider router={router} />
        <ThemeToggle />
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: { duration: 3000 },
            error: { duration: 5000 },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </>
    </ThemeProvider>
  );
}

export default App;
