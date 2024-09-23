import RecordItem from "./RecordItem";

function SuppliesRecordList() {
  return (
    <>
      <RecordItem title="Fertilizers" />
      <RecordItem title="Manure" noBackground={true} />
      <RecordItem title="Pesticides" />
      <RecordItem title="Herbicides" noBackground={true} />
    </>
  );
}

export default SuppliesRecordList;
