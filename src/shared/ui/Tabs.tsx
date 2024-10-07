import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const TabContainer = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid var(--color-grey-200);
  margin-bottom: 1rem;
`;

const TabButton = styled.div<{ isActive: boolean }>`
  background: none;
  border: none;
  padding: 1rem;
  font-size: 1rem;
  cursor: pointer;
  border-bottom: 2px solid
    ${({ isActive }) => (isActive ? "var(--color-green-600)" : "none")};
  color: ${({ isActive }) => (isActive ? "var(--color-green-600)" : "inherit")};
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  transition: border-bottom 0.3s ease, color 0.3s ease;

  &:hover {
    color: var(--color-green-600);
  }
`;

const TabContent = styled(motion.div)`
  padding: 1rem;
`;

const tabVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface TabItem {
  label: string;
  value: string;
  component: React.ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
}

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].value);

  const renderActiveComponent = () => {
    const activeTabItem = tabs.find((tab) => tab.value === activeTab);
    return activeTabItem ? activeTabItem.component : null;
  };

  return (
    <div>
      <TabContainer>
        {tabs.map((tab) => (
          <TabButton
            key={tab.value}
            isActive={activeTab === tab.value}
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.label}
          </TabButton>
        ))}
      </TabContainer>

      <TabContent
        key={activeTab}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={tabVariants}
      >
        {renderActiveComponent()}
      </TabContent>
    </div>
  );
};
