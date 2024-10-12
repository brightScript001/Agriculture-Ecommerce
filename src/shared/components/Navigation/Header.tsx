import styled from "styled-components";
import { BellIcon } from "../../ui/Icons";
import BackButton from "../../../modules/seller/ui/BackButton";
import ButtonText from "../../ui/ButtonText";
import SearchBar from "../../ui/SearchBar";
// import UserAvatar from "./UserAvatar";
// import DarkModeToggle from "./DarkModeToggle";

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

export function Navbar() {
  return (
    <NavbarContainer>
      <NavbarSection>
        <BackButton />
        <ButtonText>Marketplace</ButtonText>
      </NavbarSection>
      <NavbarSection>
        <SearchBar />
      </NavbarSection>
      <NavbarSection>
        <img src={BellIcon} alt="BellIcon" />
      </NavbarSection>
      <NavbarSection>{/* <UserAvatar /> */}</NavbarSection>
      {/* <NavbarSection>
        <DarkModeToggle />
      </NavbarSection> */}
    </NavbarContainer>
  );
}
