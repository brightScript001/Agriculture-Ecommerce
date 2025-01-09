import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch } from "../../../store";
import toast from "react-hot-toast";

interface EmailVerificationState {
    error: string | null;
    isVerified: boolean;
    isVerificationRequested: boolean;
}

const initialState: EmailVerificationState = {
    error: null,
    isVerified: false,
    isVerificationRequested: false,
};

const emailVerificationSlice = createSlice({
    name: "emailVerification",
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setVerified: (state) => {
            state.isVerified = true;
        },
        setVerificationRequested: (state) => {
            state.isVerificationRequested = true;
        },
        resetVerificationState: (state) => {
            state.isVerified = false;
            state.isVerificationRequested = false;
            state.error = null;
        },
    },
});

export const {
    clearError,
    setError,
    setVerified,
    setVerificationRequested,
    resetVerificationState,
} = emailVerificationSlice.actions;

export const requestVerification = () => async (dispatch: AppDispatch) => {
    try {
        await axios.post("/api/auth/resend-verification-email");
        dispatch(setVerificationRequested());
       toast("A new verification email has been sent to your inbox.");
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            dispatch(setError(error.response?.data?.message || "Failed to resend verification email."));
        } else {
            dispatch(setError("An unknown error occurred."));
        }
    }
};

// Verify the user's email
export const verifyEmail = () => async (dispatch: AppDispatch) => {
    try {
        // Assume you verify email through some API or check
        dispatch(setVerified());
    } catch (error) {
        dispatch(setError("Verification failed."));
    }
};

export default emailVerificationSlice.reducer;
