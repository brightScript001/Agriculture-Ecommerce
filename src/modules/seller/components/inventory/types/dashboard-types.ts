export type WeatherReport = {
  today: {
    temperature: string
    precipitation: string
  }
  tomorrow: {
    temperature: string
    precipitation: string
  }
}

export type FarmRecord = {
  seedsAndPlanting: number
  cropsAndHarvesting: number
  farmHealth: number
}

export type SuppliesRecord = {
  fertilizers: number
  manure: number
  pesticides: number
  herbicides: number
}

export type RiskReport = {
  farmAttackByPests: "Resolved" | "Unresolved"
  fruitsOverRipening: "Resolved" | "Unresolved"
  fireInFarmhouse: "Resolved" | "Unresolved"
  expiredHerbicide: "Resolved" | "Unresolved"
}

export type EquipmentStatus = {
  harvester: "Good condition" | "Due for maintenance" | "Spoilt"
  weeder: "Good condition" | "Due for maintenance" | "Spoilt"
  tractor: "Good condition" | "Due for maintenance" | "Spoilt"
  sprayers: "Good condition" | "Due for maintenance" | "Spoilt"
}

