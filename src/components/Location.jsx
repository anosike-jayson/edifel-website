import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { FaMapMarkerAlt } from 'react-icons/fa';

const MapComponent = () => {
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });
  }, []);

  const locations = [
    { name: 'Illinois', position: [40.6331, -89.3985] },
    { name: 'California', position: [36.7783, -119.4179] },
    { name: 'Maryland', position: [39.0458, -76.6413] },
    { name: 'Michigan', position: [44.3148, -85.6024] },
  ];

  return (
    <div>
      {/* Navbar with inline styling */}
      <nav style={{ position: 'relative', zIndex: 10, backgroundColor: 'white', padding: '10px' }}>
        <h2>My Navbar</h2>
      </nav>

      {/* Map container with inline z-index */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <MapContainer
          center={[40.6331, -89.3985]}
          zoom={5}
          scrollWheelZoom={false}
          style={{ height: '500px', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {locations.map((location, index) => (
            <Marker key={index} position={location.position}>
              <Popup>{location.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Locations List */}
      <div>
        <h2>Locations</h2>
        <ul>
          {locations.map((location, index) => (
            <li key={index}>{location.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MapComponent;
