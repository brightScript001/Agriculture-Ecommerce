import { Controller, Control, FieldErrors } from "react-hook-form";
import FormRow from "../../../../shared/ui/FormRow";
import Input from "../../../../shared/ui/Input";
import styled from "styled-components";

interface ProductDetailsFormData {
  productName: string;
  description: string;
  costPerKg: number;
  productClass: string;
  numberOfProducts: number;
  productImage: FileList | null;
}

interface ProductDetailsProps {
  control: Control<ProductDetailsFormData>;
  formState: { errors: FieldErrors<ProductDetailsFormData> };
}

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

function CreateProductForm({
  control,
  formState: { errors },
}: ProductDetailsProps) {
  const errorMessage = "This field is required";

  return (
    <>
      <FormRow>
        <Controller
          name="productName"
          control={control}
          rules={{ required: errorMessage }}
          render={({ field }) => (
            <>
              <Label htmlFor="productName">Name of Product</Label>
              <StyledInput
                id="productName"
                type="text"
                {...field}
                value={field.value || ""}
              />
              {errors.productName && <p>{errors.productName.message}</p>}
            </>
          )}
        />
      </FormRow>

      <FormRow>
        <Controller
          name="costPerKg"
          control={control}
          rules={{ required: errorMessage }}
          render={({ field }) => (
            <>
              <Label htmlFor="costPerKg">Cost of product per kg</Label>
              <StyledInput
                id="costPerKg"
                type="number"
                placeholder="Cost per kg"
                {...field}
                value={field.value || 0}
                onChange={(e) => field.onChange(Number(e.target.value))}
              />
              {errors.costPerKg && <p>{errors.costPerKg.message}</p>}
            </>
          )}
        />
      </FormRow>

      <FormRow>
        <Controller
          name="description"
          control={control}
          rules={{ required: errorMessage }}
          render={({ field }) => (
            <>
              <Label htmlFor="description">Product Description</Label>
              <StyledInput
                id="description"
                type="text"
                placeholder="Describe your product here"
                {...field}
                value={field.value || ""}
              />
              {errors.description && <p>{errors.description.message}</p>}
            </>
          )}
        />
      </FormRow>

      <FormRow>
        <Controller
          name="productClass"
          control={control}
          rules={{ required: errorMessage }}
          render={({ field }) => (
            <>
              <Label htmlFor="productClass">Product Class</Label>
              <StyledInput
                id="productClass"
                type="text"
                {...field}
                value={field.value || ""}
              />
              {errors.productClass && <p>{errors.productClass.message}</p>}
            </>
          )}
        />
      </FormRow>

      <FormRow>
        <Controller
          name="numberOfProducts"
          control={control}
          rules={{ required: errorMessage }}
          render={({ field }) => (
            <>
              <Label htmlFor="numberOfProducts">
                Number of Products available
              </Label>
              <StyledInput
                id="numberOfProducts"
                type="number"
                {...field}
                value={field.value || 0}
                onChange={(e) => field.onChange(Number(e.target.value))}
              />
              {errors.numberOfProducts && (
                <p>{errors.numberOfProducts.message}</p>
              )}
            </>
          )}
        />
      </FormRow>

      <FormRow>
        <Controller
          name="productImage"
          control={control}
          rules={{ required: errorMessage }}
          render={({ field }) => (
            <>
              <Label htmlFor="productImage">Product Image</Label>
              <StyledInput
                id="productImage"
                type="file"
                accept="image/*"
                onChange={(e) => field.onChange(e.target.files)}
              />
              {errors.productImage && <p>{errors.productImage.message}</p>}
            </>
          )}
        />
      </FormRow>
    </>
  );
}

export default CreateProductForm;
