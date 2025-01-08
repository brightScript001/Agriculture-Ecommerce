import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState, AppDispatch } from "../../../store";  // Import AppDispatch
import { Button } from "@mui/material";
import styled from "styled-components";
import { requestVerification } from "@core/states/emailVerificationSlice";  // Your action
import { Title, Subtitle } from "@shared/ui/Title";

const VerifyEmailContent: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((store: AppState) => store.user.firstName);
    const error = useSelector((store: AppState) => store.emailVerification.error);

    const handleRequestVerification = () => {
        dispatch(requestVerification());
    };

    return (
        <Container>
            <Title>Verify Your Email</Title>
            <Subtitle>
                <Span>Hi {user}, </Span>
                <br />
                We're thrilled to welcome you to the Onefarm Tech community! To access all the
                amazing features waiting for you, simply verify your email address. We just sent
                a verification link straight to your inbox. (Check your Spam folder just in case).
            </Subtitle>
            {error && <Error>{error}</Error>}
            <Subtitle>
                <Span>Having trouble finding the email? </Span>
                <br />
                No worries! Simply click the button below to request a new verification link.
            </Subtitle>
            <Button size="large" onClick={handleRequestVerification}>
                Request Verification Link
            </Button>
        </Container>
    );
};

export default VerifyEmailContent;

const Container = styled.div`
    max-width: 37.5rem;
    margin-left: 1.875rem;
`;

const Span = styled.span`
    font-weight: bold;
`;

const Error = styled.p`
    color: red;
    font-size: 1rem;
`;
