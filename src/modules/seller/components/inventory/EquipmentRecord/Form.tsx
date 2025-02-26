import React, { FC, useState } from "react";
import { EquipmentMaintenanceRecord } from "../RecordTypes";
import { useNavigate } from "react-router-dom";
import Input from "../../../../../shared/ui/Input";
import { Select } from "../../../ui/Select";
import styled from "styled-components";
import FormRow from "../../../../../shared/ui/FormRow";
import ButtonGroup from "../../../../../shared/ui/ButtonGroup";
import Button from "../../../../../shared/ui/Button";

interface FormProps {
  record: EquipmentMaintenanceRecord;
  onSubmit: (data: EquipmentMaintenanceRecord) => void;
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

export const EquipmentRecordForm: FC<FormProps> = ({
  record,
  onSubmit,
  isViewMode = false,
}) => {
  const [formData, setFormData] = useState<EquipmentMaintenanceRecord>(record);
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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
        <Label>Last Maintenance:</Label>
        <StyledInput
          name="lastMaintenance"
          value={formData.lastMaintenance}
          onChange={handleChange}
          readOnly={isViewMode}
        />
      </FormRow>
      <FormRow>
        <Label>Status:</Label>
        <Select
          name="status"
          value={formData.status}
          onChange={handleChange}
          disabled={isViewMode}
        >
          <option value="Due for maintenance">Due for maintenance</option>
          <option value="Spoilt">Spoilt</option>
          <option value="Good Condition">Good Condition</option>
        </Select>
      </FormRow>
      <ButtonGroup>
        <Button variation="secondary" onClick={handleCancelClick}>
          Cancel
        </Button>
        <Button>{isViewMode ? "Update" : "Add Update"}</Button>
      </ButtonGroup>
    </FormComponent>
  );
};
