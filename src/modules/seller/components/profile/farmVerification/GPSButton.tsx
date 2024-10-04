import React from "react";

export const GPSButton: React.FC = () => {
  const handleGPSClick = () => {
    // Logic to trigger GPS and pinpoint the location
  };

  return (
    <button onClick={handleGPSClick}>
      📍 Click here to use your device's GPS to pinpoint precise location
    </button>
  );
};
