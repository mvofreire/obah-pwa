import React, { createRef, useCallback, useEffect, useState } from "react";
import { LatLngLiteral } from "leaflet";
import { MapContainer, Popup, TileLayer } from "react-leaflet";
import { Content, Icon, Icons, SectionContent } from "components";
import LocationMarker, { LocationMarkerRef } from "./LocationMarker";
import { usePromotionsInBounds } from "hooks/promotion.hook";
import { Marker } from "react-leaflet";

const NearMePage = () => {
  const markerLocationRef = createRef<LocationMarkerRef>();
  const [isLocating, setIsLocating] = useState<boolean>(false);
  const [center, setCenter] = useState<LatLngLiteral>({
    lat: -27.005180680162127,
    lng: -49.02583815157414,
  });
  const [bounds, setBounds] = useState<LocationBounds>();
  const [points, setPoints] = useState<any>([]);
  const { data, refetch } = usePromotionsInBounds(bounds, {
    enabled: false,
  });

  useEffect(() => {
    const pointsData = data?.map((promotion) => [
      promotion.position_lat,
      promotion.position_lng,
    ]);
    setPoints(pointsData);
  }, [data]);

  const handleReloadLocationClick = useCallback(() => {
    markerLocationRef.current?.locate();
  }, [markerLocationRef]);

  const handleOnStartLocate = useCallback(() => {
    setIsLocating(true);
  }, []);

  const handleOnLocationFound = useCallback((latLng: LatLngLiteral) => {
    setIsLocating(false);
    setCenter(latLng);
  }, []);

  const handleOnUpdateLocation = useCallback(
    (bounds: LocationBounds) => {
      setBounds(bounds);
      refetch();
    },
    [setBounds, refetch]
  );

  return (
    <Content>
      <SectionContent sectionKey="header-actions">
        <Icon
          name={isLocating ? Icons.ReloadOutlined : Icons.AimOutlined}
          spin={isLocating}
          onClick={handleReloadLocationClick}
        />
      </SectionContent>
      <MapContainer style={{ height: "100%" }} center={center} zoom={4}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker
          ref={markerLocationRef}
          onLocationFound={handleOnLocationFound}
          onStartLocate={handleOnStartLocate}
          onUpdateLocation={handleOnUpdateLocation}
        />
        {!!points &&
          points.length > 0 &&
          points.map((point: any, i: number) => (
            <Marker key={`promotions-marker-${i}`} position={point}>
              <Popup>teste</Popup>
            </Marker>
          ))}
      </MapContainer>
    </Content>
  );
};

export default NearMePage;
