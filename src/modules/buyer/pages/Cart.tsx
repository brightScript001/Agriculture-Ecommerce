import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { AppState } from "store";
import { removeFromCart, updateQuantity } from "../states/cartSlice";
import { CartItem } from "../components/CartItem";
import Heading from "@shared/ui/Heading";
import { PaymentComponent } from "@modules/payment/components/PaymentComponent";
import Button from "@shared/ui/Button";

export const Cart: React.FC = () => {
  const cartItems = useSelector((state: AppState) => state.cart.items);
  const dispatch = useDispatch();
  const [showPayment, setShowPayment] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
      if (window.innerWidth >= 769) {
        setShowPayment(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    setShowPayment(true);
  };

  return (
    <CartLayout>
      {!showPayment && (
        <CartSection>
          {cartItems.length === 0 ? (
            <EmptyCartMessage>Your cart is empty.</EmptyCartMessage>
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

          {cartItems.length > 0 && isMobile && (
            <CheckoutButton onClick={handleCheckout}>
              Checkout - ₦{subtotal.toFixed(2)}
            </CheckoutButton>
          )}
        </CartSection>
      )}

      {(showPayment || !isMobile) && (
        <PaymentWrapper>
          <Heading as="h2">Checkout</Heading>
          <PaymentComponent subtotal={subtotal} />
        </PaymentWrapper>
      )}
    </CartLayout>
  );
};

const CartLayout = styled.div`
  display: grid;
  gap: 2rem;
  padding: 2rem;

  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CartSection = styled.div`
  padding: 1rem;
`;

const PaymentWrapper = styled.div`
  background: var(--color-background);
  padding: 1rem;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
`;

const CheckoutButton = styled(Button)`
  width: 100%;
  padding: 1rem;
  cursor: pointer;
  margin-top: 1rem;
`;

const EmptyCartMessage = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-grey-600);
  text-align: center;
  margin: 2.4rem 0;
`;
