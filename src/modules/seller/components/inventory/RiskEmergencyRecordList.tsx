import RecordItem from "./RecordItem";

function RiskEmergencyRecordList() {
  return (
    <>
      <RecordItem title="Farm attack by pests" />
      <RecordItem title="Fruits over-ripening" noBackground={true} />
      <RecordItem title="Fire in farmhouse" />
      <RecordItem title="Expired herbicide" noBackground={true} />
    </>
  );
}

export default RiskEmergencyRecordList;
