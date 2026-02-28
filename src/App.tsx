import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { MapContainer, TileLayer, GeoJSON, Polyline, Marker, Popup, CircleMarker, Tooltip, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './App.css';
import { books } from './data/books';
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

// ── Sidebar section wrapper ──────────────────────────────────────────────────
function Section({
  title,
  expanded,
  onToggle,
  badge,
  children,
}: {
  title: string;
  expanded: boolean;
  onToggle: () => void;
  badge?: number;
  children: React.ReactNode;
}) {
  return (
    <section className="control-section">
      <h2 className="section-title collapsible" onClick={onToggle}>
        <span className={`arrow ${expanded ? 'down' : 'right'}`}>▶</span>
        {title}
        {badge != null && badge > 0 && (
          <span className="section-badge">{badge}</span>
        )}
      </h2>
      {expanded && <div className="section-body">{children}</div>}
    </section>
  );
}

// ── Reusable searchable checkbox list ────────────────────────────────────────
function CheckList<T extends { name: string }>({
  items,
  selected,
  onToggle,
  searchPlaceholder,
  renderIcon,
  emptyMessage,
  extra,
}: {
  items: T[];
  selected: string[];
  onToggle: (name: string) => void;
  searchPlaceholder?: string;
  renderIcon?: (item: T) => React.ReactNode;
  emptyMessage?: string;
  extra?: React.ReactNode; // rendered above the list (e.g. people filter)
}) {
  const [search, setSearch] = useState('');
  const filtered = items.filter(i => i.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      {extra}
      {searchPlaceholder && (
        <input
          type="text"
          className="search-input"
          placeholder={searchPlaceholder}
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      )}
      <div className="checkbox-group">
        {filtered.length === 0 && (
          <p className="empty-message">{emptyMessage ?? 'No items match this filter'}</p>
        )}
        {filtered.map(item => (
          <label key={item.name} className="checkbox-label">
            <input
              type="checkbox"
              checked={selected.includes(item.name)}
              onChange={() => onToggle(item.name)}
            />
            {renderIcon?.(item)}
            <span>{item.name}</span>
          </label>
        ))}
      </div>
    </>
  );
}

// ── Timeline ─────────────────────────────────────────────────────────────────
const YEAR_MIN  = -2000;
const YEAR_MAX  = 100;
const PX_PER_YR = 4;          // pixels per year
const TOTAL_YEARS = YEAR_MAX - YEAR_MIN;
const TRACK_W = TOTAL_YEARS * PX_PER_YR;

function yearToX(year: number): number {
  return (year - YEAR_MIN) * PX_PER_YR;
}

function xToYear(x: number): number {
  return Math.round(x / PX_PER_YR + YEAR_MIN);
}

function formatYear(y: number): string {
  if (y === 0) return '0';
  return y < 0 ? `${Math.abs(y)} BC` : `${y} AD`;
}

function Timeline() {
  const barRef  = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  // After mount, center the view on year 0
  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const centered = yearToX(0) - bar.clientWidth / 2;
    setScrollLeft(Math.max(0, Math.min(TRACK_W - bar.clientWidth, centered)));
  }, []);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [editing, setEditing] = useState(false);
  const [editVal, setEditVal] = useState('');

  // Dragging state (for panning the track)
  const drag = useRef<{ startX: number; startScroll: number } | null>(null);
  const wasDragged = useRef(false);

  // Build tick array once — every 25 years
  const ticks = useMemo(() => {
    const result = [];
    for (let y = YEAR_MIN; y <= YEAR_MAX; y += 25) {
      result.push(y);
    }
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
      if (Math.abs(dx) > DRAG_THRESHOLD) {
        wasDragged.current = true;
      }
      const max = TRACK_W - (barRef.current?.clientWidth ?? 600);
      setScrollLeft(Math.max(0, Math.min(max, drag.current.startScroll + dx)));
    };
    const onUp = () => { drag.current = null; };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, []);

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    // wasDragged persists after drag.current is cleared, so we can check it here
    if (wasDragged.current) {
      wasDragged.current = false;
      return;
    }
    const bar = barRef.current;
    if (!bar) return;
    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left + scrollLeft;
    const year = Math.max(YEAR_MIN, Math.min(YEAR_MAX, xToYear(clickX)));
    setSelectedYear(year);
    setEditing(false);
  }, [scrollLeft]);

  const cursorScreenX = selectedYear !== null
    ? yearToX(selectedYear) - scrollLeft
    : null;

  const commitEdit = () => {
    const parsed = parseInt(editVal, 10);
    if (!isNaN(parsed)) {
      const clamped = Math.max(YEAR_MIN, Math.min(YEAR_MAX, parsed));
      setSelectedYear(clamped);
      // scroll so cursor is visible
      const bar = barRef.current;
      if (bar) {
        const targetScroll = yearToX(clamped) - bar.clientWidth / 2;
        setScrollLeft(Math.max(0, Math.min(TRACK_W - bar.clientWidth, targetScroll)));
      }
    }
    setEditing(false);
  };

  return (
    <div
      ref={barRef}
      className="timeline-bar"
      onMouseDown={handleMouseDown}
      onClick={handleClick}
    >
      {/* Scrollable track */}
      <div
        className="timeline-track"
        style={{ width: TRACK_W, left: -scrollLeft }}
      >
        {/* Era labels */}
        <span className="tl-era-label" style={{ left: yearToX(-5) - 30 }}>◀ BC</span>
        <span className="tl-era-label" style={{ left: yearToX(5) }}>AD ▶</span>

        {ticks.map(year => {
          const isCentury = year % 100 === 0;
          const isFifty   = year % 50 === 0 && !isCentury;
          const x = yearToX(year);
          const lineH = isCentury ? 30 : isFifty ? 18 : 10;
          const lineClass = isCentury ? 'major' : isFifty ? 'semi' : '';
          return (
            <div key={year} className="tl-tick" style={{ left: x }}>
              <div
                className={`tl-tick-line${lineClass ? ' ' + lineClass : ''}`}
                style={{ height: lineH }}
              />
              {isCentury && (
                <span className="tl-tick-label major" style={{ left: 0 }}>
                  {year === 0 ? '0' : Math.abs(year)}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Selected year cursor */}
      {selectedYear !== null && cursorScreenX !== null &&
        cursorScreenX > -10 && cursorScreenX < (barRef.current?.clientWidth ?? 9999) + 10 && (
        <>
          <div className="tl-cursor" style={{ left: cursorScreenX }} />
          <div
            className="tl-year-label"
            style={{ left: cursorScreenX }}
            onClick={e => {
              e.stopPropagation();
              setEditVal(String(selectedYear));
              setEditing(true);
            }}
          >
            {editing ? (
              <input
                className="tl-year-input"
                value={editVal}
                autoFocus
                onChange={e => setEditVal(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter') commitEdit();
                  if (e.key === 'Escape') setEditing(false);
                }}
                onBlur={commitEdit}
                onClick={e => e.stopPropagation()}
              />
            ) : (
              formatYear(selectedYear)
            )}
          </div>
        </>
      )}
    </div>
  );
}
export default function App() {
  const [sidebarOpen, setSidebarOpen]         = useState(true);
  const [selectedBook, setSelectedBook]       = useState('');

  // Section expansion state
  const [citiesExp,    setCitiesExp]    = useState(false);
  const [landmarksExp, setLandmarksExp] = useState(false);
  const [natExp,       setNatExp]       = useState(false);
  const [journeysExp,  setJourneysExp]  = useState(false);
  const [regionsExp,   setRegionsExp]   = useState(false);
  const [tribesExp,    setTribesExp]    = useState(false);
  const [kingdomsExp,  setKingdomsExp]  = useState(false);

  // People filter (lives inside Journeys)
  const [peopleExpanded, setPeopleExpanded]     = useState(false);
  const [selectedPeople, setSelectedPeople]     = useState<string[]>([]);

  // Selected items per layer
  const [selCities,    setSelCities]    = useState<string[]>([]);
  const [selLandmarks, setSelLandmarks] = useState<string[]>([]);
  const [selNat,       setSelNat]       = useState<string[]>([]);
  const [selJourneys,  setSelJourneys]  = useState<string[]>([]);
  const [selRegions,   setSelRegions]   = useState<string[]>([]);
  const [selTribes,    setSelTribes]    = useState<string[]>([]);
  const [selKingdoms,  setSelKingdoms]  = useState<string[]>([]);

  const [mapType, setMapType] = useState('physical');

  // ── Book change ────────────────────────────────────────────────────────────
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
  };

  // ── Filtered by book ───────────────────────────────────────────────────────
  const avCities    = useMemo(() => cities.filter(c => matchesBook(c.books, selectedBook)),          [selectedBook]);
  const avLandmarks = useMemo(() => landmarks.filter(l => matchesBook(l.books, selectedBook)),       [selectedBook]);
  const avNat       = useMemo(() => naturalFeatures.filter(n => matchesBook(n.books, selectedBook)), [selectedBook]);
  const avPeople    = useMemo(() => people.filter(p => matchesBook(p.books, selectedBook)),          [selectedBook]);
  const avJourneys  = useMemo(() => {
    const byBook = journeys.filter(j => matchesBook(j.books, selectedBook));
    if (selectedPeople.length === 0) return byBook;
    return byBook.filter(j => j.people.some(p => selectedPeople.includes(p)));
  }, [selectedBook, selectedPeople]);
  const avRegions   = useMemo(() => regions.filter(r => matchesBook(r.books, selectedBook)),         [selectedBook]);
  const avTribes    = useMemo(() => tribes.filter(t => matchesBook(t.books, selectedBook)),          [selectedBook]);
  const avKingdoms  = useMemo(() => kingdomsEmpires.filter(k => matchesBook(k.books, selectedBook)), [selectedBook]);

  // ── Toggle helpers ─────────────────────────────────────────────────────────
  const toggle = (set: React.Dispatch<React.SetStateAction<string[]>>, name: string) =>
    set(prev => prev.includes(name) ? prev.filter(x => x !== name) : [...prev, name]);

  const allCitiesSelected = avCities.length > 0 && avCities.every(c => selCities.includes(c.name));
  const toggleAllCities = () => {
    if (allCitiesSelected) {
      setSelCities(prev => prev.filter(n => !avCities.some(c => c.name === n)));
    } else {
      setSelCities(prev => Array.from(new Set([...prev, ...avCities.map(c => c.name)])));
    }
  };

  const clearAll = () => {
    setSelCities([]);
    setSelLandmarks([]);
    setSelNat([]);
    setSelJourneys([]);
    setSelRegions([]);
    setSelTribes([]);
    setSelKingdoms([]);
    setSelectedPeople([]);
  };

  // ── Tile URL ───────────────────────────────────────────────────────────────
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

  const cityRadius = (type: string) => type === 'major' ? 6 : type === 'city' ? 4 : 3;
  const cityColor  = (type: string) => type === 'major' ? '#c0392b' : type === 'city' ? '#e67e22' : '#f39c12';
  const natEmoji = (type: string) =>
    ({ river: '〰️', sea: '🌊', desert: '🏜️', valley: '🏞️' }[type] ?? '🌍');

  // ── People filter sub-panel ────────────────────────────────────────────────
  const peopleFilter = avPeople.length > 0 ? (
    <div className="people-filter-wrap">
      <div
        className="people-filter-header"
        onClick={() => setPeopleExpanded(e => !e)}
      >
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
              <input
                type="checkbox"
                checked={selectedPeople.includes(person.name)}
                onChange={() => toggle(setSelectedPeople, person.name)}
              />
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
          </div>
        </div>
      </header>

      {/* ── Sidebar ────────────────────────────────────────────────────────── */}
      <aside className="sidebar">
        <div className="sidebar-content">

          {/* Bible Books */}
          <section className="control-section">
            <h2 className="section-title">Bible Books</h2>
            <select className="book-select" value={selectedBook} onChange={e => handleBookChange(e.target.value)}>
              <option value="">All Books</option>
              {books.map(b => <option key={b} value={b}>{b}</option>)}
            </select>
          </section>

          {/* Cities / Settlements */}
          <Section title="Cities / Settlements" expanded={citiesExp} onToggle={() => setCitiesExp(e => !e)}>
            <div className="cities-controls">
              <button className="select-all-btn" onClick={toggleAllCities}>
                {allCitiesSelected ? 'Deselect All' : 'Select All'}
              </button>
            </div>
            <CheckList
              items={avCities}
              selected={selCities}
              onToggle={name => toggle(setSelCities, name)}
              searchPlaceholder="Search cities…"
              renderIcon={_ => <span className="city-marker" />}
              emptyMessage="No cities for this filter"
            />
          </Section>

          {/* Landmarks */}
          <Section title="Landmarks" expanded={landmarksExp} onToggle={() => setLandmarksExp(e => !e)} badge={selLandmarks.length}>
            <CheckList
              items={avLandmarks}
              selected={selLandmarks}
              onToggle={name => toggle(setSelLandmarks, name)}
              searchPlaceholder="Search landmarks…"
              emptyMessage="No landmarks for this filter"
            />
          </Section>

          {/* Natural Features */}
          <Section title="Natural Features" expanded={natExp} onToggle={() => setNatExp(e => !e)} badge={selNat.length}>
            <CheckList
              items={avNat}
              selected={selNat}
              onToggle={name => toggle(setSelNat, name)}
              searchPlaceholder="Search features…"
              renderIcon={item => <span className="nat-icon">{natEmoji(item.type)}</span>}
              emptyMessage="No features for this filter"
            />
          </Section>

          {/* Journeys */}
          <Section title="Journeys" expanded={journeysExp} onToggle={() => setJourneysExp(e => !e)} badge={selJourneys.length}>
            <CheckList
              items={avJourneys}
              selected={selJourneys}
              onToggle={name => toggle(setSelJourneys, name)}
              searchPlaceholder="Search journeys…"
              renderIcon={item => <span className="journey-marker" style={{ backgroundColor: (item as any).color }} />}
              emptyMessage="No journeys match filters"
              extra={peopleFilter}
            />
          </Section>

          {/* Regions  */}
          <Section title="Regions" expanded={regionsExp} onToggle={() => setRegionsExp(e => !e)} badge={selRegions.length}>
            <CheckList
              items={avRegions}
              selected={selRegions}
              onToggle={name => toggle(setSelRegions, name)}
              searchPlaceholder="Search regions…"
              renderIcon={item => <span className="kingdom-marker" style={{ backgroundColor: (item as any).color, borderRadius: 2 }} />}
              emptyMessage="No regions for this filter"
            />
          </Section>

          {/* Ethnic / Tribal Peoples */}
          <Section title="Ethnic / Tribal Peoples" expanded={tribesExp} onToggle={() => setTribesExp(e => !e)} badge={selTribes.length}>
            <CheckList
              items={avTribes}
              selected={selTribes}
              onToggle={name => toggle(setSelTribes, name)}
              searchPlaceholder="Search peoples…"
              renderIcon={item => <span className="kingdom-marker" style={{ backgroundColor: (item as any).color, borderRadius: '50%' }} />}
              emptyMessage="No peoples for this filter"
            />
          </Section>

          {/* Kingdoms / Empires */}
          <Section title="Kingdoms / Empires" expanded={kingdomsExp} onToggle={() => setKingdomsExp(e => !e)} badge={selKingdoms.length}>
            <CheckList
              items={avKingdoms}
              selected={selKingdoms}
              onToggle={name => toggle(setSelKingdoms, name)}
              searchPlaceholder="Search kingdoms…"
              renderIcon={item => <span className="kingdom-marker" style={{ backgroundColor: (item as any).color }} />}
              emptyMessage="No kingdoms for this filter"
            />
          </Section>

        </div>
      </aside>

      {/* ── Map ────────────────────────────────────────────────────────────── */}
      <main className="map-container">
        <div className="map-leaflet-wrap">
        <button
          className="sidebar-toggle"
          onClick={() => setSidebarOpen(o => !o)}
          title={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          <span className="sidebar-toggle-icon">◀</span>
        </button>
        <MapContainer
          center={[31.5, 35.0] as L.LatLngExpression}
          zoom={6} minZoom={3} maxZoom={8}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer attribution='&copy; <a href="https://www.esri.com">Esri</a>' url={tileUrl} maxZoom={18} />
          <MapResizer trigger={sidebarOpen} />

          {/* Regions — dashed */}
          {regions.filter(r => selRegions.includes(r.name)).map(r => (
            <GeoJSON key={r.name} data={r.geometry as any}
              pathOptions={{ color: r.color, weight: 1, fillColor: r.color, fillOpacity: r.fillOpacity, dashArray: '6 4' }} />
          ))}

          {/* Tribes — dotted */}
          {tribes.filter(t => selTribes.includes(t.name)).map(t => (
            <GeoJSON key={t.name} data={t.geometry as any}
              pathOptions={{ color: t.color, weight: 1.5, fillColor: t.color, fillOpacity: t.fillOpacity, dashArray: '3 5' }} />
          ))}

          {/* Kingdoms — solid */}
          {kingdomsEmpires.filter(k => selKingdoms.includes(k.name)).map(k => (
            <GeoJSON key={k.name} data={k.geometry as any}
              pathOptions={{ color: k.color, weight: 2, fillColor: k.color, fillOpacity: k.fillOpacity }} />
          ))}

          {/* Natural Features */}
          {naturalFeatures.filter(n => selNat.includes(n.name)).map(n => (
            <React.Fragment key={n.name}>
              {n.path && (
                <Polyline positions={n.path} pathOptions={{ color: n.color, weight: n.type === 'river' ? 3 : 2, opacity: 0.75 }}>
                  <Popup><strong>{n.name}</strong><br /><span style={{ fontSize: '0.9em' }}>{n.description}</span></Popup>
                </Polyline>
              )}
              {n.geometry && (
                <GeoJSON data={n.geometry as any}
                  pathOptions={{ color: n.color, weight: 1, fillColor: n.color, fillOpacity: n.fillOpacity ?? 0.3 }}>
                  <Popup><strong>{n.name}</strong><br /><span style={{ fontSize: '0.9em' }}>{n.description}</span></Popup>
                </GeoJSON>
              )}
            </React.Fragment>
          ))}

          {/* Journeys */}
          {journeys.filter(j => selJourneys.includes(j.name)).map(journey => (
            <React.Fragment key={journey.name}>
              <Polyline positions={journey.path} pathOptions={{ color: journey.color, weight: 3, opacity: 0.85 }} />
              {journey.locations.map((loc, idx) => (
                <CircleMarker key={idx} center={loc.coords} radius={5}
                  pathOptions={{ fillColor: journey.color, fillOpacity: 0.9, color: '#fff', weight: 2 }}>
                  <Popup>
                    <strong>{loc.name}</strong>
                    {loc.description && <><br /><span style={{ fontSize: '0.9em' }}>{loc.description}</span></>}
                    <br /><em style={{ fontSize: '0.85em', color: '#666' }}>{journey.name}</em>
                  </Popup>
                </CircleMarker>
              ))}
            </React.Fragment>
          ))}

          {/* Cities */}
          {cities.filter(c => selCities.includes(c.name)).map(city => (
            <CircleMarker key={city.name} center={city.coords} radius={cityRadius(city.location)}
              pathOptions={{ fillColor: cityColor(city.location), fillOpacity: 0.85, color: '#fff', weight: 2 }}>
              <Tooltip permanent direction="right" offset={[8, 0]} className="city-label">{city.name}</Tooltip>
              <Popup>
                <strong>{city.name}</strong><br />
                <span style={{ fontSize: '0.9em' }}>{city.description}</span>
              </Popup>
            </CircleMarker>
          ))}

          {/* Landmarks */}
          {landmarks.filter(l => selLandmarks.includes(l.name)).map(lm => (
            <Marker key={lm.name} position={lm.coords}>
              <Tooltip permanent direction="right" offset={[12, 0]} className="city-label">{lm.name}</Tooltip>
              <Popup>
                <strong>{lm.name}</strong><br />
                <span style={{ fontSize: '0.9em' }}>{lm.description}</span><br />
              </Popup>
            </Marker>
          ))}

        </MapContainer>
        </div>

        <Timeline />
      </main>
    </div>
  );
}