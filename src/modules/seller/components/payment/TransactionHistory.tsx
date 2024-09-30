import styled from "styled-components";
import { TransactionHistoryHeader } from "./TransactionHistoryHeader";
import { Table } from "./TransactionHistoryTable";
import { TableData } from "./TransactionHistoryTable";

// Define the data here to pass to the table component
const tableData: TableData[] = [
  {
    productSold: "Yam",
    quantitySold: 197,
    pricePerUnit: 700,
    totalEarnings: 137900,
    dateOfSale: "14-Jul-2023",
  },
  {
    productSold: "Palm Oil (25l)",
    quantitySold: 20,
    pricePerUnit: 14000,
    totalEarnings: 280000,
    dateOfSale: "21-Jul-2023",
  },
  {
    productSold: "Yam",
    quantitySold: 197,
    pricePerUnit: 700,
    totalEarnings: 137900,
    dateOfSale: "14-Jul-2023",
  },
  {
    productSold: "Palm Oil (25l)",
    quantitySold: 20,
    pricePerUnit: 14000,
    totalEarnings: 280000,
    dateOfSale: "21-Jul-2023",
  },
];

// Styled Wrapper
const Wrapper = styled.div`
  max-width: 54.5rem;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

function TransactionHistory() {
  return (
    <Wrapper>
      <TransactionHistoryHeader />
      <Table data={tableData} />
    </Wrapper>
  );
}

export default TransactionHistory;
