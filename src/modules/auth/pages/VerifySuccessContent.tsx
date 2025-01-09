import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../store";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {resetVerificationState} from "@core/states/emailVerificationSlice";
import {Title, Subtitle} from "@shared/ui/Title";
import ImageContainer from "@seller/ui/ImageContainer";
import StyledImage from "@seller/ui/StyledImage";
import Container from "@shared/ui/Container";
import FormContainer from "@shared/ui/FormContainer";

const VerifySuccessContent: React.FC = () => {
    const [counter, setCounter] = useState(30);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store: AppState) => store.user.firstName);
    const isVerified = useSelector((store: AppState) => store.emailVerification.isVerified);

    useEffect(() => {
        const timer = setInterval(() => {
            setCounter((prevCounter) => prevCounter - 1);
        }, 1000);

        if (counter === 0 || isVerified) {
            clearInterval(timer);
            dispatch(resetVerificationState());
            navigate("/login");
        }

        return () => clearInterval(timer);
    }, [counter, isVerified, dispatch, navigate]);

    return (
        <Container>
            <ImageContainer>
                <StyledImage src="/src/assets/images/buyer.png" alt="Buyer" />
            </ImageContainer>
            <FormContainer>
                <Title>Email Verification Successful</Title>
                <Subtitle>Hi {user}</Subtitle>
                <Subtitle>
                    Your email has been verified successfully. We will be redirecting you to login
                    to your dashboard and start selling your farm products.
                </Subtitle>
                <Subtitle>
                    Redirecting in <Span>{counter} seconds...</Span>
                </Subtitle>
                <Subtitle>
                    You have not been redirected yet? No worries! Simply click the button below
                    to log in to your account.
                </Subtitle>
                <Button size="large" onClick={() => navigate("/login")}>
                    Login
                </Button>
            </FormContainer>
        </Container>
    );
};

export default VerifySuccessContent;

const Span = styled.span`
    font-weight: bold;
`;
