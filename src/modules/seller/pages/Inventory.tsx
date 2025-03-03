import React from "react";
import styled from "styled-components";
import { FarmRecord } from "../components/inventory/farmRecord/DashboardCard";
import { SuppliesRecord } from "../components/inventory/suppliesRecord/DashboardCard";
import { RiskRecord } from "../components/inventory/riskEmergencyRecord/DashboardCard";
import { EquipmentRecord } from "../components/inventory/EquipmentRecord/DashboardCard";

export const InventoryDashboard: React.FC = () => {
  return (
    <Container>
      <GridItem area="Hectares">
        <StatValue color="#7086FF">120</StatValue>
        <StatLabel>Hectares</StatLabel>
        <StatTitle color="#7086FF">Farm Size</StatTitle>
      </GridItem>

      <GridItem area="Seeds">
        <StatValue color="#E2B11B">950</StatValue>
        <StatLabel>Seeds</StatLabel>
        <StatTitle color="#E2B11B">Seeds & Planting</StatTitle>
      </GridItem>

      <GridItem area="Harvest">
        <StatValue color="#5BAA60">3,093</StatValue>
        <StatLabel>Harvest</StatLabel>
        <StatTitle color="#5BAA60">Crops & Harvest</StatTitle>
      </GridItem>

      <GridItem area="Weather">
        <StatTitle>Weather Report</StatTitle>
        <WeatherDetails>
          <WeatherColumn>
            <WeatherLabel>Today's Report</WeatherLabel>
            <WeatherData>Temperature: 29°C</WeatherData>
            <WeatherData>Precipitation: Rain</WeatherData>
          </WeatherColumn>
          <WeatherColumn>
            <WeatherLabel>Tomorrow's Report</WeatherLabel>
            <WeatherData>Temperature: 22°C</WeatherData>
            <WeatherData>Precipitation: Cloudy</WeatherData>
          </WeatherColumn>
        </WeatherDetails>
      </GridItem>

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

// Styled Components
const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-areas:
    "Hectares Seeds Harvest Weather"
    "Farm Farm Supplies Supplies"
    "Risk Risk Equipment Equipment";

  grid-template-columns: repeat(3, 1fr) 1.2fr;
  grid-template-rows: 119px 299px 299px;
  gap: 12px;
  padding: 16px;

  @media (max-width: 1024px) {
    grid-template-areas:
      "Hectares Seeds"
      "Harvest Weather"
      "Farm Farm"
      "Supplies Supplies"
      "Risk Equipment";
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }

  @media (max-width: 768px) {
    grid-template-areas:
      "Hectares"
      "Seeds"
      "Harvest"
      "Weather"
      "Farm"
      "Supplies"
      "Risk"
      "Equipment";
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled.div<{ area: string }>`
  grid-area: ${({ area }) => area};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  padding: 16px;
  text-align: center;
  min-height: 100px;
`;

const StatTitle = styled.div<{ color?: string }>`
  font-size: 14px;
  color: ${({ color }) => color || "var(--color-grey-600)"};
  font-weight: 500;
`;

const StatLabel = styled.div`
  font-size: 12px;
  margin-bottom: 10px;
`;

const StatValue = styled.div<{ color?: string }>`
  font-size: 20px;
  font-weight: 500;
  color: ${({ color }) => color || "var(--color-grey-500)"};
`;

const WeatherDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const WeatherColumn = styled.div`
  text-align: left;
  flex: 1;
`;

const WeatherLabel = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const WeatherData = styled.div`
  font-size: 12px;
  color: var(--color-grey-600);
`;
