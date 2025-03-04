import type React from "react";
import { SuppliesRecord } from "../types/dashboard-types";

interface SuppliesDonutChartProps {
  supplies: SuppliesRecord;
}

export const SuppliesDonutChart: React.FC<SuppliesDonutChartProps> = ({
  supplies,
}) => {
  const total =
    supplies.fertilizers +
    supplies.manure +
    supplies.pesticides +
    supplies.herbicides;

  const fertilizerPct = (supplies.fertilizers / total) * 100;
  const manurePct = (supplies.manure / total) * 100;
  const pesticidesPct = (supplies.pesticides / total) * 100;
  const herbicidesPct = (supplies.herbicides / total) * 100;

  let offset = 0;
  const fertilizerOffset = offset;
  offset += fertilizerPct;
  const manureOffset = offset;
  offset += manurePct;
  const pesticidesOffset = offset;
  offset += pesticidesPct;
  const herbicidesOffset = offset;

  const circumference = 2 * Math.PI * 38;

  return (
    <svg width="80" height="80" viewBox="0 0 100 100">
      {/* Background circle */}
      <circle
        cx="50"
        cy="50"
        r="38"
        fill="transparent"
        stroke="#e6e6e6"
        strokeWidth="12"
      />

      {/* Fertilizers segment */}
      <circle
        cx="50"
        cy="50"
        r="38"
        fill="transparent"
        stroke="#4ade80"
        strokeWidth="12"
        strokeDasharray={`${
          (fertilizerPct / 100) * circumference
        } ${circumference}`}
        strokeDashoffset="0"
        transform="rotate(-90 50 50)"
      />

      {/* Manure segment */}
      <circle
        cx="50"
        cy="50"
        r="38"
        fill="transparent"
        stroke="#facc15"
        strokeWidth="12"
        strokeDasharray={`${
          (manurePct / 100) * circumference
        } ${circumference}`}
        strokeDashoffset={`${-1 * (fertilizerPct / 100) * circumference}`}
        transform="rotate(-90 50 50)"
      />

      {/* Pesticides segment */}
      <circle
        cx="50"
        cy="50"
        r="38"
        fill="transparent"
        stroke="#60a5fa"
        strokeWidth="12"
        strokeDasharray={`${
          (pesticidesPct / 100) * circumference
        } ${circumference}`}
        strokeDashoffset={`${
          -1 * ((fertilizerPct + manurePct) / 100) * circumference
        }`}
        transform="rotate(-90 50 50)"
      />

      {/* Herbicides segment */}
      <circle
        cx="50"
        cy="50"
        r="38"
        fill="transparent"
        stroke="#1e293b"
        strokeWidth="12"
        strokeDasharray={`${
          (herbicidesPct / 100) * circumference
        } ${circumference}`}
        strokeDashoffset={`${
          -1 *
          ((fertilizerPct + manurePct + pesticidesPct) / 100) *
          circumference
        }`}
        transform="rotate(-90 50 50)"
      />
    </svg>
  );
};
