import React from "react";
import styled from "styled-components";
import MainNav from "./MainNav";

interface MenuContentProps {
  isOpen: boolean;
}

const MenuContent = styled.div<MenuContentProps>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: 4rem;
  right: 1rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: var(--border-radius-md);
`;

const MenuContentComponent: React.FC<MenuContentProps> = ({ isOpen }) => {
  return (
    <MenuContent isOpen={isOpen}>
      <MainNav />
    </MenuContent>
  );
};

export default MenuContentComponent;
