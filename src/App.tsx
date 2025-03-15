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

function App() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(
    (state: AppState) => state.darkMode.isDarkMode
  );

  useEffect(() => {
    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      dispatch(setDarkMode(e.matches));
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [dispatch]);

  // Define the themes
  const lightTheme = theme;
  const darkTheme = {
    ...theme,
    colors: {
      ...theme.colors,
      background: "#1f2937",
      text: "#f9fafb",
      border: "#4b5563",
      divider: "#374151",
      primary: "#72AF78",
      secondary: "#FFB300",
      error: "#E57373",
      warning: "#FFCA28",
      success: "#66BB6A",
      info: "#42A5F5",
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
