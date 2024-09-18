import React, { useState, useEffect } from "react";
import HeaderWrapper from "./HeaderWrapper";
import Logo from "../../../shared/ui/Logo";
import MenuButton from "./MenuButton";
import MenuContent from "./MenuContent";

const HamburgerMenu: React.FC = () => {
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
      <MenuContent isOpen={isOpen} />
    </>
  );
};

export default HamburgerMenu;
