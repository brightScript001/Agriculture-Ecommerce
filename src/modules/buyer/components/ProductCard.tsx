import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Product } from "./ProductData";

interface ProductProps {
  product: Product;
}

export const ProductCard: React.FC<ProductProps> = ({ product }) => {
  console.log("ProductCard product", product);
  return (
    <Link to={`/buyer/product/${product.id}`}>
      <Card>
        <ImageWrapper>
          <img
            src={product.imageSrc}
            alt={product.title || product.productName}
          />
          <DiscountBadge style={{ top: "8px" }}>
            -{product.discount}%
          </DiscountBadge>
        </ImageWrapper>
        <ProductDetails>
          <Title>{product.productName}</Title>
          <Price>{product.costPerKg}</Price>
          <OriginalPrice>{product.originalPrice}</OriginalPrice>
          <QuantityText>Only {product.numberOfProducts}kg left</QuantityText>
          <QuantityBarWrapper>
            <QuantityBar
              percent={(product.quantityLeft || 0) / 100}
            ></QuantityBar>
          </QuantityBarWrapper>
        </ProductDetails>
      </Card>
    </Link>
  );
};

const Card = styled.div`
  border: none;
  border-radius: var(--border-radius-md);
  padding: 1rem;
  max-width: 15.6rem;
  background-color: var(--color-grey-0);
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  position: relative;
  img {
    width: 100%;
    height: auto;
  }
`;

export const DiscountBadge = styled.div`
  position: absolute;
  right: 8px;
  background-color: rgba(55, 78, 97, 1);
  color: var(--color-white-100);
  font-size: var(--font-size-md);
  padding: 4px 8px;
  border-radius: var(--border-radius-md);
`;

const ProductDetails = styled.div`
  margin-top: 12px;
`;

const Title = styled.h3`
  font-size: var(--font-size-md);
  margin: 0;
`;

const Price = styled.p`
  font-size: var(--font-size-md);
  font-weight: bold;
`;

export const OriginalPrice = styled.p`
  font-size: var(--font-size-sm);
  font-family: italic;
  text-decoration: line-through;
  color: var(--color-grey-400);
`;

const QuantityText = styled.p`
  font-size: var(--font-size-sm);
  color: var(--color-red-600);
`;

const QuantityBarWrapper = styled.div`
  background-color: var(--color-grey-100);
  border-radius: var(--border-radius-md);
  height: 10px;
  width: 100%;
  margin-top: 4px;
`;

const QuantityBar = styled.div<{ percent: number }>`
  background-color: var(--color-red-600);
  height: 100%;
  width: ${(props) => props.percent * 100}%;
  border-radius: var(--border-radius-md);
`;
