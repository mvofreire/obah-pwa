import React, { createRef, useCallback, useState } from "react";
import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import { Content, Icon, Icons, SectionContent } from "components";
import LocationMarker, { LocationMarkerRef } from "./LocationMarker";

const NearMePage = () => {
  const map = createRef<LocationMarkerRef>();
  const [isLocating, setIsLocating] = useState<boolean>(false);
  const position: LatLngExpression = [51.505, -0.09];

  const handleReloadLocationClick = useCallback(() => {
    map.current?.locate();
  }, [map]);

  const handleOnStartLocate = useCallback(() => {
    setIsLocating(true);
  }, []);

  const handleOnLocationFound = useCallback(() => {
    setIsLocating(false);
  }, []);

  return (
    <Content>
      <SectionContent sectionKey="header-actions">
        <Icon
          name={isLocating ? Icons.ReloadOutlined : Icons.AimOutlined}
          spin={isLocating}
          onClick={handleReloadLocationClick}
        />
      </SectionContent>
      <MapContainer style={{ height: "100%" }} center={position} zoom={13}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker
          ref={map}
          onLocationFound={handleOnLocationFound}
          onStartLocate={handleOnStartLocate}
        />
      </MapContainer>
    </Content>
  );
};

export default NearMePage;
