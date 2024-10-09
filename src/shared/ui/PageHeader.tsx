import React from "react";
import styled from "styled-components";

interface PageHeaderProps {
  title: string;
  RightComponent?: React.ReactNode;
  noUnderline?: boolean;
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: var(--color-grey-50);
  /* margin-top: 6.25rem; */
`;

const PageTitle = styled.h1<{ noUnderline?: boolean }>`
  font-size: var(--font-size-lg);
  color: var(--color-grey-900);
  text-decoration: ${(props) => (props.noUnderline ? "none" : "underline")};
`;

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  RightComponent,
  noUnderline,
}) => {
  return (
    <HeaderContainer>
      <PageTitle noUnderline={noUnderline}>{title}</PageTitle>
      {RightComponent && RightComponent}
    </HeaderContainer>
  );
};
