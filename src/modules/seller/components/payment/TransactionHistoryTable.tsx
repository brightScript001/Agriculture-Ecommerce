import React from "react";
import styled from "styled-components";

export interface TableData {
  productSold: string;
  quantitySold: number;
  pricePerUnit: number;
  totalEarnings: number;
  dateOfSale: string;
}

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  font-size: var(--font-size-sm);
  table-layout: fixed;
`;

const StyledHeader = styled.thead`
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);

  & th {
    padding: 1.6rem 2.4rem;
    border-bottom: 1px solid var(--color-grey-200);
    border-right: 1px solid var(--color-grey-200);
    text-align: left;
  }

  & th:last-child {
    border-right: none;
  }
`;

const StyledRow = styled.tr`
  & td {
    padding: 1.2rem 2.4rem;
    border-right: 1px solid var(--color-grey-200);
    text-align: left;
  }

  & td:last-child {
    border-right: none;
  }
`;

const StyledBody = styled.tbody``;

export const Table: React.FC<{ data: TableData[] }> = ({ data }) => {
  return (
    <StyledTable>
      <StyledHeader>
        <tr>
          <th>Product Sold</th>
          <th>Quantity Sold</th>
          <th>Price per Unit</th>
          <th>Total Earnings</th>
          <th>Date of Sale</th>
        </tr>
      </StyledHeader>

      <StyledBody>
        {data.map((row, index) => (
          <StyledRow key={index}>
            <td>{row.productSold}</td>
            <td>{row.quantitySold}</td>
            <td>{`N${row.pricePerUnit.toFixed(2)}`}</td>
            <td>{`N${row.totalEarnings.toFixed(2)}`}</td>
            <td>{row.dateOfSale}</td>
          </StyledRow>
        ))}
      </StyledBody>
    </StyledTable>
  );
};
