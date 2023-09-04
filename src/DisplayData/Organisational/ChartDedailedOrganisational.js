// import React, { useEffect, useRef } from "react";
// import * as d3 from "d3";

// export default function ChartDisplay({ data }) {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     if (data && data.length > 0) {
//       createChart();
//     }
//   }, [data]);

//   const createChart = () => {
//     d3.select(chartRef.current).selectAll("svg").remove();
//     const chartContainer = d3.select(chartRef.current);

//     const width = 1000;
//     const height = 500;
//     const margin = { top: 30, right: 20, bottom: 180, left: 50 };
//     const chartWidth = width - margin.left - margin.right;
//     const chartHeight = height - margin.top - margin.bottom;

//     const svg = chartContainer
//       .append("svg")
//       .attr("viewBox", `0 0 ${width} ${height}`)
//       .attr("preserveAspectRatio", "xMidYMid meet");

//     const chart = svg
//       .append("g")
//       .attr("transform", `translate(${margin.left}, ${margin.top})`);

//     const xScale = d3
//       .scaleBand()
//       .domain(data.map((d) => d[0]))
//       .range([0, chartWidth])
//       .padding(0.2);

//     const yScale = d3
//       .scaleLinear()
//       .domain([0, d3.max(data, (d) => d[1])])
//       .range([chartHeight, 0]);
      

//     const xAxis = d3.axisBottom(xScale);
//     const yAxis = d3.axisLeft(yScale);

//     chart
//       .append("g")
//       .attr("class", "x-axis")
//       .attr("transform", `translate(0, ${chartHeight})`)
//       .call(xAxis)
//       .selectAll("text")
//       .style("text-anchor", "end")
//       .attr("dx", ".40em")
//       .attr("dy", ".60em")
//       .attr("font-size", "13px") 
//       .attr("transform", "rotate(-45)")
//       // .style("opacity", 0.6);

//     chart.append("g").attr("class", "y-axis").call(yAxis);

//     const barWidth = xScale.bandwidth();
//     const barDepth = 10;

//     const bars = chart
//       .selectAll(".bar")
//       .data(data)
//       .enter()
//       .append("g")
//       .attr("class", "bar")
//       .attr("transform", (d) => `translate(${xScale(d[0])}, 0)`);

//       bars
//   .append("text") 
//   .attr("x", barWidth / 2) 
//   .attr("y", (d) => yScale(d[1]) - 13) 
//   .attr("text-anchor", "middle") 
//   .attr("font-size", "15px") 
//   .attr("fill", "rgba(75, 192, 192, 1)") 
//   .text((d) => d[1]); 

//     const frontFace = bars
//       .append("rect")
//       .attr("class", "front-face")
//       .attr("x", 0)
//       .attr("y", (d) => yScale(d[1]))
//       .attr("width", barWidth)
//       .attr("height", (d) => chartHeight - yScale(d[1]))
//       .attr("fill", "rgba(75, 192, 192, 0.2)")
//       .attr("stroke", "rgba(75, 192, 192, 1)")
//       .attr("stroke-width", 1)
    

//     const topFace = bars
//       .append("polygon")
//       .attr("class", "top-face")
//       .attr("points", (d) =>
//         createPolygonPoints([
//           { x: 0, y: yScale(d[1]) },
//           { x: barWidth, y: yScale(d[1]) },
//           { x: barWidth + barDepth, y: yScale(d[1]) - barDepth },
//           { x: barDepth, y: yScale(d[1]) - barDepth },
//         ])
//       )
//       .attr("fill", "rgba(75, 192, 192, 0.2)")
//       .attr("stroke", "rgba(75, 192, 192, 1)")
//       .attr("stroke-width", 1);

//     const sideFace = bars
//       .append("polygon")
//       .attr("class", "side-face")
//       .attr("points", (d) =>
//         createPolygonPoints([
//           { x: barWidth, y: yScale(d[1]) },
//           { x: barWidth + barDepth, y: yScale(d[1]) - barDepth },
//           { x: barWidth + barDepth, y: chartHeight - barDepth },
//           { x: barWidth, y: chartHeight },
//         ])
//       )
//       .attr("fill", "rgba(75, 192, 192, 0.2)")
//       .attr("stroke", "rgba(75, 192, 192, 1)")
//       .attr("stroke-width", 1);

//     const backFace = bars
//       .append("polygon")
//       .attr("class", "back-face")
//       .attr("points", (d) =>
//         createPolygonPoints([
//           { x: 0, y: yScale(d[1]) },
//           { x: barDepth, y: yScale(d[0]) - barDepth },
//           { x: barWidth + barDepth, y: yScale(d[0]) - barDepth },
//           { x: barWidth, y: yScale(d[1]) },
//         ])
//       )
//       .attr("fill", "rgba(75, 192, 192, 0.2)")
//       .attr("stroke", "rgba(75, 192, 192, 1)")
//       .attr("stroke-width", 1)
//       .attr("transform", `translate(${barDepth}, 0)`);

//     bars
//       .on("mouseover", function () {
//         d3.select(this)
//           .selectAll("rect, polygon")
//           .attr("fill", "rgba(75, 192, 192, 0.5)");
//       })
//       .on("mouseout", function () {
//         d3.select(this)
//           .selectAll("rect, polygon")
//           .attr("fill", "rgba(75, 192, 192, 0.2)");
//       });
//   };

//   return <div ref={chartRef} style={{ width: "60%", height: "50%" }} />;
// }

// function createPolygonPoints(vertices) {
//   return vertices.map((vertex) => `${vertex.x},${vertex.y}`).join(" ");
// }


import React, { useEffect, useState, useRef } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, BarController } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, BarController);

export default function ChartDisplay({ data }) {
  const [chart, setChart] = useState(null);
  const chartRef = useRef(null);
  const chartCreatedRef = useRef(false);

  useEffect(() => {
    if (data && data.length > 0) {
      setTimeout(() => {
        if (chartCreatedRef.current) {
          updateChart();
        } else {
          createChart();
          chartCreatedRef.current = true;
        }
      }, 0);
    }
  }, [data]);

  useEffect(() => {
    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, []);

  const createChart = () => {
    const ctx = chartRef.current.getContext("2d");
    const labels = data.slice(1).map((row) => row[0]);
    const values = data.slice(1).map((row) => row[1]);

    const newChart = new ChartJS(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "",
            data: values,
            backgroundColor: "rgba(29, 120, 116, 0.15)",
            borderColor: "rgba(29, 120, 116, 0.7)",
            borderWidth: 1,
            barThickness: 30,
          },
        ],
      },
      options: {
        indexAxis: "x", 
        scales: {
          x: {
            beginAtZero: true,
            grid: {
              display: false,
            },
            ticks: {
              maxRotation: 100, 
              autoSkip: false, 
              font: {
                size: 8,
              },
            },
          },
          y: {
            grid: {
              display: false,
            },
            ticks: {
              maxRotation: 100, 
              autoSkip: false, 
              font: {
                size: 8,
              },
            },
          },
        },
      },
      
    });
    

    setChart(newChart);
  };

  const updateChart = () => {
    if (chart) {
      const labels = data.slice(1).map((row) => row[0]);
      const values = data.slice(1).map((row) => row[1]);

      chart.data.labels = labels;
      chart.data.datasets[0].data = values;
      chart.update();
    }
  };

  return <canvas ref={chartRef} />;
}
