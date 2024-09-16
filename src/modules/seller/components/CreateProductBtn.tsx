import React, { useState, useEffect } from "react";
import ButtonGroup from "../../../shared/ui/ButtonGroup";
import ReusableModal from "./ReusableModal";
import { useNavigate } from "react-router-dom";
import Button from "../../../shared/ui/Button";
interface ActionButtonsProps {
  onClose: () => void;
  handleDelete: () => void;
  newlyCreatedProductName?: string | null;
  onSubmit: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  onClose,
  handleDelete,
  onSubmit,
  newlyCreatedProductName,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"success" | "delete" | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (newlyCreatedProductName) {
      setModalType("success");
      setIsModalOpen(true);
    }
  }, [newlyCreatedProductName]);

  const handleOpenDeleteModal = () => {
    setModalType("delete");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/marketplace");
  };

  return (
    <>
      <ButtonGroup>
        <Button type="button" variation="secondary" onClick={onClose}>
          Close
        </Button>
        <Button
          type="button"
          variation="danger"
          onClick={handleOpenDeleteModal}
        >
          Delete
        </Button>
        <Button type="button" onClick={onSubmit}>
          Create Product
        </Button>
      </ButtonGroup>

      <ReusableModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalType === "success" ? "Success" : "Confirm Delete"}
        message={
          modalType === "success"
            ? `You have successfully added ${newlyCreatedProductName} to the list of your products.`
            : "Are you sure you want to delete this product? This action cannot be undone."
        }
        imageSrc={
          modalType === "success" ? "/src/assets/images/checkImage.png" : ""
        }
        isDeleteModal={modalType === "delete"}
        onDelete={handleDelete}
      />
    </>
  );
};

export default ActionButtons;
