import styled from "styled-components";
import { productClasses } from "./CreateProductForm";
import Input from "@shared/ui/Input";
import Button from "@shared/ui/Button";
import Form from "@shared/ui/Form";
import FormRow from "@shared/ui/FormRow";

interface FormData {
  productName: string;
  costPerKg: string;
  imageSrc: File | null;
  description: string;
  productClass: string;
}

interface MobileProductFormProps {
  formData: FormData;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const MobileProductForm = ({
  formData,
  handleInputChange,
  handleFileChange,
  onSubmit,
}: MobileProductFormProps) => {
  return (
    <Form onSubmit={onSubmit}>
      <FormRow>
        <Label htmlFor="productName">Product Name</Label>
        <StyledInput
          id="productName"
          type="text"
          name="productName"
          placeholder="Enter the product name"
          value={formData.productName}
          onChange={handleInputChange}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="costPerKg">Cost per Kg</Label>
        <StyledInput
          id="costPerKg"
          type="number"
          name="costPerKg"
          placeholder="Enter cost per kg"
          value={formData.costPerKg}
          onChange={handleInputChange}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="productClass">Product Class</Label>
        <StyledSelect
          id="productClass"
          name="productClass"
          value={formData.productClass}
          onChange={handleInputChange}
        >
          <option value="">Select a class</option>
          {productClasses.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </StyledSelect>
      </FormRow>

      <FormRow>
        <Label htmlFor="productImage">Product Image</Label>
        <StyledInput
          id="productImage"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="description">Description</Label>
        <StyledInput
          id="description"
          type="text"
          name="description"
          placeholder="Enter product description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </FormRow>

      <UploadButton type="submit">Upload Product</UploadButton>
    </Form>
  );
};

export default MobileProductForm;

const Label = styled.label`
  font-size: var(--font-size-md);
`;

const StyledInput = styled(Input)`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1.5rem;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1.5rem;
`;

const UploadButton = styled(Button)`
  width: 100%;
  padding: 1rem;
  background-color: var(--color-grey-500);
  border: none;
  border-radius: var(--border-radius-sm);
  cursor: pointer;
`;
