import React, {
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef,
  useCallback,
  Ref,
  createRef,
} from "react";
import { LatLng, marker, Marker as MarkerRef } from "leaflet";
import { Marker, useMapEvents, LayerGroup, CircleMarker } from "react-leaflet";

type LocationMarkerProps = {
  onStartLocate?: () => void;
  onLocationFound?: () => void;
};
export type LocationMarkerRef = {
  locate: () => void;
};
const LocationMarker = forwardRef(
  (
    { onLocationFound, onStartLocate }: LocationMarkerProps,
    ref: Ref<LocationMarkerRef>
  ) => {
    const markerRef = createRef<MarkerRef>();
    const [position, setPosition] = useState<LatLng>();

    const map = useMapEvents({
      drag() {
        const latLng = map.getCenter();
        setPosition(latLng);
      },
      locationfound(e) {
        const p = e.latlng;
        setPosition(p);
        map.setView(p);
        !!onLocationFound && onLocationFound();
      },
    });

    const handleStarLocate = useCallback(() => {
      !!onStartLocate && onStartLocate();
      map.locate();
    }, [map, onStartLocate]);

    useImperativeHandle(ref, () => ({
      locate() {
        handleStarLocate();
      },
    }));

    useEffect(() => {
      handleStarLocate();
    }, [handleStarLocate]);

    if (!!position) {
      return (
        <LayerGroup>
          <CircleMarker center={position} radius={100}>
            <Marker ref={markerRef} position={position} />
          </CircleMarker>
        </LayerGroup>
      );
    } else {
      return null;
    }
  }
);

export default LocationMarker;
