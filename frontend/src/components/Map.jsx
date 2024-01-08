import { useRef, useEffect, useState } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "../css/Map.css";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const city = { lng: -1.4833, lat: 43.4833 };
  const [zoom] = useState(11);
  maptilersdk.config.apiKey = "hJl8991OQz7TVl2QGIsC";

  useEffect(() => {
    if (map.current) return;

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [city.lng, city.lat],
      zoom: 11,
    });
  }, [city.lng, city.lat, zoom]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}
