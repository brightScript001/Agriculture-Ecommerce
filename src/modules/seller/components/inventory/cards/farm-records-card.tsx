import type React from "react";
import {
  CardContainer,
  CardHeader,
  CardTitle,
  ArrowIcon,
  CardMessage,
  SuppliesDetailContainer,
  SuppliesList,
  TableContainer,
  TableRow,
  TableCell,
  DonutChartContainer,
} from "../styled/dashboard-styles";
import { DonutChart } from "../charts/donut-chart";
import type { FarmRecord } from "../types/dashboard-types";

interface FarmRecordsCardProps {
  farmRecords: FarmRecord;
}

export const FarmRecordsCard: React.FC<FarmRecordsCardProps> = ({
  farmRecords,
}) => {
  return (
    <CardContainer>
      <CardHeader>
        <CardTitle>Farm Records</CardTitle>
        <ArrowIcon>›</ArrowIcon>
      </CardHeader>

      <CardMessage>
        A general assessment of your farm records is not too great.
      </CardMessage>

      <SuppliesDetailContainer>
        <SuppliesList>
          <TableContainer>
            <TableRow>
              <TableCell>Seeds and Planting</TableCell>
              <TableCell>{farmRecords.seedsAndPlanting}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Crops and harvesting</TableCell>
              <TableCell>{farmRecords.cropsAndHarvesting}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Farm Health</TableCell>
              <TableCell>{farmRecords.farmHealth}%</TableCell>
            </TableRow>
          </TableContainer>
        </SuppliesList>

        <DonutChartContainer>
          <DonutChart percentage={farmRecords.farmHealth} color="#f59e0b" />
        </DonutChartContainer>
      </SuppliesDetailContainer>
    </CardContainer>
  );
};
