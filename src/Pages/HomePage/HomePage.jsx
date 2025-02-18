import {
  useLoadScript,
  GoogleMap,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useState } from "react";

const libraries = ["places"];

const mapContainerStyle = {
  width: "80vw",
  height: "60vh",
  margin: "auto",
};

const center = {
  lat: 48.1351,
  lng: 11.582,
};

const restaurant = {
  name: "Beirut Beirut",
  lat: 48.1268,
  lng: 11.5822,
  website: "https://www.beirutbeirut.de/",
};

function HomePage() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [selected, setSelected] = useState(null);

  if (loadError) return <p>Error loading maps</p>;
  if (!isLoaded) return <p>Loading maps...</p>;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to the Nosh Map!</h1>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
      >
        {/* Marker for Restaurant */}
        <Marker
          position={{ lat: restaurant.lat, lng: restaurant.lng }}
          onClick={() => setSelected(restaurant)}
        />

        {/* InfoWindow shows when a marker is clicked */}
        {selected && (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => setSelected(null)}
          >
            <div>
              <h3>{selected.name}</h3>
              <p>
                <a
                  href={selected.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
              </p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
}

export default HomePage;
