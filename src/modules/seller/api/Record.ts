export interface RecordRow {
  id: string;
  name: string;
  quantity: number;
  date: string;
  areaCovered: string;
  action: string;
}

export const fetchRecords = async (): Promise<RecordRow[]> => {
  const response = await fetch("http://localhost:8080/records");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data: RecordRow[] = await response.json();
  return data;
};
