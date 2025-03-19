import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ModalComponent from "../ui/Modal";
import { LiveChatModal } from "../components/LiveChatModal";
import { toggleChatWidget } from "@modules/core/states/chatSlice";
import { ChatWidget } from "@modules/chat/components/chat/ChatWidget";

export const LiveChat: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => setIsModalOpen(true);

  const handleClose = () => {
    setIsModalOpen(false);
    // When modal closes, show the chat widget
    dispatch(toggleChatWidget(true));
  };

  // Open modal on mount
  useEffect(() => {
    handleOpen();
  }, []);

  return (
    <>
      <ModalComponent isOpen={isModalOpen} onClose={handleClose}>
        <LiveChatModal />
      </ModalComponent>

      {/* ChatWidget will get the user from Redux */}
      <ChatWidget />
    </>
  );
};
