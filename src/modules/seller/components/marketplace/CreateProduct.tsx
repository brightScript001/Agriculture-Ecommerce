import { useForm, SubmitHandler, Control, FormState } from "react-hook-form";
import { Title } from "../../../../shared/ui/Title";
import ActionButtons from "./CreateProductBtn";
import ProductForm from "./CreateProductForm";
import toast from "react-hot-toast";
import styled from "styled-components";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { addProduct } from "../../api/products";
import { useMediaQuery } from "react-responsive";
import MobileProductForm from "./MobileProductForm";
import ReusableModal from "./ReusableModal";
import { useNavigate } from "react-router-dom";

export interface FormData {
  productName: string;
  description: string;
  costPerKg: number;
  productClass: string;
  numberOfProducts: number;
  imageSrc: FileList | null;
}

interface CreateProductProps {
  onClose: () => void;
}

const productClasses = [
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
  "Tractors & Implements",
  "Irrigation Systems",
  "Harvesting Equipment",
  "Storage & Processing",
  "Cattle Feed",
  "Poultry Feed",
  "Fish & Aquaculture Feed",
  "Hybrid Seeds",
  "Organic Seeds",
  "Seedlings & Saplings",
  "Organic Produce",
  "Hydroponic & Indoor Farming Supplies",
  "Herbs & Medicinal Plants",
  "Drones & Sensors",
  "Farm Management Software",
  "IoT & Automation",
];

function CreateProduct({ onClose }: CreateProductProps) {
  const { handleSubmit, control, reset, formState } = useForm<FormData>();
  const [newProductName, setNewProductName] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const navigate = useNavigate();

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

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate("/marketplace");
  };

  return (
    <Wrapper>
      {!isMobile && (
        <>
          <StyledTitle>Upload Product</StyledTitle>
          <ProductForm
            control={control as Control<FormData>}
            formState={formState as FormState<FormData>}
            productClasses={productClasses}
          />
          <ActionButtons
            onClose={onClose}
            handleDelete={handleDelete}
            newlyCreatedProductName={newProductName}
            onSubmit={handleSubmit(onSubmit)}
          />
        </>
      )}
      {isMobile && (
        <MobileProductForm
          control={control as Control<FormData>}
          formState={formState as FormState<FormData>}
          onSubmit={handleSubmit(onSubmit)}
        />
      )}

      <ReusableModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        imageSrc={"/src/assets/images/check.png"}
        title="Congratulations"
        message={`You have successfully uploaded your product "${newProductName}" and you can view it in your product section`}
      />
    </Wrapper>
  );
}

export default CreateProduct;

const StyledTitle = styled(Title)`
  text-align: start;
  margin: 4rem 0 2rem 0;
`;

const Wrapper = styled.div`
  width: 45rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
