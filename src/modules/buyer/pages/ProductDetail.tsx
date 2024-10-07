import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useProducts } from "../hooks/useProduct";
import { Tabs } from "../../../shared/ui/Tabs";
import { Product } from "../components/ProductData";

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: var(--color-grey-100);
  border-radius: var(--border-radius-lg);
`;

const ProductHeader = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const ProductImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: var(--border-radius-md);
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductTitle = styled.h1`
  font-size: var(--font-size-xl);
  margin-bottom: 1rem;
  font-weight: bold;
`;

const ProductPrice = styled.p`
  font-size: var(--font-size-lg);
  font-weight: bold;
  color: var(--color-primary);
`;

const OriginalPrice = styled.p`
  font-size: var(--font-size-md);
  text-decoration: line-through;
  color: var(--color-grey-500);
`;

const AddToCartButton = styled.button`
  padding: 1rem 2rem;
  background-color: var(--color-primary);
  color: var(--color-white);
  border: none;
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-md);
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--color-primary-dark);
  }
`;

const FallbackMessage = styled.p`
  color: var(--color-red-600);
  font-size: var(--font-size-md);
`;

// Product Detail Component
export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: products, isLoading, error } = useProducts();

  // Check if `id` is undefined before proceeding
  if (!id) {
    return <FallbackMessage>Product ID is missing or invalid.</FallbackMessage>;
  }

  // Handle loading and error states
  if (isLoading) {
    return <FallbackMessage>Loading product details...</FallbackMessage>;
  }

  if (error) {
    return (
      <FallbackMessage>
        Failed to load product details. Please try again later.
      </FallbackMessage>
    );
  }

  const allProduct = [
    ...(products?.fruits || []),
    ...(products?.vegetables || []),
  ];

  const product = allProduct.find((product: Product) => product.id === id);

  if (!product) {
    return <FallbackMessage>Product not found.</FallbackMessage>;
  }

  const descriptionTabContent = product.description ? (
    <p>{product.description}</p>
  ) : (
    <FallbackMessage>
      No description available for this product.
    </FallbackMessage>
  );

  const ratingTabContent = product.rating ? (
    <div>
      <p>Average Rating: {product.rating}</p>
    </div>
  ) : (
    <FallbackMessage>No ratings available for this product.</FallbackMessage>
  );

  const tabs = [
    {
      label: "Description",
      value: "description",
      component: descriptionTabContent,
    },
    { label: "Rating", value: "rating", component: ratingTabContent },
  ];

  return (
    <Container>
      <ProductHeader>
        <ProductImage src={product.imageSrc} alt={product.title} />
        <ProductInfo>
          <div>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>{product.price}</ProductPrice>
            <OriginalPrice>{product.originalPrice}</OriginalPrice>
          </div>
          <AddToCartButton>Add to Cart</AddToCartButton>
        </ProductInfo>
      </ProductHeader>
      <Tabs tabs={tabs} />
    </Container>
  );
};
