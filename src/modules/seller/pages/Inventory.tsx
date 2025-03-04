import type React from "react";
import {
  EquipmentStatus,
  FarmRecord,
  RiskReport,
  SuppliesRecord,
  WeatherReport,
} from "../components/inventory/types/dashboard-types";
import { DashboardContainer } from "../components/inventory/styled/dashboard-styles";
import { MetricsCard } from "../components/inventory/cards/metrics-card";
import { FarmRecordsCard } from "../components/inventory/cards/farm-records-card";
import { SuppliesCard } from "../components/inventory/cards/supplies-card";
import { RiskReportCard } from "../components/inventory/cards/risk-report-card";
import { EquipmentCard } from "../components/inventory/cards/equipment-card";

export const InventoryDashboard: React.FC = () => {
  // Sample data
  const farmSize = 120;
  const seedsCount = 950;
  const harvestCount = 3093;

  const weatherReport: WeatherReport = {
    today: {
      temperature: "29°C",
      precipitation: "Rain",
    },
    tomorrow: {
      temperature: "22°C",
      precipitation: "Cloudy",
    },
  };

  const farmRecords: FarmRecord = {
    seedsAndPlanting: 950,
    cropsAndHarvesting: 3093,
    farmHealth: 26,
  };

  const suppliesRecord: SuppliesRecord = {
    fertilizers: 18,
    manure: 56,
    pesticides: 210,
    herbicides: 82,
  };

  const riskReport: RiskReport = {
    farmAttackByPests: "Resolved",
    fruitsOverRipening: "Unresolved",
    fireInFarmhouse: "Resolved",
    expiredHerbicide: "Resolved",
  };

  const equipmentStatus: EquipmentStatus = {
    harvester: "Due for maintenance",
    weeder: "Spoilt",
    tractor: "Good condition",
    sprayers: "Good condition",
  };

  return (
    <DashboardContainer>
      <MetricsCard
        farmSize={farmSize}
        seedsCount={seedsCount}
        harvestCount={harvestCount}
        weatherReport={weatherReport}
      />
      <FarmRecordsCard farmRecords={farmRecords} />
      <SuppliesCard suppliesRecord={suppliesRecord} />
      <RiskReportCard riskReport={riskReport} />
      <EquipmentCard equipmentStatus={equipmentStatus} />
    </DashboardContainer>
  );
};
