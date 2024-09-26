import React, { FC, useState } from "react";
import { FarmGeneralRecord } from "./RecordTypes";
import { useNavigate } from "react-router-dom";
import Input from "../../../../shared/ui/Input";
import styled from "styled-components";
import FormRow from "../../../../shared/ui/FormRow";
import ButtonGroup from "../../../../shared/ui/ButtonGroup";
import Button from "../../../../shared/ui/Button";

interface FormProps {
  record: FarmGeneralRecord;
  onSubmit: (data: FarmGeneralRecord) => void;
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

const RecordForm: FC<FormProps> = ({
  record,
  onSubmit,
  isViewMode = false,
}) => {
  const [formData, setFormData] = useState<FarmGeneralRecord>(record);
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
        <Label>Name:</Label>
        <StyledInput
          name="name"
          value={formData.name}
          onChange={handleChange}
          readOnly={isViewMode}
        />
      </FormRow>
      <FormRow>
        <Label>Quantity:</Label>
        <StyledInput
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          readOnly={isViewMode}
        />
      </FormRow>
      <FormRow>
        <Label>Area Covered:</Label>
        <StyledInput
          name="areaCovered"
          value={formData.areaCovered}
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

export default RecordForm;
