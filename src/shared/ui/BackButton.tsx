import React from "react";
import { BackButtonIcon } from "./Icons";
import Button from "./ButtonIcon";
import { useNavigate } from "react-router-dom";

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };
  return (
    <Button onClick={handleClick}>
      <img src={BackButtonIcon} alt="one step back" />
    </Button>
  );
};

export default BackButton;
