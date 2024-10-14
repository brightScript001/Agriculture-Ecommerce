import React, { useState } from "react";
import styled from "styled-components";
import { FaCamera } from "react-icons/fa";

const ImageInputContainer = styled.div`
  position: relative;
  width: 14rem;
  height: 14rem;
  border-radius: 10px;
  overflow: hidden;
  transition: border-color 0.3s ease;
  &:hover {
    border-color: var(--color-green-600);
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const CameraIconContainer = styled.label`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  background-color: var(--color-green-600);
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-green-500);
  }
`;

const HiddenFileInput = styled.input`
  display: none;
`;

interface ProfilePictureProps {
  onImageChange: (imageUrl: string | null) => void;
}

export const ProfilePicture: React.FC<ProfilePictureProps> = ({
  onImageChange,
}) => {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      onImageChange(imageUrl);
    }
  };

  return (
    <ImageInputContainer>
      {profileImage ? (
        <ProfileImage src={profileImage} alt="Profile" />
      ) : (
        <span>No Image Selected</span>
      )}
      <CameraIconContainer htmlFor="profileImageInput">
        <FaCamera color="var(--color-grey-0)" />
        <HiddenFileInput
          id="profileImageInput"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </CameraIconContainer>
    </ImageInputContainer>
  );
};
