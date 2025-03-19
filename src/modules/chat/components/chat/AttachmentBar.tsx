import React from "react";
import { useRef } from "react";
import styled from "styled-components";
import { Image, FileText } from "lucide-react";

interface AttachmentBarProps {
  onFileUpload: (file: File) => void;
}

export const AttachmentBar: React.FC<AttachmentBarProps> = ({
  onFileUpload,
}) => {
  const photoInputRef = useRef<HTMLInputElement>(null);
  const documentInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoClick = () => {
    photoInputRef.current?.click();
  };

  const handleDocumentClick = () => {
    documentInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      onFileUpload(files[0]);
      // Reset the input
      e.target.value = "";
    }
  };

  return (
    <AttachmentBarContainer>
      <AttachmentButton onClick={handlePhotoClick}>
        <Image />
        Photos & Videos
      </AttachmentButton>

      <AttachmentButton onClick={handleDocumentClick}>
        <FileText />
        Documents
      </AttachmentButton>

      <HiddenInput
        ref={photoInputRef}
        type="file"
        accept="image/*,video/*"
        onChange={handleFileChange}
      />

      <HiddenInput
        ref={documentInputRef}
        type="file"
        accept=".pdf,.doc,.docx,.txt"
        onChange={handleFileChange}
      />
    </AttachmentBarContainer>
  );
};

const AttachmentBarContainer = styled.div`
  display: flex;
  padding: var(--spacing-md);
  border-top: 1px solid var(--color-border);
  background-color: var(--color-background);
`;

const AttachmentButton = styled.button`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  background: none;
  border: none;
  color: var(--color-primary);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-md);
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--color-divider);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const HiddenInput = styled.input`
  display: none;
`;
