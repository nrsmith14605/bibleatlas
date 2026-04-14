import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { MapContainer, TileLayer, GeoJSON, Polyline, Marker, Popup, CircleMarker, Tooltip, useMap, useMapEvents } from 'react-leaflet';
import type { GeoJsonObject, FeatureCollection } from 'geojson';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './App.css';
import { books, bibleBooks } from './data/books';
import { cities } from './data/Cities';
import { people } from './data/people';
import { landmarks } from './data/landmarks';
import { naturalFeatures } from './data/naturalFeatures';
import { journeys } from './data/journeys';
import { regions } from './data/regions';
import { tribes } from './data/tribes';
import { kingdomsEmpires } from './data/kingdomsempires';


delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

function matchesBook(itemBooks: string[], selectedBook: string): boolean {
  if (!selectedBook) return true;
  return itemBooks.includes(selectedBook);
}

function MapResizer({ trigger }: { trigger: boolean }) {
  const map = useMap();
  useEffect(() => {
    const t = setTimeout(() => map.invalidateSize(), 360);
    return () => clearTimeout(t);
  }, [trigger, map]);
  return null;
}

function haversineKm(a: L.LatLngExpression, b: L.LatLngExpression): number {
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const [lat1, lng1] = a as [number, number];
  const [lat2, lng2] = b as [number, number];
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const sinLat = Math.sin(dLat / 2);
  const sinLng = Math.sin(dLng / 2);
  const c = 2 * Math.asin(
    Math.sqrt(sinLat * sinLat + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * sinLng * sinLng)
  );
  return R * c;
}

function totalDistanceKm(path: L.LatLngExpression[]): number {
  let total = 0;
  for (let i = 0; i + 1 < path.length; i++) total += haversineKm(path[i], path[i + 1]);
  return total;
}

function Section({
  title, expanded, onToggle, badge, children,
}: {
  title: string; expanded: boolean; onToggle: () => void; badge?: number; children: React.ReactNode;
}) {
  return (
    <section className="control-section">
      <h2 className="section-title collapsible" onClick={onToggle}>
        <span className={`arrow ${expanded ? 'down' : 'right'}`}>▶</span>
        {title}
        {badge != null && badge > 0 && <span className="section-badge">{badge}</span>}
      </h2>
      {expanded && <div className="section-body">{children}</div>}
    </section>
  );
}

function CheckList<T extends { name: string }>({
  items, selected, onToggle, searchPlaceholder, renderIcon, emptyMessage, extra,
}: {
  items: T[]; selected: string[]; onToggle: (name: string) => void;
  searchPlaceholder?: string; renderIcon?: (item: T) => React.ReactNode;
  emptyMessage?: string; extra?: React.ReactNode;
}) {
  const [search, setSearch] = useState('');
  const filtered = items.filter(i => i.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <>
      {extra}
      {searchPlaceholder && (
        <input type="text" className="search-input" placeholder={searchPlaceholder}
          value={search} onChange={e => setSearch(e.target.value)} />
      )}
      <div className="checkbox-group">
        {filtered.length === 0 && <p className="empty-message">{emptyMessage ?? 'No items match this filter'}</p>}
        {filtered.map(item => (
          <label key={item.name} className="checkbox-label">
            <input type="checkbox" checked={selected.includes(item.name)} onChange={() => onToggle(item.name)} />
            {renderIcon?.(item)}
            <span>{item.name}</span>
          </label>
        ))}
      </div>
    </>
  );
}

const YEAR_MIN = -2000;
const YEAR_MAX = 100;
const PX_PER_YR = 4;
const TOTAL_YEARS = YEAR_MAX - YEAR_MIN;
const TRACK_W = TOTAL_YEARS * PX_PER_YR;

function yearToX(year: number): number { return (year - YEAR_MIN) * PX_PER_YR; }
function xToYear(x: number): number { return Math.round(x / PX_PER_YR + YEAR_MIN); }
function formatYear(y: number): string {
  if (y === 0) return '0';
  return y < 0 ? `${Math.abs(y)} BC` : `${y} AD`;
}

function getBooksForYear(year: number) {
  return bibleBooks.filter(b => !b.prophetic && year >= b.yearStart && year <= b.yearEnd);
}

// ── Text-to-speech ─────────────────────────────────────────────────────────
function speakName(name: string, speakAs?: string) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(speakAs ?? name);
  utt.lang = 'en-US';
  utt.rate = 0.85;
  window.speechSynthesis.speak(utt);
}

// HTML snippet for bindPopup() string-based popups
function speakBtn(name: string, speakAs?: string): string {
  const text = (speakAs ?? name).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  return `<button onclick="window.speechSynthesis.cancel();var u=new SpeechSynthesisUtterance('${text}');u.lang='en-US';u.rate=0.85;window.speechSynthesis.speak(u);" title="Pronounce" style="background:none;border:none;cursor:pointer;font-size:0.95rem;padding:0 0 0 5px;vertical-align:middle;opacity:0.6;" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.6">🔊</button>`;
}

// React component for JSX <Popup> instances
function SpeakButton({ name, speakAs }: { name: string; speakAs?: string }) {
  return (
    <button
      onClick={() => speakName(name, speakAs)}
      title="Pronounce"
      style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.95rem', padding: '0 0 0 5px', verticalAlign: 'middle', opacity: 0.6 }}
      onMouseOver={e => (e.currentTarget.style.opacity = '1')}
      onMouseOut={e => (e.currentTarget.style.opacity = '0.6')}
    >🔊</button>
  );
}

