import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { AppState } from "../../../store";
import { removeFromCart, updateQuantity } from "../states/cartSlice";
import { CartItem } from "../components/CartItem";
import { PaymentComponent } from "../../payment/components/PaymentComponent";
import Heading from "../../../shared/ui/Heading";
import Button from "../../../shared/ui/Button";
import { useMediaQuery } from "react-responsive";

const Container = styled.div<{ isVisible: boolean }>`
  display: ${(props) => (props.isVisible ? "block" : "none")};
  gap: 1rem;

  @media (min-width: 768px) {
    display: block;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CheckoutButton = styled(Button)`
  width: 100%;
  padding: 1rem;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Cart: React.FC = () => {
  const cartItems = useSelector((state: AppState) => state.cart.items);
  const dispatch = useDispatch();
  const [isPaymentVisible, setPaymentVisible] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity! * item.price,
    0
  );

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleCheckout = () => {
    setPaymentVisible(true);
  };

  return (
    <LayoutContainer>
      <Container isVisible={!isPaymentVisible}>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={handleRemove}
              onUpdateQuantity={handleUpdateQuantity}
            />
          ))
        )}

        {cartItems.length > 0 && (
          <CheckoutButton onClick={handleCheckout}>
            Checkout - ₦{subtotal.toFixed(2)}
          </CheckoutButton>
        )}
      </Container>

      <Container isVisible={isPaymentVisible || !isMobile}>
        {cartItems.length > 0 && (
          <>
            {!isMobile && <Heading as="h2">Checkout</Heading>}
            <PaymentComponent subtotal={subtotal} />
          </>
        )}
      </Container>
    </LayoutContainer>
  );
};
