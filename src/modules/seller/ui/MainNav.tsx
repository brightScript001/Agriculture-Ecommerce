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
} from "../../../shared/ui/Icons";

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledNavLink = styled(NavLink)`
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
    width: 1.8rem;
    height: 1.8rem;
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

export const Span = styled.span`
  font-size: var(--font-size-md);
`;

export const BottomNavList = styled(NavList)`
  margin-top: auto;
`;

function MainNav() {
  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <NavList>
        <li>
          <StyledNavLink to="/seller/dashboard">
            <img src={HomeIcon} alt="Home" />
            <Span>Home</Span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/seller/marketplace">
            <img src={MarketplaceIcon} alt="Marketplace" />
            <Span>Marketplace</Span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/seller/inventory">
            <img src={InventoryIcon} alt="Inventory" />
            <Span>Inventory</Span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/seller/payment">
            <img src={PaymentIcon} alt="Payment" />
            <Span>Payment</Span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/seller/support">
            <img src={SupportIcon} alt="Support" />
            <Span>Support</Span>
          </StyledNavLink>
        </li>
      </NavList>

      {/* This list will be pushed to the bottom */}
      <BottomNavList>
        <li>
          <StyledNavLink to="/seller/profile">
            <img src={ProfileIcon} alt="Profile" />
            <Span>Profile</Span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/seller/sign-out">
            <img src={SignOutIcon} alt="Sign Out" />
            <Span>Sign Out</Span>
          </StyledNavLink>
        </li>
      </BottomNavList>
    </nav>
  );
}

export default MainNav;
