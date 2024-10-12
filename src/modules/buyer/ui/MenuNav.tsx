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
      <NavItem onClick={() => handleItemClick("/buyer/dashboard")}>
        Home
      </NavItem>
      <NavItem onClick={() => handleItemClick("/buyer/cart")}>Cart</NavItem>
      <NavItem onClick={() => handleItemClick("/buyer/order-history")}>
        Order History
      </NavItem>
      <NavItem onClick={() => handleItemClick("/buyer/support")}>
        Support
      </NavItem>
      <NavItem onClick={() => handleItemClick("/buyer/profile")}>
        Profile
      </NavItem>
      <NavItem onClick={() => handleItemClick("/buyer/sign-out")}>
        Sign Out
      </NavItem>
    </NavList>
  );
};

export default MenuNav;
