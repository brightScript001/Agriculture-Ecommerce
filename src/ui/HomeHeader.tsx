import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import HeaderButtons from "./HeaderButtons";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  & > *:first-child {
    justify-self: start;
  }

  & > *:nth-child(2) {
    justify-self: center;
  }

  & > *:last-child {
    justify-self: end;
  }

  @media (max-width: 576px) {
    display: none;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <HeaderMenu />
      <HeaderButtons />
    </StyledHeader>
  );
}

export default Header;
