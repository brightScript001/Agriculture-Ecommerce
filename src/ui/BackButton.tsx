import React from "react";
import { BackButtonIcon } from "./Icons";
import Button from "./ButtonIcon";

const BackButton: React.FC = () => {
  return (
    <Button>
      <img src={BackButtonIcon} alt="one step back" />
    </Button>
  );
};

export default BackButton;
