import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../slices/darkModeSlice";
import { AppState } from "../store";

function DarkModeToggle() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(
    (state: AppState) => state.darkMode.isDarkMode
  );

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <ButtonIcon onClick={handleToggle}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
