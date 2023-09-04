// import React, { useEffect, useState, useRef } from "react";
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, BarController } from "chart.js";
// import { Bar } from "react-chartjs-2";

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, BarController);

// export default function ChartDisplay({ data }) {
//   const [chart, setChart] = useState(null);
//   const chartRef = useRef(null);
//   const chartCreatedRef = useRef(false);

//   useEffect(() => {
//     if (data && data.length > 0) {
//       setTimeout(() => {
//         if (chartCreatedRef.current) {
//           updateChart();
//         } else {
//           createChart();
//           chartCreatedRef.current = true;
//         }
//       }, 0);
//     }
//   }, [data]);

//   useEffect(() => {
//     return () => {
//       if (chart) {
//         chart.destroy();
//       }
//     };
//   }, []);

//   const createChart = () => {
//     const ctx = chartRef.current.getContext("2d");
//     const labels = data.slice(1).map((row) => row[0]);
//     const values = data.slice(1).map((row) => row[1]);

//     const newChart = new ChartJS(ctx, {
//       type: "bar",
//       data: {
//         labels: labels,
//         datasets: [
//           {
//             label: "Data",
//             data: values,
//             backgroundColor: "rgba(75, 192, 192, 0.2)",
//             borderColor: "rgba(75, 192, 192, 1)",
//             borderWidth: 1,
//           },
//         ],
//       },
//       options: {
//         scales: {
//           x: {
//             beginAtZero: true,
//             grid: {
//               display: false,
//             },
//           },
//           y: {
//             grid: {
//               display: false,
//             },
//           },
//         },
//         indexAxis: "y", 
//       },
//     });

//     setChart(newChart);
//   };

//   const updateChart = () => {
//     if (chart) {
//       const labels = data.slice(1).map((row) => row[0]);
//       const values = data.slice(1).map((row) => row[1]);

//       chart.data.labels = labels;
//       chart.data.datasets[0].data = values;
//       chart.update();
//     }
//   };

//   return <canvas ref={chartRef} />;
// }

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
//     const margin = { top: 20, right: 20, bottom: 120, left: 200 };
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
//       .scaleLinear()
//       .domain([0, d3.max(data, (d) => d[1])])
//       .range([0, chartWidth]);

//     const yScale = d3
//       .scaleBand()
//       .domain(data.map((d) => d[0]))
//       .range([chartHeight, 0])
//       .padding(0.3);

//     const xAxis = d3.axisBottom(xScale);
//     const yAxis = d3.axisLeft(yScale);

//     chart
//       .append("g")
//       .attr("class", "x-axis")
//       .attr("transform", `translate(0, ${chartHeight})`)
//       .call(xAxis);

//     chart.append("g").attr("class", "y-axis").call(yAxis);

//     const barHeight = yScale.bandwidth();
//     const barDepth = 10;

//     const bars = chart
//       .selectAll(".bar")
//       .data(data)
//       .enter()
//       .append("g")
//       .attr("class", "bar")
//       .attr("transform", (d) => `translate(0, ${yScale(d[0])})`);

//     const frontFace = bars
//       .append("rect")
//       .attr("class", "front-face")
//       .attr("x", 0)
//       .attr("y", 0)
//       .attr("width", (d) => xScale(d[1]))
//       .attr("height", barHeight)
//       .attr("fill", "rgba(75, 192, 192, 0.2)")
//       .attr("stroke", "rgba(75, 192, 192, 1)")
//       .attr("stroke-width", 1);

//     const topFace = bars
//       .append("polygon")
//       .attr("class", "top-face")
//       .attr("points", (d) =>
//         createPolygonPoints([
//           { x: 0, y: 0 },
//           { x: xScale(d[0]), y: 0.0 },
//           { x: xScale(d[0]) + barDepth, y: barDepth },
//           { x: barDepth, y: barDepth },
//         ])
//       )
//       .attr("fill", "rgba(75, 192, 192, 0)")
//       .attr("stroke", "rgba(75, 192, 192, 1)")
//       .attr("stroke-width", 1);

//       const rightSideFace = bars
//       .append("polygon")
//       .attr("class", "side-face")
//       .attr("points", (d) =>
//         createPolygonPoints([
//           { x: xScale(d[1]), y: 0 },
//           { x: xScale(d[1]) + barDepth, y: barDepth },
//           { x: xScale(d[1]) + barDepth, y: barHeight + barDepth },
//           { x: xScale(d[1]), y: barHeight },
//         ])
//       )
//       .attr("fill", "rgba(75, 192, 192, 0.25)")
//       .attr("stroke", "rgba(75, 192, 192, 1)")
//       .attr("stroke-width", 1);

//     const bottomFace = bars
//       .append("polygon")
//       .attr("class", "bottom-face")
//       .attr("points", (d) =>
//         createPolygonPoints([
//           { x: 0, y: barHeight },
//           { x: xScale(d[1]), y: barHeight },
//           { x: xScale(d[1]) + barDepth, y: barHeight + barDepth },
//           { x: barDepth, y: barHeight + barDepth },
//         ])
//       )
//       .attr("fill", "rgba(75, 192, 192, 0.2)")
//       .attr("stroke", "rgba(75, 192, 192, 1)")
//       .attr("stroke-width", 1);

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
            // backgroundColor: "rgba(75, 192, 192, 0.2)",
            // borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(28, 118, 135, 0.15)",
            borderColor: "rgba(28, 118, 135, 0.7)",
            borderWidth: 1,
            barThickness: 30,
          },
        ],
      },
      options: {
        indexAxis: "y", 
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






