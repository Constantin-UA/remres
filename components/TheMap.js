"use client";
import { Container, Box } from "@chakra-ui/react";
import TheSpinner from "./TheSpinner";
import { useEffect, useState } from "react";
import { texts } from "@/ads";
import "leaflet/dist/leaflet.css"; // Этот импорт важен для стилей
import dynamic from "next/dynamic";
const MapContainer = dynamic(() =>
  import("react-leaflet").then((mod) => mod.MapContainer)
);
const TileLayer = dynamic(() =>
  import("react-leaflet").then((mod) => mod.TileLayer)
);
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker));
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup));
const Tooltip = dynamic(() =>
  import("react-leaflet").then((mod) => mod.Tooltip)
);
export default function TheMap({ position, title }) {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  return (
    <Box boxSize={"full"} minH={"400px"} className="the_map_container">
      {!isPageLoaded ? (
        <TheSpinner />
      ) : (
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom={false}
          className="map_container"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position}>
            <Popup>
              <b>{texts.ukr.company}</b>
              <br />
              {title}
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </Box>
  );
}
