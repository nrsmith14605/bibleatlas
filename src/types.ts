import L from 'leaflet';

export type BookTag = string;

export interface City {
  name: string;
  speakAs?: string;
  coords: L.LatLngExpression;
  description: string;
  location: 'confirmed' | 'probable' | 'unknown';
  books: BookTag[];
}

export interface Person {
  name: string;
  speakAs?: string;
  description?: string;
  journeys: string[];
  books: BookTag[];
}

export interface Landmark {
  name: string;
  speakAs?: string;
  coords: L.LatLngExpression;
  description: string;
  location: 'confirmed' | 'probable' | 'unknown';
  books: BookTag[];
}

export interface JourneyLocation {
  name: string;
  speakAs?: string;
  coords: L.LatLngExpression;
  description?: string;
}

export interface Journey {
  name: string;
  speakAs?: string;
  path: L.LatLngExpression[];
  color: string;
  locations: JourneyLocation[];
  people: string[];
  books: BookTag[];
}

/** A polygon snapshot of a kingdom/empire's territory at a specific year. */
export interface TerritorySnapshot {
  year: number;
  geometry: GeoJSON.Geometry;
  /** Optional note shown in popup for this specific snapshot, e.g. "At peak under Sargon II" */
  note?: string;
}

export interface KingdomEmpire {
  name: string;
  speakAs?: string;
  color: string;
  fillOpacity: number;
  description?: string;
  books: BookTag[];
  /** First year this kingdom/empire existed (BC = negative) */
  yearStart: number;
  /** Last year this kingdom/empire existed (BC = negative) */
  yearEnd: number;
  /**
   * Ordered list of territory snapshots.
   * At render time the app picks the snapshot whose year is closest to (and <=) the selected year.
   * If no snapshot is <= selectedYear, nothing is rendered.
   */
  snapshots: TerritorySnapshot[];
}

export interface Region {
  name: string;
  speakAs?: string;
  geometry: GeoJSON.Geometry;
  color: string;
  fillOpacity: number;
  description?: string;
  location: 'confirmed' | 'probable' | 'unknown';
  books: BookTag[];
}

export interface Tribe {
  name: string;
  speakAs?: string;
  geometry: GeoJSON.Geometry;
  color: string;
  fillOpacity: number;
  description?: string;
  books: BookTag[];
}

// Rivers use `geoJsonName` (fetched from Natural Earth CDN) or fallback `path` (polyline).
// Seas, deserts, and valleys use `geometry` (polygon).
export interface NaturalFeature {
  name: string;
  speakAs?: string;
  description: string;
  type: 'river' | 'sea' | 'desert' | 'valley';
  books: BookTag[];
  color: string;
  geoJsonName?: string;
  lakeGeoJsonName?: string;
  path?: L.LatLngExpression[];
  geometry?: GeoJSON.Geometry;
  fillOpacity?: number;
}