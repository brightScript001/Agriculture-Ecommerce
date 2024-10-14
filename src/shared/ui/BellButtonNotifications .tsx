import { useState } from "react";
import { BellIcon } from "./Icons";
import { Notification } from "./Notification";
import styled from "styled-components";
import ModalComponent from "./Modal";

const BellButtonWithNotifications = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const toggleNotifications = () => {
    setIsNotificationOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsNotificationOpen(false);
  };

  return (
    <div>
      <BellButton onClick={toggleNotifications}>
        <img src={BellIcon} alt="Notifications" />
      </BellButton>

      <ModalComponent isOpen={isNotificationOpen} onClose={handleClose}>
        <Notification />
      </ModalComponent>
    </div>
  );
};

export default BellButtonWithNotifications;

export const BellButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }

  &:hover svg {
    color: var(--color-green-700);
  }
`;
