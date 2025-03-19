import { useDispatch } from "react-redux";
import Button from "@shared/ui/Button";
import { toggleChatWidget } from "@modules/core/states/chatSlice";

const SupportButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleChatWidget(true));
  };

  return (
    <Button onClick={handleClick} variation="primary" icon="SupportIcon">
      Get Support
    </Button>
  );
};

export default SupportButton;
