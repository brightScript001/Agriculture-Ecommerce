import React, { useState } from "react";
import styled from "styled-components";
import { FaCamera } from "react-icons/fa";

const ImageContainer = styled.div`
  position: relative;
  width: 14rem;
  height: 14rem;
  border-radius: 50%;
  /* margin: 0 auto; */
`;

const ImageWrapper = styled.div<{ hasImage: boolean }>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: all 0.3s ease;
  background-color: ${(props) =>
    props.hasImage ? "transparent" : "var(--color-background)"};
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-md, 0 4px 6px rgba(0, 0, 0, 0.1));
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const NoImageText = styled.span`
  font-size: 1rem;
  color: var(--color-text);
  text-align: center;
`;

const CameraIconContainer = styled.label`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  background-color: var(--color-primary);
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.3s ease;
  border: 1px solid var(--color-border);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: var(--color-primary);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const HiddenFileInput = styled.input`
  display: none;
`;

interface ProfilePictureProps {
  onImageChange: (imageUrl: string | null) => void;
  defaultImage?: string | null;
}

export const ProfilePicture: React.FC<ProfilePictureProps> = ({
  onImageChange,
  defaultImage = null,
}) => {
  const [profileImage, setProfileImage] = useState<string | null>(defaultImage);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      onImageChange(imageUrl);
    }
  };

  return (
    <ImageContainer>
      <ImageWrapper hasImage={!!profileImage}>
        {profileImage ? (
          <ProfileImage src={profileImage} alt="Profile" />
        ) : (
          <NoImageText>No Image Selected</NoImageText>
        )}
      </ImageWrapper>

      <CameraIconContainer htmlFor="profileImageInput">
        <FaCamera color="var(--color-grey-0, #ffffff)" size={16} />
        <HiddenFileInput
          id="profileImageInput"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </CameraIconContainer>
    </ImageContainer>
  );
};

export default ProfilePicture;
