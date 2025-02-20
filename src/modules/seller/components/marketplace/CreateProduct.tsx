import { useState } from "react";
import { Title } from "@shared/ui/Title";
import ActionButtons from "./CreateProductBtn";
import ProductForm from "./CreateProductForm";
import toast from "react-hot-toast";
import styled from "styled-components";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct } from "../../api/products";
import { useMediaQuery } from "react-responsive";
import MobileProductForm from "./MobileProductForm";
import ReusableModal from "./ReusableModal";
import { useNavigate } from "react-router-dom";

interface CreateProductProps {
  onClose: () => void;
}

const initialFormState = {
  productName: "",
  description: "",
  costPerKg: "",
  productClass: "",
  numberOfProducts: "",
  imageSrc: null as File | null,
};

function CreateProduct({ onClose }: CreateProductProps) {
  const [formData, setFormData] = useState(initialFormState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProductName, setNewProductName] = useState<string | null>(null);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: addProduct,
    onSuccess: (data) => {
      toast.success("Product created successfully!");
      queryClient.invalidateQueries({ queryKey: ["products"] });
      setNewProductName(data.productName);
      setIsModalOpen(true);
    },
    onError: () => {
      toast.error("Failed to add product");
    },
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, imageSrc: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.imageSrc) {
      toast.error("Please select an image.");
      return;
    }

    try {
      const submissionData = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value) submissionData.append(key, value);
      });

      await mutateAsync(submissionData);
    } catch (error) {
      toast.error("Failed to create product.");
    }
  };

  const handleDelete = () => {
    setFormData(initialFormState);
    toast.success("Form reset successfully.");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate("/seller/marketplace");
  };

  return (
    <Wrapper>
      {!isMobile && (
        <>
          <StyledTitle>Upload Product</StyledTitle>
          <ProductForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleImageChange={handleImageChange}
          />
          <ActionButtons
            onClose={onClose}
            handleDelete={handleDelete}
            newlyCreatedProductName={newProductName}
            onSubmit={handleSubmit}
          />
        </>
      )}
      {isMobile && (
        <MobileProductForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleFileChange={handleImageChange}
          onSubmit={handleSubmit}
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
