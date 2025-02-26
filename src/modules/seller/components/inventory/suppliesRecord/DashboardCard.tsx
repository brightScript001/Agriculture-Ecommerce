import { Title } from "@shared/ui/Title";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const SuppliesRecord: React.FC = () => {
  const navigation = useNavigate();

  const handleNavigation = () => {
    navigation("/seller/supplies-records");
  };
  return (
    <Wrapper>
      <Header>
        <Title>Supplies Records</Title>
        <NavigationButton
          onClick={handleNavigation}
          aria-label="Go to Supplies Records"
        >
          <ChevronRight size={32} color="black" />
        </NavigationButton>
      </Header>
      <Content>{/* Chart Component Goes Here */}</Content>
    </Wrapper>
  );
};

// Styled Components
const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

const NavigationButton = styled.button`
  background: none;
  border: none;
  margin-top: auto;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
