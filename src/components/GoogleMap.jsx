import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const GoogleMapComponent = ({ restaurants }) => {
  const defaultCenter = { lat: 48.1351, lng: 11.582 }; // Default center (Munich, Germany)

  const mapOptions = {
    zoom: 12,
    center:
      restaurants.length > 0
        ? { lat: restaurants[0].latitude, lng: restaurants[0].longitude }
        : defaultCenter,
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        THE NOSH MAP
      </h2>

      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "400px" }}
          {...mapOptions}
        >
          {restaurants.map((restaurant) =>
            restaurant.latitude && restaurant.longitude ? (
              <Marker
                key={restaurant.id}
                position={{
                  lat: restaurant.latitude,
                  lng: restaurant.longitude,
                }}
                title={restaurant.name}
                onClick={() => {
                  window.location.href = `/restaurant/${restaurant.id}`; // Navigate to details page on click
                }}
              />
            ) : null
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapComponent;

// // GoogleMap.jsx
// import React from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// const GoogleMapComponent = ({ restaurants }) => {
//   // Define the default center of the map (this could be adjusted based on the restaurants' location)
//   const defaultCenter = { lat: 48.1351, lng: 11.582 }; // Coordinates for Munich, Germany

//   // Adjust the center of the map based on restaurant data if available
//   const getMapCenter = () => {
//     if (restaurants.length > 0) {
//       const restaurant = restaurants[0]; // Just pick the first one for simplicity
//       return {
//         lat: parseFloat(restaurant.latitude || defaultCenter.lat),
//         lng: parseFloat(restaurant.longitude || defaultCenter.lng),
//       };
//     }
//     return defaultCenter;
//   };

//   // Set the map options
//   const mapOptions = {
//     zoom: 12,
//     center: getMapCenter(),
//   };

//   return (
//     <div>
//       <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
//         The Nosh Map
//       </h2>

//       <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
//         <GoogleMap
//           mapContainerStyle={{ width: "100%", height: "400px" }}
//           {...mapOptions}
//         >
//           {restaurants.map((restaurant) => (
//             <Marker
//               key={restaurant.id}
//               position={{
//                 lat: parseFloat(restaurant.latitude),
//                 lng: parseFloat(restaurant.longitude),
//               }}
//               title={restaurant.name}
//             />
//           ))}
//         </GoogleMap>
//       </LoadScript>
//     </div>
//   );
// };

// export default GoogleMapComponent;