function Timeline({ selectedYear, setSelectedYear }: {
  selectedYear: number | null;
  setSelectedYear: (y: number | null) => void;
}) {
  const barRef = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const centered = yearToX(0) - bar.clientWidth / 2;
    setScrollLeft(Math.max(0, Math.min(TRACK_W - bar.clientWidth, centered)));
  }, []);

  // Scroll to centre on selectedYear only if the marker is off-screen
  useEffect(() => {
    if (selectedYear === null) return;
    const bar = barRef.current;
    if (!bar) return;
    const markerX = yearToX(selectedYear);
    const screenX = markerX - scrollLeft;
    const isVisible = screenX >= 0 && screenX <= bar.clientWidth;
    if (!isVisible) {
      const targetScroll = markerX - bar.clientWidth / 2;
      setScrollLeft(Math.max(0, Math.min(TRACK_W - bar.clientWidth, targetScroll)));
    }
  }, [selectedYear]); // eslint-disable-line react-hooks/exhaustive-deps

  // Re-clamp scrollLeft whenever the bar resizes (e.g. sidebar open/close)
  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const ro = new ResizeObserver(() => {
      setScrollLeft(prev => Math.max(0, Math.min(TRACK_W - bar.clientWidth, prev)));
    });
    ro.observe(bar);
    return () => ro.disconnect();
  }, []);

  const [editing, setEditing] = useState(false);
  const [editVal, setEditVal] = useState('');
  const drag = useRef<{ startX: number; startScroll: number } | null>(null);
  const wasDragged = useRef(false);

  const ticks = useMemo(() => {
    const result = [];
    for (let y = YEAR_MIN; y <= YEAR_MAX; y += 25) result.push(y);
    return result;
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains('tl-year-label') ||
      (e.target as HTMLElement).classList.contains('tl-year-input')) return;
    drag.current = { startX: e.clientX, startScroll: scrollLeft };
    wasDragged.current = false;
    e.preventDefault();
  }, [scrollLeft]);

  useEffect(() => {
    const DRAG_THRESHOLD = 4;
    const onMove = (e: MouseEvent) => {
      if (!drag.current) return;
      const dx = drag.current.startX - e.clientX;
      if (Math.abs(dx) > DRAG_THRESHOLD) wasDragged.current = true;
      const max = TRACK_W - (barRef.current?.clientWidth ?? 600);
      setScrollLeft(Math.max(0, Math.min(max, drag.current.startScroll + dx)));
    };
    const onUp = () => { drag.current = null; };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => { window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp); };
  }, []);

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (wasDragged.current) { wasDragged.current = false; return; }
    const bar = barRef.current;
    if (!bar) return;
    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left + scrollLeft;
    const year = Math.max(YEAR_MIN, Math.min(YEAR_MAX, xToYear(clickX)));
    setSelectedYear(year);
    setEditing(false);
  }, [scrollLeft, setSelectedYear]);

  const cursorScreenX = selectedYear !== null ? yearToX(selectedYear) - scrollLeft : null;

  const commitEdit = () => {
    const parsed = parseInt(editVal, 10);
    if (!isNaN(parsed)) {
      const clamped = Math.max(YEAR_MIN, Math.min(YEAR_MAX, parsed));
      setSelectedYear(clamped);
      const bar = barRef.current;
      if (bar) {
        const markerX = yearToX(clamped);
        const screenX = markerX - scrollLeft;
        const isVisible = screenX >= 0 && screenX <= bar.clientWidth;
        if (!isVisible) {
          const targetScroll = markerX - bar.clientWidth / 2;
          setScrollLeft(Math.max(0, Math.min(TRACK_W - bar.clientWidth, targetScroll)));
        }
      }
    }
    setEditing(false);
  };

  return (
    <div ref={barRef} className="timeline-bar" onMouseDown={handleMouseDown} onClick={handleClick}>
      <div className="timeline-track" style={{ width: TRACK_W, left: -scrollLeft }}>
        <span className="tl-era-label" style={{ left: yearToX(-5) - 30 }}>◀ BC</span>
        <span className="tl-era-label" style={{ left: yearToX(5) }}>AD ▶</span>
        {ticks.map(year => {
          const isCentury = year % 100 === 0;
          const isFifty = year % 50 === 0 && !isCentury;
          const x = yearToX(year);
          const lineH = isCentury ? 30 : isFifty ? 18 : 10;
          const lineClass = isCentury ? 'major' : isFifty ? 'semi' : '';
          return (
            <div key={year} className="tl-tick" style={{ left: x }}>
              <div className={`tl-tick-line${lineClass ? ' ' + lineClass : ''}`} style={{ height: lineH }} />
              {isCentury && (
                <span className="tl-tick-label major" style={{ left: 0 }}>
                  {year === 0 ? '0' : Math.abs(year)}
                </span>
              )}
            </div>
          );
        })}
      </div>
      {selectedYear !== null && cursorScreenX !== null &&
        cursorScreenX > -10 && cursorScreenX < (barRef.current?.clientWidth ?? 9999) + 10 && (
          <>
            <div className="tl-cursor" style={{ left: cursorScreenX }} />
            <div className="tl-year-label" style={{ left: cursorScreenX }}
              onClick={e => { e.stopPropagation(); setEditVal(String(selectedYear)); setEditing(true); }}>
              {editing ? (
                <input className="tl-year-input" value={editVal} autoFocus
                  onChange={e => setEditVal(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter') commitEdit(); if (e.key === 'Escape') setEditing(false); }}
                  onBlur={commitEdit} onClick={e => e.stopPropagation()} />
              ) : formatYear(selectedYear)}
            </div>
          </>
        )}
    </div>
  );
}

const RIVER_CDN_URL =
  'https://cdn.jsdelivr.net/gh/martynafford/natural-earth-geojson@master/50m/physical/ne_50m_rivers_lake_centerlines.json';
const LAKE_CDN_URL =
  'https://cdn.jsdelivr.net/gh/martynafford/natural-earth-geojson@master/50m/physical/ne_50m_lakes.json';
const COUNTRIES_CDN_URL =
  'https://cdn.jsdelivr.net/gh/martynafford/natural-earth-geojson@master/50m/cultural/ne_50m_admin_0_countries.json';

function useCountriesGeoJson(): FeatureCollection | null {
  const [data, setData] = useState<FeatureCollection | null>(null);
  useEffect(() => {
    fetch(COUNTRIES_CDN_URL)
      .then(r => r.json())
      .then(setData)
      .catch(err => console.error('Failed to load countries GeoJSON:', err));
  }, []);
  return data;
}

function useRiverGeoJson() {
  const [data, setData] = useState<FeatureCollection | null>(null);
  useEffect(() => {
    fetch(RIVER_CDN_URL).then(r => r.json()).then(setData)
      .catch(err => console.warn('Failed to load river GeoJSON:', err));
  }, []);
  return data;
}

function useLakeGeoJson() {
  const [data, setData] = useState<FeatureCollection | null>(null);
  useEffect(() => {
    fetch(LAKE_CDN_URL)
      .then(r => r.json())
      .then((fc: FeatureCollection) => {
        fc.features.forEach(f => {
          const [lng, lat] = (f.geometry as any).coordinates?.[0]?.[0] ?? [];
          if (lng > 30 && lng < 40 && lat > 28 && lat < 36) {
            console.log('Lake near Israel:', f.properties?.name, f.properties);
          }
        });
        setData(fc);
      })
      .catch(err => console.warn('Failed to load lake GeoJSON:', err));
  }, []);
  return data;
}

function RiverLayer({ geoJsonName, color, name, speakAs, description, allRiverData }: {
  geoJsonName: string; color: string; name: string; speakAs?: string; description: string; allRiverData: FeatureCollection;
}) {
  const filtered = useMemo<FeatureCollection>(() => ({
    type: 'FeatureCollection',
    features: allRiverData.features.filter(f => f.properties?.name === geoJsonName),
  }), [allRiverData, geoJsonName]);

  if (filtered.features.length === 0) return null;
  return (
    <GeoJSON key={`${name}-${geoJsonName}`} data={filtered as GeoJsonObject}
      pathOptions={{ color, weight: 2, opacity: 0.85 }}
      onEachFeature={(_feature, layer) => {
        layer.bindPopup(`<strong>${name}</strong>${speakBtn(name, speakAs)}<br/><span style="font-size:0.9em">${description}</span>`);
      }} />
  );
}

function CountriesLayer({ data }: { data: FeatureCollection }) {
  return (
    <GeoJSON
      key="countries-borders"
      data={data}
      pathOptions={{
        color: '#555',
        weight: 1.2,
        fillColor: 'transparent',
        fillOpacity: 0,
      }}
      onEachFeature={(feature, layer) => {
        const name: string =
          feature.properties?.NAME_EN ??
          feature.properties?.NAME ??
          feature.properties?.name ??
          '';
        if (!name) return;

        const geom = feature.geometry as any;
        if (!geom?.coordinates) return;

        const LABEL_OVERRIDES: Record<string, [number, number]> = {
          'Israel':    [31.5, 34.9],
          'Palestine': [31.9, 35.25],
          'West Bank': [31.9, 35.25],
          'Gaza':      [31.4, 34.35],
          'Gaza Strip':[31.4, 34.35],
        };

        let avgLat: number;
        let avgLng: number;

        if (LABEL_OVERRIDES[name]) {
          [avgLat, avgLng] = LABEL_OVERRIDES[name];
        } else {
          const getRings = (coords: any): number[][][] => {
            if (typeof coords[0][0] === 'number') return [coords as number[][]];
            if (typeof coords[0][0][0] === 'number') return coords as number[][][];
            return (coords as any[]).flatMap(getRings);
          };
          const rings = getRings(geom.coordinates);
          const largest = rings.reduce((a, b) => a.length >= b.length ? a : b, []);
          if (largest.length === 0) return;
          avgLng = largest.reduce((s: number, c: number[]) => s + c[0], 0) / largest.length;
          avgLat = largest.reduce((s: number, c: number[]) => s + c[1], 0) / largest.length;
        }

        layer.bindTooltip(name, {
          permanent: true,
          direction: 'center',
          className: 'country-label',
        });

        layer.on('add', () => {
          const tooltip = (layer as any).getTooltip();
          if (tooltip) tooltip.setLatLng([avgLat, avgLng]);
        });
      }}
    />
  );
}

function LakeLayer({ lakeGeoJsonName, color, fillOpacity, name, speakAs, description, allLakeData }: {
  lakeGeoJsonName: string; color: string; fillOpacity: number;
  name: string; speakAs?: string; description: string; allLakeData: FeatureCollection;
}) {
  const filtered = useMemo<FeatureCollection>(() => ({
    type: 'FeatureCollection',
    features: allLakeData.features.filter(f => f.properties?.name === lakeGeoJsonName),
  }), [allLakeData, lakeGeoJsonName]);

  if (filtered.features.length === 0) return null;
  return (
    <GeoJSON key={`lake-${name}-${lakeGeoJsonName}`} data={filtered as GeoJsonObject}
      pathOptions={{ color, weight: 1, fillColor: color, fillOpacity }}
      onEachFeature={(_feature, layer) => {
        layer.bindPopup(`<strong>${name}</strong>${speakBtn(name, speakAs)}<br/><span style="font-size:0.9em">${description}</span>`);
      }} />
  );
}

function YearInput({ selectedYear, setSelectedYear }: {
  selectedYear: number | null;
  setSelectedYear: (y: number | null) => void;
}) {
  const [val, setVal] = useState('');
  const [error, setError] = useState(false);

  const commit = () => {
    const parsed = parseInt(val, 10);
    if (!isNaN(parsed)) {
      const clamped = Math.max(YEAR_MIN, Math.min(YEAR_MAX, parsed));
      setSelectedYear(clamped);
      setError(false);
      setVal('');
    } else if (val.trim() !== '') {
      setError(true);
    }
  };

  return (
    <div className="year-jump-wrap">
      <input
        className={`year-jump-input${error ? ' error' : ''}`}
        type="number"
        placeholder={selectedYear !== null ? String(selectedYear) : 'e.g. -1000'}
        value={val}
        onChange={e => { setVal(e.target.value); setError(false); }}
        onKeyDown={e => { if (e.key === 'Enter') commit(); }}
      />
      <button className="year-jump-btn" onClick={commit}>Go</button>
      {error && <span className="year-jump-error">Invalid year</span>}
    </div>
  );
}

function BookSearch({ setSelectedYear }: {
  setSelectedYear: (y: number | null) => void;
}) {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return bibleBooks
      .filter(b => b.name.toLowerCase().includes(q))
      .slice(0, 8);
  }, [query]);

  const select = (book: typeof bibleBooks[0]) => {
    setSelectedYear(book.yearStart);
    setQuery('');
    setFocused(false);
  };

  return (
    <div className="book-search-wrap">
      <div className="book-search-input-row">
        <span className="book-search-icon">🔍</span>
        <input
          className="book-search-input"
          type="text"
          placeholder="Search a book…"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
        />
        {query && (
          <button className="book-search-clear" onClick={() => setQuery('')}>✕</button>
        )}
      </div>
      {focused && results.length > 0 && (
        <ul className="book-search-results">
          {results.map(b => (
            <li key={b.name} className="book-search-result" onMouseDown={() => select(b)}>
              <span className="book-search-result-name">{b.name}</span>
              <span className="book-search-result-year">{b.prophetic ? 'Prophetic' : b.dateLabel}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function WayfinderMapHandler({
  active, mode, waypointCount, maxWaypoints, onMapClick, onDrawPoint,
}: {
  active: boolean;
  mode: 'points' | 'draw';
  waypointCount: number;
  maxWaypoints: number;
  onMapClick: (coords: L.LatLngExpression) => void;
  onDrawPoint: (coords: L.LatLngExpression) => void;
}) {
  const map = useMap();
  const isDrawing = useRef(false);
  const lastDrawPoint = useRef<L.LatLng | null>(null);
  const DRAW_INTERVAL_PX = 8;

  useEffect(() => {
    if (!active) return;

    const container = map.getContainer();

    if (mode === 'points') {
      container.style.cursor = waypointCount >= maxWaypoints ? 'not-allowed' : 'crosshair';
    } else {
      container.style.cursor = 'crosshair';
    }

    const onMouseDown = (e: MouseEvent) => {
      if (!active || mode !== 'draw') return;
      isDrawing.current = true;
      lastDrawPoint.current = null;
      const rect = container.getBoundingClientRect();
      const point = L.point(e.clientX - rect.left, e.clientY - rect.top);
      const latlng = map.containerPointToLatLng(point);
      onDrawPoint([latlng.lat, latlng.lng]);
      lastDrawPoint.current = latlng;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDrawing.current || mode !== 'draw') return;
      const rect = container.getBoundingClientRect();
      const point = L.point(e.clientX - rect.left, e.clientY - rect.top);
      const latlng = map.containerPointToLatLng(point);
      if (lastDrawPoint.current) {
        const prev = map.latLngToContainerPoint(lastDrawPoint.current);
        const curr = map.latLngToContainerPoint(latlng);
        const dx = curr.x - prev.x;
        const dy = curr.y - prev.y;
        if (Math.sqrt(dx * dx + dy * dy) >= DRAW_INTERVAL_PX) {
          onDrawPoint([latlng.lat, latlng.lng]);
          lastDrawPoint.current = latlng;
        }
      }
    };

    const onMouseUp = () => { isDrawing.current = false; };

    if (mode === 'draw') {
      map.dragging.disable();
      container.addEventListener('mousedown', onMouseDown);
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    }

    return () => {
      container.style.cursor = '';
      map.dragging.enable();
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [active, mode, waypointCount, maxWaypoints, map]); // eslint-disable-line react-hooks/exhaustive-deps

  useMapEvents({
    click(e) {
      if (!active || mode !== 'points') return;
      if (waypointCount >= maxWaypoints) return;
      onMapClick([e.latlng.lat, e.latlng.lng]);
    },
  });

  return null;
}

function MapZoomController({ mapType }: { mapType: string }) {
  return null;
}

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarTab, setSidebarTab] = useState<'map' | 'timeline' | 'wayfinder'>('map');
  const [selectedBook, setSelectedBook] = useState('');
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  // ── Wayfinder state ───────────────────────────────────────────────────────
  const MAX_WAYPOINTS = 5;
  type WayfinderMode = 'cursor' | 'points' | 'draw';
  const [wayfinderMode, setWayfinderMode] = useState<WayfinderMode>('cursor');
  const [waypoints, setWaypoints] = useState<{ id: number; label: string; coords: L.LatLngExpression }[]>([]);
  const [drawnPath, setDrawnPath] = useState<L.LatLngExpression[]>([]);
  const [wpSearch, setWpSearch] = useState('');
  const [wpSearchFocused, setWpSearchFocused] = useState(false);
  const nextWpId = useRef(0);
  const riverGeoJson = useRiverGeoJson();
  const lakeGeoJson = useLakeGeoJson();
  const [showCountries, setShowCountries] = useState(false);
  const countriesGeoJson = useCountriesGeoJson();

  const [citiesExp, setCitiesExp] = useState(false);
  const [landmarksExp, setLandmarksExp] = useState(false);
  const [natExp, setNatExp] = useState(false);
  const [journeysExp, setJourneysExp] = useState(false);
  const [regionsExp, setRegionsExp] = useState(false);
  const [tribesExp, setTribesExp] = useState(false);
  const [kingdomsExp, setKingdomsExp] = useState(false);

  const [peopleExpanded, setPeopleExpanded] = useState(false);
  const [selectedPeople, setSelectedPeople] = useState<string[]>([]);

  const [selCities, setSelCities] = useState<string[]>([]);
  const [selLandmarks, setSelLandmarks] = useState<string[]>([]);
  const [selNat, setSelNat] = useState<string[]>([]);
  const [selJourneys, setSelJourneys] = useState<string[]>([]);
  const [selRegions, setSelRegions] = useState<string[]>([]);
  const [selTribes, setSelTribes] = useState<string[]>([]);
  const [selKingdoms, setSelKingdoms] = useState<string[]>([]);
  const [showAllKingdoms, setShowAllKingdoms] = useState(false);

  const [mapType, setMapType] = useState('physical');

  const handleBookChange = (book: string) => {
    setSelectedBook(book);
    setSelectedPeople([]);
    setSelJourneys([]);
    setSelLandmarks([]);
    setSelNat([]);
    setSelRegions([]);
    setSelTribes([]);
    setSelCities([]);
    setSelKingdoms([]);
    setShowAllKingdoms(false);
  };

  const avCities = useMemo(() => cities.filter(c => matchesBook(c.books, selectedBook)), [selectedBook]);
  const avLandmarks = useMemo(() => landmarks.filter(l => matchesBook(l.books, selectedBook)), [selectedBook]);
  const avNat = useMemo(() => naturalFeatures.filter(n => matchesBook(n.books, selectedBook)), [selectedBook]);
  const avPeople = useMemo(() => people.filter(p => matchesBook(p.books, selectedBook)), [selectedBook]);
  const avJourneys = useMemo(() => {
    const byBook = journeys.filter(j => matchesBook(j.books, selectedBook));
    if (selectedPeople.length === 0) return byBook;
    return byBook.filter(j => j.people.some(p => selectedPeople.includes(p)));
  }, [selectedBook, selectedPeople]);
  const avRegions = useMemo(() => regions.filter(r => matchesBook(r.books, selectedBook)), [selectedBook]);
  const avTribes = useMemo(() => tribes.filter(t => matchesBook(t.books, selectedBook)), [selectedBook]);
  const avKingdoms = useMemo(() => {
    return kingdomsEmpires.filter(k => {
      if (!matchesBook(k.books, selectedBook)) return false;
      if (selectedYear === null) return true;
      const start = k.yearStart ?? -99999;
      const end   = k.yearEnd   ??  99999;
      return selectedYear >= start && selectedYear <= end;
    });
  }, [selectedBook, selectedYear]);

  /** Pick the territory snapshot closest to (and not after) the selected year */
  function getKingdomGeometry(k: typeof kingdomsEmpires[0], year: number | null): GeoJSON.Geometry | null {
    if (!k.snapshots?.length) return null;
    const candidates = k.snapshots.filter(s => year === null || s.year <= year);
    if (!candidates.length) return null;
    return candidates[candidates.length - 1].geometry;
  }

  function getKingdomSnapshotNote(k: typeof kingdomsEmpires[0], year: number | null): string {
    if (!k.snapshots?.length) return '';
    const candidates = k.snapshots.filter(s => year === null || s.year <= year);
    if (!candidates.length) return '';
    return candidates[candidates.length - 1].note ?? '';
  }

  const toggle = (set: React.Dispatch<React.SetStateAction<string[]>>, name: string) =>
    set(prev => prev.includes(name) ? prev.filter(x => x !== name) : [...prev, name]);

  // When showAllKingdoms is on, keep selKingdoms in sync with avKingdoms as year changes.
  // When off, just prune any kingdoms that have expired.
  useEffect(() => {
    if (showAllKingdoms) {
      setSelKingdoms(avKingdoms.map(k => k.name));
    } else {
      if (selectedYear === null) return;
      setSelKingdoms(prev => prev.filter(name => {
        const k = kingdomsEmpires.find(k => k.name === name);
        if (!k) return false;
        const start = k.yearStart ?? -99999;
        const end   = k.yearEnd   ??  99999;
        return selectedYear >= start && selectedYear <= end;
      }));
    }
  }, [selectedYear, showAllKingdoms, avKingdoms]);


  const allCitiesSelected = avCities.length > 0 && avCities.every(c => selCities.includes(c.name));
  const toggleAllCities = () => {
    if (allCitiesSelected) setSelCities(prev => prev.filter(n => !avCities.some(c => c.name === n)));
    else setSelCities(prev => Array.from(new Set([...prev, ...avCities.map(c => c.name)])));
  };

  const allKingdomsSelected = avKingdoms.length > 0 && avKingdoms.every(k => selKingdoms.includes(k.name));
  const toggleAllKingdoms = () => {
    if (allKingdomsSelected) setSelKingdoms(prev => prev.filter(n => !avKingdoms.some(k => k.name === n)));
    else setSelKingdoms(prev => Array.from(new Set([...prev, ...avKingdoms.map(k => k.name)])));
  };

  const clearAll = () => {
    setSelCities([]); setSelLandmarks([]); setSelNat([]); setSelJourneys([]);
    setSelRegions([]); setSelTribes([]); setSelKingdoms([]); setSelectedPeople([]);
    setShowAllKingdoms(false);
    setWaypoints([]); setDrawnPath([]); setWayfinderMode('cursor');
  };

  const MAP_MAX_ZOOM: Record<string, number> = {
    physical:  8,
    terrain:   9,
    natgeo:    12,
    topo:      18,
    street:    18,
    osm:       18,
    satellite: 18,
    ocean:     10,
  };

  const tileUrl = (() => {
    switch (mapType) {
      case 'terrain':   return 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}';
      case 'natgeo':    return 'https://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}';
      case 'topo':      return 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}';
      case 'street':    return 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}';
      case 'osm':       return 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      case 'satellite': return 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
      case 'ocean':     return 'https://services.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}';
      default:          return 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}';
    }
  })();

  const currentMaxZoom = MAP_MAX_ZOOM[mapType] ?? 8;

  const CITY_COLOR = '#2c1810';
  const CITY_RADIUS = 3;

  const natEmoji = (type: string) =>
    ({ river: '〰️', sea: '🌊', desert: '🏜️', valley: '🏞️' }[type] ?? '🌍');

  const landmarkEmoji = (name: string): string => {
    const n = name.toLowerCase();
    if (n.includes('mount') || n.includes('sinai') || n.includes('horeb') || n.includes('ararat') || n.includes('carmel') || n.includes('hermon') || n.includes('nebo') || n.includes('olives')) return '⛰️';
    if (n.includes('well') || n.includes('lahai') || n.includes('spring')) return '💧';
    if (n.includes('cave') || n.includes('tomb') || n.includes('coffin') || n.includes('kever')) return '🪦';
    if (n.includes('tower') || n.includes('babel') || n.includes('eder') || n.includes('migdal')) return '🗼';
    if (n.includes('altar') || n.includes('tabernacle')) return '🔥';
    if (n.includes('oak') || n.includes('tree') || n.includes('allon') || n.includes('grove')) return '🌳';
    if (n.includes('tent')) return '⛺';
    if (n.includes('gate')) return '🚪';
    if (n.includes('field') || n.includes('floor') || n.includes('threshing')) return '🌾';
    if (n.includes('galeed') || n.includes('el-bethel') || n.includes('pillar')) return '🪨';
    return '📍';
  };

  const locationCertainty = (loc: 'confirmed' | 'probable' | 'unknown') => ({
    confirmed: { label: 'Confirmed location', color: '#27ae60' },
    probable:  { label: 'Probable location',  color: '#e67e22' },
    unknown:   { label: 'Uncertain location', color: '#c0392b' },
  }[loc]);

  // ── Wayfinder computed ────────────────────────────────────────────────────
  const wpSearchResults = useMemo(() => {
    const q = wpSearch.trim().toLowerCase();
    if (!q) return [];
    const cityMatches = cities
      .filter(c => c.name.toLowerCase().includes(q))
      .map(c => ({ name: c.name, coords: c.coords as L.LatLngExpression, type: 'city' as const }));
    const landmarkMatches = landmarks
      .filter(l => l.name.toLowerCase().includes(q))
      .map(l => ({ name: l.name, coords: l.coords as L.LatLngExpression, type: 'landmark' as const }));
    return [...cityMatches, ...landmarkMatches].slice(0, 8);
  }, [wpSearch]);

  const waypointDistanceKm = useMemo(() => {
    if (waypoints.length < 2) return 0;
    let total = 0;
    for (let i = 0; i < waypoints.length - 1; i++) {
      total += haversineKm(waypoints[i].coords, waypoints[i + 1].coords);
    }
    return total;
  }, [waypoints]);

  const drawnDistanceKm = useMemo(() => {
    if (drawnPath.length < 2) return 0;
    let total = 0;
    for (let i = 0; i < drawnPath.length - 1; i++) {
      total += haversineKm(drawnPath[i], drawnPath[i + 1]);
    }
    return total;
  }, [drawnPath]);

  const addWaypoint = (label: string, coords: L.LatLngExpression) => {
    if (waypoints.length >= MAX_WAYPOINTS) return;
    setWaypoints(prev => [...prev, { id: nextWpId.current++, label, coords }]);
  };

  const removeWaypoint = (id: number) => setWaypoints(prev => prev.filter(w => w.id !== id));

  const clearWayfinder = () => {
    setWaypoints([]);
    setDrawnPath([]);
    setWpSearch('');
    setWayfinderMode('cursor');
  };

  const peopleFilter = avPeople.length > 0 ? (
    <div className="people-filter-wrap">
      <div className="people-filter-header" onClick={() => setPeopleExpanded(e => !e)}>
        <span className="people-filter-label">Filter by Person</span>
        <span className="people-filter-caret">{peopleExpanded ? '▲' : '▼'}</span>
        {selectedPeople.length > 0 && (
          <span className="people-filter-active">{selectedPeople.join(', ')}</span>
        )}
      </div>
      {peopleExpanded && (
        <div className="checkbox-group people-filter-list">
          {avPeople.map(person => (
            <label key={person.name} className="checkbox-label">
              <input type="checkbox" checked={selectedPeople.includes(person.name)}
                onChange={() => toggle(setSelectedPeople, person.name)} />
              <span className="person-icon">👤</span>
              <span>{person.name}</span>
              <span className="journey-count">({person.journeys.length})</span>
            </label>
          ))}
        </div>
      )}
    </div>
  ) : null;

  return (
    <div className={`app${sidebarOpen ? '' : ' sidebar-collapsed'}`}>

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <header className="header">
        <div className="header-content">
          <div className="title-section">
            <h1 className="title">BibleAtlas</h1>
            <p className="subtitle">Journey through Biblical history</p>
          </div>
          <div className="header-controls">
            <button className="cities-toggle" onClick={clearAll}>Clear All</button>
            <div className="map-type-selector">
              <label htmlFor="map-type">Map Style:</label>
              <select id="map-type" className="map-type-select" value={mapType} onChange={e => setMapType(e.target.value)}>
                <option value="physical">Physical Map</option>
                <option value="terrain">Terrain Base</option>
                <option value="natgeo">National Geographic</option>
                <option value="topo">Topographic</option>
                <option value="street">Street Map (Esri)</option>
                <option value="osm">OpenStreetMap</option>
                <option value="satellite">Satellite Imagery</option>
                <option value="ocean">Ocean Base</option>
              </select>
            </div>
            <label className="countries-toggle">
              <input
                type="checkbox"
                checked={showCountries}
                onChange={e => setShowCountries(e.target.checked)}
              />
              Modern Borders
            </label>
          </div>
        </div>
      </header>

      {/* ── Sidebar ────────────────────────────────────────────────────────── */}
      <aside className="sidebar">
        <div className="sidebar-tabs">
          <button
            className={`sidebar-tab-btn${sidebarTab === 'map' ? ' active' : ''}`}
            onClick={() => setSidebarTab('map')}
          >🗺️ Map</button>
          <button
            className={`sidebar-tab-btn${sidebarTab === 'timeline' ? ' active' : ''}`}
            onClick={() => setSidebarTab('timeline')}
          >📅 Timeline</button>
          <button
            className={`sidebar-tab-btn${sidebarTab === 'wayfinder' ? ' active' : ''}`}
            onClick={() => setSidebarTab('wayfinder')}
          >📏 Wayfinder</button>
        </div>

        <div className="sidebar-content">

          {/* ── TAB 1: Map ─────────────────────────────────────────────────── */}
          {sidebarTab === 'map' && <>
            <section className="control-section">
              <h2 className="section-title">Bible Books</h2>
              <select className="book-select" value={selectedBook} onChange={e => handleBookChange(e.target.value)}>
                <option value="">All Books</option>
                {books.map(b => <option key={b} value={b}>{b}</option>)}
              </select>
            </section>

            <Section title="Cities / Settlements" expanded={citiesExp} onToggle={() => setCitiesExp(e => !e)}>
              <div className="cities-controls">
                <button className="select-all-btn" onClick={toggleAllCities}>
                  {allCitiesSelected ? 'Deselect All' : 'Select All'}
                </button>
              </div>
              <CheckList items={avCities} selected={selCities} onToggle={name => toggle(setSelCities, name)}
                searchPlaceholder="Search cities…" renderIcon={_ => <span className="city-marker" />}
                emptyMessage="No cities for this filter" />
            </Section>

            <Section title="Landmarks" expanded={landmarksExp} onToggle={() => setLandmarksExp(e => !e)} badge={selLandmarks.length}>
              <CheckList items={avLandmarks} selected={selLandmarks} onToggle={name => toggle(setSelLandmarks, name)}
                searchPlaceholder="Search landmarks…"
                renderIcon={item => <span className="landmark-icon">{landmarkEmoji(item.name)}</span>}
                emptyMessage="No landmarks for this filter" />
            </Section>

            <Section title="Natural Features" expanded={natExp} onToggle={() => setNatExp(e => !e)} badge={selNat.length}>
              <CheckList items={avNat} selected={selNat} onToggle={name => toggle(setSelNat, name)}
                searchPlaceholder="Search features…"
                renderIcon={item => <span className="nat-icon">{natEmoji(item.type)}</span>}
                emptyMessage="No features for this filter" />
            </Section>

            <Section title="Journeys" expanded={journeysExp} onToggle={() => setJourneysExp(e => !e)} badge={selJourneys.length}>
              <CheckList items={avJourneys} selected={selJourneys} onToggle={name => toggle(setSelJourneys, name)}
                searchPlaceholder="Search journeys…"
                renderIcon={item => <span className="journey-marker" style={{ backgroundColor: (item as any).color }} />}
                emptyMessage="No journeys match filters" extra={peopleFilter} />
            </Section>

            <Section title="Regions" expanded={regionsExp} onToggle={() => setRegionsExp(e => !e)} badge={selRegions.length}>
              <CheckList items={avRegions} selected={selRegions} onToggle={name => toggle(setSelRegions, name)}
                searchPlaceholder="Search regions…"
                renderIcon={item => <span className="kingdom-marker" style={{ backgroundColor: (item as any).color, borderRadius: 2 }} />}
                emptyMessage="No regions for this filter" />
            </Section>

            <Section title="Ethnic / Tribal Peoples" expanded={tribesExp} onToggle={() => setTribesExp(e => !e)} badge={selTribes.length}>
              <CheckList items={avTribes} selected={selTribes} onToggle={name => toggle(setSelTribes, name)}
                searchPlaceholder="Search peoples…"
                renderIcon={item => <span className="kingdom-marker" style={{ backgroundColor: (item as any).color, borderRadius: '50%' }} />}
                emptyMessage="No peoples for this filter" />
            </Section>
          </>}

          {/* ── TAB 2: Timeline ────────────────────────────────────────────── */}
          {sidebarTab === 'timeline' && <>
            <section className="control-section">
              <h2 className="section-title">Selected Year</h2>
              <div className="timeline-tab-year-display">
                {selectedYear !== null
                  ? <span className="timeline-tab-year-value">{formatYear(selectedYear)}</span>
                  : <span className="timeline-tab-year-empty">No year selected — click on the timeline below</span>
                }
              </div>
              <div className="timeline-tab-year-input-wrap">
                <label className="timeline-tab-year-input-label">Jump to year:</label>
                <YearInput selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
              </div>
            </section>

            <section className="control-section">
              <h2 className="section-title">Search by Book</h2>
              <BookSearch setSelectedYear={setSelectedYear} />
            </section>

            <section className="control-section">
              <h2 className="section-title">Books This Period</h2>
              {selectedYear !== null ? (() => {
                const matchedBooks = getBooksForYear(selectedYear);
                return (
                  <div className="timeline-tab-book-list">
                    {matchedBooks.length === 0
                      ? <p className="timeline-tab-no-book">No books correspond to {formatYear(selectedYear)}</p>
                      : matchedBooks.map(b => (
                          <div key={b.name} className="timeline-tab-book-card">
                            <div className="timeline-tab-book-name">📖 {b.name}</div>
                            <div className="timeline-tab-book-range">⏱ Events: {b.dateLabel}</div>
                            <div className="timeline-tab-book-range">✍️ Written: {b.writtenLabel}</div>
                          </div>
                        ))
                    }
                  </div>
                );
              })() : (
                <p className="timeline-tab-no-book">Select a year to see which books it falls in</p>
              )}
            </section>

            <Section title="Kingdoms / Empires" expanded={kingdomsExp} onToggle={() => setKingdomsExp(e => !e)} badge={selKingdoms.length}>
              {selectedYear === null && (
                <p style={{ fontSize: '0.82em', color: '#888', margin: '0 0 8px', lineHeight: 1.4 }}>
                  📅 Select a year on the timeline to filter kingdoms by era.
                </p>
              )}
              <label className="checkbox-label" style={{ marginBottom: 8, fontWeight: 600, borderBottom: '1px solid #e0e0e0', paddingBottom: 6 }}>
                <input
                  type="checkbox"
                  checked={showAllKingdoms}
                  onChange={e => {
                    setShowAllKingdoms(e.target.checked);
                    if (!e.target.checked) setSelKingdoms([]);
                  }}
                />
                <span>Show all active kingdoms</span>
              </label>
              <CheckList items={avKingdoms} selected={selKingdoms} onToggle={name => {
                setShowAllKingdoms(false);
                toggle(setSelKingdoms, name);
              }}
                searchPlaceholder="Search kingdoms…"
                renderIcon={item => <span className="kingdom-marker" style={{ backgroundColor: (item as any).color }} />}
                emptyMessage={selectedYear !== null ? `No kingdoms active in ${formatYear(selectedYear)}` : 'No kingdoms for this filter'} />
            </Section>
          </>}

          {/* ── TAB 3: Wayfinder ───────────────────────────────────────────── */}
          {sidebarTab === 'wayfinder' && <>
            <section className="control-section">
              <h2 className="section-title">Mode</h2>
              <div className="wayfinder-mode-btns">
                <button
                  className={`wayfinder-mode-btn${wayfinderMode === 'cursor' ? ' active' : ''}`}
                  onClick={() => setWayfinderMode('cursor')}
                >🖱️ Cursor</button>
                <button
                  className={`wayfinder-mode-btn${wayfinderMode === 'points' ? ' active' : ''}`}
                  onClick={() => setWayfinderMode('points')}
                >📍 Place Points</button>
                <button
                  className={`wayfinder-mode-btn${wayfinderMode === 'draw' ? ' active' : ''}`}
                  onClick={() => setWayfinderMode('draw')}
                >✏️ Draw Line</button>
              </div>
              <p className="wayfinder-hint">
                {wayfinderMode === 'cursor' && 'Pan and zoom the map normally.'}
                {wayfinderMode === 'points' && 'Click the map or search below to place up to 5 points.'}
                {wayfinderMode === 'draw' && 'Hold and drag on the map to draw a freehand path.'}
              </p>
            </section>

            {wayfinderMode !== 'cursor' && <>
              <section className="control-section">
                <h2 className="section-title">Search Location</h2>
                <div className="book-search-wrap">
                  <div className="book-search-input-row">
                    <span className="book-search-icon">🔍</span>
                    <input
                      className="book-search-input"
                      type="text"
                      placeholder="Search cities or landmarks…"
                      value={wpSearch}
                      onChange={e => setWpSearch(e.target.value)}
                      onFocus={() => setWpSearchFocused(true)}
                      onBlur={() => setTimeout(() => setWpSearchFocused(false), 150)}
                      disabled={waypoints.length >= MAX_WAYPOINTS}
                    />
                    {wpSearch && <button className="book-search-clear" onClick={() => setWpSearch('')}>✕</button>}
                  </div>
                  {wpSearchFocused && wpSearchResults.length > 0 && (
                    <ul className="book-search-results">
                      {wpSearchResults.map(r => (
                        <li key={r.name} className="book-search-result" onMouseDown={() => {
                          addWaypoint(r.name, r.coords);
                          setWpSearch('');
                        }}>
                          <span className="book-search-result-name">{r.type === 'city' ? '🏛️' : '📍'} {r.name}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>

              <section className="control-section">
                <h2 className="section-title">Waypoints {waypoints.length > 0 && <span className="section-badge">{waypoints.length}/{MAX_WAYPOINTS}</span>}</h2>
                {waypoints.length === 0
                  ? <p className="wayfinder-hint">No points placed yet.</p>
                  : <ol className="wayfinder-point-list">
                      {waypoints.map((wp, i) => (
                        <li key={wp.id} className="wayfinder-point-item">
                          <span className="wayfinder-point-num">{i + 1}</span>
                          <span className="wayfinder-point-label">{wp.label}</span>
                          <button className="wayfinder-point-remove" onClick={() => removeWaypoint(wp.id)}>✕</button>
                        </li>
                      ))}
                    </ol>
                }
              </section>
            </>}

            <section className="control-section">
              <h2 className="section-title">Distance</h2>
              {wayfinderMode === 'cursor' && waypoints.length === 0 && drawnPath.length === 0
                ? <p className="wayfinder-hint">Switch to Place Points or Draw Line to start measuring.</p>
                : wayfinderMode === 'draw'
                  ? drawnPath.length < 2
                    ? <p className="wayfinder-hint">Draw a path to measure distance.</p>
                    : <div className="wayfinder-distance">
                        <span className="wayfinder-distance-km">{drawnDistanceKm.toFixed(1)} km</span>
                        <span className="wayfinder-distance-mi">{(drawnDistanceKm * 0.621371).toFixed(1)} mi</span>
                      </div>
                  : waypoints.length < 2
                    ? <p className="wayfinder-hint">Add at least 2 points to measure distance.</p>
                    : <div className="wayfinder-distance">
                        <span className="wayfinder-distance-km">{waypointDistanceKm.toFixed(1)} km</span>
                        <span className="wayfinder-distance-mi">{(waypointDistanceKm * 0.621371).toFixed(1)} mi</span>
                      </div>
              }
              {(waypoints.length > 0 || drawnPath.length > 0) && (
                <button className="wayfinder-clear-btn" onClick={clearWayfinder}>Clear All</button>
              )}
            </section>
          </>}

        </div>
      </aside>

      {/* ── Map ────────────────────────────────────────────────────────────── */}
      <main className="map-container">
        <div className="map-leaflet-wrap">
          <button className="sidebar-toggle" onClick={() => setSidebarOpen(o => !o)}
            title={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}>
            <span className="sidebar-toggle-icon">◀</span>
          </button>
          <MapContainer center={[31.5, 35.0] as L.LatLngExpression}
            zoom={6} minZoom={3} maxZoom={18} style={{ height: '100%', width: '100%' }}>
            <TileLayer key={mapType} attribution='&copy; <a href="https://www.esri.com">Esri</a>' url={tileUrl} maxZoom={18} {...(currentMaxZoom < 18 ? { maxNativeZoom: currentMaxZoom } : {})} />
            <MapZoomController mapType={mapType} />
            <MapResizer trigger={sidebarOpen} />
            <WayfinderMapHandler
              active={sidebarTab === 'wayfinder' && wayfinderMode !== 'cursor'}
              mode={wayfinderMode === 'draw' ? 'draw' : 'points'}
              waypointCount={waypoints.length}
              maxWaypoints={MAX_WAYPOINTS}
              onMapClick={(coords) => addWaypoint(`Point ${waypoints.length + 1}`, coords)}
              onDrawPoint={(coords) => setDrawnPath(prev => [...prev, coords])}
            />

            {/* Wayfinder overlays */}
            {sidebarTab === 'wayfinder' && wayfinderMode === 'points' && waypoints.length >= 2 && (
              <Polyline positions={waypoints.map(w => w.coords)} pathOptions={{ color: '#e67e22', weight: 2.5, dashArray: '6 4', opacity: 0.9 }} />
            )}
            {sidebarTab === 'wayfinder' && waypoints.map((wp, i) => (
              <CircleMarker key={wp.id} center={wp.coords} radius={7}
                pathOptions={{ fillColor: '#e67e22', fillOpacity: 1, color: '#fff', weight: 2 }}>
                <Tooltip permanent direction="top" offset={[0, -8]} className="city-label">{i + 1}. {wp.label}</Tooltip>
              </CircleMarker>
            ))}
            {sidebarTab === 'wayfinder' && wayfinderMode === 'draw' && drawnPath.length >= 2 && (
              <Polyline positions={drawnPath} pathOptions={{ color: '#e67e22', weight: 3, opacity: 0.9 }} />
            )}

            {showCountries && countriesGeoJson && (
              <CountriesLayer data={countriesGeoJson} />
            )}

            {regions.filter(r => selRegions.includes(r.name)).map(r => (
              <GeoJSON key={r.name} data={r.geometry as any}
                pathOptions={{ color: r.color, weight: 1, fillColor: r.color, fillOpacity: r.fillOpacity, dashArray: '6 4' }}
                onEachFeature={(_feature, layer) => {
                  const locInfo = (r as any).location ? locationCertainty((r as any).location) : null;
                  layer.bindPopup(
                    `<strong style="font-size:1.05em">${r.name}</strong>${speakBtn(r.name, (r as any).speakAs)}` +
                    (r.description ? `<br/><span style="font-size:0.88em;line-height:1.4;display:block;margin-top:4px">${r.description}</span>` : '') +
                    (locInfo ? `<br/><span style="font-size:0.8em;color:${locInfo.color};font-weight:600;margin-top:4px;display:block">📍 ${locInfo.label}</span>` : '')
                  );
                }} />
            ))}

            {tribes.filter(t => selTribes.includes(t.name)).map(t => (
              <GeoJSON key={t.name} data={t.geometry as any}
                pathOptions={{ color: t.color, weight: 1.5, fillColor: t.color, fillOpacity: t.fillOpacity, dashArray: '3 5' }}
                onEachFeature={(_feature, layer) => {
                  layer.bindPopup(
                    `<div style="min-width:220px;max-width:300px;font-family:inherit">
                      <strong style="font-size:1em;color:${t.color}">${t.name}</strong>${speakBtn(t.name, (t as any).speakAs)}
                      <div style="border-top:1px solid #ddd;margin:5px 0 4px"></div>
                      <p style="font-size:0.87em;color:#333;margin:0 0 6px;line-height:1.5">${t.description ?? ''}</p>
                      ${t.books?.length > 0 ? `<div style="font-size:0.78em;color:#777">📖 ${t.books.join(', ')}</div>` : ''}
                    </div>`
                  );
                }} />
            ))}

            {kingdomsEmpires.filter(k => selKingdoms.includes(k.name)).map(k => {
              const geo = getKingdomGeometry(k, selectedYear);
              if (!geo) return null;
              const snapNote = getKingdomSnapshotNote(k, selectedYear);
              const kStart = formatYear(k.yearStart);
              const kEnd   = formatYear(k.yearEnd);
              return (
                <GeoJSON key={`${k.name}-${selectedYear}`} data={geo as any}
                  pathOptions={{ color: k.color, weight: 2, fillColor: k.color, fillOpacity: k.fillOpacity }}
                  onEachFeature={(_feature, layer) => {
                    layer.bindPopup(
                      '<div style="min-width:220px;max-width:300px;font-family:inherit">' +
                      `<strong style="font-size:1.05em;color:${k.color}">${k.name}</strong>${speakBtn(k.name, k.speakAs)}` +
                      `<div style="font-size:0.78em;color:#888;margin:2px 0 4px">&#128197; ${kStart} – ${kEnd}</div>` +
                      '<div style="border-top:1px solid #ddd;margin:4px 0"></div>' +
                      (k.description ? `<p style="font-size:0.87em;color:#333;margin:0 0 6px;line-height:1.5">${k.description}</p>` : '') +
                      (snapNote ? `<div style="font-size:0.8em;color:#555;font-style:italic;margin-bottom:5px;padding:4px 6px;background:#f5f5f5;border-radius:3px">&#128204; ${snapNote}</div>` : '') +
                      (k.books?.length > 0 ? `<div style="font-size:0.78em;color:#777">&#128218; ${k.books.join(', ')}</div>` : '') +
                      '</div>'
                    );
                  }} />
              );
            })}


            {naturalFeatures.filter(n => selNat.includes(n.name)).map(n => (
              <React.Fragment key={n.name}>
                {n.geoJsonName && riverGeoJson && (
                  <RiverLayer geoJsonName={n.geoJsonName} color={n.color} name={n.name}
                    speakAs={n.speakAs} description={n.description} allRiverData={riverGeoJson} />
                )}
                {n.lakeGeoJsonName && lakeGeoJson && (
                  <LakeLayer lakeGeoJsonName={n.lakeGeoJsonName} color={n.color}
                    fillOpacity={n.fillOpacity ?? 0.45} name={n.name}
                    speakAs={n.speakAs} description={n.description} allLakeData={lakeGeoJson} />
                )}
                {n.path && (
                  <Polyline positions={n.path} pathOptions={{ color: n.color, weight: 2, opacity: 0.85 }}>
                    <Popup>
                      <strong>{n.name}</strong><SpeakButton name={n.name} speakAs={n.speakAs} /><br />
                      <span style={{ fontSize: '0.9em' }}>{n.description}</span>
                    </Popup>
                  </Polyline>
                )}
                {n.geometry && (
                  <GeoJSON data={n.geometry as any}
                    pathOptions={{ color: n.color, weight: 1, fillColor: n.color, fillOpacity: n.fillOpacity ?? 0.3 }}>
                    <Popup>
                      <strong>{n.name}</strong><SpeakButton name={n.name} speakAs={n.speakAs} /><br />
                      <span style={{ fontSize: '0.9em' }}>{n.description}</span>
                    </Popup>
                  </GeoJSON>
                )}
              </React.Fragment>
            ))}

            {journeys.filter(j => selJourneys.includes(j.name)).map(journey => {
              const totalKm = totalDistanceKm(journey.path);
              const totalMi = totalKm * 0.621371;
              return (
                <React.Fragment key={journey.name}>
                  {journey.path.slice(0, -1).map((_, segIdx) => {
                    const segPath = [journey.path[segIdx], journey.path[segIdx + 1]] as L.LatLngExpression[];
                    const segKm = haversineKm(journey.path[segIdx], journey.path[segIdx + 1]);
                    const segMi = segKm * 0.621371;
                    const fromLoc = journey.locations[segIdx];
                    const toLoc = journey.locations[segIdx + 1];
                    return (
                      <Polyline key={`seg-${segIdx}`} positions={segPath}
                        pathOptions={{ color: journey.color, weight: 4, opacity: 0.85 }}
                        eventHandlers={{
                          mouseover: e => { e.target.setStyle({ weight: 6, opacity: 1 }); },
                          mouseout:  e => { e.target.setStyle({ weight: 4, opacity: 0.85 }); },
                        }}>
                        <Popup>
                          <div style={{ minWidth: 200 }}>
                            <strong style={{ fontSize: '0.95em', color: journey.color }}>{journey.name}</strong>
                            <div style={{ margin: '6px 0 4px', borderTop: '1px solid #ddd' }} />
                            <div style={{ fontSize: '0.88em', color: '#444' }}>
                              <strong>Segment:</strong>{' '}
                              {fromLoc?.name ?? `Point ${segIdx + 1}`} {' → '} {toLoc?.name ?? `Point ${segIdx + 2}`}
                            </div>
                            <div style={{ fontSize: '0.88em', margin: '3px 0' }}>
                              📏 <strong>{segKm.toFixed(0)} km</strong> ({segMi.toFixed(0)} mi) for this segment
                            </div>
                            <div style={{ margin: '4px 0', borderTop: '1px solid #ddd' }} />
                            <div style={{ fontSize: '0.82em', color: '#666' }}>
                              🗺️ Total journey: {totalKm.toFixed(0)} km ({totalMi.toFixed(0)} mi)
                            </div>
                            {journey.people.length > 0 && (
                              <div style={{ fontSize: '0.82em', color: '#666', marginTop: 3 }}>
                                👤 {journey.people.join(', ')}
                              </div>
                            )}
                          </div>
                        </Popup>
                      </Polyline>
                    );
                  })}
                  {journey.locations.map((loc, idx) => (
                    <CircleMarker key={idx} center={loc.coords} radius={5}
                      pathOptions={{ fillColor: journey.color, fillOpacity: 0.9, color: '#fff', weight: 2 }}>
                      <Popup>
                        <div style={{ minWidth: 200 }}>
                          <strong style={{ fontSize: '1em' }}>{loc.name}</strong>
                          <SpeakButton name={loc.name} speakAs={loc.speakAs} />
                          {loc.description && (
                            <p style={{ fontSize: '0.88em', margin: '4px 0 0', color: '#444' }}>{loc.description}</p>
                          )}
                          <div style={{ margin: '6px 0 4px', borderTop: '1px solid #ddd' }} />
                          <div style={{ fontSize: '0.82em', color: '#666' }}>🗺️ <em>{journey.name}</em></div>
                          <div style={{ fontSize: '0.82em', color: '#666' }}>
                            📏 Total: {totalKm.toFixed(0)} km ({totalMi.toFixed(0)} mi)
                          </div>
                          {journey.people.length > 0 && (
                            <div style={{ fontSize: '0.82em', color: '#666', marginTop: 2 }}>
                              👤 {journey.people.join(', ')}
                            </div>
                          )}
                        </div>
                      </Popup>
                    </CircleMarker>
                  ))}
                </React.Fragment>
              );
            })}

            {cities.filter(c => selCities.includes(c.name)).map(city => (
              <CircleMarker key={city.name} center={city.coords} radius={CITY_RADIUS}
                pathOptions={{ fillColor: CITY_COLOR, fillOpacity: 1, color: CITY_COLOR, weight: 1 }}>
                <Tooltip permanent direction="right" offset={[8, 0]} className="city-label">{city.name}</Tooltip>
                <Popup>
                  <strong>{city.name}</strong><SpeakButton name={city.name} speakAs={city.speakAs} /><br />
                  <span style={{ fontSize: '0.9em' }}>{city.description}</span><br />
                  <span style={{ fontSize: '0.8em', color: locationCertainty(city.location).color, fontWeight: 600 }}>
                    📌 {locationCertainty(city.location).label}
                  </span>
                </Popup>
              </CircleMarker>
            ))}

            {landmarks.filter(l => selLandmarks.includes(l.name)).map(lm => (
              <Marker key={lm.name} position={lm.coords}>
                <Tooltip permanent direction="right" offset={[12, 0]} className="city-label">{lm.name}</Tooltip>
                <Popup>
                  <strong>{landmarkEmoji(lm.name)} {lm.name}</strong><SpeakButton name={lm.name} speakAs={lm.speakAs} /><br />
                  <span style={{ fontSize: '0.9em' }}>{lm.description}</span><br />
                  <span style={{ fontSize: '0.8em', color: locationCertainty(lm.location).color, fontWeight: 600 }}>
                    📌 {locationCertainty(lm.location).label}
                  </span>
                </Popup>
              </Marker>
            ))}

          </MapContainer>
        </div>
        <Timeline selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
      </main>
    </div>
  );
}