import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-areas:
    "a-K8kJ0-0 a-K8kJ0-1 a-K8kJ0-2 a-K8kJ0-3"
    "a-GR7BD-0-1 a-GR7BD-0-1 a-GR7BD-0-2 a-GR7BD-0-2"
    "a-J8j0J-1 a-J8j0J-1 a-x6NRP-1 a-x6NRP-1";
  grid-template-columns: 220px 220px 220px 408px;
  grid-template-rows: 119px 299px 299px;
  gap: 10px;
`;

const GridItem = styled.div<{ area: string }>`
  border: 1px dashed #888;
  grid-area: ${({ area }) => area};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const GridNavigation = styled(GridItem)`
  flex-direction: column;
  gap: 10px;
  h2 {
    margin: 0;
    font-size: 16px;
    color: #007bff;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const InventoryDashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <GridItem area="a-K8kJ0-0">a-K8kJ0-0</GridItem>
      <GridItem area="a-K8kJ0-1">a-K8kJ0-1</GridItem>
      <GridItem area="a-K8kJ0-2">a-K8kJ0-2</GridItem>
      <GridItem area="a-K8kJ0-3">a-K8kJ0-3</GridItem>
      <GridItem area="a-GR7BD-0-1">a-GR7BD-0-1</GridItem>
      <GridItem area="a-GR7BD-0-2">a-GR7BD-0-2</GridItem>
      <GridItem area="a-J8j0J-1">a-J8j0J-1</GridItem>

      {/* Navigation Section */}
      <GridNavigation area="a-x6NRP-1">
        <h2 onClick={() => navigate("/seller/farm-records")}>
          Farm General Records (Last Updated April 29, 2024)
        </h2>
        <h2 onClick={() => navigate("/seller/supplies-records")}>
          Supplies Record (Last Updated April 17, 2024)
        </h2>
        <h2 onClick={() => navigate("/seller/risk-emergency-records")}>
          Risk and Emergency Record (Last Updated April 17, 2024)
        </h2>
        <h2 onClick={() => navigate("/seller/equipment-records")}>
          Equipment and Maintenance (Last Updated April 17, 2024)
        </h2>
      </GridNavigation>
    </Container>
  );
};
