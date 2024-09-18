import React from "react";
import styled from "styled-components";
import ModalComponent from "../../../../shared/ui/Modal";
import Button from "../../../../shared/ui/Button";
import { Title } from "../../../../shared/ui/Title";

interface ReusableModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  imageSrc?: string;
  isDeleteModal?: boolean;
  onDelete?: () => void;
}

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.25rem;
`;

const Message = styled.p`
  font-size: var(--font-size-sm);
  margin-top: 2rem;
`;

const ModalImage = styled.img`
  display: block;
  margin: 0 auto;
`;

const ButtonGroup = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 0.6rem;
  justify-content: center;
`;

const ReusableModal: React.FC<ReusableModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
  imageSrc,
  isDeleteModal = false,
  onDelete,
}) => {
  return (
    <ModalComponent isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {imageSrc && <ModalImage src={imageSrc} alt="Modal illustration" />}
        {title && <Title>{title}</Title>}
        {message && <Message>{message}</Message>}

        <ButtonGroup>
          {isDeleteModal && (
            <>
              <Button onClick={onDelete}>Yes, remove</Button>
              <Button variation="secondary" onClick={onClose}>
                No, cancel
              </Button>
            </>
          )}
        </ButtonGroup>
      </ModalContent>
    </ModalComponent>
  );
};

export default ReusableModal;
