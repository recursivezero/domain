import * as d3 from "d3";

export interface DataPoint {
  label: string;
  value: number;
}

export type ChartType = "bar" | "pie";

export function drawChart(svgElement: SVGSVGElement, data: DataPoint[], chartType: ChartType = "bar") {
  const svg = d3.select(svgElement);

  svg.selectAll("*").remove();

  const width = 700;
  const height = 400;
  const margin = 50;

  svg.attr("width", width).attr("height", height).attr("viewBox", `0 0 ${width} ${height}`);

  if (chartType === "bar") {
    drawBarChart(svg, data, width, height, margin);
  }

  if (chartType === "pie") {
    drawPieChart(svg, data, width, height);
  }
}

function drawBarChart(
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  data: DataPoint[],
  width: number,
  height: number,
  margin: number
) {
  const x = d3
    .scaleBand<string>()
    .domain(data.map((d) => d.label))
    .range([margin, width - margin])
    .padding(0.3);

  const y = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.value) ?? 0])
    .nice()
    .range([height - margin, margin]);

  svg
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d) => x(d.label)!)
    .attr("width", x.bandwidth())
    .attr("y", height - margin)
    .attr("height", 0)
    .attr("fill", "#2563eb")
    .attr("rx", 6)
    .transition()
    .duration(800)
    .delay((_, i) => i * 150)
    .attr("y", (d) => y(d.value))
    .attr("height", (d) => height - margin - y(d.value));

  svg
    .append("g")
    .attr("transform", `translate(0,${height - margin})`)
    .call(d3.axisBottom(x));

  svg.append("g").attr("transform", `translate(${margin},0)`).call(d3.axisLeft(y));

  // Value labels
  svg
    .selectAll(".label")
    .data(data)
    .enter()
    .append("text")
    .attr("class", "label")
    .attr("x", (d) => x(d.label)! + x.bandwidth() / 2)
    .attr("y", (d) => y(d.value) - 8)
    .attr("text-anchor", "middle")
    .attr("font-size", 12)
    .attr("font-weight", 600)
    .text((d) => d.value);
}

function drawPieChart(
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  data: DataPoint[],
  width: number,
  height: number
) {
  const radius = Math.min(width, height) / 2 - 40;

  const total = d3.sum(data, (d) => d.value);

  const color = d3
    .scaleOrdinal<string>()
    .domain(data.map((d) => d.label))
    .range(["#2563eb", "#f97316", "#16a34a", "#dc2626", "#9333ea", "#0891b2"]);

  const pie = d3
    .pie<DataPoint>()
    .value((d) => d.value)
    .sort(null);

  const arc = d3.arc<d3.PieArcDatum<DataPoint>>().innerRadius(0).outerRadius(radius);

  const g = svg.append("g").attr("transform", `translate(${width / 2},${height / 2})`);

  // Pie slices
  g.selectAll("path")
    .data(pie(data))
    .enter()
    .append("path")
    .attr("d", arc)
    .attr("fill", (d) => color(d.data.label)!)
    .attr("stroke", "#fff")
    .attr("stroke-width", 2)
    .style("opacity", 0)
    .transition()
    .duration(800)
    .style("opacity", 1);

  // Labels
  g.selectAll(".slice-label")
    .data(pie(data))
    .enter()
    .append("text")
    .attr("class", "slice-label")
    .attr("transform", (d) => `translate(${arc.centroid(d)})`)
    .attr("text-anchor", "middle")
    .attr("fill", "#fff")
    .attr("font-size", "13px")
    .attr("font-weight", "600")
    .each(function (d) {
      const percent = ((d.data.value / total) * 100).toFixed(1);

      const text = d3.select(this);

      text.append("tspan").attr("x", 0).attr("dy", "-0.6em").text(d.data.label);

      text.append("tspan").attr("x", 0).attr("dy", "1.3em").text(d.data.value);

      text.append("tspan").attr("x", 0).attr("dy", "1.3em").text(`(${percent}%)`);
    });

  // Legend
  const legend = svg.append("g").attr("transform", `translate(40, ${height - 20})`);

  const legendItems = legend
    .selectAll(".legend")
    .data(data)
    .enter()
    .append("g")
    .attr("transform", (_, i) => `translate(${i * 160},0)`);

  legendItems
    .append("rect")
    .attr("width", 16)
    .attr("height", 16)
    .attr("fill", (d) => color(d.label)!);

  legendItems
    .append("text")
    .attr("x", 24)
    .attr("y", 13)
    .attr("font-size", "13px")
    .attr("fill", "currentColor")
    .text((d) => `${d.label} (${d.value})`);
}
