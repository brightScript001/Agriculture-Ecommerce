import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import HamburgerMenu from "../../../shared/components/Navigation/HamburgerMenu";
import PageHeader from "./PageHeader";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { PageTitle } from "./PageTitle";
import { BellIcon } from "../../../shared/ui/Icons";
import { Navbar } from "./Header";

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

export const BellButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }

  &:hover svg {
    color: var(--color-green-700);
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
            title={PageTitle()}
            RightComponent={
              <BellButton>
                <img src={BellIcon} alt="Notifications" />
              </BellButton>
            }
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
