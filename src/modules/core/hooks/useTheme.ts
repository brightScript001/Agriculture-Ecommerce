import { useLocalStorageState } from "../../../shared/hooks/useLocalStorageState";

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState<boolean>(
    false,
    "isDarkMode"
  );

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return { isDarkMode, toggleDarkMode };
};
