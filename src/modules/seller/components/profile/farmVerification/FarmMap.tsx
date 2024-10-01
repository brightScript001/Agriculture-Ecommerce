import React from "react";

export const FarmMap: React.FC = () => {
  return (
    <div>
      {/* You can integrate a real map component like Google Maps or Leaflet here */}
      <img
        src="/src/assets/images/🌎 Map Maker_ abuja (Retro).png" // Placeholder map image
        alt="Farm Map"
        style={{ width: "28.9rem", height: "auto" }}
      />
      <p>
        Click on the map to set points and draw the perimeter of your farmland.
      </p>
    </div>
  );
};
