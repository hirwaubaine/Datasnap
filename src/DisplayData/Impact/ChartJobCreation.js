// import React, { useEffect, useState, useRef } from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   BarController,
//   ArcElement,
//   PieController,
// } from "chart.js";
// import { Pie } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   BarController,
//   ArcElement,
//   PieController
// );

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
//       type: "pie",
//       data: {
//         labels: labels,
//         datasets: [
//           {
//             label: "Data",
//             data: values,
//             backgroundColor: [
//               "rgba(75, 192, 192, 0.2)",
//               "rgba(255, 99, 132, 0.2)",
//               "rgba(54, 162, 235, 0.2)",
//               "rgba(255, 206, 86, 0.2)",
//               "rgba(211, 211, 211, 0.2)",
//               "rgba(255, 192, 203, 0.2)",
//               "rgba(255, 165, 0, 0.2)",
//               "rgba(153, 102, 255, 0.2)",
//             ],
//             borderColor: [
//               "rgba(75, 192, 192, 1)",
//               "rgba(255, 99, 132, 1)",
//               "rgba(54, 162, 235, 1)",
//               "rgba(255, 206, 86, 1)",
//               "rgba(211, 211, 211, 1)",
//               "rgba(255, 192, 203, 1)",
//               "rgba(255, 165, 0, 1)",
//               "rgba(153, 102, 255, 1)",
//             ],
//             borderWidth: 1,
//           },
//         ],
//       },
//       options: {
//         plugins: {
//           legend: {
//             position: "top",
//           },
//           tooltip: {
//             callbacks: {
//               label: (context) => {
//                 const label = context.label || "";
//                 const value = context.raw || 0;
//                 return `${label}: ${value}`;
//               },
//             },
//           },
//         },
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

//   return (
//     <div className="Canvas">
//       <canvas ref={chartRef} />
//     </div>
//   );
// }


import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function ChartDisplay({ data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (data && data.length > 0) {
      createChart();
    }
  }, [data]);

  const createChart = () => {
    // Remove existing SVG elements
    d3.select(chartRef.current).selectAll("svg").remove();

    const chartContainer = d3.select(chartRef.current);

    const width = 200;
    const height = 210;
    const radius = Math.min(width, height) / 2;
    const chartWidth = width / 2;
    const chartHeight = height / 2;

    const svg = chartContainer
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${chartWidth}, ${chartHeight})`);

    const colorScale = d3.scaleOrdinal()
      .domain(data.map((d) => d[0]))
      .range([ 
        "rgba(51, 102, 153, 1)", // blue
        "rgba(51, 102, 153, .7)",
      ]);
      

    const pie = d3.pie().value((d) => d[1]);

    const arc = d3.arc().innerRadius(radius * 0.5).outerRadius(radius * 0.8);

    const arcs = svg.selectAll("arc").data(pie(data)).enter();

    arcs
      .append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => colorScale(d.data[0]))
      .attr("stroke", "#fff")
      .attr("stroke-width", 2);

    const labelArc = d3.arc().innerRadius(radius * 0.9).outerRadius(radius * 0.9);

    arcs
      .append("text")
      .attr("transform", (d) => `translate(${labelArc.centroid(d)})`)
      .attr("dy", "0.35em")
      .attr("font-size", "12px")
      .attr("text-anchor", "middle")
      .attr("fill", (d, i) => colorScale(d.data[0]))
      .text((d) => `${d.data[0]}: ${d.data[1]}`); 
  };

  return <div ref={chartRef} style={{ width: "50%", height: "50%" }} />;
}



