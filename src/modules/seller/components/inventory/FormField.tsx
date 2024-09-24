import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../../../shared/ui/Input";
import StatusSelector from "../../ui/StatusSelector";
import { RecordRow } from "../../api/Record";

// Styled components
const Title = styled.p`
  font-size: var(--font-size-md);
`;

const StyledInput = styled(Input)`
  width: 100%;
`;

const Item = styled.div`
  margin: 1.25rem 0;
`;

// Interfaces for FormFields
interface FormField {
  label: string;
  name: keyof RecordRow | string; // Adjusted name type to match RecordRow
}

interface FormFieldsByTitle {
  [key: string]: FormField[];
}

const formFieldsByTitle: FormFieldsByTitle = {
  "Seeds and Planting": [
    { label: "Name of Seed", name: "name" },
    { label: "Quantity planted", name: "quantity" },
    { label: "Date Planted", name: "date" },
    { label: "Approximate area of land covered", name: "areaCovered" },
  ],
  "Crops and Harvesting": [
    { label: "Name of Crop", name: "name" },
    { label: "Quantity Harvested", name: "quantity" },
    { label: "Date Harvested", name: "date" },
    { label: "Approximate area of land covered", name: "areaCovered" },
  ],
  "Farm Health": [
    { label: "Name of Crop", name: "name" },
    { label: "Quantity", name: "quantity" },
    { label: "Status", name: "farmStatus" },
    { label: "Date", name: "date" },
  ],
  Fertilizers: [
    { label: "Name of Fertilizer", name: "name" },
    { label: "Quantity Gotten", name: "quantity" },
    { label: "Quantity Remaining", name: "farmStatus" },
    { label: "Date Last Applied", name: "date" },
  ],
  Manure: [
    { label: "Name of Manure", name: "name" },
    { label: "Quantity Gotten", name: "quantity" },
    { label: "Quantity Remaining", name: "farmStatus" },
    { label: "Date Last Applied", name: "date" },
  ],
  Pesticides: [
    { label: "Name of Pesticides", name: "name" },
    { label: "Quantity Gotten", name: "quantity" },
    { label: "Quantity Remaining", name: "farmStatus" },
    { label: "Date Last Applied", name: "date" },
  ],
  Herbicides: [
    { label: "Name of Herbicides", name: "name" },
    { label: "Quantity Gotten", name: "quantity" },
    { label: "Quantity Remaining", name: "farmStatus" },
    { label: "Date Last Applied", name: "date" },
  ],
  "Farm attack by pests": [
    { label: "Name of Locusts", name: "name" },
    { label: "Crops attacked", name: "quantity" },
    { label: "Date of attack", name: "date" },
    { label: "Status", name: "action" },
  ],
  "Fruits over-ripening": [
    { label: "Name of crop", name: "name" },
    { label: "Quantity", name: "quantity" },
    { label: "Date of last discovered", name: "date" },
    { label: "Status", name: "action" },
  ],
  "Fire in farmhouse": [
    { label: "Name of farm area", name: "name" },
    { label: "Reason", name: "quantity" },
    { label: "Date", name: "date" },
    { label: "Status", name: "action" },
  ],
  "Expired herbicide": [
    { label: "Name of Herbicide", name: "name" },
    { label: "Quantity", name: "quantity" },
    { label: "Date expired", name: "date" },
    { label: "Status", name: "action" },
  ],
};

interface FormFieldsProps {
  title: string;
  record?: Partial<RecordRow>;
  readOnly?: boolean;
}

const FormFields: React.FC<FormFieldsProps> = ({
  title,
  record = {},
  readOnly = false,
}) => {
  const [status, setStatus] = useState(record.action || "Unresolved");
  const formFields = formFieldsByTitle[title] || [];

  return (
    <>
      {formFields.map((field) => (
        <Item key={field.name}>
          <Title>{field.label}</Title>
          {field.name === "action" ? (
            <StatusSelector
              status={status}
              onChange={setStatus}
              readOnly={readOnly}
            />
          ) : (
            <StyledInput
              type={field.name === "quantity" ? "number" : "text"}
              name={field.name}
              defaultValue={
                (record[field.name as keyof RecordRow] || "") as string | number
              }
              readOnly={readOnly}
            />
          )}
        </Item>
      ))}
    </>
  );
};

export default FormFields;
