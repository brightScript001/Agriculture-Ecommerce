import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";

import { AppState } from "store";
import {
  Container,
  Main,
  PageHeaderWrapper,
  StyledAppLayout,
} from "./LayoutStyles";
import { HamburgerMenu } from "./HamburgerMenu";
import { Navbar } from "./Navbar";
import { PageHeader } from "@shared/ui/PageHeader";
import { PageTitle } from "@shared/ui/PageTitle";
import BellButtonWithNotifications from "@shared/ui/BellButtonNotifications ";
import { Sidebar } from "./Sidebar";

export function AppLayout() {
  const { role } = useSelector((state: AppState) => state.auth);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <StyledAppLayout>
      {isMobile ? <HamburgerMenu role={role} /> : <Navbar />}
      {!isMobile && <Sidebar role={role} />}

      {isMobile && (
        <PageHeaderWrapper>
          <PageHeader
            children={<PageTitle />}
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
