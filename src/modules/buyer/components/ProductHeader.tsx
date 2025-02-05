import React, { useState } from "react";
import styled from "styled-components";
import { Product as ProductInterface } from "./ProductData";
import Button from "../../../shared/ui/Button";
import { DiscountBadge } from "./ProductCard";
import { QuantityControl } from "../../../shared/ui/QuantityControl";
import { useDispatch } from "react-redux";
import { addToCart } from "../states/cartSlice";
import toast from "react-hot-toast";

interface ProductHeaderProps {
  product: ProductInterface;
}

export const ProductHeader: React.FC<ProductHeaderProps> = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...product,
        quantity,
      })
    );
    toast("Item added to cart");
  };

  return (
    <ProductHeaderContainer>
      <ProductImage src={product.imageSrc} alt={product.title || ""} />
      <ProductInfo>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <ProductTitle>{product.title || ""}</ProductTitle>
          <QuantityKg>
            {product.quantityLeft
              ? `${product.quantityLeft}kg per basket`
              : "Quantity information unavailable"}
          </QuantityKg>
          <Price>
            {product.price && <ProductPrice>N{product.price}/kg</ProductPrice>}
            {product.originalPrice && (
              <OriginalPrice>N{product.originalPrice}</OriginalPrice>
            )}
            {product.discount && (
              <DiscountBadge>-{product.discount}%</DiscountBadge>
            )}
          </Price>
          <Location>
            Shipping from {product.location || "Not specified"}
          </Location>
          <QuantityControl quantity={quantity} setQuantity={setQuantity} />
        </div>
        <Button onClick={handleAddToCart}>Add To Cart</Button>
      </ProductInfo>
    </ProductHeaderContainer>
  );
};

const ProductHeaderContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ProductImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: var(--border-radius-md);
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  width: 35.8rem;
  @media (max-width: 769px) {
    width: 100%;
  }
`;

const ProductTitle = styled.h1`
  font-size: var(--font-size-xl);
  font-weight: bold;
`;

const QuantityKg = styled.p`
  font-size: var(--font-size-md);
`;

const ProductPrice = styled.p`
  font-size: var(--font-size-lg);
  font-weight: bold;
  color: var(--color-primary);
`;

const OriginalPrice = styled.p`
  font-size: var(--font-size-md);
  font-family: italic;
  text-decoration: line-through;
  color: var(--color-grey-500);
  margin-right: 4rem;
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: max-content;
  position: relative;
`;

const Location = styled.p`
  font-size: var(--font-size-md);
`;
