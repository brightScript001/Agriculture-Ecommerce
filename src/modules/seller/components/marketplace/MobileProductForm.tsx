import { Controller, Control, FieldErrors } from "react-hook-form";
import styled from "styled-components";
import { FormData } from "./CreateProduct"; // Import the shared FormData
import Input from "../../../../shared/ui/Input";
import Button from "../../../../shared/ui/Button";
import FormRow from "../../../../shared/ui/FormRow";
import Form from "../../../../shared/ui/Form";

interface MobileProductFormProps {
  control: Control<FormData>;
  formState: { errors: FieldErrors<FormData> };
  onSubmit: () => void;
}

const Label = styled.label`
  font-size: var(--font-size-md);
`;

const StyledInput = styled(Input)`
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

const MobileProductForm = ({
  control,
  formState: { errors },
  onSubmit,
}: MobileProductFormProps) => {
  const errorMessage = "This field is required";

  return (
    <Form onSubmit={onSubmit}>
      <FormRow>
        <Label htmlFor="productName">Name of product</Label>
        <Controller
          name="productName"
          control={control}
          rules={{ required: errorMessage }}
          render={({ field }) => (
            <StyledInput
              id="productName"
              type="text"
              placeholder="Enter the name of your product"
              {...field}
            />
          )}
        />
        {errors.productName && <p>{errors.productName.message}</p>}
      </FormRow>

      <FormRow>
        <Label htmlFor="costPerKg">Cost of product</Label>
        <Controller
          name="costPerKg"
          control={control}
          rules={{ required: errorMessage }}
          render={({ field }) => (
            <StyledInput
              id="costPerKg"
              type="number"
              placeholder="How much will your product be sold?"
              {...field}
              onChange={(e) => field.onChange(Number(e.target.value))}
            />
          )}
        />
        {errors.costPerKg && <p>{errors.costPerKg.message}</p>}
      </FormRow>

      <FormRow>
        <Label htmlFor="productImage">Product Image</Label>
        <Controller
          name="productImage"
          control={control}
          rules={{ required: errorMessage }}
          render={({ field }) => (
            <StyledInput
              id="productImage"
              type="file"
              accept="image/*"
              onChange={(e) => field.onChange(e.target.files)}
            />
          )}
        />
        {errors.productImage && <p>{errors.productImage.message}</p>}
      </FormRow>

      <FormRow>
        <Label htmlFor="description">Product Description</Label>
        <Controller
          name="description"
          control={control}
          rules={{ required: errorMessage }}
          render={({ field }) => (
            <StyledInput
              id="description"
              type="text"
              placeholder="What is your product about?"
              {...field}
            />
          )}
        />
        {errors.description && <p>{errors.description.message}</p>}
      </FormRow>

      <UploadButton type="submit">Upload your product</UploadButton>
    </Form>
  );
};

export default MobileProductForm;
