import { Outlet } from "react-router-dom";
import Sidebar from "../components/Navigation/Sidebar";
import Header from "../../modules/seller/ui/Header";
import HamburgerMenu from "../components/Navigation/HamburgerMenu";
import PageHeader from "../../modules/seller/ui/PageHeader";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { PageTitle } from "../../modules/seller/ui/PageTitle";
import { BellIcon } from "./Icons";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 13rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem;
  overflow: scroll;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Container = styled.div`
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

const BellButton = styled.button`
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

const PageHeaderWrapper = styled.div`
  margin-top: 6.25rem;
`;

export function AppLayout() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <StyledAppLayout>
      {isMobile ? <HamburgerMenu /> : <Header />}
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
