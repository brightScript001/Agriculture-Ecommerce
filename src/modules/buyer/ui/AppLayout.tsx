import { useMediaQuery } from "react-responsive";
import {
  BellButton,
  Container,
  Main,
  PageHeaderWrapper,
  StyledAppLayout,
} from "../../seller/ui/AppLayout";
import { PageHeader } from "../../../shared/ui/PageHeader";
import { PageTitle } from "../../../shared/ui/PageTitle";
import { BellIcon } from "../../../shared/ui/Icons";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import HamburgerMenu from "./HamburgerMenu";
import { Navbar } from "../../../shared/components/Navigation/Header";

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
