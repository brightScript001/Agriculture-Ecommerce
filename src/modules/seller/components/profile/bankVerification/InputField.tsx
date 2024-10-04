import React from "react";
import styled from "styled-components";
import { InputField } from "../personalInformation/BasicInformation";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: var(--color-grey-600);
`;

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputFieldComponent: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <InputField type="text" value={value} onChange={onChange} />
    </InputContainer>
  );
};
