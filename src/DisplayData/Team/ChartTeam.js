// import React, { useEffect, useState, useRef } from "react";
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, BarController, ScatterController, PointElement } from "chart.js";
// import { Bar, Scatter } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   BarController,
//   ScatterController,
//   PointElement
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
//       type: "scatter",
//       data: {
//         labels: labels,
//         datasets: [
//           {
//             label: "Data",
//             data: values.map((value, index) => ({ x: index, y: value })),
//             backgroundColor: "rgba(75, 192, 192, 0.2)",
//             borderColor: "rgba(75, 192, 192, 1)",
//             borderWidth: 1,
//             pointRadius: 6, // Customize point size
//             pointBackgroundColor: "rgba(75, 192, 192, 1)", // Customize point color
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
//             beginAtZero: true,
//             grid: {
//               display: false,
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
//       chart.data.datasets[0].data = values.map((value, index) => ({ x: index, y: value }));
//       chart.update();
//     }
//   };

//   return <canvas ref={chartRef} />;
// }

import React, { useEffect, useState, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  BarController,
  ArcElement,
  PieController,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  BarController,
  ArcElement,
  PieController
);

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
      type: "pie",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Data",
            data: values,
            backgroundColor: [
              // "rgba(255, 121, 103, 1)", // orange

              // "rgba(255, 121, 103, 0.8)", // orange
              // "rgba(255, 121, 103, 1)", // orange
              // "rgba(255, 121, 103, 0.6)", // orange
              // "rgba(255, 121, 103, 0.4)", // orange

              "rgba(29, 120, 116, 1)", // green
              "rgba(29, 120, 116, 0.8)", // green
              "rgba(29, 120, 116, 0.6)", // green
              "rgba(29, 120, 116, 0.4)", // green
              "rgba(29, 120, 116, 0.2)", // green
              

              // "rgba(242, 186, 102, 1)",// yellow
              
            ],
            borderColor: [
              "#fff"
            ],
            borderWidth: 2,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: "bottom",
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const label = context.label || "";
                const value = context.raw || 0;
                return `${label}: ${value}`;
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

  return (
    <div className="CanvasTeam">
      <canvas ref={chartRef}/>
    </div>
  );
}

