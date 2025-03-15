import { toggleDarkMode } from "@modules/core/states/ThemeSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import styled from "styled-components";
import { FaSun, FaMoon } from "react-icons/fa"; // Import icons

const ToggleButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  box-shadow: var(--shadow-lg);
  border: none;
  cursor: pointer;
  font-size: 20px;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: scale(1.1);
  }
`;

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(
    (state: AppState) => state.darkMode.isDarkMode
  );

  return (
    <ToggleButton onClick={() => dispatch(toggleDarkMode())}>
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </ToggleButton>
  );
};

export default ThemeToggle;
