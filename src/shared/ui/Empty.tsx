import React from "react";

interface EmptyProps {
  resourceName: string;
}

const Empty: React.FC<EmptyProps> = ({ resourceName }) => {
  return <p>No {resourceName} could be found.</p>;
};

export default Empty;
