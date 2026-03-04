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

export interface KingdomEmpire {
  name: string;
  speakAs?: string;
  geometry: GeoJSON.Geometry;
  color: string;
  fillOpacity: number;
  description?: string;
  books: BookTag[];
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
  // For rivers: the feature name to match in the Natural Earth GeoJSON dataset
  geoJsonName?: string;
  lakeGeoJsonName?: string;
  // Fallback polyline path if CDN data is unavailable
  path?: L.LatLngExpression[];
  // For seas, deserts, valleys
  geometry?: GeoJSON.Geometry;
  fillOpacity?: number;
}