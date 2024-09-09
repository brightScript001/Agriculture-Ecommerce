import React from "react";
import { useNavigate } from "react-router-dom";
import Buttons from "./ButtonGroup";
import Button from "./Button";

const HeaderButtons: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (route: string) => () => {
    navigate(route);
  };

  return (
    <Buttons>
      <Button
        size="medium"
        variation="secondary"
        onClick={handleClick("/login")}
      >
        Login
      </Button>
      <Button size="medium" variation="primary" onClick={handleClick("/")}>
        Get Started
      </Button>
    </Buttons>
  );
};

export default HeaderButtons;
