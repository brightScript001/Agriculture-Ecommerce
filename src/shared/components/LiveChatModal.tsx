import styled from "styled-components";
import Heading from "../ui/Heading";

const cards = [
  {
    title: "Order Related",
    description: [
      "Where is my recent order?",
      "Can I track my delivery?",
      "I need help with an order issue.",
    ],
  },
  {
    title: "Technical Support",
    description: [
      "I'm experiencing technical difficulties.",
      "How do I reset my password?",
      "Help with dashboard navigation.",
    ],
  },
  {
    title: "Product Inquiries",
    description: [
      "Can you provide details about a product?",
      "Which products are currently available?",
    ],
  },
  {
    title: "Payment and Earnings",
    description: [
      "How can I check my earnings?",
      "Payment status for recent sales?",
    ],
  },
  {
    title: "Issue Reporting",
    description: [
      "I encountered an error. What should I do?",
      "How can I report a technical problem?",
    ],
  },
  {
    title: "General Inquiry",
    description: [
      "I have a question not covered here.",
      "Can you help with a different topic?",
    ],
  },
];

export const LiveChatModal = () => {
  return (
    <ModalContent>
      <Header>
        <img
          src="/src/assets/images/live-chat.png"
          alt="Live chat illustration"
        />
        <Heading as="h2">How can we help you?</Heading>
        <p></p>
      </Header>
      <ScrollableSection>
        {cards.map((card) => (
          <Card key={card.title}>
            <Heading as="h2">{card.title}</Heading>
            <CardDescription>
              {card.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </CardDescription>
          </Card>
        ))}
      </ScrollableSection>
    </ModalContent>
  );
};

const ModalContent = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const ScrollableSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 1rem;
  flex-grow: 1;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: var(--color-background);
  padding: 1.25rem;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  width: 100%;
  text-align: center;
`;

const CardDescription = styled.ul`
  font-size: var(--font-size-sm);
  padding-left: 1rem;
  list-style: none;
`;
