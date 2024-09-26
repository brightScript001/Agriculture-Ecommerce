import React, { FC, useState } from "react";
import { RiskEmergencyRecord } from "../RecordTypes";
import { useNavigate } from "react-router-dom";
import Input from "../../../../../shared/ui/Input";
import styled from "styled-components";
import FormRow from "../../../../../shared/ui/FormRow";
import ButtonGroup from "../../../../../shared/ui/ButtonGroup";
import Button from "../../../../../shared/ui/Button";
import StatusSelector from "../../../ui/StatusSelector";

interface FormProps {
  record: RiskEmergencyRecord;
  onSubmit: (data: RiskEmergencyRecord) => void;
  isViewMode?: boolean;
}

const FormComponent = styled.form`
  width: 45rem;
  @media (max-width) {
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

export const RiskEmergencyRecordForm: FC<FormProps> = ({
  record,
  onSubmit,
  isViewMode = false,
}) => {
  const [formData, setFormData] = useState<RiskEmergencyRecord>(record);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStatusChange = (status: string) => {
    setFormData({ ...formData, status });
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
        <Label>Name:</Label>
        <StyledInput
          name="name"
          value={formData.name}
          onChange={handleChange}
          readOnly={isViewMode}
        />
      </FormRow>
      <FormRow>
        <Label>Crop Attacked:</Label>
        <StyledInput
          name="cropAttacked"
          value={formData.cropAttacked}
          onChange={handleChange}
          readOnly={isViewMode}
        />
      </FormRow>
      <FormRow>
        <Label>Date of Attack:</Label>
        <StyledInput
          name="dateOfAttack"
          type="date"
          value={formData.dateOfAttack}
          onChange={handleChange}
          readOnly={isViewMode}
        />
      </FormRow>
      <FormRow>
        <Label>Status:</Label>
        <StatusSelector
          status={formData.status}
          onChange={handleStatusChange}
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
