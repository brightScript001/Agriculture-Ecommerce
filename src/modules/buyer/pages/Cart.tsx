import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { AppState } from "store";
import { removeFromCart, updateQuantity } from "../states/cartSlice";
import { CartItem } from "../components/CartItem";
import Heading from "@shared/ui/Heading";
import { PaymentComponent } from "@modules/payment/components/PaymentComponent";
import Button from "@shared/ui/Button";

export const Cart: React.FC = () => {
  const cartItems = useSelector((state: AppState) => state.cart.items);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity! * item.costPerKg,
    0
  );

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleCheckout = () => {
    console.log("Proceed to payment");
  };

  const renderCartItems = () => {
    if (cartItems.length === 0) {
      return <EmptyCartMessage>Your cart is empty.</EmptyCartMessage>;
    }

    return cartItems.map((item) => (
      <CartItem
        key={item.id}
        item={item}
        onRemove={handleRemove}
        onUpdateQuantity={handleUpdateQuantity}
      />
    ));
  };

  const renderCheckoutSection = () => {
    if (cartItems.length === 0) return null;

    return (
      <>
        {!isMobile && <Heading as="h2">Checkout</Heading>}
        <PaymentComponent subtotal={subtotal} />
      </>
    );
  };

  return (
    <CartLayout>
      <CartContent isMobile={isMobile}>{renderCartItems()}</CartContent>

      {cartItems.length > 0 && (
        <CheckoutContainer>
          <CheckoutButton onClick={handleCheckout}>
            Checkout - ₦{subtotal.toFixed(2)}
          </CheckoutButton>
        </CheckoutContainer>
      )}

      {renderCheckoutSection()}
    </CartLayout>
  );
};

const CartLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CartContent = styled.div<{ isMobile: boolean }>`
  display: ${({ isMobile }) => (isMobile ? "block" : "flex")};
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  gap: 1rem;
`;

const CheckoutContainer = styled.div`
  margin-top: 2rem;
`;

const CheckoutButton = styled(Button)`
  width: 100%;
  padding: 1rem;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const EmptyCartMessage = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-grey-600);
  text-align: center;
  margin: 2.4rem 0;
`;
