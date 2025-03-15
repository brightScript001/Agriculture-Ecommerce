import React from "react";
import styled from "styled-components";
import { Product } from "./ProductData";
import { DiscountBadge } from "./ProductCard";
import QuantityControl from "../../../shared/ui/QuantityControl";

interface CartItemProps {
  item: Product;
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  item,
  onRemove,
  onUpdateQuantity,
}) => {
  const handleUpdateQuantity = (newQuantity: number) => {
    onUpdateQuantity(item.id, newQuantity);
  };

  return (
    <CartItemContainer>
      <RemoveButton onClick={() => onRemove(item.id)} aria-label="Remove item">
        Remove
      </RemoveButton>
      <CartItemImage src={item.imageSrc} alt={item.productName} />
      <CartItemDetails>
        <CartItemTitle>{item.productName}</CartItemTitle>
        <QuantityKg>{item.quantityLeft}kg per basket</QuantityKg>
        <Price>
          <ProductPrice>
            {item.quantityLeft > 1 && `${item.quantityLeft} x`} N
            {item.costPerKg}
          </ProductPrice>
          <OriginalPrice>N{item.originalPrice}</OriginalPrice>
          <DiscountBadge>-{item.discount}%</DiscountBadge>
        </Price>
        <CartItemActions>
          <QuantityControl
            quantity={item.quantityLeft}
            setQuantity={handleUpdateQuantity}
            minQuantity={1}
            maxQuantity={item.quantityLeft}
          />
        </CartItemActions>
      </CartItemDetails>
    </CartItemContainer>
  );
};

const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-background);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
  padding: 1rem;
  margin-bottom: 1rem;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CartItemImage = styled.img`
  width: 14.4rem;
  height: 14.4rem;
  object-fit: cover;
  border-radius: var(--border-radius-sm);
  @media (max-width: 768px) {
    width: 7.6rem;
    height: 6rem;
  }
`;

const CartItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  flex-grow: 1;
  margin-left: 1rem;
`;

const CartItemTitle = styled.h3`
  font-size: var(--font-size-md);
`;

const CartItemActions = styled.div`
  display: flex;
  align-items: center;
`;

const RemoveButton = styled.button`
  background: none;
  color: var(--color-red-600);
  border: none;
  cursor: pointer;
  font-size: var(--font-size-md);
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

const QuantityKg = styled.p`
  font-size: var(--font-size-md);
`;

const ProductPrice = styled.p`
  font-size: var(--font-size-md);
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
