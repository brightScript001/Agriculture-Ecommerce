import styled from "styled-components";
import { useNavigationLinks } from "../utils/useNavigationLinks";
import { useNavigate, useLocation } from "react-router-dom";
import { LogOut } from "@modules/auth/components/Logout";
import Logo from "@shared/ui/Logo";

// Icons
import {
  Cart,
  History,
  HomeIcon,
  InventoryIcon,
  MarketplaceIcon,
  PaymentIcon,
  ProfileIcon,
  SignOutIcon,
  SupportIcon,
} from "@shared/ui/Icons";

// Mapping Icons to Labels
const ICONS: Record<string, string> = {
  Home: HomeIcon,
  Marketplace: MarketplaceIcon,
  Inventory: InventoryIcon,
  Payment: PaymentIcon,
  Support: SupportIcon,
  Profile: ProfileIcon,
  SignOut: SignOutIcon,
  Cart: Cart,
  "Order History": History,
};

export const Sidebar = ({ role }: { role: string | null }) => {
  const links = useNavigationLinks(role);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    if (path === "login") {
      LogOut();
    } else {
      navigate(path);
    }
  };

  const mainLinks = links.slice(0, -2);
  const bottomLinks = links.slice(-2);

  return (
    <StyledSidebar>
      <NavContainer>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>

        <NavList>
          {mainLinks.map(({ label, path }) => (
            <NavItem
              key={path}
              onClick={() => handleNavigation(path)}
              isActive={location.pathname === path}
            >
              <NavIcon
                src={ICONS[label]}
                alt={label}
                isActive={location.pathname === path}
              />
              <NavText>{label}</NavText>
            </NavItem>
          ))}
        </NavList>
      </NavContainer>

      <BottomNavList>
        {bottomLinks.map(({ label, path }) => (
          <NavItem
            key={path}
            onClick={() => handleNavigation(path)}
            isActive={location.pathname === path}
          >
            <NavIcon
              src={ICONS[label]}
              alt={label}
              isActive={location.pathname === path}
            />
            <NavText>{label}</NavText>
          </NavItem>
        ))}
      </BottomNavList>
    </StyledSidebar>
  );
};

// Styled Components

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  border-right: 1px solid var(--color-grey-100);
  width: 14rem;
  padding-right: 1rem;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const LogoWrapper = styled.div`
  padding: 1rem;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 2rem;
`;

const BottomNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
`;

const NavItem = styled.li<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
  color: ${({ isActive }) =>
    isActive ? "var(--color-green-600)" : "var(--color-grey-800)"};
  font-weight: 500;
  background-color: ${({ isActive }) =>
    isActive ? "var(--color-green-100)" : "transparent"};
  margin-bottom: 0.5rem;
  position: relative;

  &:hover {
    background-color: var(--color-grey-100);
    color: var(--color-primary);
  }

  &:active {
    background-color: var(--color-green-100);
  }

  &::before {
    content: "";
    display: ${({ isActive }) => (isActive ? "block" : "none")};
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 60%;
    background-color: var(--color-primary);
    border-radius: 2px;
  }

  ${({ isActive }) =>
    isActive &&
    `
    border-right: 4px solid var(--color-green-600);
  `}
`;

const NavIcon = styled.img<{ isActive: boolean }>`
  width: 1.2rem;
  height: 1.2rem;
  filter: ${({ isActive }) => (isActive ? "brightness(1.2)" : "brightness(1)")};
`;

const NavText = styled.span`
  flex-grow: 1;
  font-size: var(--font-size-md);
`;
