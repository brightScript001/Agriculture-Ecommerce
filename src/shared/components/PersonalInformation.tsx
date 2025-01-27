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
import SpinnerComponent from "@shared/ui/Spinner";
import { updateUserInfo } from "@modules/core/api/updateUser";
import ErrorFallback from "@shared/ui/ErrorFallback";
import { updateAuthUser } from "@modules/core/states/authSlice";

interface UserProfile {
  avatar: string | null;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phoneNumber: string;
  state: string;
  city: string;
  address: string;
  email: string;
}

export const PersonalInformation: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: AppState) => state.auth.user); // Get user from Redux store

  const [userProfile, setUserProfile] = useState<UserProfile>({
    avatar: user?.avatar ?? null,
    firstName: user?.firstName ?? "",
    lastName: user?.lastName ?? "",
    dateOfBirth: user?.dateOfBirth ?? "",
    phoneNumber: user?.phoneNumber ?? "",
    state: user?.state ?? "",
    city: user?.city ?? "",
    address: user?.address ?? "",
    email: user?.email ?? "",
  });

  useEffect(() => {
    if (user) {
      setUserProfile({
        avatar: user.avatar ?? null,
        firstName: user.firstName ?? "",
        lastName: user.lastName ?? "",
        dateOfBirth: user.dateOfBirth ?? "",
        phoneNumber: user.phoneNumber ?? "",
        state: user.state ?? "",
        city: user.city ?? "",
        address: user.address ?? "",
        email: user?.email ?? "",
      });
    }
  }, [user]);

  const handleProfileChange = (
    field: keyof UserProfile,
    value: string | null
  ) => {
    setUserProfile((prev) => ({ ...prev, [field]: value ?? "" }));
  };

  const { mutate, isPending, isError, reset } = useMutation({
    mutationFn: updateUserInfo,
    onSuccess: (updatedUser: UserProfile) => {
      // Update both user details slice and auth slice with new data
      dispatch(updateUserDetails(updatedUser));
      dispatch(
        updateAuthUser({
          avatar: updatedUser.avatar,
          firstName: updatedUser.firstName,
          lastName: updatedUser.lastName,
          dateOfBirth: updatedUser.dateOfBirth,
          phoneNumber: updatedUser.phoneNumber,
          state: updatedUser.state,
          city: updatedUser.city,
          address: updatedUser.address,
        })
      );
      navigate("/seller/dashboard");
    },
    onError: (error: unknown) => {
      console.error("Failed to update user information:", error);
    },
  });

  const handleSave = () => {
    const { email, ...updateData } = userProfile;
    mutate(updateData); // Trigger API update
  };

  const resetErrorBoundary = () => {
    reset();
    console.log("Error boundary reset");
  };

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Section>
        <VerificationHeader title="Profile Picture" complete={false} />
        <ProfilePicture
          onImageChange={(imageUrl) => handleProfileChange("avatar", imageUrl)}
        />
      </Section>

      <Section>
        <VerificationHeader title="Basic Information" complete={true} />
        <BasicInformation
          basicInfo={userProfile}
          onBasicInfoChange={(field, value) =>
            handleProfileChange(field as keyof UserProfile, value)
          }
        />
      </Section>

      <Section>
        <VerificationHeader title="Contact Information" complete={true} />
        <ContactInformation
          contactInfo={{ ...userProfile, email: user?.email ?? "" }}
          onContactInfoChange={(field, value) =>
            handleProfileChange(field as keyof UserProfile, value)
          }
        />
      </Section>

      <ActionButtons
        onCancel={() => navigate(-1)}
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

const Section = styled.section`
  margin-bottom: 2rem;
  transition: all 0.3s ease;
`;
