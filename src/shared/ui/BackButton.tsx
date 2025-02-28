import React from "react";
import Button from "./ButtonIcon";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };
  return (
    <Button onClick={handleClick}>
      <ChevronLeft size={32} color="black" />
    </Button>
  );
};

export default BackButton;
