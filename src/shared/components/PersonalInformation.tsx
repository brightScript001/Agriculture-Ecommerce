import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ProfilePicture } from "./personalInformation/ProfilePicture";
import { BasicInformation } from "./personalInformation/BasicInformation";
import { ContactInformation } from "./personalInformation/ContactInformation";
import Form from "../ui/Form";
import { ActionButtons } from "../../modules/seller/components/profile/ActionButtons";
import { VerificationHeader } from "../../modules/seller/components/profile/VerificationHeader";

const Section = styled.section`
  margin-bottom: 2rem;
  transition: all 0.3s ease;
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
        <VerificationHeader title="Profile Picture" complete={false} />
        <ProfilePicture onImageChange={handleImageChange} />
      </Section>

      <Section>
        <VerificationHeader title="Basic Information" complete={true} />
        <BasicInformation
          basicInfo={basicInfo}
          onBasicInfoChange={handleBasicInfoChange}
        />
      </Section>

      <Section>
        <VerificationHeader title="Contact Information" complete={true} />
        <ContactInformation
          contactInfo={contactInfo}
          onContactInfoChange={handleContactInfoChange}
        />
      </Section>

      <ActionButtons onCancel={handleCancel} onSave={handleSave} />
    </Form>
  );
};
