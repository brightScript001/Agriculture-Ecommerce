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
import { EquipmentStatus } from "../types/dashboard-types";

interface EquipmentCardProps {
  equipmentStatus: EquipmentStatus;
}

export const EquipmentCard: React.FC<EquipmentCardProps> = ({
  equipmentStatus,
}) => {
  return (
    <CardContainer>
      <CardHeader>
        <CardTitle>Equipment and Maintenance</CardTitle>
        <ArrowIcon>›</ArrowIcon>
      </CardHeader>

      <CardMessage>
        An overview of your farm's equipment and maintenance level.
      </CardMessage>

      <TableContainer>
        <TableRow>
          <TableCell>Harvester</TableCell>
          <TableCellStatus status={equipmentStatus.harvester}>
            {equipmentStatus.harvester}
          </TableCellStatus>
        </TableRow>
        <TableRow>
          <TableCell>Weeder</TableCell>
          <TableCellStatus status={equipmentStatus.weeder}>
            {equipmentStatus.weeder}
          </TableCellStatus>
        </TableRow>
        <TableRow>
          <TableCell>Tractor</TableCell>
          <TableCellStatus status={equipmentStatus.tractor}>
            {equipmentStatus.tractor}
          </TableCellStatus>
        </TableRow>
        <TableRow>
          <TableCell>Sprayers</TableCell>
          <TableCellStatus status={equipmentStatus.sprayers}>
            {equipmentStatus.sprayers}
          </TableCellStatus>
        </TableRow>
      </TableContainer>
    </CardContainer>
  );
};
