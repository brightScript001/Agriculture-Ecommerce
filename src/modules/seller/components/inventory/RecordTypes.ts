export interface RecordType {
  name: string;
  action: string;
}

export interface FarmGeneralRecord extends RecordType {
  quantity: number;
  areaCovered?: string;
  status?: string;
}

export interface SuppliesRecord extends RecordType {
  quantity: number;
  areaCovered: string;
}

export interface RiskEmergencyRecord extends RecordType {
  quantity: number;
  dateLastDiscovered: string;
  status: string;
}

export interface EquipmentMaintenanceRecord {
  lastMaintenance: string;
  status: string;
}

export interface ColumnDef<T> {
  field: keyof T;
  headerName: string;
}

export type AllRecords =
  | FarmGeneralRecord
  | SuppliesRecord
  | RiskEmergencyRecord;
