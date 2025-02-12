import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { HamburgerMenu } from "../../../shared/components/Navigation/HamburgerMenu";
import { PageHeader } from "../../../shared/ui/PageHeader";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { PageTitle } from "../../../shared/ui/PageTitle";
import { Navbar } from "../../../shared/components/Navigation/Header";
import BellButtonWithNotifications from "../../../shared/ui/BellButtonNotifications ";

export const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 13rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem;
  overflow: scroll;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  margin-top: 5rem;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export const PageHeaderWrapper = styled.div`
  margin-top: 6.25rem;
`;

export function SellerAppLayout() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <StyledAppLayout>
      {isMobile ? <HamburgerMenu /> : <Navbar />}
      {!isMobile && <Sidebar />}
      {isMobile && (
        <PageHeaderWrapper>
          <PageHeader
            children={PageTitle()}
            RightComponent={<BellButtonWithNotifications />}
          />
        </PageHeaderWrapper>
      )}
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}
