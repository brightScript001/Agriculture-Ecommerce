import { useMediaQuery } from "react-responsive";
import { CardContainer } from "../components/payment/CardContainer";
import SearchBar from "../ui/SearchBar";
import TransactionHistory from "../components/payment/TransactionHistory";
import { PaymentStatus } from "../components/payment/PaymentStatus";
import { PaymentMode } from "../components/payment/PaymentMode";
import { WithdrawMoney } from "../components/payment/WithdrawMoney";
import styled from "styled-components";

const mobileSearchBarStyles = `
  background-color: var(--color-grey-200);
  border-radius: var(--border-radius-sm);
  width: 100%;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;

  @media (max-width: 768px) {
    margin: auto 0;
    flex-direction: column;
  }
`;

export function PaymentDashboard() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      {isMobile && <SearchBar customStyles={mobileSearchBarStyles} />}
      <CardContainer />
      {!isMobile && <TransactionHistory />}
      <CardsWrapper>
        <PaymentStatus />
        <PaymentMode />
        <WithdrawMoney />
      </CardsWrapper>
    </>
  );
}
