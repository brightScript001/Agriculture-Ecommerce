import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ProfilePicture } from "./personalInformation/ProfilePicture";
import { BasicInformation } from "./personalInformation/BasicInformation";
import { ContactInformation } from "./personalInformation/ContactInformation";
import Heading from "../../../../shared/ui/Heading";
import Form from "../../../../shared/ui/Form";
import ButtonGroup from "../../../../shared/ui/ButtonGroup";
import Button from "../../../../shared/ui/Button";

const Section = styled.section`
  margin-bottom: 2rem;
  transition: all 0.3s ease;
`;

const StatusSpan = styled.span<{ isComplete: boolean }>`
  background-color: ${({ isComplete }) =>
    isComplete ? "var(--color-green-100)" : "var(--color-grey-200)"};
  color: ${({ isComplete }) =>
    isComplete ? "var(--color-green-600)" : "inherit"};
  border-radius: 10px;
  padding: 0.5rem;
  font-size: 0.875rem;
  margin-left: 1rem;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
const StyledButtonGroup = styled(ButtonGroup)`
  justify-content: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const FullWidthButton = styled(Button)`
  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0;
  }
`;

export const PersonalInformation: React.FC = () => {
  const navigate = useNavigate();

  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [basicInfo, setBasicInfo] = useState({
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "1990-01-01",
  });

  const [contactInfo, setContactInfo] = useState({
    email: "john.doe@example.com",
    phone: "123-456-7890",
    state: "California",
    city: "Los Angeles",
    address: "123 Main St",
  });

  const isProfilePictureComplete = profileImage !== null;
  const isBasicInfoComplete =
    basicInfo.firstName !== "" &&
    basicInfo.lastName !== "" &&
    basicInfo.dateOfBirth !== "";

  const isContactInfoComplete =
    contactInfo.email !== "" &&
    contactInfo.phone !== "" &&
    contactInfo.state !== "" &&
    contactInfo.city !== "" &&
    contactInfo.address !== "";

  const handleImageChange = (imageUrl: string | null) => {
    setProfileImage(imageUrl);
  };

  const handleBasicInfoChange = (field: string, value: string) => {
    setBasicInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleContactInfoChange = (field: string, value: string) => {
    setContactInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleSave = () => {
    console.log("Profile info saved:", {
      profileImage,
      basicInfo,
      contactInfo,
    });
    //TODO Perform additional save actions or navigation
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleSave();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Section>
        <div style={{ display: "flex" }}>
          <Heading>Profile Picture</Heading>
          <StatusSpan isComplete={isProfilePictureComplete}>
            {isProfilePictureComplete ? "Complete" : "Not Complete"}
          </StatusSpan>
        </div>
        <ProfilePicture onImageChange={handleImageChange} />
      </Section>

      <Section>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Heading>Basic Information</Heading>
          <StatusSpan isComplete={isBasicInfoComplete}>
            {isBasicInfoComplete ? "Complete" : "Not Complete"}
          </StatusSpan>
        </div>
        <BasicInformation
          basicInfo={basicInfo}
          onBasicInfoChange={handleBasicInfoChange}
        />
      </Section>

      <Section>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Heading>Contact Information</Heading>
          <StatusSpan isComplete={isContactInfoComplete}>
            {isContactInfoComplete ? "Complete" : "Not Complete"}
          </StatusSpan>
        </div>
        <ContactInformation
          contactInfo={contactInfo}
          onContactInfoChange={handleContactInfoChange}
        />
      </Section>

      <StyledButtonGroup>
        <FullWidthButton
          variation="secondary"
          type="button"
          onClick={handleCancel}
        >
          Cancel
        </FullWidthButton>
        <FullWidthButton type="submit">Save Profile Info</FullWidthButton>
      </StyledButtonGroup>
    </Form>
  );
};
