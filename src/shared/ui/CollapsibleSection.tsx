import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const SectionContainer = styled.div`
  margin-bottom: 1.5rem;
  box-shadow: var(--shadow-sm);
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  font-size: var(--font-size-md);
  font-weight: bold;
  /* background-color: var(--color-grey-0); */
`;

const SectionContent = styled.div<{ isOpen: boolean }>`
  font-size: var(--font-size-sm);
  padding: ${(props) => (props.isOpen ? "1rem" : "0")};
  height: ${(props) => (props.isOpen ? "auto" : "0")};
  overflow: hidden;
  transition: height 0.3s ease, padding 0.3s ease;
`;

const IconWrapper = styled.div`
  margin-left: 1rem;
  font-size: 1.5rem;
`;

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <SectionContainer>
      <SectionHeader onClick={toggleOpen}>
        {title}
        <IconWrapper>
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </IconWrapper>
      </SectionHeader>
      <SectionContent isOpen={isOpen}>{children}</SectionContent>
    </SectionContainer>
  );
};
