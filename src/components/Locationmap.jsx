// src/components/LocationMap.jsx

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Make sure to import the Leaflet CSS file for styling the map
import 'leaflet/dist/leaflet.css';

const Locationmap = () => {
  const position = [51.505, -0.09]; // Sample coordinates (latitude, longitude)

  return (
    <div style={{ height: '500px' }}>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <strong>Our Location</strong><br />
            Address details here.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Locationmap;
