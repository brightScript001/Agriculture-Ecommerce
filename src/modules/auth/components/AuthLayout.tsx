import React from "react";
import styled from "styled-components";

interface AuthLayoutProps {
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
}
export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  imageSrc,
  imageAlt,
}) => {
  return (
    <Layout>
      <ImageContainer>
        <StyledImage src={imageSrc} alt={imageAlt} />
      </ImageContainer>
      <ContentContainer>{children}</ContentContainer>
    </Layout>
  );
};

const Layout = styled.div`
  background-color: var(--color-grey-100);
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-grey-200);

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;
