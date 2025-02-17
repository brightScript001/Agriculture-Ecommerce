import BackButton from "@shared/ui/BackButton";
import BellButtonWithNotifications from "@shared/ui/BellButtonNotifications ";
import ButtonText from "@shared/ui/ButtonText";
import SearchBar from "@shared/ui/SearchBar";
import UserAvatar from "@shared/ui/UserAvatar";
import styled from "styled-components";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarSection>
        <BackButton />
        <ButtonText>Back</ButtonText>
      </NavbarSection>

      <NavbarSection centerAlign>
        <SearchBar />
      </NavbarSection>

      <NavbarSection rightAlign>
        <BellButtonWithNotifications />
      </NavbarSection>

      <NavbarSection rightAlign>
        <UserAvatar />
      </NavbarSection>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 13rem;
  width: calc(100% - 13rem);
  background-color: var(--color-grey-0);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const NavbarSection = styled.div<{
  centerAlign?: boolean;
  rightAlign?: boolean;
}>`
  display: flex;
  align-items: center;
  ${({ centerAlign }) => centerAlign && `justify-content: center;`}
  ${({ rightAlign }) => rightAlign && `justify-content: flex-end;`}
  margin-right: 1rem;

  &:last-child {
    margin-right: 0;
  }
`;
