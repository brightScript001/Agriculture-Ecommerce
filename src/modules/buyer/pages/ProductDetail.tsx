import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useProducts } from "../hooks/useProduct";
import { Product } from "../components/ProductData";
import { FallbackMessage } from "../../../shared/ui/FallbackMessage";
import { ProductHeader } from "../components/ProductHeader";
import { ProductDetailsTabs } from "../components/ProductDetailTabs";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* margin: 0 auto; */
  padding: 2rem;
`;

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: products, isLoading, error } = useProducts();

  if (!id) {
    return <FallbackMessage message="Product ID is missing or invalid." />;
  }

  if (isLoading) {
    return <FallbackMessage message="Loading product details..." />;
  }

  if (error) {
    return (
      <FallbackMessage message="Failed to load product details. Please try again later." />
    );
  }

  const allProduct = [
    ...(products?.fruits || []),
    ...(products?.vegetables || []),
  ];

  const product = allProduct.find((product: Product) => product.id === id);

  if (!product) {
    return <FallbackMessage message="Product not found." />;
  }

  return (
    <Container>
      <ProductHeader product={product} />
      <ProductDetailsTabs product={product} />
    </Container>
  );
};
