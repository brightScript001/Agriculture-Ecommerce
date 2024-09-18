import React from "react";
import styled from "styled-components";
import Heading from "../../../shared/ui/Heading";
import TextArea from "../../../shared/ui/TextArea";
import Button from "../components/DisputeActions";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../../../shared/ui/Input";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { updateOrderStatus } from "../api/orders"; // Adjust the import path if needed

const Wrapper = styled.div`
  margin-top: 5rem;
  max-width: 50%;
  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 0;
  }
`;
const StyledHeading = styled(Heading)`
  @media (max-width: 768px) {
    display: none;
  }
`;
const Title = styled.p`
  font-size: var(--font-size-md);
`;

const StyledInput = styled(Input)`
  width: 100%;
`;

const Item = styled.div`
  margin: 20px 0;
`;

const StyledTextArea = styled(TextArea)`
  height: 24.9rem;
`;

const Block = styled.div``;

const Dispute: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: () => {
      if (orderId) {
        return updateOrderStatus(orderId, "disputed");
      }
      throw new Error("Order ID is required");
    },
    onSuccess: () => {
      toast.success(`Order ${orderId} status changed to disputed`);
      navigate("/orders/:status");
    },
    onError: (error) => {
      console.error("Failed to change Order status: ", error);
      toast.error("Failed to change order status");
    },
  });

  const handleSubmitDispute = () => {
    console.log("Order ID:", orderId);
    if (orderId) {
      mutation.mutate();
    }
  };

  return (
    <Wrapper>
      <StyledHeading as="h1">Dispute Order</StyledHeading>
      <Block>
        <Item>
          <Title>Dispute Title</Title>
          <StyledInput type="text" />
        </Item>
        <Item>
          <Title>Dispute Description</Title>
          <StyledTextArea
            name="description"
            placeholder="Describe your dispute"
          />
        </Item>

        <Button onSubmitDispute={handleSubmitDispute} />
      </Block>
    </Wrapper>
  );
};

export default Dispute;
