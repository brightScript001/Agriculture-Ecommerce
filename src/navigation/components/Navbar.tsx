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
      <NavbarSection>
        <SearchBar />
      </NavbarSection>
      <NavbarSection>
        <BellButtonWithNotifications />
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
  padding: 1rem 2rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavbarSection = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;

  &:last-child {
    margin-right: 0;
  }
`;
