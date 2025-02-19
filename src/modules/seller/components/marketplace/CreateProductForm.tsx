import FormRow from "../../../../shared/ui/FormRow";
import Input from "../../../../shared/ui/Input";
import styled from "styled-components";

interface ProductFormProps {
  formData: {
    productName: string;
    description: string;
    costPerKg: string;
    productClass: string;
    numberOfProducts: string;
    imageSrc: File | null;
  };
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const productClasses = [
  "Cereals & Grains",
  "Pulses & Legumes",
  "Fruits",
  "Vegetables",
  "Nuts & Seeds",
  "Livestock",
  "Dairy Products",
  "Eggs & Poultry",
  "Organic Fertilizers",
  "Chemical Fertilizers",
  "Pesticides & Herbicides",
];

function CreateProductForm({
  formData,
  handleInputChange,
  handleImageChange,
}: ProductFormProps) {
  return (
    <>
      <FormRow>
        <Label htmlFor="productName">Name of Product</Label>
        <StyledInput
          id="productName"
          type="text"
          name="productName"
          value={formData.productName}
          onChange={handleInputChange}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="costPerKg">Cost of product per kg</Label>
        <StyledInput
          id="costPerKg"
          type="number"
          name="costPerKg"
          value={formData.costPerKg}
          onChange={handleInputChange}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="description">Product Description</Label>
        <StyledInput
          id="description"
          type="text"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="productClass">Product Class</Label>
        <Select
          id="productClass"
          name="productClass"
          value={formData.productClass}
          onChange={handleInputChange}
        >
          <option value="">Select a Product Class</option>
          {productClasses.map((productClass) => (
            <option key={productClass} value={productClass}>
              {productClass}
            </option>
          ))}
        </Select>
      </FormRow>

      <FormRow>
        <Label htmlFor="numberOfProducts">Number of Products available</Label>
        <StyledInput
          id="numberOfProducts"
          type="number"
          name="numberOfProducts"
          value={formData.numberOfProducts}
          onChange={handleInputChange}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="productImage">Product Image</Label>
        <StyledInput
          id="productImage"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </FormRow>
    </>
  );
}

export default CreateProductForm;

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

const Select = styled.select`
  width: 45rem;
  padding: 0.75rem;
  font-size: var(--font-size-sm);
  border: none;
  border-radius: var(--border-radius-sm);
`;
