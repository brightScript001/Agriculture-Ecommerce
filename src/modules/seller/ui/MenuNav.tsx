import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface MainNavProps {
  toggleMenu: () => void;
}

export const NavList = styled.ul`
  list-style: none;
  margin-top: 6.25rem;
  margin-left: 1.25rem;
`;

export const NavItem = styled.li`
  padding: 0.5rem 0;
  cursor: pointer;
`;

const MenuNav: React.FC<MainNavProps> = ({ toggleMenu }) => {
  const navigate = useNavigate();
  const handleItemClick = (route: string) => {
    navigate(route);
    toggleMenu();
  };

  return (
    <NavList>
      <NavItem onClick={() => handleItemClick("/seller/dashboard")}>
        Home
      </NavItem>
      <NavItem onClick={() => handleItemClick("/seller/marketplace")}>
        Marketplace
      </NavItem>
      <NavItem onClick={() => handleItemClick("/seller/inventory")}>
        Inventory
      </NavItem>
      <NavItem onClick={() => handleItemClick("/seller/payment")}>
        Payment
      </NavItem>
      <NavItem onClick={() => handleItemClick("/seller/support")}>
        Support
      </NavItem>
      <NavItem onClick={() => handleItemClick("/seller/profile")}>
        Profile
      </NavItem>
      <NavItem onClick={() => handleItemClick("/seller/sign-out")}>
        Sign Out
      </NavItem>
    </NavList>
  );
};

export default MenuNav;
