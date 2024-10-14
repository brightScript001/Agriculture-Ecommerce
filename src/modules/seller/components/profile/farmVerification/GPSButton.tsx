import React from "react";
import Button from "../../../../../shared/ui/Button";

export const GPSButton: React.FC = () => {
  const handleGPSClick = () => {
    // TODO Logic to trigger GPS and pinpoint the location
  };

  return (
    <Button variation="secondary" onClick={handleGPSClick}>
      📍 Click here to use your device's GPS to pinpoint precise location
    </Button>
  );
};
