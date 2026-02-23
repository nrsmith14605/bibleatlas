import L from 'leaflet';

export type BookTag = string;

export interface City {
  name: string;
  coords: L.LatLngExpression;
  description: string;
  type: 'major' | 'city' | 'town';
  books: BookTag[];
}

export interface Person {
  name: string;
  description?: string;
  journeys: string[];
  books: BookTag[];
}

export interface Landmark {
  name: string;
  coords: L.LatLngExpression;
  description: string;
  type: 'mountain' | 'tomb' | 'altar' | 'well' | 'gate' | 'site';
  books: BookTag[];
}

export interface JourneyLocation {
  name: string;
  coords: L.LatLngExpression;
  description?: string;
}

export interface Journey {
  name: string;
  path: L.LatLngExpression[];
  color: string;
  locations: JourneyLocation[];
  people: string[];
  books: BookTag[];
}

export interface KingdomEmpire {
  name: string;
  geometry: GeoJSON.Geometry;
  color: string;
  fillOpacity: number;
  description?: string;
  books: BookTag[];
}

export interface Region {
  name: string;
  geometry: GeoJSON.Geometry;
  color: string;
  fillOpacity: number;
  description?: string;
  books: BookTag[];
}

export interface Tribe {
  name: string;
  geometry: GeoJSON.Geometry;
  color: string;
  fillOpacity: number;
  description?: string;
  books: BookTag[];
}

// Rivers use `path` (polyline); seas, deserts, valleys use `geometry` (polygon)
export interface NaturalFeature {
  name: string;
  description: string;
  type: 'river' | 'sea' | 'desert' | 'valley';
  books: BookTag[];
  color: string;
  path?: L.LatLngExpression[];
  geometry?: GeoJSON.Geometry;
  fillOpacity?: number;
}