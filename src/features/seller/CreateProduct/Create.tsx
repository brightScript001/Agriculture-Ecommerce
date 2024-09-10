import { useForm, SubmitHandler, Control, FormState } from "react-hook-form";
import { Title } from "../../../ui/Title";
import Form from "../../../ui/Form";
import ActionButtons from "./Buttons";
import ProductDetails from "./Details";
import toast from "react-hot-toast";
import styled from "styled-components";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

interface FormData {
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

  const addProduct = async (newProduct: FormData): Promise<FormData> => {
    const res = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    if (!res.ok) {
      throw new Error("Failed to add product");
    }
    return res.json();
  };

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
