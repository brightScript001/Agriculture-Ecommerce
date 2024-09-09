import React from "react";
import styled from "styled-components";
import Heading from "../ui/Heading";
import TextArea from "../ui/TextArea";
import Button from "../features/seller/dispute/Button";

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { disputeOrder } from "../slices/orderSlice";
import { AppDispatch } from "../store";
import Input from "../ui/Input";
import toast from "react-hot-toast";

const Wrapper = styled.div`
  margin-top: 5rem;
  max-width: 50%;
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

const Block = styled.div``;

const Dispute: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmitDispute = async () => {
    try {
      if (orderId) {
        dispatch(disputeOrder(orderId));
        toast(`Order ${orderId} status changed to disputed`);
        navigate("");
      }
    } catch (error) {
      console.log("Failed to change Order status: ", error);
    }
  };

  return (
    <Wrapper>
      <Heading as="h1">Dispute Order</Heading>
      <Block>
        <Item>
          <Title>Dispute Title</Title>
          <StyledInput type="text" />
        </Item>
        <Item>
          <Title>Dispute Description</Title>
          <TextArea
            name="description"
            placeholder="Enter your description here"
          />
        </Item>

        <Button onSubmitDispute={handleSubmitDispute} />
      </Block>
    </Wrapper>
  );
};

export default Dispute;
