import { StyledMenuContent } from "../../seller/ui/MenuContent";
import MenuNav from "./MenuNav";

interface MenuContentProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const MenuContentComponent: React.FC<MenuContentProps> = ({
  isOpen,
  toggleMenu,
}) => {
  return (
    <StyledMenuContent isOpen={isOpen}>
      <MenuNav toggleMenu={toggleMenu} />
    </StyledMenuContent>
  );
};
