// import React, { useEffect, useState, useRef } from "react";
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, BarController, LineElement, LineController, PointElement } from "chart.js";
// import { Bar, Line } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   BarController,
//   LineElement,
//   LineController,
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
//       type: "line",
//       data: {
//         labels: labels,
//         datasets: [
//           {
//             label: "Data",
//             data: values,
//             backgroundColor: "rgba(75, 192, 192, 0.2)",
//             borderColor: "rgba(75, 192, 192, 1)",
//             borderWidth: 1,
//             pointRadius: 4, // Customize point size
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
//       chart.data.datasets[0].data = values;
//       chart.update();
//     }
//   };

//   return (
//     <div className="Canvas" >
//       <canvas ref={chartRef} />
//     </div>
//   );
// }

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
  PointElement,
  Title,
  Tooltip,
  Legend,
  ScatterController,
} from "chart.js";
import { Scatter } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend, ScatterController);

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
      type: "scatter", // Use the "scatter" chart type
      data: {
        labels: labels,
        datasets: [
          {
            label: "",
            data: values.map((value, index) => ({ x: index, y: value })),
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            //  backgroundColor: "rgba(	59, 14, 57, 0.2)",
            // borderColor: "rgba(	59, 14, 57, 1)",
            borderWidth: 1,
            pointRadius: 6, 
            pointBackgroundColor:  "rgba(75, 192, 192, 1)", 
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: "category", 
            labels: labels, 
            beginAtZero: true,
            grid: {
              display: false,
            },
            ticks: {
              maxRotation: 100, 
              autoSkip: false, 
              font: {
                size: 10,
              },
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              display: false,
            },ticks: {
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
      chart.data.datasets[0].data = values.map((value, index) => ({ x: index, y: value }));
      chart.update();
    }
  };

  return <canvas ref={chartRef} />;
}
