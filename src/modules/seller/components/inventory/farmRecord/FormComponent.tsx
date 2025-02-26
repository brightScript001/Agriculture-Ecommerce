import React from "react";
import { FarmRecordForm } from "./Form";
import { FarmGeneralRecord } from "../RecordTypes";

interface RecordFormProps {
  selectedRow: FarmGeneralRecord;
  onSubmit: (data: FarmGeneralRecord) => void;
}

const FarmRecordFormComponent: React.FC<RecordFormProps> = ({
  selectedRow,
  onSubmit,
}) => {
  return (
    <FarmRecordForm
      record={selectedRow}
      onSubmit={onSubmit}
      isViewMode={Boolean(selectedRow.name)}
    />
  );
};

export default FarmRecordFormComponent;
