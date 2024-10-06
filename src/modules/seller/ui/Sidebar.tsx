import styled from "styled-components";
import Logo from "../../../shared/ui/Logo";
import MainNav from "./MainNav";

export const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 0.5rem 1rem;
  border-right: 1px solid var(--color-grey-100);
  width: 13rem;
  top: 0;
  left: 0;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
