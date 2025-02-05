import {
  Cart,
  History,
  HomeIcon,
  ProfileIcon,
  SignOutIcon,
  SupportIcon,
} from "../../../shared/ui/Icons";
import {
  BottomNavList,
  NavList,
  Span,
  StyledNavLink,
} from "../../seller/ui/MainNav";

export default function MainNav() {
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
          <StyledNavLink to="/buyer/dashboard">
            <img src={HomeIcon} alt="Home" />
            <Span>Home</Span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/buyer/cart">
            <img src={Cart} alt="cart" />
            <Span>Cart</Span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/buyer/order-history">
            <img src={History} alt="history" />
            <Span>Order History</Span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/buyer/support">
            <img src={SupportIcon} alt="support" />
            <Span>Support</Span>
          </StyledNavLink>
        </li>
      </NavList>

      <BottomNavList>
        <li>
          <StyledNavLink to="/buyer/profile">
            <img src={ProfileIcon} alt="Profile" />
            <Span>Profile</Span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/">
            <img src={SignOutIcon} alt="Sign Out" />
            <Span>Sign Out</Span>
          </StyledNavLink>
        </li>
      </BottomNavList>
    </nav>
  );
}
