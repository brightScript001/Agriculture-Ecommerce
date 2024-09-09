import { useForm, SubmitHandler } from "react-hook-form";
import { Title } from "../../../ui/Title";
import Form from "../../../ui/Form";
import ActionButtons from "./Buttons";
import ProductDetails from "./Details";
import toast from "react-hot-toast";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { createProduct } from "../../../slices/productSlice";

interface FormData {
  productName: string;
  description: string;
  costPerKg: number;
  productClass: string;
  numberOfProducts: number;
}

interface CreateProductProps {
  title: string;
  onClose: () => void;
}

const StyledTitle = styled(Title)`
  text-align: start;
  margin: 4rem 0 2rem 0;
`;

function CreateProduct({ onClose }: CreateProductProps) {
  const { handleSubmit, control, reset, formState } = useForm<FormData>();
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = () => {
    reset();
    toast.success("Product creation reset.");
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await dispatch(
        createProduct({
          id: Date.now(),
          ...data,
        })
      ).unwrap();

      toast.success("Product created successfully!");
      reset();
    } catch (error) {
      toast.error("Failed to create product.");
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <StyledTitle>Your Product</StyledTitle>
        <ProductDetails control={control} formState={formState} />
        <ActionButtons onClose={onClose} handleDelete={handleDelete} />
      </Form>
    </>
  );
}

export default CreateProduct;
