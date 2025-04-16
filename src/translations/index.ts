
import { Language } from "@/context/LanguageContext";

type TranslationKeys = {
  title: string;
  tankCapacity: string;
  fuelConsumption: string;
  startDestination: string;
  endDestination: string;
  distance: string;
  speed: string;
  fuelPrice: string;
  calculate: string;
  fuelNeeded: string;
  travelTime: string;
  estimatedCost: string;
  tankCapacityPlaceholder: string;
  fuelConsumptionPlaceholder: string;
  startDestinationPlaceholder: string;
  endDestinationPlaceholder: string;
  distancePlaceholder: string;
  speedPlaceholder: string;
  fuelPricePlaceholder: string;
};

export const translations: Record<Language, TranslationKeys> = {
  hr: {
    title: "Kalkulator Potrošnje Goriva za Jahte",
    tankCapacity: "Kapacitet spremnika (L)",
    fuelConsumption: "Potrošnja (L/NM)",
    startDestination: "Početna destinacija",
    endDestination: "Završna destinacija",
    distance: "Udaljenost (NM)",
    speed: "Brzina (čvorovi)",
    fuelPrice: "Cijena goriva (€/L)",
    calculate: "Izračunaj",
    fuelNeeded: "Potrebno goriva",
    travelTime: "Vrijeme plovidbe",
    estimatedCost: "Procjena troška",
    tankCapacityPlaceholder: "npr. 1000",
    fuelConsumptionPlaceholder: "npr. 20",
    startDestinationPlaceholder: "npr. Split",
    endDestinationPlaceholder: "npr. Dubrovnik",
    distancePlaceholder: "npr. 95",
    speedPlaceholder: "npr. 20",
    fuelPricePlaceholder: "npr. 1.5"
  },
  en: {
    title: "Yacht Fuel Consumption Calculator",
    tankCapacity: "Tank Capacity (L)",
    fuelConsumption: "Consumption (L/NM)",
    startDestination: "Starting Point",
    endDestination: "Destination",
    distance: "Distance (NM)",
    speed: "Speed (knots)",
    fuelPrice: "Fuel Price (€/L)",
    calculate: "Calculate",
    fuelNeeded: "Fuel Required",
    travelTime: "Travel Time",
    estimatedCost: "Estimated Cost",
    tankCapacityPlaceholder: "e.g. 1000",
    fuelConsumptionPlaceholder: "e.g. 20",
    startDestinationPlaceholder: "e.g. Split",
    endDestinationPlaceholder: "e.g. Dubrovnik",
    distancePlaceholder: "e.g. 95",
    speedPlaceholder: "e.g. 20",
    fuelPricePlaceholder: "e.g. 1.5"
  },
  de: {
    title: "Kraftstoffverbrauchsrechner für Yachten",
    tankCapacity: "Tankkapazität (L)",
    fuelConsumption: "Verbrauch (L/NM)",
    startDestination: "Ausgangspunkt",
    endDestination: "Zielort",
    distance: "Entfernung (NM)",
    speed: "Geschwindigkeit (Knoten)",
    fuelPrice: "Kraftstoffpreis (€/L)",
    calculate: "Berechnen",
    fuelNeeded: "Benötigter Kraftstoff",
    travelTime: "Fahrzeit",
    estimatedCost: "Geschätzte Kosten",
    tankCapacityPlaceholder: "z.B. 1000",
    fuelConsumptionPlaceholder: "z.B. 20",
    startDestinationPlaceholder: "z.B. Split",
    endDestinationPlaceholder: "z.B. Dubrovnik",
    distancePlaceholder: "z.B. 95",
    speedPlaceholder: "z.B. 20",
    fuelPricePlaceholder: "z.B. 1.5"
  },
  it: {
    title: "Calcolatore del Consumo di Carburante per Yacht",
    tankCapacity: "Capacità Serbatoio (L)",
    fuelConsumption: "Consumo (L/NM)",
    startDestination: "Punto di Partenza",
    endDestination: "Destinazione",
    distance: "Distanza (NM)",
    speed: "Velocità (nodi)",
    fuelPrice: "Prezzo Carburante (€/L)",
    calculate: "Calcola",
    fuelNeeded: "Carburante Necessario",
    travelTime: "Tempo di Viaggio",
    estimatedCost: "Costo Stimato",
    tankCapacityPlaceholder: "es. 1000",
    fuelConsumptionPlaceholder: "es. 20",
    startDestinationPlaceholder: "es. Split",
    endDestinationPlaceholder: "es. Dubrovnik",
    distancePlaceholder: "es. 95",
    speedPlaceholder: "es. 20",
    fuelPricePlaceholder: "es. 1.5"
  }
};
