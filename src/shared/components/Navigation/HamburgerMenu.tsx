import { useState, useEffect } from "react";
import HeaderWrapper from "../../../modules/seller/ui/HeaderWrapper";
import Logo from "../../ui/Logo";
import MenuButton from "./MenuButton";
import { MenuContentComponent } from "../../../modules/seller/ui/MenuContent";

export const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeaderVisibility = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeaderVisibility);
    return () => {
      window.removeEventListener("scroll", controlHeaderVisibility);
    };
  }, [lastScrollY]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <HeaderWrapper isVisible={isVisible}>
        <Logo />
        <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
      </HeaderWrapper>
      <MenuContentComponent isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
};
