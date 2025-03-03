import React from "react";
import styled from "styled-components";
import { FarmRecord } from "../components/inventory/farmRecord/DashboardCard";
import { SuppliesRecord } from "../components/inventory/suppliesRecord/DashboardCard";
import { RiskRecord } from "../components/inventory/riskEmergencyRecord/DashboardCard";
import { EquipmentRecord } from "../components/inventory/EquipmentRecord/DashboardCard";

export const InventoryDashboard: React.FC = () => {
  return (
    <Container>
      {/* Top Row */}
      <GridItem area="Hectares">Hectares</GridItem>
      <GridItem area="Seeds">Seeds</GridItem>
      <GridItem area="Harvest">Harvest</GridItem>
      <GridItem area="Weather">Weather Report</GridItem>

      {/* Middle Row */}
      <GridItem area="Farm">
        <FarmRecord />
      </GridItem>
      <GridItem area="Supplies">
        <SuppliesRecord />
      </GridItem>

      {/* Bottom Row */}
      <GridItem area="Risk">
        <RiskRecord />
      </GridItem>
      <GridItem area="Equipment">
        <EquipmentRecord />
      </GridItem>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-areas:
    "Hectares Seeds Harvest Weather"
    "Farm Farm Supplies Supplies"
    "Risk Risk Equipment Equipment";

  /* First three columns are equal, Weather is slightly wider */
  grid-template-columns: repeat(3, 1fr) 1.2fr;

  /* Row heights remain consistent */
  grid-template-rows: 119px 299px 299px;

  gap: 12px;
  padding: 16px;
`;

const GridItem = styled.div<{ area: string }>`
  grid-area: ${({ area }) => area};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  box-sizing: border-box;
  padding: 16px;
  text-align: center;
`;
