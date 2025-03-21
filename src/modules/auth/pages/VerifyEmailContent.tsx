import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState, AppDispatch } from "../../../store";
import styled from "styled-components";
import { requestVerification } from "@core/states/emailVerificationSlice";
import { Title, Subtitle } from "@shared/ui/Title";
import Button from "@shared/ui/Button";
import FormContainer from "@shared/ui/FormContainer";
import { AuthLayout } from "../components/AuthLayout";

export const VerifyEmailContent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((store: AppState) => store.user.firstName);
  const error = useSelector((store: AppState) => store.emailVerification.error);

  const handleRequestVerification = () => {
    dispatch(requestVerification());
  };
  if (error) {
    console.log(error);
  }

  return (
    <AuthLayout
      imageSrc="/src/assets/images/buyer.png"
      imageAlt="buyer illustration"
    >
      <FormContainer>
        <Title>Verify Your Email</Title>
        <Subtitle>
          <Span>Hi {user}, </Span>
          <br />
          We're thrilled to welcome you to the Onefarm Tech community! To access
          all the amazing features waiting for you, simply verify your email
          address. We just sent a verification link straight to your inbox.
          (Check your Spam folder just in case).
        </Subtitle>
        <Subtitle>
          <Span>Having trouble finding the email? </Span>
          <br />
          No worries! Simply click the button below to request a new
          verification link.
        </Subtitle>
        <Button size="large" onClick={handleRequestVerification}>
          Request Verification Link
        </Button>
      </FormContainer>
    </AuthLayout>
  );
};

const Span = styled.span`
  font-weight: bold;
`;
