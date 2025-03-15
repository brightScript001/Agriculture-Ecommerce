import { useMediaQuery } from "react-responsive";
import { CardContainer } from "../components/payment/CardContainer";
import SearchBar from "../../../shared/ui/SearchBar";
import TransactionHistory from "../components/payment/TransactionHistory";
import { PaymentStatus } from "../components/payment/PaymentStatus";
import { PaymentMode } from "../components/payment/PaymentMode";
import { WithdrawMoney } from "../components/payment/WithdrawMoney";
import styled from "styled-components";

export function PaymentDashboard() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      {isMobile && <SearchBar />}
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

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;

  @media (max-width: 768px) {
    margin: auto 0;
    flex-direction: column;
  }
`;
