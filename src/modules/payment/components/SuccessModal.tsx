import React from "react";
import styled from "styled-components";
import ModalComponent from "../../../shared/ui/Modal";
import ButtonGroup from "../../../shared/ui/ButtonGroup";
import Button from "../../../shared/ui/Button";

const SuccessMessage = styled.p`
  font-size: var(--font-size-sm);
  text-align: center;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
`;

export const SuccessModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  id: string;
}> = ({ isOpen, onClose, id }) => {
  return (
    <ModalComponent isOpen={isOpen} onClose={onClose}>
      <Image src="/src/assets/images/check.png" alt="Success" />

      <SuccessMessage>
        You have successfully placed your order. Your order ID is{" "}
        <span style={{ color: "var(--color-green-600)" }}>{id}</span>. You can
        track your order or message Onefarm.
      </SuccessMessage>

      {/* Button group for actions */}
      <ButtonGroup style={{ flexDirection: "column" }}>
        <Button style={{ width: "100%" }} variation="secondary">
          Track Order
        </Button>
        <Button style={{ width: "100%" }}>Message Onefarm</Button>
      </ButtonGroup>
    </ModalComponent>
  );
};
