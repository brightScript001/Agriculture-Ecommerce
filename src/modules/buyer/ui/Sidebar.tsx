import Logo from "../../../shared/ui/Logo";
import { StyledSidebar } from "../../seller/ui/Sidebar";
import MainNav from "./MainNav";

export function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}
