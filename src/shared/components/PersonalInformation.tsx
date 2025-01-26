import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { ProfilePicture } from "./personalInformation/ProfilePicture";
import { BasicInformation } from "./personalInformation/BasicInformation";
import { ContactInformation } from "./personalInformation/ContactInformation";
import Form from "../ui/Form";
import { ActionButtons } from "../../modules/seller/components/profile/ActionButtons";
import { VerificationHeader } from "../../modules/seller/components/profile/VerificationHeader";
import { AppState } from "../../store";
import { updateUserDetails } from "../../modules/core/states/userSlice";
import { setRole } from "../../modules/core/states/authSlice";
import SpinnerComponent from "@shared/ui/Spinner";
import { updateUserInfo } from "@modules/core/api/updateUser";
import ErrorFallback from "@shared/ui/ErrorFallback";

const Section = styled.section`
  margin-bottom: 2rem;
  transition: all 0.3s ease;
`;

export const PersonalInformation: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: AppState) => state.auth.user);

  const [profileImage, setProfileImage] = useState<string | null>(
    user?.avatar ?? null
  );
  const [basicInfo, setBasicInfo] = useState({
    firstName: user?.firstName ?? "",
    lastName: user?.lastName ?? "",
    dateOfBirth: user?.dateOfBirth ?? "",
  });

  const [contactInfo, setContactInfo] = useState({
    email: user?.email ?? "",
    phone: user?.phoneNumber ?? "",
    state: user?.state ?? "",
    city: user?.city ?? "",
    address: user?.address ?? "",
  });

  useEffect(() => {
    if (user) {
      setProfileImage(user.avatar || null);
      setBasicInfo({
        firstName: user.firstName,
        lastName: user.lastName,
        dateOfBirth: user.dateOfBirth || "",
      });
      setContactInfo({
        email: user.email || "",
        phone: user.phoneNumber || "",
        state: user.state || "",
        city: user.city || "",
        address: user.address || "",
      });
    }
  }, [user]);

  const handleImageChange = (imageUrl: string | null) => {
    setProfileImage(imageUrl);
  };

  const handleBasicInfoChange = (field: string, value: string) => {
    setBasicInfo((prev) => ({
      ...prev,
      [field]: value || "",
    }));
  };

  const handleContactInfoChange = (field: string, value: string) => {
    setContactInfo((prev) => ({
      ...prev,
      [field]: value || "",
    }));
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const { mutate, isPending, isError, reset } = useMutation({
    mutationFn: updateUserInfo,
    onSuccess: () => {
      console.log("User information updated successfully!");
    },
    onError: (error: unknown) => {
      console.error("Failed to update user information:", error);
    },
  });

  const handleSave = () => {
    const updatedUser = {
      ...user,
      avatar: profileImage,
      firstName: basicInfo.firstName,
      lastName: basicInfo.lastName,
      dateOfBirth: basicInfo.dateOfBirth,
      phoneNumber: contactInfo.phone,
      state: contactInfo.state,
      city: contactInfo.city,
      address: contactInfo.address,
    };

    mutate(updatedUser, {
      onSuccess: () => {
        //TODO
        dispatch(updateUserDetails(updatedUser));
        dispatch(
          setRole({
            role: user?.role || "",
            user: updatedUser,
            token: user?.token || "",
          })
        );
        navigate("/seller/dashboard");
      },
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleSave();
  };

  const resetErrorBoundary = () => {
    reset();
    console.log("Error boundary reset");
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

      <ActionButtons
        onCancel={handleCancel}
        onSave={handleSave}
        isLoading={isPending}
      />
      {isPending && <SpinnerComponent />}
      {isError && (
        <ErrorFallback
          error={
            new Error("Error saving profile information. Please try again")
          }
          resetErrorBoundary={resetErrorBoundary}
        />
      )}
    </Form>
  );
};
