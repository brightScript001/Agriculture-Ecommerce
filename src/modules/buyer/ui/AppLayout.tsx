import { useMediaQuery } from "react-responsive";
import {
  Container,
  Main,
  PageHeaderWrapper,
  StyledAppLayout,
} from "../../seller/ui/AppLayout";
import { PageHeader } from "../../../shared/ui/PageHeader";
import { PageTitle } from "../../../shared/ui/PageTitle";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import HamburgerMenu from "./HamburgerMenu";
import { Navbar } from "../../../shared/components/Navigation/Header";
import BellButtonWithNotifications from "../../../shared/ui/BellButtonNotifications ";

export function BuyerAppLayout() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <StyledAppLayout>
      {isMobile ? <HamburgerMenu /> : <Navbar />}
      {!isMobile && <Sidebar />}
      {isMobile && (
        <PageHeaderWrapper>
          <PageHeader
            title={PageTitle()}
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
