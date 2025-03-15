import React from "react";
import styled from "styled-components";

const TabsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const Tab = styled.button<{ active: boolean }>`
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: 5px;
  background-color: ${({ active }) =>
    active ? "var(--color-primary)" : "var(--color-background)"};
  color: ${({ active }) =>
    active ? "var(--color-text)" : "var(--color-text-light)"};
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
