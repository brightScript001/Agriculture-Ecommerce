import RecordItem from "./RecordItem";

function FarmRecordList() {
  return (
    <>
      <RecordItem title="Seeds and Planting" />
      <RecordItem title="Crops and Harvesting" noBackground={true} />
      <RecordItem title="Farm Health" />
    </>
  );
}

export default FarmRecordList;
