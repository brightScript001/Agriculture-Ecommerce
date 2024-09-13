import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 400;
  white-space: nowrap;
  color: var(--color-grey-700);
  padding: 0.5rem 1rem;
  position: relative;

  &.active {
    color: var(--color-green-700);
  }

  &.active::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background-color: var(--color-green-700);
  }
`;

function HeaderMenu() {
  return (
    <HeaderWrapper>
      <Nav>
        <StyledNavLink to="/" activeClassName="active">
          Home
        </StyledNavLink>
        <StyledNavLink to="/company" activeClassName="active">
          Company
        </StyledNavLink>
        <StyledNavLink to="/about" activeClassName="active">
          About Us
        </StyledNavLink>
      </Nav>
    </HeaderWrapper>
  );
}

export default HeaderMenu;
