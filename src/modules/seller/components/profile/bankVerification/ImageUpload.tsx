import React, { useRef } from "react";
import styled from "styled-components";

const ImageUploadContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UploadBox = styled.div`
  width: 8rem;
  height: 5rem;
  border: 1px dashed var(--color-border);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const UploadLabel = styled.span`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: var(--color-grey-600);
`;

interface ImageUploadProps {
  frontImage: string | null;
  backImage: string | null;
  onImageUpload: (side: "front" | "back", file: File) => void;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  frontImage,
  backImage,
  onImageUpload,
}) => {
  const frontInputRef = useRef<HTMLInputElement | null>(null);
  const backInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (
    side: "front" | "back",
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) onImageUpload(side, file);
  };

  const triggerFileInput = (side: "front" | "back") => {
    if (side === "front" && frontInputRef.current) {
      frontInputRef.current.click();
    } else if (side === "back" && backInputRef.current) {
      backInputRef.current.click();
    }
  };

  return (
    <ImageUploadContainer>
      <UploadWrapper>
        <UploadBox onClick={() => triggerFileInput("front")}>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange("front", e)}
            style={{ display: "none" }}
            ref={frontInputRef} // Ref for front input
          />
          {frontImage ? (
            <img
              src={frontImage}
              alt="Front ID"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <span>Upload</span>
          )}
        </UploadBox>
        <UploadLabel>Front image of your ID</UploadLabel>
      </UploadWrapper>

      <UploadWrapper>
        <UploadBox onClick={() => triggerFileInput("back")}>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange("back", e)}
            style={{ display: "none" }}
            ref={backInputRef} // Ref for back input
          />
          {backImage ? (
            <img
              src={backImage}
              alt="Back ID"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <span>Upload</span>
          )}
        </UploadBox>
        <UploadLabel>Back image of your ID</UploadLabel>
      </UploadWrapper>
    </ImageUploadContainer>
  );
};
