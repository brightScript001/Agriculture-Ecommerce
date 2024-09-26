import React from "react";
import RecordForm from "./RecordForm";
import { FarmGeneralRecord } from "./RecordTypes";

interface RecordFormProps {
  selectedRow: FarmGeneralRecord;
  onSubmit: (data: FarmGeneralRecord) => void;
}

const RecordFormComponent: React.FC<RecordFormProps> = ({
  selectedRow,
  onSubmit,
}) => {
  return (
    <RecordForm
      record={selectedRow}
      onSubmit={onSubmit}
      isViewMode={Boolean(selectedRow.name)}
    />
  );
};

export default RecordFormComponent;
