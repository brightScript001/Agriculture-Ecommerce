import styled from "styled-components";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

interface MenuContentProps {
  isOpen: boolean;
}

const MenuButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: var(--font-size-md);
`;

const MenuContent = styled.div<MenuContentProps>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: 4rem;
  right: 1rem;
  background-color: white;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: var(--border-radius-md);
`;

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMenu />}
      </MenuButton>
      <MenuContent isOpen={isOpen}>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
          <li>item 5</li>
        </ul>
      </MenuContent>
    </>
  );
};

export default HamburgerMenu;
