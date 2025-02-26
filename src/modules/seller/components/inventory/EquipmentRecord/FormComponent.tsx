import React from "react";
import { EquipmentRecordForm } from "./EquipmentRecordForm";
import { EquipmentMaintenanceRecord } from "../RecordTypes";

interface RecordFormProps {
  selectedRow: EquipmentMaintenanceRecord;
  onSubmit: (data: EquipmentMaintenanceRecord) => void;
}

const EquipmentRecordFormComponent: React.FC<RecordFormProps> = ({
  selectedRow,
  onSubmit,
}) => {
  return (
    <EquipmentRecordForm
      record={selectedRow}
      onSubmit={onSubmit}
      isViewMode={Boolean(selectedRow.name)}
    />
  );
};

export default EquipmentRecordFormComponent;
