"use client";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

function MapContainer() {
  const position = { lat: 61.2176, lng: -149.8997 };

  return (
    <APIProvider apiKey={"AIzaSyANY9vwTtlFSDmAQJ4VE3KMMBtXeU5i7zw"}>
      <Map center={position} zoom={10}>
        <Marker position={position} />
      </Map>
    </APIProvider>
  );
}

export default MapContainer;
