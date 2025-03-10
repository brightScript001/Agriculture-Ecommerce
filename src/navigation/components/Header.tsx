import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "@shared/ui/SearchBar";
import UserAvatar from "@shared/ui/UserAvatar";
import { ChevronLeft } from "lucide-react";
import BellButtonWithNotifications from "@shared/ui/BellButtonNotifications ";

export const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  const handleBackNavigation = () => {
    if (pathSegments.length === 1) return; // Prevent navigation when only one segment

    const parentPath = "/" + pathSegments.slice(0, -1).join("/");
    navigate(parentPath);
  };

  const getPageInfo = () => {
    if (pathSegments.length === 0) {
      return { title: "Dashboard", lastUpdated: null };
    }

    const customTitles: Record<string, string> = {
      "order-history": "Order History",
      inventory: "Farm General Records",
      "marketplace/create-product": "Create Product",
    };

    const fullPath = pathSegments.join("/");
    const title =
      customTitles[fullPath] ??
      customTitles[pathSegments[pathSegments.length - 1]] ??
      pathSegments[pathSegments.length - 1]
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());

    return { title, lastUpdated: null };
  };

  const { title, lastUpdated } = getPageInfo();

  return (
    <NavbarContainer>
      <NavbarSection>
        {pathSegments.length > 2 ? (
          <BackButtonContainer onClick={handleBackNavigation}>
            <ChevronLeft size={16} />
            {pathSegments.length > 1
              ? pathSegments[pathSegments.length - 2]
                  .replace(/-/g, " ")
                  .replace(/\b\w/g, (char) => char.toUpperCase())
              : "Dashboard"}
          </BackButtonContainer>
        ) : null}
      </NavbarSection>

      <NavbarSection centerAlign>
        <PageTitleContainer>
          <PageTitle>{title}</PageTitle>
          {lastUpdated && (
            <LastUpdated>Last updated: {lastUpdated}</LastUpdated>
          )}
        </PageTitleContainer>
        <SearchBar />
      </NavbarSection>

      <NavbarSection rightAlign>
        <BellButtonWithNotifications />
        <UserAvatar />
      </NavbarSection>
    </NavbarContainer>
  );
};

// Styled Components
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

const BackButtonContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--color-grey-600);

  &:hover {
    color: var(--color-grey-800);
  }
`;

const PageTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PageTitle = styled.h1`
  font-size: var(--font-size-md);
  font-weight: 600;
  color: var(--color-grey-900);
  margin-bottom: 0.25rem;
`;

const LastUpdated = styled.span`
  font-size: 0.75rem;
  color: var(--color-grey-500);
`;

export default Header;
