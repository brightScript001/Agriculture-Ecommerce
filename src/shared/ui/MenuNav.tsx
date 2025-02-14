import { LogOut } from "@modules/auth/components/Logout";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface NavLink {
  label: string;
  path: string;
}

interface MainNavProps {
  toggleMenu: () => void;
  links: NavLink[];
}

export const MenuNav: React.FC<MainNavProps> = ({ toggleMenu, links }) => {
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
    <NavList>
      {links.map(({ label, path }) => (
        <NavItem key={path} onClick={() => handleNavigation(path)}>
          {label}
        </NavItem>
      ))}
    </NavList>
  );
};

const NavList = styled.ul`
  list-style: none;
  margin-top: 6.25rem;
  margin-left: 1.25rem;
`;

const NavItem = styled.li`
  padding: 0.5rem 0;
  cursor: pointer;
`;
