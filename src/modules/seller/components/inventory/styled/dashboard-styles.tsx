import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const CardTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text);
  margin: 0;
`;

export const ArrowIcon = styled.span`
  color: var(--color-text);
  font-size: 20px;
`;

export const CardContainer = styled.div`
  background-color: var(--color-background);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
  padding: 20px;
`;

export const MetricsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

export const MetricBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-width: 100px;
  border-right: 1px solid var(--color-border);
  padding: 10px;

  &:last-child {
    border-right: none;
  }

  @media (max-width: 480px) {
    min-width: 80px;
    padding: 8px;
  }
`;

export const MetricValue = styled.div<{ color?: string }>`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.color || "var(--color-text)"};
  margin-bottom: 5px;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const MetricLabel = styled.div`
  font-size: 12px;
  color: var(--color-text);
  text-align: center;
`;

export const WeatherCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: var(--color-background);
  border-radius: var(--border-radius-sm);
  padding: 10px;
  margin-top: 10px;
`;

export const WeatherColumn = styled.div`
  flex: 1;
`;

export const WeatherTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
  text-align: center;
`;

export const WeatherDetail = styled.div`
  font-size: 12px;
  color: var(--color-text);
  margin-bottom: 3px;
`;

export const CardMessage = styled.div`
  font-size: 14px;
  color: var(--color-text);
  margin-bottom: 15px;
  font-style: italic;
`;

export const DonutChartContainer = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TableContainer = styled.div`
  margin-top: 10px;
`;

export const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid var(--color-border);

  &:last-child {
    border-bottom: none;
  }
`;

export const TableCell = styled.div`
  font-size: 14px;
`;

export const TableCellStatus = styled.div<{ status: string }>`
  font-size: 14px;
  color: ${(props) => {
    switch (props.status) {
      case "Resolved":
      case "Good condition":
        return "#22c55e";
      case "Unresolved":
      case "Due for maintenance":
        return "#ef4444";
      case "Spoilt":
        return "#f97316";
      default:
        return "#333";
    }
  }};
  font-weight: ${(props) =>
    props.status === "Resolved" || props.status === "Good condition"
      ? "normal"
      : "bold"};
`;

export const SuppliesDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SuppliesList = styled.div`
  flex: 1;
`;
