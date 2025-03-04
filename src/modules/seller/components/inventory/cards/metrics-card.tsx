import type React from "react";
import {
  CardContainer,
  MetricsContainer,
  MetricBox,
  MetricValue,
  MetricLabel,
  WeatherTitle,
  WeatherCard,
  WeatherColumn,
  WeatherDetail,
} from "../styled/dashboard-styles";
import type { WeatherReport } from "../types/dashboard-types";

interface MetricsCardProps {
  farmSize: number;
  seedsCount: number;
  harvestCount: number;
  weatherReport: WeatherReport;
}

export const MetricsCard: React.FC<MetricsCardProps> = ({
  farmSize,
  seedsCount,
  harvestCount,
  weatherReport,
}) => {
  return (
    <CardContainer style={{ gridColumn: "1 / -1" }}>
      <MetricsContainer>
        <MetricBox>
          <MetricValue color="#4f46e5">{farmSize}</MetricValue>
          <MetricLabel>Hectares</MetricLabel>
          <MetricLabel>Farm Size</MetricLabel>
        </MetricBox>

        <MetricBox>
          <MetricValue color="#eab308">{seedsCount}</MetricValue>
          <MetricLabel>Seeds</MetricLabel>
          <MetricLabel>Seeds & Planting</MetricLabel>
        </MetricBox>

        <MetricBox>
          <MetricValue color="#22c55e">{harvestCount}</MetricValue>
          <MetricLabel>Harvest</MetricLabel>
          <MetricLabel>Crops & Harvest</MetricLabel>
        </MetricBox>

        <MetricBox style={{ border: "none" }}>
          <WeatherTitle>Weather Report</WeatherTitle>
          <WeatherCard>
            <WeatherColumn>
              <WeatherTitle>Today's Report</WeatherTitle>
              <WeatherDetail>
                Temperature: {weatherReport.today.temperature}
              </WeatherDetail>
              <WeatherDetail>
                Precipitation: {weatherReport.today.precipitation}
              </WeatherDetail>
            </WeatherColumn>

            <WeatherColumn>
              <WeatherTitle>Tomorrow's Report</WeatherTitle>
              <WeatherDetail>
                Temperature: {weatherReport.tomorrow.temperature}
              </WeatherDetail>
              <WeatherDetail>
                Precipitation: {weatherReport.tomorrow.precipitation}
              </WeatherDetail>
            </WeatherColumn>
          </WeatherCard>
        </MetricBox>
      </MetricsContainer>
    </CardContainer>
  );
};
