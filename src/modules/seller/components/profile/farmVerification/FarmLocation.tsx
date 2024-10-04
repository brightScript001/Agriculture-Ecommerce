import React from "react";

interface FarmLocationProps {
  location: string;
}

export const FarmLocation: React.FC<FarmLocationProps> = ({ location }) => (
  <p>
    <strong>Farm Location:</strong> {location}
  </p>
);
