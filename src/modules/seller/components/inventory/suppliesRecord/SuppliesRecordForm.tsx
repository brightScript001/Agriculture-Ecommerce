import React, { FC, useState } from "react";
import { SuppliesRecord } from "../RecordTypes";
import { useNavigate } from "react-router-dom";
import Input from "../../../../../shared/ui/Input";
import styled from "styled-components";
import FormRow from "../../../../../shared/ui/FormRow";
import ButtonGroup from "../../../../../shared/ui/ButtonGroup";
import Button from "../../../../../shared/ui/Button";

interface FormProps {
  record: SuppliesRecord;
  onSubmit: (data: SuppliesRecord) => void;
  isViewMode?: boolean;
}

const FormComponent = styled.form`
  width: 45rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledInput = styled(Input)`
  width: 45rem;
  margin-bottom: 1.5rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Label = styled.label`
  font-size: var(--font-size-sm);
`;

export const SuppliesRecordForm: FC<FormProps> = ({
  record,
  onSubmit,
  isViewMode = false,
}) => {
  const [formData, setFormData] = useState<SuppliesRecord>(record);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCancelClick = () => {
    navigate(-1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <FormComponent onSubmit={handleSubmit}>
      <FormRow>
        <Label>Name of:</Label>
        <StyledInput
          name="name"
          value={formData.name}
          onChange={handleChange}
          readOnly={isViewMode}
        />
      </FormRow>
      <FormRow>
        <Label>Quantity Gotten:</Label>
        <StyledInput
          name="quantityGotten"
          value={formData.quantityGotten}
          onChange={handleChange}
          readOnly={isViewMode}
        />
      </FormRow>
      <FormRow>
        <Label>Quantity Remaining:</Label>
        <StyledInput
          name="quantityRemaining"
          value={formData.quantityRemaining}
          onChange={handleChange}
          readOnly={isViewMode}
        />
      </FormRow>
      <FormRow>
        <Label>Date Last Applied:</Label>
        <StyledInput
          name="dateLastApplied"
          type="date"
          value={formData.dateLastApplied}
          onChange={handleChange}
          readOnly={isViewMode}
        />
      </FormRow>

      <ButtonGroup>
        <Button variation="secondary" onClick={handleCancelClick}>
          Cancel
        </Button>
        {isViewMode && (
          <Button
            variation="danger"
            onClick={() => console.log("Delete action")}
          >
            Delete
          </Button>
        )}
        <Button>{isViewMode ? "Update" : "Add Update"}</Button>
      </ButtonGroup>
    </FormComponent>
  );
};
