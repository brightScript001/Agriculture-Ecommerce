import type React from "react";
import {
  CardContainer,
  CardHeader,
  CardTitle,
  ArrowIcon,
  CardMessage,
  TableContainer,
  TableRow,
  TableCell,
  TableCellStatus,
} from "../styled/dashboard-styles";
import type { RiskReport } from "../types/dashboard-types";

interface RiskReportCardProps {
  riskReport: RiskReport;
}

export const RiskReportCard: React.FC<RiskReportCardProps> = ({
  riskReport,
}) => {
  return (
    <CardContainer>
      <CardHeader>
        <CardTitle>Risk/Emergency Report</CardTitle>
        <ArrowIcon>›</ArrowIcon>
      </CardHeader>

      <CardMessage>
        An overview of your farm's risk/emergency report.
      </CardMessage>

      <TableContainer>
        <TableRow>
          <TableCell>Farm attack by pests</TableCell>
          <TableCellStatus status={riskReport.farmAttackByPests}>
            {riskReport.farmAttackByPests}
          </TableCellStatus>
        </TableRow>
        <TableRow>
          <TableCell>Fruits over-ripening</TableCell>
          <TableCellStatus status={riskReport.fruitsOverRipening}>
            {riskReport.fruitsOverRipening}
          </TableCellStatus>
        </TableRow>
        <TableRow>
          <TableCell>Fire in farmhouse</TableCell>
          <TableCellStatus status={riskReport.fireInFarmhouse}>
            {riskReport.fireInFarmhouse}
          </TableCellStatus>
        </TableRow>
        <TableRow>
          <TableCell>Expired herbicide</TableCell>
          <TableCellStatus status={riskReport.expiredHerbicide}>
            {riskReport.expiredHerbicide}
          </TableCellStatus>
        </TableRow>
      </TableContainer>
    </CardContainer>
  );
};
