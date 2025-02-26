import React from "react";
import styled from "styled-components";
import { FarmRecord } from "../components/inventory/farmRecord/DashboardCard";
import { SuppliesRecord } from "../components/inventory/suppliesRecord/DashboardCard";
import { RiskRecord } from "../components/inventory/riskEmergencyRecord/DashboardCard";
import { EquipmentRecord } from "../components/inventory/EquipmentRecord/DashboardCard";

export const InventoryDashboard: React.FC = () => {
  return (
    <Container>
      <GridItem area="Hectares">Hectares</GridItem>
      <GridItem area="Seeds">Seeds</GridItem>
      <GridItem area="Harvest">Harvest</GridItem>
      <GridItem area="Weather">Weather Report</GridItem>
      <GridItem area="Farm">
        <FarmRecord />
      </GridItem>
      <GridItem area="Supplies">
        <SuppliesRecord />
      </GridItem>
      <GridItem area="Risk">
        <RiskRecord />
      </GridItem>
      <GridItem area="Equipment">
        <EquipmentRecord />
      </GridItem>
    </Container>
  );
};

// style
const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-areas:
    "Hectares Seeds Harvest Weather"
    "Farm Farm Supplies Supplies"
    "Risk Risk Equipment Equipment";
  grid-template-columns: 220px 220px 220px 408px;
  grid-template-rows: 119px 299px 299px;
  gap: 10px;
`;

const GridItem = styled.div<{ area: string }>`
  grid-area: ${({ area }) => area};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-0);
  border: none;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  box-sizing: border-box;

  text-align: center;
`;
