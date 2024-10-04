// BasicInformation.tsx
import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  animation: ${fadeIn} 0.3s ease;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
  }
`;

export const InputField = styled.input`
  width: 22rem;
  padding: 0.75rem;
  font-size: var(--font-size-sm);
  border: none;
  border-radius: var(--border-radius-sm);
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;

  &:focus {
    border-color: var(--color-green-600);
    box-shadow: 0 0 5px rgba(0, 128, 0, 0.3);
    outline: none;
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const InputLabel = styled.label`
  font-size: var(--font-size-sm);
  margin-bottom: 0.5rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

interface BasicInformationProps {
  basicInfo: {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
  };
  onBasicInfoChange: (field: string, value: string) => void;
}

export const BasicInformation: React.FC<BasicInformationProps> = ({
  basicInfo,
  onBasicInfoChange,
}) => {
  return (
    <InfoContainer>
      <InputContainer>
        <InputLabel htmlFor="firstName">First Name</InputLabel>
        <InputField
          id="firstName"
          type="text"
          value={basicInfo.firstName}
          onChange={(e) => onBasicInfoChange("firstName", e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor="lastName">Last Name</InputLabel>
        <InputField
          id="lastName"
          type="text"
          value={basicInfo.lastName}
          onChange={(e) => onBasicInfoChange("lastName", e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor="dob">Date of Birth</InputLabel>
        <InputField
          id="dob"
          type="date"
          value={basicInfo.dateOfBirth}
          onChange={(e) => onBasicInfoChange("dateOfBirth", e.target.value)}
        />
      </InputContainer>
    </InfoContainer>
  );
};
