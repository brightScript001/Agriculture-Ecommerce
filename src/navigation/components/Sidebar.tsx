import styled from "styled-components";
import { useNavigationLinks } from "../hooks/useNavigationLinks";
import { useNavigate } from "react-router-dom";
import { LogOut } from "@modules/auth/components/Logout";
import Logo from "@shared/ui/Logo";

export const Sidebar = ({ role }: { role: string | null }) => {
  const links = useNavigationLinks(role);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    if (path === "logout") {
      LogOut();
    } else {
      navigate(path);
    }
  };

  return (
    <StyledSidebar>
      <Logo />
      <NavList>
        {links.map(({ label, path }) => (
          <NavItem key={path} onClick={() => handleNavigation(path)}>
            {label}
          </NavItem>
        ))}
      </NavList>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.aside`
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

const NavList = styled.ul`
  list-style: none;
  margin-top: 2rem;
  padding: 0;
`;

const NavItem = styled.li`
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  &:active {
    background-color: var(--color-grey-200);
  }
`;
