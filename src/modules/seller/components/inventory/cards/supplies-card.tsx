import type React from "react";
import {
  CardContainer,
  CardHeader,
  CardTitle,
  ArrowIcon,
  SuppliesDetailContainer,
  SuppliesList,
  TableContainer,
  TableRow,
  TableCell,
  DonutChartContainer,
} from "../styled/dashboard-styles";
import { SuppliesDonutChart } from "../charts/supplies-donut-chart";
import type { SuppliesRecord } from "../types/dashboard-types";
import { useNavigate } from "react-router-dom";

interface SuppliesCardProps {
  suppliesRecord: SuppliesRecord;
}

export const SuppliesCard: React.FC<SuppliesCardProps> = ({
  suppliesRecord,
}) => {
  const navigation = useNavigate();
  return (
    <CardContainer>
      <CardHeader>
        <CardTitle>Supplies Record</CardTitle>
        <ArrowIcon onClick={() => navigation("/seller/inventory/supplies")}>
          ›
        </ArrowIcon>
      </CardHeader>

      <SuppliesDetailContainer>
        <SuppliesList>
          <TableContainer>
            <TableRow>
              <TableCell>Fertilizers</TableCell>
              <TableCell>{suppliesRecord.fertilizers} bags</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Manure</TableCell>
              <TableCell>{suppliesRecord.manure} bags</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pesticides</TableCell>
              <TableCell>{suppliesRecord.pesticides} bags</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Herbicides</TableCell>
              <TableCell>{suppliesRecord.herbicides} bags</TableCell>
            </TableRow>
          </TableContainer>
        </SuppliesList>

        <DonutChartContainer>
          <SuppliesDonutChart supplies={suppliesRecord} />
        </DonutChartContainer>
      </SuppliesDetailContainer>
    </CardContainer>
  );
};
