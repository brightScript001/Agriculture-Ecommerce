import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RiskEmergencyRecordFormComponent from "../components/inventory/riskEmergencyRecord/RiskEmergencyRecordFormComponent";
import { RiskEmergencyRecord } from "../components/inventory/RecordTypes";
import styled from "styled-components";
import Heading from "../../../shared/ui/Heading";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2.7rem;
`;

const RiskEmergencyRecordFormPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { record, listName } = location.state || { record: null, listName: "" };

  console.log("Location state:", location.state);

  const handleSubmit = (data: RiskEmergencyRecord) => {
    //TODO Here you would make an API call to submit the data
    console.log("Submitting form data:", data);

    //TODO After successful submission, navigate back to the list page
    navigate("/seller/risk-emergency-records");
  };

  return (
    <Wrapper>
      <Heading as="h2">
        {record ? `View ${listName} Record` : `Add an update on  ${listName}`}
      </Heading>
      <RiskEmergencyRecordFormComponent
        selectedRow={record || ({} as RiskEmergencyRecord)}
        onSubmit={handleSubmit}
      />
    </Wrapper>
  );
};

export default RiskEmergencyRecordFormPage;
