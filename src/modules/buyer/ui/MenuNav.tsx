import React from "react";
import { useNavigate } from "react-router-dom";
import { NavItem, NavList } from "../../seller/ui/MenuNav";

interface MainNavProps {
  toggleMenu: () => void;
}

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
    </NavList>
  );
};

export default MenuNav;
