import styled from "styled-components";
import ModalComponent from "../../../../shared/ui/Modal";
import { useNavigate } from "react-router-dom";
import Button from "../../../../shared/ui/Button";

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.25rem;
`;

const Img = styled.img`
  display: block;
  margin: 0 auto;
`;

interface ApproveProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

export const Approve: React.FC<ApproveProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const navigate = useNavigate();

  const CloseModal = () => {
    setIsModalOpen(false);
    navigate("/seller/marketplace");
  };

  return (
    <ModalComponent isOpen={isModalOpen} onClose={CloseModal}>
      <ModalContent>
        <Img
          src="/src/assets/images/checkImage.png"
          alt="success illustration"
        />
        <p>
          You have successfully approved this order and the product will be
          shipped to the customer immediately.
        </p>
        <Button onClick={CloseModal}>Go back to Marketplace</Button>
      </ModalContent>
    </ModalComponent>
  );
};
