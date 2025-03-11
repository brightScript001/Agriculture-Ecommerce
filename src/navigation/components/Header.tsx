import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ChevronLeft } from "lucide-react";
import { useSelector } from "react-redux";
import { AppState } from "store";

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
        <SearchContainer>
          <SearchIcon>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                stroke="#666"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </SearchIcon>
          <SearchInput placeholder="Search" />
        </SearchContainer>
      </MiddleSection>

      <RightSection>
        <NotificationButton>
          <svg
            width="20"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.64 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16ZM16 17H8V11C8 8.52 9.51 6.5 12 6.5C14.49 6.5 16 8.52 16 11V17Z"
              fill="black"
            />
          </svg>
        </NotificationButton>
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

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
`;

const SearchIcon = styled.span`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #e0e0e0;
  background-color: #f5f5f5;
  padding: 0 16px 0 40px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #ccc;
  }

  &::placeholder {
    color: #999;
  }
`;

const NotificationButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 8px;

  &:hover {
    background-color: #f5f5f5;
    border-radius: 50%;
  }
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
