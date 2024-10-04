import React from "react";
import styled from "styled-components";
import MenuNav from "./MenuNav";

// Define the props for MenuContent
interface MenuContentProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const StyledMenuContent = styled.div<{ isOpen: boolean }>`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-md);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s, visibility 0.3s;
  z-index: 999;
`;

export const MenuContentComponent: React.FC<MenuContentProps> = ({
  isOpen,
  toggleMenu,
}) => {
  return (
    <StyledMenuContent isOpen={isOpen}>
      <MenuNav toggleMenu={toggleMenu} />
    </StyledMenuContent>
  );
};
