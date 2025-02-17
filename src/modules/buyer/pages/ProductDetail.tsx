import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { FallbackMessage } from "../../../shared/ui/FallbackMessage";
import { ProductHeader } from "../components/ProductHeader";
import { ProductDetailsTabs } from "../components/ProductDetailTabs";
import { useFetchProductById } from "../api/products";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <FallbackMessage message="Product ID is missing or invalid." />;
  }

  const { data: product, isLoading, error } = useFetchProductById(id);

  if (isLoading) {
    return <FallbackMessage message="Loading product details..." />;
  }

  if (error || !product) {
    return (
      <FallbackMessage message="Failed to load product details. Please try again later." />
    );
  }

  return (
    <Container>
      <ProductHeader product={product} />
      <ProductDetailsTabs product={product} />
    </Container>
  );
};
