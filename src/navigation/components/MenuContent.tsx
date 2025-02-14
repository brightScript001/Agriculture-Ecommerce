import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { LogOut } from "@modules/auth/components/Logout";

interface MenuContentProps {
  isOpen: boolean;
  toggleMenu: () => void;
  links: { label: string; path: string }[];
}

export const MenuContent: React.FC<MenuContentProps> = ({
  isOpen,
  toggleMenu,
  links,
}) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    if (path === "logout") {
      LogOut();
    } else {
      navigate(path);
    }
    toggleMenu();
  };

  return (
    <StyledMenuContent isOpen={isOpen}>
      <NavList>
        {links.map(({ label, path }) => (
          <NavItem key={path} onClick={() => handleNavigation(path)}>
            {label}
          </NavItem>
        ))}
      </NavList>
    </StyledMenuContent>
  );
};

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

const NavList = styled.ul`
  list-style: none;
  margin-top: 6.25rem;
  margin-left: 1.25rem;
`;

const NavItem = styled.li`
  padding: 0.5rem 0;
  cursor: pointer;
  &:hover {
    color: var(--color-primary);
  }
`;
