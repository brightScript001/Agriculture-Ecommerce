import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useSelector } from "react-redux";
import { AppState } from "../../store";

const buyerFAQList = [
  {
    question: "What is your return policy?",
    answer:
      "Our return policy allows you to return items within 30 days of purchase. Products must be in their original condition. For perishable items like seeds or fertilizers, returns are subject to quality checks.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Once your order is shipped, you will receive a tracking number via email or SMS. You can use this number to track your order on our website’s tracking page.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including credit/debit cards, bank transfers, mobile money, and payment on delivery (for select locations).",
  },
];

const sellerFAQList = [
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
    question: "What support is available for sellers?",
    answer:
      "Our seller support team is available to help with any questions or issues you may encounter. You can reach out via email or live chat on the platform for assistance with account management, product listings, or order fulfillment.",
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const role = useSelector((state: AppState) => state.auth.role);

  const FAQList = role === "seller" ? sellerFAQList : buyerFAQList;

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

const FAQContainer = styled.section`
  max-width: 100%;
`;

const FAQItem = styled.div`
  margin-bottom: 1.5rem;
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
