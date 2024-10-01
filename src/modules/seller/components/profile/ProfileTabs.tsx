import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { PersonalInformation } from "./PersonalInformation";
import { BankVerification } from "./BankVerification";
import { FarmInfoVerification } from "./FarmInfoVerification";

// Styled Components for tabs
const TabContainer = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid var(--color-grey-200);
  margin-bottom: 1rem;
`;

const TabButton = styled.button<{ isActive: boolean }>`
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

export const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState<string>("personalInfo");

  const renderActiveComponent = () => {
    switch (activeTab) {
      case "personalInfo":
        return <PersonalInformation />;
      case "idVerification":
        return <BankVerification />;
      case "farmInfo":
        return <FarmInfoVerification />;
      default:
        return <PersonalInformation />;
    }
  };

  return (
    <div>
      <TabContainer>
        <TabButton
          isActive={activeTab === "personalInfo"}
          onClick={() => setActiveTab("personalInfo")}
        >
          Personal Information
        </TabButton>
        <TabButton
          isActive={activeTab === "idVerification"}
          onClick={() => setActiveTab("idVerification")}
        >
          ID/Bank Verification
        </TabButton>
        <TabButton
          isActive={activeTab === "farmInfo"}
          onClick={() => setActiveTab("farmInfo")}
        >
          Farm Info Verification
        </TabButton>
      </TabContainer>

      {/* Animated Tab Content */}
      <TabContent
        key={activeTab} // Ensure Framer Motion recognizes component changes
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
