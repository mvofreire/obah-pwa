import { LatLng } from "leaflet";
import {
  useEffect,
  useImperativeHandle,
  forwardRef,
  useCallback,
  Ref,
} from "react";
import { useMapEvents } from "react-leaflet";

type LocationMarkerProps = {
  onStartLocate?: () => void;
  onLocationFound?: (latLng:LatLng) => void;
  onUpdateLocation?: (bounds: LocationBounds) => void;
};
export type LocationMarkerRef = {
  locate: () => void;
};
const LocationMarker = forwardRef(
  (
    { onLocationFound, onStartLocate, onUpdateLocation }: LocationMarkerProps,
    ref: Ref<LocationMarkerRef>
  ) => {
    const map = useMapEvents({
      locationfound(e) {
        const p = e.latlng;
        map.flyTo(p, 13);
        !!onLocationFound && onLocationFound(p);
      },

      moveend() {
        const bounds = map.getBounds();
        const north = bounds.getNorth();
        const south = bounds.getSouth();
        const east = bounds.getEast();
        const west = bounds.getWest();

        handleOnUpdateLocation({ north, south, east, west });
      },
    });

    const handleStarLocate = useCallback(() => {
      !!onStartLocate && onStartLocate();
      map.locate();
    }, [map, onStartLocate]);

    const handleOnUpdateLocation = useCallback((bounds: LocationBounds) => {
      !!onUpdateLocation && onUpdateLocation(bounds);
    }, [onUpdateLocation]);

    useImperativeHandle(ref, () => ({
      locate() {
        handleStarLocate();
      },
    }));

    useEffect(() => {
      handleStarLocate();
    }, [handleStarLocate]);

    return null;
  }
);

export default LocationMarker;
