import React from "react";
import styled from "styled-components";

const TabsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const Tab = styled.button<{ active: boolean }>`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  background-color: ${({ active }) =>
    active ? "var(--color-green-600)" : "var(--color-grey-100)"};
  color: ${({ active }) =>
    active ? "var(--color-grey-0)" : "var(--color-grey-600)"};
  cursor: pointer;
`;

interface VerificationTabsProps {
  options: string[];
  activeTab: string;
  onTabSelect: (tab: string) => void;
}

export const VerificationTabs: React.FC<VerificationTabsProps> = ({
  options,
  activeTab,
  onTabSelect,
}) => {
  return (
    <TabsContainer>
      {options.map((option) => (
        <Tab
          key={option}
          active={activeTab === option}
          onClick={() => onTabSelect(option)}
        >
          {option}
        </Tab>
      ))}
    </TabsContainer>
  );
};
