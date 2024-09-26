// Base interface with common properties
export interface RecordType {
  name: string; // Common property for all record types
  action: string; // Common action property for all record types
}

// Specific record types extending RecordType
export interface FarmGeneralRecord extends RecordType {
  quantity: number;
  areaCovered?: string; // Optional property
  status?: string; // Only for farm health
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

// Column definition remains unchanged
export interface ColumnDef<T> {
  field: keyof T;
  headerName: string;
}

// Using RecordType in a union type
export type AllRecords =
  | FarmGeneralRecord
  | SuppliesRecord
  | RiskEmergencyRecord;
