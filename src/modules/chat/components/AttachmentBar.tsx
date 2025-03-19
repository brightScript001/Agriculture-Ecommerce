import React from "react";
import { Image, FileText } from "lucide-react";
import { AttachmentOption, AttachmentOptions } from "../styles/chatStyles";

interface AttachmentBarProps {
  onPhotoUpload: () => void;
  onDocumentUpload: () => void;
}

export const AttachmentBar: React.FC<AttachmentBarProps> = ({
  onPhotoUpload,
  onDocumentUpload,
}) => {
  return (
    <AttachmentOptions>
      <AttachmentOption onClick={onPhotoUpload}>
        <Image size={20} />
        Photos & Videos
      </AttachmentOption>
      <AttachmentOption onClick={onDocumentUpload}>
        <FileText size={20} />
        Documents
      </AttachmentOption>
    </AttachmentOptions>
  );
};
