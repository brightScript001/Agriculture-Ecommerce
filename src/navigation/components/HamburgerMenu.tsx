import HeaderWrapper from "@modules/seller/ui/HeaderWrapper";
import Logo from "@shared/ui/Logo";
import { useNavigationLinks } from "../hooks/useNavigationLinks";
import { useState, useEffect } from "react";
import { MenuButtonComponent } from "./MenuButton";
import { MenuContent } from "./MenuContent";

export const HamburgerMenu = ({ role }: { role: string | null }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const links = useNavigationLinks(role);

  const controlHeaderVisibility = () => {
    if (window.scrollY > lastScrollY) setIsVisible(false);
    else setIsVisible(true);
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeaderVisibility);
    return () => window.removeEventListener("scroll", controlHeaderVisibility);
  }, [lastScrollY]);

  return (
    <>
      <HeaderWrapper isVisible={isVisible}>
        <Logo />
        <MenuButtonComponent
          isOpen={isOpen}
          toggleMenu={() => setIsOpen(!isOpen)}
        />
      </HeaderWrapper>
      <MenuContent
        isOpen={isOpen}
        toggleMenu={() => setIsOpen(!isOpen)}
        links={links}
      />
    </>
  );
};
