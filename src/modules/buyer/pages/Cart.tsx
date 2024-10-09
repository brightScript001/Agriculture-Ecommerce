import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { AppState } from "../../../store";
import { removeFromCart, updateQuantity } from "../states/cartSlice";

const CartContainer = styled.div`
  padding: 2rem;
`;

const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
  padding: 1rem;
  margin-bottom: 1rem;
`;

const CartItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: var(--border-radius-sm);
`;

const CartItemDetails = styled.div`
  flex-grow: 1;
  margin-left: 1rem;
`;

const CartItemActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CartItemTitle = styled.h3`
  font-size: var(--font-size-md);
`;

const RemoveButton = styled.button`
  background: none;
  color: red;
  border: none;
  cursor: pointer;
  font-size: var(--font-size-md);
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
`;

const QuantityButton = styled.button`
  padding: 0.5rem;
  background-color: #ccc;
  border: none;
  cursor: pointer;
`;

export const Cart: React.FC = () => {
  const cartItems = useSelector((state: AppState) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <CartContainer>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <CartItemContainer key={item.id}>
            <CartItemImage src={item.imageSrc} alt={item.title} />
            <CartItemDetails>
              <CartItemTitle>{item.title}</CartItemTitle>
              <p>
                {item.quantity} x ${item.price}
              </p>
            </CartItemDetails>
            <CartItemActions>
              <QuantityControl>
                <QuantityButton
                  onClick={() =>
                    handleUpdateQuantity(item.id, item.quantity - 1)
                  }
                >
                  -
                </QuantityButton>
                <span>{item.quantity}</span>
                <QuantityButton
                  onClick={() =>
                    handleUpdateQuantity(item.id, item.quantity + 1)
                  }
                >
                  +
                </QuantityButton>
              </QuantityControl>
              <RemoveButton onClick={() => handleRemove(item.id)}>
                Remove
              </RemoveButton>
            </CartItemActions>
          </CartItemContainer>
        ))
      )}
    </CartContainer>
  );
};
