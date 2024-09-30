import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

// Styled components for the FAQ section
const FAQContainer = styled.section`
  margin-top: 5rem;
  max-width: 100%;
  @media (max-width: 768px) {
    margin-top: 0;
  }
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
    question: "What is your return policy?",
    answer:
      "Our return policy allows you to return items within 30 days of purchase.",
  },
  {
    question: "How can I track my order?",
    answer:
      "You can track your order via the tracking link sent to your email after purchase.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Yes, our customer support is available 24/7 via live chat or email.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers.",
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
