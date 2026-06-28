import { drawChart, type ChartType, type DataPoint } from "@/utils/chart";

document.querySelectorAll<HTMLElement>("[data-d3-chart]").forEach((container) => {
  const svg = container.querySelector("svg");

  if (!svg) return;

  const data = JSON.parse(container.dataset.data ?? "[]") as DataPoint[];

  const chartType = (container.dataset.chartType ?? "bar") as ChartType;

  drawChart(svg, data, chartType);
});
