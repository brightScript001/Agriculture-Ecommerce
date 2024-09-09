import Button from "../../../ui/Button";
import ButtonGroup from "../../../ui/ButtonGroup";
import UiButton from "../../../ui/Button";
import ModalComponent from "../../../ui/Modal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState, AppDispatch } from "../../../store";
import { resetProductCreated } from "../../../slices/productSlice";
import styled from "styled-components";
import Heading from "../../../ui/Heading";

interface ActionButtonsProps {
  onClose: () => void;
  handleDelete: () => void;
}

const Img = styled.img`
  display: block;
  margin: 0 auto;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
`;

const ActionButtons: React.FC<ActionButtonsProps> = ({
  onClose,
  handleDelete,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<JSX.Element | null>(null);

  const dispatch = useDispatch<AppDispatch>();
  const {
    isProductCreated,
    newProductName,
    isLoading: isCreating,
  } = useSelector((state: AppState) => state.product);

  useEffect(() => {
    if (isProductCreated) {
      openModal("success");
    }
  }, [isProductCreated]);

  const openModal = (choice: "success" | "delete") => {
    let content: JSX.Element | null = null;

    switch (choice) {
      case "success":
        content = (
          <ModalContent>
            <Img
              src="/Assets/images/checkImage.png"
              alt="success illustration"
            />
            <p>
              You have successfully added {newProductName} to the list of your
              products on One-Farm. Our team will approve your upload within 1
              hour.
            </p>
          </ModalContent>
        );
        break;
      case "delete":
        content = (
          <ModalContent>
            <Heading as="h3">Do you want to remove this Product?</Heading>
            <p>
              Confirming the removal of this Product is irreversible. Once
              removed, it will not show on your marketplace.
            </p>
            <ButtonGroup>
              <UiButton size="small" variation="danger" onClick={handleDelete}>
                Yes, remove
              </UiButton>
              <UiButton size="small" variation="secondary" onClick={closeModal}>
                No, cancel
              </UiButton>
            </ButtonGroup>
          </ModalContent>
        );
        break;
      default:
        return;
    }
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    dispatch(resetProductCreated());
  };

  return (
    <>
      <ButtonGroup>
        <Button variation="secondary" type="button" onClick={onClose}>
          Close
        </Button>
        <Button variation="danger" onClick={() => openModal("delete")}>
          Delete
        </Button>
        <Button variation="primary" disabled={isCreating}>
          Create Product
        </Button>
      </ButtonGroup>
      <ModalComponent isOpen={isModalOpen} onClose={closeModal}>
        {modalContent}
      </ModalComponent>
    </>
  );
};

export default ActionButtons;
