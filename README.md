# BibleAtlas

An interactive web application for exploring Biblical geography, character journeys, and historical kingdoms/empires.

## Features

- 📍 **Interactive Map** - Pan and zoom to explore Biblical regions
- 🗺️ **Character Journeys** - View paths of Abraham, Paul, Moses and more
- 👑 **Kingdoms & Empires** - See historical territories (Persian Empire, Roman Empire, Kingdom of Israel, etc.)
- 📖 **Bible Book Integration** - Select books to automatically load relevant journeys and kingdoms
- 🌍 **Modern Borders Toggle** - Switch between historical and modern map views
- 🎨 **Beautiful Design** - Distinctive parchment-inspired aesthetic with scholarly typography

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Start the development server:**
```bash
npm start
```

3. **Open your browser:**
Navigate to `http://localhost:3000`

## Project Structure

```
bibleatlas/
├── src/
│   ├── App.tsx          # Main application component
│   ├── App.css          # Styling
│   ├── index.tsx        # Entry point
│   └── index.css        # Global styles
├── public/
│   └── index.html       # HTML template
└── package.json         # Dependencies
```

## How to Use

1. **Select a Bible Book** - Choose from the dropdown to auto-load relevant content
2. **Toggle Journeys** - Check/uncheck to show different character paths
3. **Toggle Kingdoms** - Display historical territories and empires
4. **Modern Borders** - Switch to see current country boundaries
5. **Explore the Map** - Click and drag to pan, scroll to zoom

## Technologies Used

- **React** - UI framework
- **TypeScript** - Type safety
- **Leaflet** - Interactive mapping library
- **React-Leaflet** - React components for Leaflet
- **OpenStreetMap** - Map tiles

## Current Data

### Journeys
- Abraham's Journey (Ur → Canaan)
- Paul's First Missionary Journey
- Exodus Route (Egypt → Canaan)

### Kingdoms & Empires
- Kingdom of Israel (United)
- Northern Kingdom (Israel)
- Southern Kingdom (Judah)
- Persian Empire
- Roman Empire

### Bible Books
- Genesis
- Exodus
- 1 Kings
- 2 Kings
- Acts
- Ezra

## Extending the Project

### Adding New Journeys

In `App.tsx`, add to the `journeys` object:

```typescript
"Journey Name": {
  name: "Journey Name",
  path: [
    [lat1, lng1],
    [lat2, lng2],
    // ... more coordinates
  ],
  color: '#hexcolor',
  locations: [
    { name: 'Location Name', coords: [lat, lng] },
    // ... more locations
  ],
}
```

### Adding New Kingdoms

In `App.tsx`, add to the `kingdoms` object:

```typescript
"Kingdom Name": {
  name: "Kingdom Name",
  color: '#hexcolor',
  fillOpacity: 0.3,
  geometry: {
    type: 'Polygon',
    coordinates: [[
      [lng1, lat1],
      [lng2, lat2],
      // ... more coordinates (note: lng, lat order for GeoJSON)
    ]],
  },
}
```

### Adding New Books

In `App.tsx`, add to the `books` array:

```typescript
{ 
  name: 'Book Name', 
  journeys: ['Journey Name 1', 'Journey Name 2'], 
  kingdoms: ['Kingdom Name 1'] 
}
```

## Future Enhancements

- Add more biblical journeys (Jesus' ministry, Joshua's conquest, etc.)
- Include more empires (Assyrian, Babylonian, Greek)
- Add city markers for important biblical locations
- Timeline slider to see how territories changed over time
- Search functionality for specific locations
- Export/share functionality
- Mobile-responsive improvements

## Resources for Biblical Geography

- **Coordinates** - Use Google Maps to find lat/lng for locations
- **Historical Maps** - Reference Bible atlases for accurate territories
- **GeoJSON Tools** - Use [geojson.io](http://geojson.io) to draw polygons

## License

Educational project - free to use and modify

## Credits

- Map data © [OpenStreetMap](https://www.openstreetmap.org/) contributors
- Physical map tiles from [ArcGIS](https://www.arcgis.com/)