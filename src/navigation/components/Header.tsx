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
            <ChevronLeft size={20} color="#666" />
          </BackButton>
        )}
        <BreadcrumbText onClick={handleBackNavigation}>
          {getPreviousPageTitle()}
        </BreadcrumbText>
        {pathSegments.length > 0 && (
          <BreadcrumbSeparator>›</BreadcrumbSeparator>
        )}
        <CurrentPageText>{getPageTitle()}</CurrentPageText>
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

// Styled Components
const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  position: fixed;
  top: 0;
  left: 13rem;
  width: calc(100% - 13rem);
  padding: 0 16px;
  background-color: white;
  border-bottom: 1px solid #e0e0e0;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const MiddleSection = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  gap: 16px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin-right: 4px;
  border-radius: 50%;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const BreadcrumbText = styled.span`
  font-size: 14px;
  color: #666;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const BreadcrumbSeparator = styled.span`
  margin: 0 8px;
  color: #999;
`;

const CurrentPageText = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #000;
`;

const UserAvatarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const UserImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
`;

const UserName = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #333;
`;

export default Header;
