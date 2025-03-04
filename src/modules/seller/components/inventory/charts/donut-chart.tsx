import type React from "react";

interface DonutChartProps {
  percentage: number;
  color: string;
}

export const DonutChart: React.FC<DonutChartProps> = ({
  percentage,
  color,
}) => {
  const circumference = 2 * Math.PI * 38;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg width="80" height="80" viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r="38"
        fill="transparent"
        stroke="#e6e6e6"
        strokeWidth="12"
      />
      <circle
        cx="50"
        cy="50"
        r="38"
        fill="transparent"
        stroke={color}
        strokeWidth="12"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        transform="rotate(-90 50 50)"
      />
      <text
        x="50"
        y="55"
        fontSize="16"
        textAnchor="middle"
        fill="#333"
        fontWeight="bold"
      >
        {percentage}%
      </text>
    </svg>
  );
};
