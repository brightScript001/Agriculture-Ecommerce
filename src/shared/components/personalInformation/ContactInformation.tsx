import React from "react";
import styled, { keyframes } from "styled-components";
import { InputContainer, InputField, InputLabel } from "./BasicInformation";

interface ContactInformationProps {
  contactInfo: {
    email: string;
    phoneNumber: string;
    state: string;
    city: string;
    address: string;
  };
  onContactInfoChange: (field: string, value: string) => void;
}

export const ContactInformation: React.FC<ContactInformationProps> = ({
  contactInfo,
  onContactInfoChange,
}) => {
  return (
    <ContactInfoContainer>
      <ThreeColumnRow>
        <InputContainer>
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <InputField
            id="email"
            type="email"
            value={contactInfo.email}
            readOnly
            onChange={(e) => onContactInfoChange("email", e.target.value)}
          />
        </InputContainer>

        <InputContainer>
          <InputLabel htmlFor="phoneNumber">Phone Number</InputLabel>
          <InputField
            id="phoneNumber"
            type="tel"
            value={contactInfo.phoneNumber}
            onChange={(e) => onContactInfoChange("phoneNumber", e.target.value)}
          />
        </InputContainer>

        <InputContainer>
          <InputLabel htmlFor="state">State</InputLabel>
          <InputField
            id="state"
            type="text"
            value={contactInfo.state}
            onChange={(e) => onContactInfoChange("state", e.target.value)}
          />
        </InputContainer>
      </ThreeColumnRow>

      <TwoColumnRow>
        <InputContainer>
          <InputLabel htmlFor="city">City</InputLabel>
          <InputField
            id="city"
            type="text"
            value={contactInfo.city}
            onChange={(e) => onContactInfoChange("city", e.target.value)}
          />
        </InputContainer>

        <InputContainer style={{ flexGrow: 1 }}>
          <InputLabel htmlFor="address">Address</InputLabel>
          <FullWidthField
            id="address"
            type="text"
            value={contactInfo.address}
            onChange={(e) => onContactInfoChange("address", e.target.value)}
          />
        </InputContainer>
      </TwoColumnRow>
    </ContactInfoContainer>
  );
};

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

const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  animation: ${fadeIn} 0.3s ease;
`;

const ThreeColumnRow = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: nowrap;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TwoColumnRow = styled.div`
  display: flex;
  gap: 32px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FullWidthField = styled(InputField)`
  width: calc(22rem * 2 + 32px);
  @media (max-width: 768px) {
    width: 100%;
  }
`;
