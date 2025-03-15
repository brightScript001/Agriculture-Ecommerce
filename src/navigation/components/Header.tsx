import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ChevronLeft } from "lucide-react";
import { useSelector } from "react-redux";
import { AppState } from "store";
import { NotificationButton } from "@shared/ui/NotificationButton";
import SearchBar from "@shared/ui/SearchBar";

export const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const user = useSelector((state: AppState) => state.auth);
  const fullName = `${user.user?.firstName} ${user.user?.lastName}`;
  const avatar = user.user?.avatar;

  const handleBackNavigation = () => {
    if (pathSegments.length <= 1) return;
    const parentPath = "/" + pathSegments.slice(0, -1).join("/");
    navigate(parentPath);
  };

  const getPageTitle = () => {
    // Handle specific route cases
    const fullPath = pathSegments.join("/");
    if (fullPath === "order/dispute") {
      return "Dispute Order";
    }

    // Add other specific routes as needed
    return pathSegments[pathSegments.length - 1]
      ?.replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const getPreviousPageTitle = () => {
    if (pathSegments.length <= 1) return "";

    // Handle specific parent routes
    if (pathSegments[pathSegments.length - 2] === "order") {
      return "Pending Orders";
    }

    // Default formatting
    return pathSegments[pathSegments.length - 2]
      ?.replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <HeaderContainer>
      <LeftSection>
        {pathSegments.length > 0 && (
          <BackButton onClick={handleBackNavigation}>
            <ChevronLeft size={20} />
          </BackButton>
        )}
        <BreadcrumbNavigation>
          {getPreviousPageTitle() && (
            <>
              <BreadcrumbText onClick={handleBackNavigation}>
                {getPreviousPageTitle()}
              </BreadcrumbText>
              <BreadcrumbSeparator>›</BreadcrumbSeparator>
            </>
          )}
          <CurrentPageText>{getPageTitle()}</CurrentPageText>
        </BreadcrumbNavigation>
      </LeftSection>

      <MiddleSection>
        <SearchBar />
      </MiddleSection>

      <RightSection>
        <NotificationButton />
        <UserAvatarContainer>
          <UserImage
            src={avatar || "/src/assets/images/default-avatar.png"}
            alt={`Avatar of ${fullName}` || "user avatar"}
          />
          <UserName>{fullName}</UserName>
        </UserAvatarContainer>
      </RightSection>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  position: fixed;
  top: 0;
  left: 224px;
  right: 0;
  width: calc(100% - 224px);
  padding: 0 24px;
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  z-index: 100;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
`;

const BreadcrumbNavigation = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const MiddleSection = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  padding: 0 24px;
  max-width: 600px;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  gap: 20px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin-right: 8px;
  border-radius: 50%;
  color: var(--color-text-secondary, #666);
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--color-hover, #f5f5f5);
  }
`;

const BreadcrumbText = styled.span`
  font-size: 14px;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: var(--color-primary, #4a55a2);
    text-decoration: underline;
  }
`;

const BreadcrumbSeparator = styled.span`
  margin: 0 8px;
  color: var(--color-text-tertiary, #999);
`;

const CurrentPageText = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: var(--color-text);
`;

const UserAvatarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 4px 8px;
  border-radius: 24px;
  transition: background-color 0.2s ease;
`;

const UserImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--color-border, #e0e0e0);
`;

const UserName = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text);
  white-space: nowrap;
`;

export default Header;
