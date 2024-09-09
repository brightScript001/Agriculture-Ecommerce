import React from "react";
import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useOutsideClick } from "../hooks/useOutsideClick"; // Adjust the path as necessary

interface ModalComponentProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid var(--color-grey-200)",
  borderRadius: "var(--border-radius-md)",
  p: 4,
};

const ModalComponent: React.FC<ModalComponentProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  const ref = useOutsideClick(onClose);

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={modalStyle} ref={ref}>
        <IconButton
          sx={{ position: "absolute", top: 8, right: 8 }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
        {children}
      </Box>
    </Modal>
  );
};

export default ModalComponent;
