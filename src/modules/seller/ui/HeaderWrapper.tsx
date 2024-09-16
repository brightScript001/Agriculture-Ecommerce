import styled from "styled-components";

interface HeaderWrapperProps {
  isVisible: boolean;
}

const HeaderWrapper = styled.header<HeaderWrapperProps>`
  position: fixed;
  top: ${({ isVisible }) => (isVisible ? "0" : "-80px")};
  left: 0;
  right: 0;
  height: 6.25rem;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  transition: top 0.3s ease-in-out;
  z-index: 1000;
`;

export default HeaderWrapper;
