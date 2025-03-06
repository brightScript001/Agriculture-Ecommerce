import React from "react";
import styled from "styled-components";
import { FiMenu, FiX } from "react-icons/fi";

const MenuButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: var(--font-size-lg);
`;

interface MenuButtonProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const MenuButtonComponent: React.FC<MenuButtonProps> = ({
  isOpen,
  toggleMenu,
}) => {
  return (
    <MenuButton onClick={toggleMenu}>
      {isOpen ? <FiX /> : <FiMenu />}
    </MenuButton>
  );
};
