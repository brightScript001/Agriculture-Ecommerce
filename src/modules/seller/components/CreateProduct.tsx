import { useForm, SubmitHandler, Control, FormState } from "react-hook-form";
import { Title } from "../../../shared/ui/Title";
import Form from "../../../shared/ui/Form";
import ActionButtons from "./CreateProductBtn";
import ProductDetails from "./CreateProductForm";
import toast from "react-hot-toast";
import styled from "styled-components";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { addProduct } from "../api/products"; // Adjust the path as needed

export interface FormData {
  productName: string;
  description: string;
  costPerKg: number;
  productClass: string;
  numberOfProducts: number;
}

interface CreateProductProps {
  onClose: () => void;
}

const StyledTitle = styled(Title)`
  text-align: start;
  margin: 4rem 0 2rem 0;
`;

function CreateProduct({ onClose }: CreateProductProps) {
  const { handleSubmit, control, reset, formState } = useForm<FormData>();
  const [newProductName, setNewProductName] = useState<string | null>(null);

  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: addProduct,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
      setNewProductName(data.productName);
    },
    onError: () => {
      toast.error("Failed to add product");
    },
  });

  const handleDelete = (): void => {
    reset();
    toast.success("Product creation reset.");
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await mutateAsync(data);
      toast.success("Product created successfully!");
    } catch (error) {
      toast.error("Failed to create product.");
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <StyledTitle>Your Product</StyledTitle>
        <ProductDetails
          control={control as Control<FormData>}
          formState={formState as FormState<FormData>}
        />
        <ActionButtons
          onClose={onClose}
          handleDelete={handleDelete}
          newlyCreatedProductName={newProductName}
        />
      </Form>
    </>
  );
}

export default CreateProduct;
