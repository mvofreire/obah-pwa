import React, { useEffect, useState } from "react";
import { LatLngExpression, LatLng } from "leaflet";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { Content } from "components";

const LocationMarker = () => {
  const [position, setPosition] = useState<LatLng>();
  const map = useMapEvents({
    locationfound(e) {
      const p = e.latlng;
      setPosition(p);
      map.setView(p);
    },
  });

  useEffect(() => {
    map.locate();
  }, [map]);

  if (!!position) {
    return <Marker position={position} />;
  } else {
    return null;
  }
};

const NearMePage = () => {
  const position: LatLngExpression = [51.505, -0.09];
  return (
    <Content>
      <MapContainer style={{ height: "100%" }} center={position} zoom={13}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker />
      </MapContainer>
    </Content>
  );
};

export default NearMePage;
