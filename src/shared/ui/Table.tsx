import React, { createContext, useContext, FC } from "react";
import styled from "styled-components";

// Styled Components
const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);
  font-size: var(--font-size-sm);
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const CommonRow = styled.div<{ columns: string }>`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
`;

const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2.4rem;
  text-decoration: underline;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  & > div {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
`;

const StyledFooter = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  &:not(:has(*)) {
    display: none;
  }
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

// Context for Table
interface TableContextProps {
  columns: string;
}

const TableContext = createContext<TableContextProps | undefined>(undefined);

// Table Component Props
interface TableProps {
  columns: string;
  children: React.ReactNode;
}

// Table Component and its subcomponents
interface TableComponent extends FC<TableProps> {
  Header: FC<{ children: React.ReactNode }>;
  Body: FC<BodyProps<any>>;
  Row: FC<{ children: React.ReactNode; onClick?: () => void }>;
  Footer: FC<{ children?: React.ReactNode }>;
}

const Table: TableComponent = ({ columns, children }) => {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable role="table">{children}</StyledTable>
    </TableContext.Provider>
  );
};

// Header Component
const Header: FC<{ children: React.ReactNode }> = ({ children }) => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error("Header must be used within a Table");
  }
  const { columns } = context;
  return (
    <StyledHeader role="row" columns={columns} as="header">
      {children}
    </StyledHeader>
  );
};

// Row Component
const Row: FC<{ children: React.ReactNode; onClick?: () => void }> = ({
  children,
  onClick,
}) => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error("Row must be used within a Table");
  }
  const { columns } = context;
  return (
    <StyledRow role="row" columns={columns} onClick={onClick}>
      {children}
    </StyledRow>
  );
};

// Body Component
interface BodyProps<T> {
  data: T[];
  render: (item: T) => React.ReactNode;
}

const Body = <T,>({ data, render }: BodyProps<T>) => {
  if (!data.length) return <Empty>No data to show at the moment</Empty>;

  return <StyledBody>{data.map(render)}</StyledBody>;
};

// Footer Component
const Footer: FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <StyledFooter>{children}</StyledFooter>;
};

// Adding components to Table
Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
