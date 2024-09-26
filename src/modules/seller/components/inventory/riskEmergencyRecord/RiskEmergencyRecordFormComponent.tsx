import { FC } from "react";
import { RiskEmergencyRecord } from "../RecordTypes";
import { RiskEmergencyRecordForm } from "./RiskEmergencyRecordForm";

interface FormProps {
  selectedRow: RiskEmergencyRecord;
  onSubmit: (data: RiskEmergencyRecord) => void;
}

const RiskEmergencyRecordFormComponent: FC<FormProps> = ({
  selectedRow,
  onSubmit,
}) => {
  return (
    <RiskEmergencyRecordForm
      record={selectedRow}
      onSubmit={onSubmit}
      isViewMode={Boolean(selectedRow.name)}
    />
  );
};

export default RiskEmergencyRecordFormComponent;
