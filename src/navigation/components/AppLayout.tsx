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
import { Header } from "./Header";
import { PageHeader } from "@shared/ui/PageHeader";
import { PageTitle } from "@shared/ui/PageTitle";
import { Sidebar } from "./Sidebar";
import { NotificationButton } from "@shared/ui/NotificationButton";

export function AppLayout() {
  const { role } = useSelector((state: AppState) => state.auth);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <StyledAppLayout>
      {isMobile ? <HamburgerMenu role={role} /> : <Header />}
      {!isMobile && <Sidebar role={role} />}

      {isMobile && (
        <PageHeaderWrapper>
          <PageHeader
            children={<PageTitle />}
            RightComponent={<NotificationButton />}
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
