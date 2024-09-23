import React from "react";
import styled from "styled-components";
import Input from "../../../../shared/ui/Input";

const Title = styled.p`
  font-size: var(--font-size-md);
`;

const StyledInput = styled(Input)`
  width: 100%;
`;

const Item = styled.div`
  margin: 1.25rem 0;
`;

interface FormField {
  label: string;
  name: string;
}

interface FormFieldsByTitle {
  [key: string]: FormField[];
}

const formFieldsByTitle: FormFieldsByTitle = {
  "Seed and Planting": [
    { label: "Name of Seed", name: "seedName" },
    { label: "Quantity planted", name: "quantityPlanted" },
    { label: "Date Planted", name: "datePlanted" },
    { label: "Approximate area of land covered", name: "areaCovered" },
  ],
  "Crops and Harvesting": [
    { label: "Name of Crop", name: "cropName" },
    { label: "Quantity Harvested", name: "quantityHarvested" },
    { label: "Date Harvested", name: "dateHarvested" },
    { label: "Approximate area of land covered", name: "areaCovered" },
  ],
  "Farm Health": [
    { label: "Name of Crop", name: "cropName" },
    { label: "Quantity", name: "quantity" },
    { label: "Status", name: "status" },
    { label: "Date", name: "date" },
  ],
  Fertilizers: [
    { label: "Name of Fertilizer", name: "cropName" },
    { label: "Quantity Gotten", name: "quantity" },
    { label: "Quantity Remaining", name: "status" },
    { label: "Date Last Applied", name: "date" },
  ],
  Manure: [
    { label: "Name of Manure", name: "cropName" },
    { label: "Quantity Gotten", name: "quantity" },
    { label: "Quantity Remaining", name: "status" },
    { label: "Date Last Applied", name: "date" },
  ],
  Pesticides: [
    { label: "Name of Pesticides", name: "cropName" },
    { label: "Quantity Gotten", name: "quantity" },
    { label: "Quantity Remaining", name: "status" },
    { label: "Date Last Applied", name: "date" },
  ],
  Herbicides: [
    { label: "Name of Herbicides", name: "cropName" },
    { label: "Quantity Gotten", name: "quantity" },
    { label: "Quantity Remaining", name: "status" },
    { label: "Date Last Applied", name: "date" },
  ],
};

interface FormFieldsProps {
  title: string;
}

const FormFields: React.FC<FormFieldsProps> = ({ title }) => {
  const formFields =
    formFieldsByTitle[title as keyof FormFieldsByTitle] ||
    formFieldsByTitle["Seed and Planting"];

  return (
    <>
      {formFields.map((field) => (
        <Item key={field.name}>
          <Title>{field.label}</Title>
          <StyledInput type="text" name={field.name} />
        </Item>
      ))}
    </>
  );
};

export default FormFields;
