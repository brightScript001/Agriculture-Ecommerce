import { HomeIcon, ProfileIcon, SignOutIcon } from "../../../shared/ui/Icons";
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
      </NavList>

      <BottomNavList>
        <li>
          <StyledNavLink to="/buyer/profile">
            <img src={ProfileIcon} alt="Profile" />
            <Span>Profile</Span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/buyer/sign-out">
            <img src={SignOutIcon} alt="Sign Out" />
            <Span>Sign Out</Span>
          </StyledNavLink>
        </li>
      </BottomNavList>
    </nav>
  );
}
