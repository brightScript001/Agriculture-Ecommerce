import React from "react";
import styled from "styled-components";

interface PageHeaderProps {
  children: React.ReactNode;
  RightComponent?: React.ReactNode;
  noUnderline?: boolean;
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: var(--color-grey-50);
`;

const PageTitle = styled.h1<{ noUnderline?: boolean }>`
  font-size: var(--font-size-lg);
  color: var(--color-grey-800);
  text-decoration: ${(props) => (props.noUnderline ? "none" : "underline")};
`;

export const PageHeader: React.FC<PageHeaderProps> = ({
  children,
  RightComponent,
  noUnderline,
}) => {
  return (
    <HeaderContainer>
      <PageTitle noUnderline={noUnderline}>{children}</PageTitle>
      {RightComponent && RightComponent}
    </HeaderContainer>
  );
};
