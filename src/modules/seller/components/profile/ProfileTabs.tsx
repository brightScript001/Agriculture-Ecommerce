import React from "react";
import { PersonalInformation } from "../../../../shared/components/PersonalInformation";
import { BankVerification } from "./BankVerification";
import { FarmInfoVerification } from "./FarmInfoVerification";
import { Tabs } from "../../../../shared/ui/Tabs";

export const ProfileTabs: React.FC = () => {
  const tabItems = [
    {
      label: "Personal Information",
      value: "personalInfo",
      component: <PersonalInformation />,
    },
    {
      label: "ID/Bank Verification",
      value: "idVerification",
      component: <BankVerification />,
    },
    {
      label: "Farm Info Verification",
      value: "farmInfo",
      component: <FarmInfoVerification />,
    },
  ];
  return <Tabs tabs={tabItems} />;
};
