import React from "react";
import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useOutsideClick } from "../hooks/useOutsideClick";

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
  width: {
    xs: "90%",
  },
  maxWidth: "90%",
  bgcolor: "var(--color-background)",
  border: "1px solid var(--color-border)",
  borderRadius: "var(--border-radius-md)",
  padding: "2rem",
  maxHeight: "80vh",
  overflowY: "auto",
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
      <div ref={ref}>
        <Box sx={modalStyle}>
          <IconButton
            sx={{ position: "absolute", top: 8, right: 8 }}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
          {children}
        </Box>
      </div>
    </Modal>
  );
};

export default ModalComponent;
