import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

// Styled components for the FAQ section
const FAQContainer = styled.section`
  max-width: 100%;
`;

const FAQItem = styled.div`
  margin-bottom: 1.5rem;
  /* border-radius: var(--border-radius-md);
  background-color: var(--color-grey-0); */
  box-shadow: var(--shadow-sm);
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  font-size: var(--font-size-md);
  font-weight: bold;
`;

const Answer = styled.div<{ isOpen: boolean }>`
  font-size: var(--font-size-sm);
  padding: ${(props) => (props.isOpen ? "1rem" : "0")};
  height: ${(props) => (props.isOpen ? "auto" : "0")};
  overflow: hidden;
  transition: height 0.3s ease, padding 0.3s ease;
`;

const IconWrapper = styled.div`
  margin-left: 1rem;
  font-size: 1.5rem;
`;

const FAQList = [
  {
    question: "How do I register as a seller?",
    answer:
      "To register as a seller, click on the 'Sign Up' button, select the 'Seller' option, and fill in your business details. Once registered, you'll need to submit required documentation for verification before listing your products.",
  },
  {
    question: "What products can I sell on the platform?",
    answer:
      "You can sell a wide range of agricultural products including seeds, fertilizers, farm equipment, livestock, and processed goods. All products must meet our quality and safety standards.",
  },
  {
    question: "How do I list my products?",
    answer:
      "After your account is verified, you can list your products by going to your seller dashboard, clicking 'Add New Product', and filling in the product details including images, description, and price.",
  },
  {
    question: "What are the fees for selling on the platform?",
    answer:
      "We charge a commission on each sale, which varies by product category. There are no fees for listing your products, but a transaction fee is applied once a sale is made.",
  },
  {
    question: "How do I handle shipping?",
    answer:
      "You can either handle shipping on your own or use our integrated shipping services. If you choose our shipping option, you'll be notified when an order is placed, and a courier will pick up the goods from your location.",
  },
  {
    question: "When will I receive payment for my sales?",
    answer:
      "Payments are processed after the buyer confirms delivery and satisfaction. It typically takes 3-5 business days for the payment to be credited to your account.",
  },
  {
    question: "Can I offer discounts and promotions?",
    answer:
      "Yes, as a seller you can create discounts and promotions for your products. These can be managed through your seller dashboard under the 'Promotions' tab.",
  },
  {
    question: "How do I manage returns and refunds?",
    answer:
      "You are responsible for managing returns and refunds according to the platform's policies. If a buyer returns an item within the allowed period, you will need to inspect the returned item and process the refund if it meets the return criteria.",
  },
  {
    question: "How can I increase my product visibility?",
    answer:
      "You can increase visibility by optimizing your product listings with clear images, detailed descriptions, and competitive pricing. Additionally, you can participate in platform promotions or invest in paid advertising.",
  },
  {
    question: "What support is available for sellers?",
    answer:
      "Our seller support team is available to help with any questions or issues you may encounter. You can reach out via email or live chat on the platform for assistance with account management, product listings, or order fulfillment.",
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer>
      {FAQList.map((faq, index) => (
        <FAQItem key={index}>
          <Question onClick={() => toggleOpen(index)}>
            {faq.question}
            <IconWrapper>
              {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </IconWrapper>
          </Question>
          <Answer isOpen={openIndex === index}>{faq.answer}</Answer>
        </FAQItem>
      ))}
    </FAQContainer>
  );
};
