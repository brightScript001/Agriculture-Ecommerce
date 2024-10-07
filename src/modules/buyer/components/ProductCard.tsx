import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Product } from "./ProductData";

interface ProductProps {
  product: Product;
}

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

const DiscountBadge = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: #3b5998;
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

const OriginalPrice = styled.p`
  font-size: var(--font-size-sm);
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

export const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <Link to={`/buyer/product/${product.id}`}>
      <Card>
        <ImageWrapper>
          <img src={product.imageSrc} alt={product.title} />
          <DiscountBadge>-{product.discount}%</DiscountBadge>
        </ImageWrapper>
        <ProductDetails>
          <Title>{product.title}</Title>
          <Price>{product.price}</Price>
          <OriginalPrice>{product.originalPrice}</OriginalPrice>
          <QuantityText>Only {product.quantityLeft}kg left</QuantityText>
          <QuantityBarWrapper>
            <QuantityBar percent={product.quantityLeft / 100}></QuantityBar>
          </QuantityBarWrapper>
        </ProductDetails>
      </Card>
    </Link>
  );
};
