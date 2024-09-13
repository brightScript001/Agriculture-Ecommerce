import React from "react";
import { BackButtonIcon } from "../../../shared/ui/Icons";
import Button from "../../../shared/ui/ButtonIcon";

const BackButton: React.FC = () => {
  return (
    <Button>
      <img src={BackButtonIcon} alt="one step back" />
    </Button>
  );
};

export default BackButton;
