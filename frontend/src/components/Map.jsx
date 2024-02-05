import { useRef, useEffect, useState } from "react";
import * as maptilersdk from "@maptiler/sdk";
import { useLoaderData } from "react-router-dom";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "../css/Map.css";

export default function Map() {
  const fetchBornes = useLoaderData();
  const mapContainer = useRef(null);
  const map = useRef(null);
  const city = { lng: 2.333333, lat: 48.866667 };
  const [zoom] = useState(11);

  maptilersdk.config.apiKey = "hJl8991OQz7TVl2QGIsC";
  if (!fetchBornes) {
    return (
      <p className="popup_map">
        Problème de connexion
        <br />
        Veuillez vous reconnecter ultérieurement
      </p>
    );
  }
  useEffect(() => {
    if (map.current) return;

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [city.lng, city.lat],
      zoom: 5,
    });
    fetchBornes.forEach((coordinate) => {
      const longitude = parseFloat(coordinate.longitude);
      const latitude = parseFloat(coordinate.latitude);

      // Check if longitude and latitude are valid numbers
      if (!Number.isNaN(longitude) && !Number.isNaN(latitude)) {
        new maptilersdk.Marker({ color: "#48bd7e" })
          .setLngLat([longitude, latitude])
          .addTo(map.current);
      } else {
        console.error("Invalid coordinates:", coordinate);
      }
    });
  }, [city.lng, city.lat, zoom]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}
