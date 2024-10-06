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
    <div className="relative z-0 flex flex justify-center items-start h-full py-8" id="location">
      {/* Container for Map and Locations */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4">
        {/* Map Container */}
        <div className="  w-full md:w-3/4 h-64 md:h-96">
          <MapContainer center={[39.8283, -96.5795]} zoom={4} className="h-full w-full rounded-lg shadow-lg">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
            />
            {locations.map((location, index) => (
              <Marker key={index} position={location.position}>
                <Popup>{location.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Locations List */}
        <div className="w-full md:w-1/4 p-4 bg-white rounded-lg">
          <h3 className="text-lg font-bold mb-4">Locations</h3>
          <ul className="space-y-2">
            {locations.map((location, index) => (
              <li key={index} className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-gray-500" />
                <span>{location.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;