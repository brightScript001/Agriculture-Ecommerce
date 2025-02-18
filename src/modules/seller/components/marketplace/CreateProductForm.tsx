import { Controller, Control, FieldErrors } from "react-hook-form";
import FormRow from "../../../../shared/ui/FormRow";
import Input from "../../../../shared/ui/Input";
import styled from "styled-components";
import { ProductFormData } from "./CreateProduct";

interface ProductDetailsProps {
  control: Control<ProductFormData>;
  formState: { errors: FieldErrors<ProductFormData> };
  productClasses: string[];
}

function CreateProductForm({
  control,
  formState: { errors },
  productClasses,
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
              <Select {...field} id="productClass">
                <option value="">Select a Product Class</option>
                {productClasses.map((productClass) => (
                  <option key={productClass} value={productClass}>
                    {productClass}
                  </option>
                ))}
              </Select>
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
          name="imageSrc"
          control={control}
          rules={{ required: errorMessage }}
          render={({ field }) => (
            <>
              <Label htmlFor="productImage">Product Image</Label>
              <StyledInput
                id="productImage"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files ? e.target.files[0] : null;
                  field.onChange(file);
                }}
              />
              {errors.imageSrc && <p>{errors.imageSrc.message}</p>}
            </>
          )}
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
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;

  &:focus {
    border-color: var(--color-green-600);
    box-shadow: 0 0 5px rgba(0, 128, 0, 0.3);
    outline: none;
    transform: scale(1.02);
  }
`;
