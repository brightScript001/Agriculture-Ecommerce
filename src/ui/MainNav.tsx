import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HomeIcon,
  MarketplaceIcon,
  InventoryIcon,
  PaymentIcon,
  SupportIcon,
  ProfileIcon,
  SignOutIcon,
} from "./Icons";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: var(--font-size-md);
    font-weight: 500;
    padding: 0.8rem 0;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-green-800);
    background-color: var(--color-green-100);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-green-700);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <img src={HomeIcon} alt="Home" />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/marketplace">
            <img src={MarketplaceIcon} alt="Home" />
            <span>Marketplace</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/inventory">
            <img src={InventoryIcon} alt="Home" />
            <span>Inventory</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/payment">
            <img src={PaymentIcon} alt="Home" />
            <span>Payment</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/support">
            <img src={SupportIcon} alt="Home" />
            <span>Support</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/profile">
            <img src={ProfileIcon} alt="Home" />
            <span>Profile</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/sign-out">
            <img src={SignOutIcon} alt="Home" />
            <span>Sign Out</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
