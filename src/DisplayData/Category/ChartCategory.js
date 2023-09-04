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
//         indexAxis: "x", 
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
              "rgba(	28, 118, 135, 1)",
              "rgba(	28, 118, 135, 0.8)",
              "rgba(	28, 118, 135, 0.6)",
              
              
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
    <div className="Canvas">
      <canvas ref={chartRef} />
    </div>
  );
}

