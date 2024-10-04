import React from "react";
import { SuppliesRecordForm } from "./SuppliesRecordForm";
import { SuppliesRecord } from "../RecordTypes";

interface RecordFormProps {
  selectedRow: SuppliesRecord;
  onSubmit: (data: SuppliesRecord) => void;
}

const SuppliesRecordFormComponent: React.FC<RecordFormProps> = ({
  selectedRow,
  onSubmit,
}) => {
  return (
    <SuppliesRecordForm
      record={selectedRow}
      onSubmit={onSubmit}
      isViewMode={Boolean(selectedRow.name)}
    />
  );
};

export default SuppliesRecordFormComponent;
