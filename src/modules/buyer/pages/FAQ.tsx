import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

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
  {
    question: "Do you offer bulk discounts?",
    answer:
      "Yes, we offer bulk discounts on certain products. Contact our sales team for more information on wholesale pricing.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery times vary depending on your location and the items ordered. Most orders are delivered within 3-7 business days. Rural areas may take longer.",
  },
  {
    question: "Can I cancel or modify my order after placing it?",
    answer:
      "Yes, you can cancel or modify your order within 24 hours of placing it. Once the order is shipped, cancellations or changes are not allowed.",
  },
  {
    question: "What should I do if I receive damaged goods?",
    answer:
      "If you receive damaged or defective products, please contact our customer service within 48 hours of delivery. We will arrange a replacement or a refund after reviewing the case.",
  },
  {
    question: "Do you offer technical support for equipment purchases?",
    answer:
      "Yes, we provide technical support for all equipment purchased through our platform. Contact our support team for assistance with setup or troubleshooting.",
  },
  {
    question: "Are your seeds and fertilizers certified?",
    answer:
      "Yes, all our seeds and fertilizers are certified by the relevant agricultural authorities to ensure high quality and compliance with industry standards.",
  },
  {
    question: "What are your delivery charges?",
    answer:
      "Delivery charges vary based on your location and the size of the order. You can view the shipping costs at checkout before confirming your order.",
  },
];

export const BuyerFAQ: React.FC = () => {
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
