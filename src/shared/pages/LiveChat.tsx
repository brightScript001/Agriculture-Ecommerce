import React, { useEffect, useState } from "react";
import ModalComponent from "../ui/Modal";
import { LiveChatModal } from "../components/LiveChatModal";

export const LiveChat: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  // Open modal on mount
  useEffect(() => {
    handleOpen();
  }, []);

  return (
    <>
      <ModalComponent isOpen={isModalOpen} onClose={handleClose}>
        <LiveChatModal />
      </ModalComponent>
    </>
  );
};
