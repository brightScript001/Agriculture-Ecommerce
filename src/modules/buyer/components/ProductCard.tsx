import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Product } from "./ProductData";

interface ProductProps {
  product: Product;
}

export const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const navigate = useNavigate();
  return (
    <Card onClick={() => navigate(`/buyer/product/${product.id}`)}>
      <ImageWrapper>
        <img src={product.imageSrc} alt={product.productName} />
        <DiscountBadge>-{product.discount}%</DiscountBadge>
      </ImageWrapper>
      <ProductDetails>
        <Title>{product.productName}</Title>
        <Price>#{product.costPerKg}/kg</Price>
        <OriginalPrice>{product.originalPrice}</OriginalPrice>
        <QuantityText>Only {product.numberOfProducts}kg left</QuantityText>
        <QuantityBarWrapper>
          <QuantityBar
            percent={(product.quantityLeft || 0) / 100}
          ></QuantityBar>
        </QuantityBarWrapper>
      </ProductDetails>
    </Card>
  );
};

const Card = styled.div`
  background-color: var(--color-background);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
  padding: 1.25rem;
  max-width: 15.6rem;
  /* cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease; */

  /* &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  } */
`;

const ImageWrapper = styled.div`
  position: relative;
  img {
    width: 100%;
    height: auto;
    border-radius: var(--border-radius-md);
  }
`;

export const DiscountBadge = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: rgba(55, 78, 97, 1);
  color: var(--color-text);
  font-size: var(--font-size-sm);
  padding: 4px 8px;
  border-radius: var(--border-radius-md);
`;

const ProductDetails = styled.div`
  margin-top: 1rem;
`;

const Title = styled.h2`
  font-size: var(--font-size-md);
  margin: 0;
  margin-bottom: 8px;
  color: var(--color-text);
  text-transform: capitalize;
`;

const Price = styled.p`
  font-size: var(--font-size-md);
  margin-bottom: 8px;
  color: var(--color-text);
`;

const OriginalPrice = styled.p`
  font-size: var(--font-size-sm);
  font-family: var(--font-family-italic);
  text-decoration: line-through;
  color: var(--color-text);
  margin-bottom: 8px;
`;

const QuantityText = styled.p`
  font-size: var(--font-size-sm);
  color: var(--color-error);
`;

const QuantityBarWrapper = styled.div`
  background-color: var(--color-background);
  border-radius: var(--border-radius-md);
  height: 10px;
  width: 100%;
`;

const QuantityBar = styled.div<{ percent: number }>`
  background-color: var(--color-error);
  height: 100%;
  width: ${(props) => props.percent * 100}%;
  border-radius: var(--border-radius-md);
`;
