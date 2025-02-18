import React, { useEffect } from "react";
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";

const libraries = ["places"]; // Load Places library
const mapContainerStyle = {
  width: "80%", // 80% of the page width
  maxWidth: "800px", // Maximum width so it doesn't stretch too much
  height: "500px", // Set a smaller height
  margin: "50 auto", // Centers the map horizontally
  borderRadius: "10px", // Optional: Adds rounded corners
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
};
const center = { lat: 48.1351, lng: 11.582 }; // Munich coordinates
const zoom = 12; // Zoom level

function HomePage() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return <p>Error loading maps</p>;
  if (!isLoaded) return <p>Loading maps...</p>;

  return (
    <div>
      <h1>Welcome to the Nosh Map!</h1>
      <div style={{ height: "400px", width: "100%" }}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={zoom}
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
    </div>
  );
}

// function HomePage() {
//   useEffect(() => {
//     // Dynamically load the Google Maps API script
//     const script = document.createElement("script");
//     script.src = `https://maps.googleapis.com/maps/api/js?key=${
//       import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY
//     }&libraries=places`;
//     script.async = true;
//     script.defer = true;
//     document.body.appendChild(script);

//     script.onload = () => {
//       // Initialize the map once the API is loaded
//       const mapContainer = document.getElementById("map"); // Get the map container by id

//       // Set the map options (e.g., zoom, center)
//       const mapOptions = {
//         center: { lat: 48.1351, lng: 11.582 }, // Munich's coordinates (you can change it to your desired location)
//         zoom: 12, // Zoom level
//       };

//       // Create a new map object and attach it to the container
//       const map = new window.google.maps.Map(mapContainer, mapOptions);

//       // Optional: Add a marker to the map
//       new window.google.maps.Marker({
//         position: mapOptions.center,
//         map: map,
//         title: "Hello Munich!",
//       });
//     };

//     script.onerror = () => {
//       console.error("Error loading Google Maps API");
//     };

//     return () => {
//       // Clean up the script when the component unmounts
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Welcome to the Nosh Map!</h1>
//       <div style={{ height: "400px", width: "100%" }}>
//         src=
//         {`https://maps.googleapis.com/maps/api/js?key=${
//           import.meta.env.VITE_GOOGLE_MAPS_API_KEY
//         }&libraries=places`}
//         async defer
//       </div>
//     </div>
//   );
// }

export default HomePage;
