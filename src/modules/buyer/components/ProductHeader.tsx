import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { Product as ProductInterface } from "./ProductData";
import Button from "../../../shared/ui/Button";
import QuantityControl from "../../../shared/ui/QuantityControl";
import { useDispatch } from "react-redux";
import { addToCart } from "../states/cartSlice";
import toast from "react-hot-toast";
import { DiscountBadge } from "./ProductCard";

interface ProductHeaderProps {
  product: ProductInterface;
}

const ProductHeader: React.FC<ProductHeaderProps> = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = useCallback(() => {
    dispatch(
      addToCart({
        ...product,
        quantity,
      })
    );
    toast("Item added to cart");
  }, [dispatch, product, quantity]);

  const quantityInfo = product.quantityLeft
    ? `${product.quantityLeft}kg per basket`
    : "Quantity information unavailable";

  const location = product.location || "Not specified";

  return (
    <ProductHeaderContainer>
      <ProductImage
        src={product.imageSrc}
        alt={product.productName || "Product Image"}
      />
      <ProductInfo>
        <ProductDetails>
          <ProductTitle>
            {product.productName || "Untitled Product"}
          </ProductTitle>
          <QuantityText>{quantityInfo}</QuantityText>
          <PriceInfo>
            {product.costPerKg && (
              <ProductPrice>#{product.costPerKg}/kg</ProductPrice>
            )}
            {product.originalPrice && (
              <OriginalPrice>#{product.originalPrice}</OriginalPrice>
            )}
            {product.discount && (
              <DiscountBadge>-{product.discount}%</DiscountBadge>
            )}
          </PriceInfo>
          <LocationText>Shipping from: {location}</LocationText>
          <QuantityControl
            quantity={quantity}
            setQuantity={setQuantity}
            minQuantity={1}
            maxQuantity={product.quantityLeft || 100}
          />
        </ProductDetails>
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      </ProductInfo>
    </ProductHeaderContainer>
  );
};

const ProductHeaderContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  align-items: flex-start;
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
    height: auto;
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

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProductTitle = styled.h1`
  font-size: var(--font-size-xl);
  font-weight: bold;
  color: var(--color-primary);
`;

const QuantityText = styled.p`
  font-size: var(--font-size-md);
  color: var(--color-grey-700);
`;

const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
`;

const LocationText = styled.p`
  font-size: var(--font-size-md);
  color: var(--color-grey-700);
`;

export default React.memo(ProductHeader);
